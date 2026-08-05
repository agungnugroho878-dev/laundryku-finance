/* LAMAN — data layer (multi-tenant edition)
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
  { key: "beli-persediaan", name: "Beli Persediaan (Stok)", type: "out", account: ACCOUNT.PERSEDIAAN, system: true },
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
    const trialStartDate = new Date().toISOString().slice(0,10);
    await ref.set({
      name, ownerUid, createdAt: Date.now(),
      subscriptionStatus: "trial",
      trialStartDate,
      trialDays: 14,
      plan: "rintisan"
    });
    await fs.collection("businessSettings").doc(ref.id).set({ businessName: name });
    return ref.id;
  },

  /** Used by the "join with invite code" pegawai signup flow. Returns business data or null if invalid. */
  async getBusinessById(businessId){
    const doc = await fs.collection("businesses").doc(businessId).get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
  },

  async getCurrentBusinessSubscription(){
    const doc = await fs.collection("businesses").doc(_businessId).get();
    if(!doc.exists) return null;
    const data = doc.data();
    return {
      status: data.subscriptionStatus || "trial",
      trialStartDate: data.trialStartDate || null,
      trialDays: data.trialDays || 14,
      plan: data.plan || "rintisan"
    };
  },

  async getAllBusinessesForAdmin(){
    const snap = await fs.collection("businesses").get();
    const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    list.sort((a,b) => (b.createdAt||0) - (a.createdAt||0));
    return list;
  },

  async updateBusinessSubscription(businessId, fields){
    await fs.collection("businesses").doc(businessId).update(fields);
    return true;
  },

  /** Admin-only: permanently deletes a business and ALL its data across every
   *  business-scoped collection. Used to clean up abandoned/duplicate test
   *  accounts from the "Kelola Langganan" admin panel. */
  /** Admin-only: quick counts to help tell a real (in-use) business apart
   *  from an empty abandoned/duplicate test signup. */
  async getBusinessDataCounts(businessId){
    const [txAll, orderAll, memberAll] = await Promise.all([
      fs.collection("transactions").where("businessId","==",businessId).get(),
      fs.collection("orders").where("businessId","==",businessId).get(),
      fs.collection("members").where("businessId","==",businessId).get()
    ]);
    return { transactions: txAll.size, orders: orderAll.size, members: memberAll.size };
  },

  async deleteBusinessCompletely(businessId){
    const scopedCollections = [
      "transactions", "members", "categories", "orders", "branches", "assets",
      "attendance", "payslips", "leaveRequests",
      "inventoryItems", "inventoryPurchases", "stockOpnames", "users"
    ];
    for(const name of scopedCollections){
      const snap = await fs.collection(name).where("businessId","==",businessId).get();
      if(snap.empty) continue;
      const batch = fs.batch();
      snap.docs.forEach(d => batch.delete(d.ref));
      await batch.commit();
    }
    await fs.collection("businessSettings").doc(businessId).delete().catch(()=>{});
    await fs.collection("businesses").doc(businessId).delete();
    return true;
  },

  async getBusinessStaff(){
    const snap = await fs.collection("users").where("businessId","==",_businessId).get();
    return snap.docs.map(d => ({ uid: d.id, ...d.data() }));
  },

  async getBranches(){
    const snap = await fs.collection("branches").where("businessId","==",_businessId).get();
    const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    list.sort((a,b) => (a.createdAt||0) - (b.createdAt||0));
    return list;
  },

  async getBranchById(branchId){
    const doc = await fs.collection("branches").doc(branchId).get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
  },

  async addBranch(branch){
    const payload = { ...branch, businessId: _businessId, pricing: null, createdAt: Date.now() };
    const ref = await fs.collection("branches").add(payload);
    return ref.id;
  },

  async updateBranch(id, fields){
    await fs.collection("branches").doc(id).update(fields);
    return true;
  },

  async deleteBranch(id){
    await fs.collection("branches").doc(id).delete();
    return true;
  },

  async getTodayAttendance(userId, dateStr){
    const snap = await fs.collection("attendance")
      .where("businessId","==",_businessId)
      .where("userId","==",userId)
      .where("date","==",dateStr)
      .limit(1)
      .get();
    return snap.empty ? null : { id: snap.docs[0].id, ...snap.docs[0].data() };
  },

  async addAttendance(record){
    const payload = { ...record, businessId: _businessId };
    const ref = await fs.collection("attendance").add(payload);
    return ref.id;
  },

  async updateAttendance(id, fields){
    await fs.collection("attendance").doc(id).update(fields);
    return true;
  },

  async getAttendanceInRange(startDate, endDate){
    const snap = await fs.collection("attendance")
      .where("businessId","==",_businessId)
      .where("date",">=",startDate)
      .where("date","<=",endDate)
      .get();
    const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    list.sort((a,b) => a.date.localeCompare(b.date) || (a.checkInTime||0)-(b.checkInTime||0));
    return list;
  },

  async addLeaveRequest(record){
    const payload = { ...record, businessId: _businessId, status: "pending", requestedAt: Date.now() };
    const ref = await fs.collection("leaveRequests").add(payload);
    return ref.id;
  },

  async getLeaveRequestsForUser(userId){
    const snap = await fs.collection("leaveRequests")
      .where("businessId","==",_businessId)
      .where("userId","==",userId)
      .get();
    const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    list.sort((a,b) => (b.requestedAt||0)-(a.requestedAt||0));
    return list;
  },

  async getAllLeaveRequests(){
    const snap = await fs.collection("leaveRequests").where("businessId","==",_businessId).get();
    const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    list.sort((a,b) => (b.requestedAt||0)-(a.requestedAt||0));
    return list;
  },

  async updateLeaveRequestStatus(id, status, reviewedBy){
    await fs.collection("leaveRequests").doc(id).update({ status, reviewedAt: Date.now(), reviewedBy });
    return true;
  },

  async setStaffRole(uid, role){
    await fs.collection("users").doc(uid).update({ role });
    return true;
  },

  async setStaffBranch(uid, branchId){
    await fs.collection("users").doc(uid).update({ branchId });
    return true;
  },

  async setSalaryConfig(uid, config){
    await fs.collection("users").doc(uid).update({ salaryConfig: config });
    return true;
  },

  async updateStaffWorkSchedule(uid, workSchedule){
    await fs.collection("users").doc(uid).update({ workSchedule });
    return true;
  },

  async addPayslip(payslip){
    const payload = { ...payslip, businessId: _businessId, generatedAt: Date.now() };
    const ref = await fs.collection("payslips").add(payload);
    return ref.id;
  },

  async getPayslipsForUser(userId){
    const snap = await fs.collection("payslips")
      .where("businessId","==",_businessId)
      .where("userId","==",userId)
      .get();
    const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    list.sort((a,b) => (b.generatedAt||0)-(a.generatedAt||0));
    return list;
  },

  async getAllPayslips(){
    const snap = await fs.collection("payslips").where("businessId","==",_businessId).get();
    const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    list.sort((a,b) => (b.generatedAt||0)-(a.generatedAt||0));
    return list;
  },

  async updatePayslip(id, fields){
    await fs.collection("payslips").doc(id).update(fields);
    return true;
  },

  async deletePayslip(id){
    await fs.collection("payslips").doc(id).delete();
    return true;
  },

  async init(){
    const snap = await fs.collection("categories").where("businessId","==",_businessId).get();
    if(snap.empty){
      const batch = fs.batch();
      for(const cat of DEFAULT_CATEGORIES){
        const id = scopedId(cat.key);
        batch.set(fs.collection("categories").doc(id), { ...cat, id: cat.key, businessId: _businessId });
      }
      await batch.commit();
    } else {
      // Usaha lama: tambahkan kategori sistem baru yang belum ada (misal saat ada
      // fitur baru menambah kategori bawaan) tanpa mengganggu kategori kustom yang sudah dibuat.
      const existingKeys = new Set(snap.docs.map(d => d.data().key || d.data().id));
      const missing = DEFAULT_CATEGORIES.filter(cat => !existingKeys.has(cat.key));
      if(missing.length){
        const batch = fs.batch();
        for(const cat of missing){
          const id = scopedId(cat.key);
          batch.set(fs.collection("categories").doc(id), { ...cat, id: cat.key, businessId: _businessId });
        }
        await batch.commit();
      }
    }
  },

  async getSetting(key, fallback = null){
    const doc = await fs.collection("businessSettings").doc(_businessId).get();
    const data = doc.exists ? doc.data() : {};
    return data[key] !== undefined ? data[key] : fallback;
  },

  /** Fetches the whole businessSettings doc in ONE round-trip, instead of
   *  calling getSetting() repeatedly (which re-fetches the same doc every time). */
  async getAllSettings(){
    const doc = await fs.collection("businessSettings").doc(_businessId).get();
    return doc.exists ? doc.data() : {};
  },

  /** Admin-only: fetch businessSettings for ANY business (not just the current session's). */
  async getBusinessSettingsById(businessId){
    const doc = await fs.collection("businessSettings").doc(businessId).get();
    return doc.exists ? doc.data() : {};
  },

  /** Admin-only: find the Owner account for a given business. */
  async getOwnerForBusiness(businessId){
    const snap = await fs.collection("users").where("businessId","==",businessId).where("role","==","owner").limit(1).get();
    return snap.empty ? null : { id: snap.docs[0].id, ...snap.docs[0].data() };
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

  /** Only 'belum-diproses' / 'sedang-diproses' orders — a real Firestore-level
   *  filter that never touches historical 'selesai' orders, keeping the
   *  Cucian tab's active-work view fast regardless of how much history exists. */
  async getActiveOrders(){
    const snap = await fs.collection("orders")
      .where("businessId","==",_businessId)
      .where("status","in",["belum-diproses","sedang-diproses"])
      .get();
    const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    list.sort((a,b) => (b.createdAt||0) - (a.createdAt||0));
    return list;
  },

  /** Orders with an outstanding balance (piutang) — used for the Neraca's
   *  Piutang Usaha figure and the "belum lunas" list. */
  async getUnpaidOrders(){
    const snap = await fs.collection("orders")
      .where("businessId","==",_businessId)
      .where("paymentStatus","==","belum-lunas")
      .get();
    const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    list.sort((a,b) => (b.createdAt||0) - (a.createdAt||0));
    return list;
  },

  /** Most recent N orders (any status) — for activity feeds. Uses a real
   *  Firestore orderBy+limit so it stays fast regardless of total history. */
  async getOrderById(id){
    const doc = await fs.collection("orders").doc(id).get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
  },

  async getRecentOrders(limitCount = 10){
    const snap = await fs.collection("orders")
      .where("businessId","==",_businessId)
      .orderBy("createdAt","desc")
      .limit(limitCount)
      .get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
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

  async updateOrderFields(id, fields){
    await fs.collection("orders").doc(id).update(fields);
    return true;
  },

  async updateOrderStatus(id, status){
    const ref = fs.collection("orders").doc(id);
    const update = {
      status,
      statusHistory: firebase.firestore.FieldValue.arrayUnion({ status, at: Date.now() })
    };
    if(status === "selesai") update.completedAt = Date.now();
    await ref.update(update);
    return true;
  },

  /** Orders with status 'selesai' completed on/after sinceTimestamp — a real
   *  Firestore-level filter (not just client-side slicing), so the "Selesai"
   *  tab stays fast even after years of accumulated history. */
  async getRecentCompletedOrders(sinceTimestamp){
    const snap = await fs.collection("orders")
      .where("businessId","==",_businessId)
      .where("status","==","selesai")
      .where("completedAt",">=",sinceTimestamp)
      .get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
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

  // ---------------- Persediaan (Inventory) ----------------

  async getInventoryItems(){
    const snap = await fs.collection("inventoryItems").where("businessId","==",_businessId).get();
    const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    list.sort((a,b) => (a.category||"").localeCompare(b.category||"") || (a.name||"").localeCompare(b.name||""));
    return list;
  },

  async getInventoryItemById(id){
    const doc = await fs.collection("inventoryItems").doc(id).get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
  },

  async addInventoryItem(item){
    const payload = { ...item, businessId: _businessId, createdAt: Date.now() };
    const ref = await fs.collection("inventoryItems").add(payload);
    return ref.id;
  },

  async updateInventoryItem(id, fields){
    await fs.collection("inventoryItems").doc(id).update(fields);
    return true;
  },

  async deleteInventoryItem(id){
    await fs.collection("inventoryItems").doc(id).delete();
    return true;
  },

  async addInventoryPurchase(purchase){
    const payload = { ...purchase, businessId: _businessId, createdAt: Date.now() };
    const ref = await fs.collection("inventoryPurchases").add(payload);
    return ref.id;
  },

  async getInventoryPurchasesInRange(startDate, endDate){
    const snap = await fs.collection("inventoryPurchases")
      .where("businessId","==",_businessId)
      .where("date",">=",startDate)
      .where("date","<=",endDate)
      .get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  },

  async getAllInventoryPurchases(){
    const snap = await fs.collection("inventoryPurchases").where("businessId","==",_businessId).get();
    const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    list.sort((a,b) => (b.date||"").localeCompare(a.date||""));
    return list;
  },

  async addStockOpname(opname){
    const payload = { ...opname, businessId: _businessId, createdAt: Date.now() };
    const ref = await fs.collection("stockOpnames").add(payload);
    return ref.id;
  },

  async updateStockOpname(id, fields){
    await fs.collection("stockOpnames").doc(id).update(fields);
    return true;
  },

  async getAllStockOpnames(){
    const snap = await fs.collection("stockOpnames").where("businessId","==",_businessId).get();
    const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    list.sort((a,b) => (b.date||"").localeCompare(a.date||""));
    return list;
  },

  async getLastCompletedOpnameBefore(dateStr){
    const all = await this.getAllStockOpnames();
    const completed = all.filter(o => o.status === "selesai" && o.date <= dateStr);
    return completed.length ? completed[0] : null; // already sorted desc by date
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
