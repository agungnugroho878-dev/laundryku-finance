/* LaundryKu Finance — data layer (multi-tenant edition)
 * Every business gets its own isolated data. All collections carry a
 * businessId field (set via DB.setBusinessContext), and every query/write
 * automatically scopes to the currently logged-in user's business.
 * Public settings (name, pricing, etc.) live in businessSettings/{businessId}
 * so they stay private to that business's own staff.
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
  { key: "jasa-cuci", name: "Pendapatan Jasa Cuci", type: "in", account: ACCOUNT.PENDAPATAN, system: true },
  { key: "cuci-satuan", name: "Pendapatan Cuci Satuan", type: "in", account: ACCOUNT.PENDAPATAN, system: true },
  { key: "self-service", name: "Pendapatan Self-Service (Cuci+Kering)", type: "in", account: ACCOUNT.PENDAPATAN, system: true },
  { key: "pendapatan-lain", name: "Pendapatan Lain-lain", type: "in", account: ACCOUNT.PENDAPATAN, system: true },
  { key: "terima-piutang", name: "Penerimaan Piutang Pelanggan", type: "in", account: ACCOUNT.PIUTANG, system: true },
  { key: "pinjaman-masuk", name: "Pinjaman/Modal Bank Masuk", type: "in", account: ACCOUNT.UTANG_BANK, system: true },
  { key: "setor-modal", name: "Setor Modal Usaha", type: "in", account: ACCOUNT.MODAL, system: true },

  { key: "bahan-baku", name: "Beli Bahan Baku & Perlengkapan", type: "out", account: ACCOUNT.BEBAN, system: true },
  { key: "gaji", name: "Gaji Karyawan", type: "out", account: ACCOUNT.BEBAN, system: true },
  { key: "listrik-air", name: "Listrik, Air & Internet", type: "out", account: ACCOUNT.BEBAN, system: true },
  { key: "sewa", name: "Sewa Tempat", type: "out", account: ACCOUNT.BEBAN, system: true },
  { key: "servis-mesin", name: "Servis/Perawatan Mesin", type: "out", account: ACCOUNT.BEBAN, system: true },
  { key: "beban-lain", name: "Beban Operasional Lain", type: "out", account: ACCOUNT.BEBAN, system: true },
  { key: "beli-aset", name: "Beli Peralatan/Aset Tetap", type: "out", account: ACCOUNT.ASET_TETAP, system: true },
  { key: "bayar-utang", name: "Bayar Utang Usaha/Bank", type: "out", account: ACCOUNT.UTANG_USAHA, system: true },
  { key: "prive", name: "Ambil Pribadi (Prive)", type: "out", account: ACCOUNT.PRIVE, system: true }
];

// Simple in-memory cache for the current session, invalidated on writes.
let _txCache = null;
function invalidateTxCache(){ _txCache = null; }

let _businessId = null;

/** Build a business-namespaced document ID (e.g. category/member keys)
 *  so different businesses never collide on the same doc ID. */
function scopedId(key){
  return `${_businessId}__${key}`;
}

const DB = {
  ACCOUNT,

  /** Call once right after login, once we know which business the user belongs to. */
  setBusinessContext(businessId){
    _businessId = businessId;
    invalidateTxCache();
  },

  getBusinessId(){ return _businessId; },

  /** Creates a brand-new business + makes the given uid its Owner. Returns the new businessId. */
  async createBusiness(name, ownerUid){
    const ref = fs.collection("businesses").doc();
    await ref.set({ name, ownerUid, createdAt: Date.now() });
    await fs.collection("businessSettings").doc(ref.id).set({ businessName: name });
    return ref.id;
  },

  /** Used by the "join with invite code" pegawai signup flow. Returns business data or null if invalid. */
  async getBusinessById(businessId){
    const doc = await fs.collection("businesses").doc(businessId).get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
  },

  async getBusinessStaff(){
    const snap = await fs.collection("users").where("businessId","==",_businessId).get();
    return snap.docs.map(d => ({ uid: d.id, ...d.data() }));
  },

  async setStaffRole(uid, role){
    await fs.collection("users").doc(uid).update({ role });
    return true;
  },

  async init(){
    const snap = await fs.collection("categories").where("businessId","==",_businessId).limit(1).get();
    if(snap.empty){
      const batch = fs.batch();
      for(const cat of DEFAULT_CATEGORIES){
        const id = scopedId(cat.key);
        batch.set(fs.collection("categories").doc(id), { ...cat, id: cat.key, businessId: _businessId });
      }
      await batch.commit();
    }
  },

  async getSetting(key, fallback = null){
    const doc = await fs.collection("businessSettings").doc(_businessId).get();
    const data = doc.exists ? doc.data() : {};
    return data[key] !== undefined ? data[key] : fallback;
  },

  async setSetting(key, value){
    await fs.collection("businessSettings").doc(_businessId).set({ [key]: value }, { merge: true });
    return true;
  },

  async getCategories(){
    const snap = await fs.collection("categories").where("businessId","==",_businessId).get();
    return snap.docs.map(d => d.data());
  },

  async addCategory(cat){
    const id = cat.system ? scopedId(cat.id) : scopedId(cat.id || `custom-${Date.now()}`);
    await fs.collection("categories").doc(id).set({ ...cat, businessId: _businessId });
    return true;
  },

  async deleteCategory(id){
    await fs.collection("categories").doc(scopedId(id)).delete();
    return true;
  },

  async addTransaction(t){
    const payload = {
      ...t,
      businessId: _businessId,
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
    const snap = await fs.collection("transactions").where("businessId","==",_businessId).get();
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
    const doc = await fs.collection("members").doc(scopedId(phone)).get();
    return doc.exists ? doc.data() : null;
  },

  async getAllMembers(){
    const snap = await fs.collection("members").where("businessId","==",_businessId).get();
    return snap.docs.map(d => d.data());
  },

  async upsertMember(rec){
    await fs.collection("members").doc(scopedId(rec.phone)).set({ ...rec, businessId: _businessId });
    return true;
  },

  async deleteMember(phone){
    await fs.collection("members").doc(scopedId(phone)).delete();
    return true;
  },

  async getOrders(){
    const snap = await fs.collection("orders").where("businessId","==",_businessId).get();
    const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    list.sort((a,b) => (b.createdAt||0) - (a.createdAt||0));
    return list;
  },

  async addOrder(o, presetId){
    const payload = {
      ...o,
      businessId: _businessId,
      status: "belum-diproses",
      statusHistory: [{ status: "belum-diproses", at: Date.now() }],
      createdBy: auth.currentUser ? auth.currentUser.uid : null,
      createdAt: Date.now()
    };
    if(presetId){
      await fs.collection("orders").doc(presetId).set(payload);
      return presetId;
    }
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
  },

  async getAssets(){
    const snap = await fs.collection("assets").where("businessId","==",_businessId).get();
    const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    list.sort((a,b) => (a.acquisitionDate||"").localeCompare(b.acquisitionDate||""));
    return list;
  },

  async addAsset(asset){
    const payload = { ...asset, businessId: _businessId, createdAt: Date.now() };
    const ref = await fs.collection("assets").add(payload);
    return ref.id;
  },

  async updateAsset(id, fields){
    await fs.collection("assets").doc(id).update(fields);
    return true;
  },

  async deleteAsset(id){
    await fs.collection("assets").doc(id).delete();
    return true;
  },

  async getNextReceiptCode(serviceType, dateStr){
    const prefixMap = { "kiloan": "KL", "satuan": "ST", "self-service": "SS" };
    const prefix = prefixMap[serviceType] || "TX";
    const [y,m,d] = dateStr.split("-");
    const dateCode = `${d}${m}${y.slice(2)}`;
    const counterKey = `${prefix}${dateCode}`;

    const seq = await fs.runTransaction(async (tx) => {
      const ref = fs.collection("businessSettings").doc(_businessId);
      const doc = await tx.get(ref);
      const counters = doc.exists ? (doc.data().receiptCounters || {}) : {};
      const next = (counters[counterKey] || 0) + 1;
      tx.set(ref, { receiptCounters: { ...counters, [counterKey]: next } }, { merge: true });
      return next;
    });

    return `${prefix}-${dateCode}-${String(seq).padStart(3,'0')}`;
  }
};
