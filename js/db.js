/* LaundryKu Finance — data layer (Firestore edition)
 * Same public API as before (DB.getTransactions, DB.addTransaction, etc.)
 * so app.js and reports.js work unchanged. Internally now backed by
 * Firestore instead of IndexedDB, so data syncs across every device/user.
 */

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
  { id: "jasa-cuci", name: "Pendapatan Jasa Cuci", type: "in", account: ACCOUNT.PENDAPATAN, system: true },
  { id: "self-service", name: "Pendapatan Self-Service (Cuci+Kering)", type: "in", account: ACCOUNT.PENDAPATAN, system: true },
  { id: "pendapatan-lain", name: "Pendapatan Lain-lain", type: "in", account: ACCOUNT.PENDAPATAN, system: true },
  { id: "terima-piutang", name: "Penerimaan Piutang Pelanggan", type: "in", account: ACCOUNT.PIUTANG, system: true },
  { id: "pinjaman-masuk", name: "Pinjaman/Modal Bank Masuk", type: "in", account: ACCOUNT.UTANG_BANK, system: true },
  { id: "setor-modal", name: "Setor Modal Usaha", type: "in", account: ACCOUNT.MODAL, system: true },

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

// Simple in-memory cache for the current session, invalidated on writes.
// Keeps the app fast and avoids re-reading the whole transactions list
// from Firestore on every render (dashboard + laporan both need it).
let _txCache = null;

function invalidateTxCache(){ _txCache = null; }

const DB = {
  ACCOUNT,

  async init(){
    const snap = await fs.collection("categories").limit(1).get();
    if(snap.empty){
      const batch = fs.batch();
      for(const cat of DEFAULT_CATEGORIES){
        batch.set(fs.collection("categories").doc(cat.id), cat);
      }
      await batch.commit();
    }
  },

  async getSetting(key, fallback = null){
    const doc = await fs.collection("settings").doc(key).get();
    return doc.exists ? doc.data().value : fallback;
  },

  async setSetting(key, value){
    await fs.collection("settings").doc(key).set({ value });
    return true;
  },

  async getCategories(){
    const snap = await fs.collection("categories").get();
    return snap.docs.map(d => d.data());
  },

  async addCategory(cat){
    await fs.collection("categories").doc(cat.id).set(cat);
    return true;
  },

  async deleteCategory(id){
    await fs.collection("categories").doc(id).delete();
    return true;
  },

  async addTransaction(t){
    const payload = {
      ...t,
      createdBy: auth.currentUser ? auth.currentUser.uid : null,
      createdByEmail: auth.currentUser ? auth.currentUser.email : null,
      createdAt: Date.now()
    };
    const ref = await fs.collection("transactions").add(payload);
    invalidateTxCache();
    return ref.id;
  },

  async deleteTransaction(id){
    await fs.collection("transactions").doc(String(id)).delete();
    invalidateTxCache();
    return true;
  },

  async getTransactions(){
    if(_txCache) return _txCache;
    const snap = await fs.collection("transactions").get();
    const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    list.sort((a,b) => b.date.localeCompare(a.date) || (b.createdAt||0) - (a.createdAt||0));
    _txCache = list;
    return list;
  },

  async getTransactionsInRange(startDate, endDate){
    const all = await this.getTransactions();
    return all.filter((t) => t.date >= startDate && t.date <= endDate);
  },

  async getMember(phone){
    if(!phone) return null;
    const doc = await fs.collection("members").doc(phone).get();
    return doc.exists ? doc.data() : null;
  },

  async getAllMembers(){
    const snap = await fs.collection("members").get();
    return snap.docs.map(d => d.data());
  },

  async upsertMember(rec){
    await fs.collection("members").doc(rec.phone).set(rec);
    return true;
  },

  async deleteMember(phone){
    await fs.collection("members").doc(phone).delete();
    return true;
  },

  async getOrders(){
    const snap = await fs.collection("orders").get();
    const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    list.sort((a,b) => (b.createdAt||0) - (a.createdAt||0));
    return list;
  },

  async addOrder(o){
    const payload = {
      ...o,
      status: "diterima",
      statusHistory: [{ status: "diterima", at: Date.now() }],
      createdBy: auth.currentUser ? auth.currentUser.uid : null,
      createdAt: Date.now()
    };
    const ref = await fs.collection("orders").add(payload);
    return ref.id;
  },

  async updateOrderStatus(id, status){
    const ref = fs.collection("orders").doc(id);
    await ref.update({
      status,
      statusHistory: firebase.firestore.FieldValue.arrayUnion({ status, at: Date.now() })
    });
    return true;
  },

  async deleteOrder(id){
    await fs.collection("orders").doc(id).delete();
    return true;
  }
};
