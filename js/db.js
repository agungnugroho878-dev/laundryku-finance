/* LaundryKu Finance — data layer (IndexedDB)
 * Every transaction is cash in/out from the user's point of view, but each
 * category carries an "account" tag so we can generate a real Laba Rugi
 * (Income Statement) and Neraca (Balance Sheet) behind the scenes.
 */

const DB_NAME = "laundryku-db";
const DB_VERSION = 2;

const ACCOUNT = {
  KAS: "kas",
  PIUTANG: "piutang",
  PERSEDIAAN: "persediaan",
  ASET_TETAP: "aset_tetap",
  UTANG_USAHA: "utang_usaha",
  UTANG_BANK: "utang_bank",
  MODAL: "modal",
  PRIVE: "prive",
  PENDAPATAN: "pendapatan",
  BEBAN: "beban"
};

const DEFAULT_CATEGORIES = [
  // Kas masuk
  { id: "jasa-cuci", name: "Pendapatan Jasa Cuci", type: "in", account: ACCOUNT.PENDAPATAN, system: true },
  { id: "self-service", name: "Pendapatan Self-Service (Cuci+Kering)", type: "in", account: ACCOUNT.PENDAPATAN, system: true },
  { id: "pendapatan-lain", name: "Pendapatan Lain-lain", type: "in", account: ACCOUNT.PENDAPATAN, system: true },
  { id: "terima-piutang", name: "Penerimaan Piutang Pelanggan", type: "in", account: ACCOUNT.PIUTANG, system: true },
  { id: "pinjaman-masuk", name: "Pinjaman/Modal Bank Masuk", type: "in", account: ACCOUNT.UTANG_BANK, system: true },
  { id: "setor-modal", name: "Setor Modal Usaha", type: "in", account: ACCOUNT.MODAL, system: true },

  // Kas keluar
  { id: "bahan-baku", name: "Beli Bahan Baku & Perlengkapan", type: "out", account: ACCOUNT.BEBAN, system: true },
  { id: "gaji", name: "Gaji Karyawan", type: "out", account: ACCOUNT.BEBAN, system: true },
  { id: "listrik-air", name: "Listrik, Air & Internet", type: "out", account: ACCOUNT.BEBAN, system: true },
  { id: "sewa", name: "Sewa Tempat", type: "out", account: ACCOUNT.BEBAN, system: true },
  { id: "servis-mesin", name: "Servis/Perawatan Mesin", type: "out", account: ACCOUNT.BEBAN, system: true },
  { id: "beban-lain", name: "Beban Operasional Lain", type: "out", account: ACCOUNT.BEBAN, system: true },
  { id: "beli-aset", name: "Beli Peralatan/Aset Tetap", type: "out", account: ACCOUNT.ASET_TETAP, system: true },
  { id: "bayar-utang", name: "Bayar Utang Usaha/Bank", type: "out", account: ACCOUNT.UTANG_USAHA, system: true },
  { id: "prive", name: "Ambil Pribadi (Prive)", type: "out", account: ACCOUNT.PRIVE, system: true }
];

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains("transactions")) {
        const store = db.createObjectStore("transactions", { keyPath: "id", autoIncrement: true });
        store.createIndex("date", "date");
        store.createIndex("categoryId", "categoryId");
      }
      if (!db.objectStoreNames.contains("categories")) {
        db.createObjectStore("categories", { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains("settings")) {
        db.createObjectStore("settings", { keyPath: "key" });
      }
      if (!db.objectStoreNames.contains("members")) {
        db.createObjectStore("members", { keyPath: "phone" });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

let dbPromise = null;
function getDB() {
  if (!dbPromise) dbPromise = openDB();
  return dbPromise;
}

async function tx(storeName, mode) {
  const db = await getDB();
  return db.transaction(storeName, mode).objectStore(storeName);
}

const DB = {
  ACCOUNT,

  async init() {
    const store = await tx("categories", "readwrite");
    const existing = await new Promise((res) => {
      const req = store.getAll();
      req.onsuccess = () => res(req.result);
    });
    if (existing.length === 0) {
      for (const cat of DEFAULT_CATEGORIES) store.put(cat);
    }
  },

  async getSetting(key, fallback = null) {
    const store = await tx("settings", "readonly");
    return new Promise((resolve) => {
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result ? req.result.value : fallback);
    });
  },

  async setSetting(key, value) {
    const store = await tx("settings", "readwrite");
    return new Promise((resolve) => {
      const req = store.put({ key, value });
      req.onsuccess = () => resolve(true);
    });
  },

  async getCategories() {
    const store = await tx("categories", "readonly");
    return new Promise((resolve) => {
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result);
    });
  },

  async addCategory(cat) {
    const store = await tx("categories", "readwrite");
    return new Promise((resolve) => {
      const req = store.put(cat);
      req.onsuccess = () => resolve(true);
    });
  },

  async deleteCategory(id) {
    const store = await tx("categories", "readwrite");
    return new Promise((resolve) => {
      const req = store.delete(id);
      req.onsuccess = () => resolve(true);
    });
  },

  async addTransaction(t) {
    const store = await tx("transactions", "readwrite");
    return new Promise((resolve, reject) => {
      const req = store.add(t);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  },

  async deleteTransaction(id) {
    const store = await tx("transactions", "readwrite");
    return new Promise((resolve) => {
      const req = store.delete(id);
      req.onsuccess = () => resolve(true);
    });
  },

  async getTransactions() {
    const store = await tx("transactions", "readonly");
    return new Promise((resolve) => {
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result.sort((a, b) => b.date.localeCompare(a.date) || b.id - a.id));
    });
  },

  async getTransactionsInRange(startDate, endDate) {
    const all = await this.getTransactions();
    return all.filter((t) => t.date >= startDate && t.date <= endDate);
  },

  async getMember(phone) {
    if(!phone) return null;
    const store = await tx("members", "readonly");
    return new Promise((resolve) => {
      const req = store.get(phone);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
  },

  async getAllMembers() {
    const store = await tx("members", "readonly");
    return new Promise((resolve) => {
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve([]);
    });
  },

  async upsertMember(rec) {
    const store = await tx("members", "readwrite");
    return new Promise((resolve) => {
      const req = store.put(rec);
      req.onsuccess = () => resolve(true);
    });
  },

  async deleteMember(phone) {
    const store = await tx("members", "readwrite");
    return new Promise((resolve) => {
      const req = store.delete(phone);
      req.onsuccess = () => resolve(true);
    });
  }
};
