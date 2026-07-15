/* LaundryKu Finance — report engine
 * Turns a list of simple "kas masuk / kas keluar" entries into a real
 * Laba Rugi (Income Statement) and Neraca (Balance Sheet), using the
 * account tag stored on each category/transaction.
 */

const Reports = {
  todayStr(){
    return new Date().toISOString().slice(0,10);
  },

  startOfMonth(d = new Date()){
    return new Date(d.getFullYear(), d.getMonth(), 1).toISOString().slice(0,10);
  },

  formatRupiah(n){
    const sign = n < 0 ? "-" : "";
    return sign + "Rp" + Math.round(Math.abs(n)).toLocaleString("id-ID");
  },

  // Sum of net cash flow (in - out) for a list of transactions
  netCash(list){
    return list.reduce((sum,t) => sum + (t.type === "in" ? t.amount : -t.amount), 0);
  },

  /** Laba Rugi for a date range [start, end] inclusive, grouped by category */
  async labaRugi(start, end){
    const txs = await DB.getTransactionsInRange(start, end);
    const categories = await DB.getCategories();
    const catMap = Object.fromEntries(categories.map(c => [c.id, c]));

    const pendapatanLines = {};
    const bebanLines = {};

    for(const t of txs){
      if(t.account === DB.ACCOUNT.PENDAPATAN){
        const name = catMap[t.categoryId]?.name || t.categoryName || "Pendapatan Lain";
        pendapatanLines[name] = (pendapatanLines[name]||0) + t.amount;
      } else if(t.account === DB.ACCOUNT.BEBAN){
        const name = catMap[t.categoryId]?.name || t.categoryName || "Beban Lain";
        bebanLines[name] = (bebanLines[name]||0) + t.amount;
      }
    }

    const totalPendapatan = Object.values(pendapatanLines).reduce((a,b)=>a+b,0);
    const totalBeban = Object.values(bebanLines).reduce((a,b)=>a+b,0);

    return {
      start, end,
      pendapatanLines, bebanLines,
      totalPendapatan, totalBeban,
      labaBersih: totalPendapatan - totalBeban
    };
  },

  /** Cumulative laba (pendapatan - beban) for all transactions strictly after `sinceDate` up to `asOf` */
  async _cumulativeLaba(sinceDateExclusive, asOf){
    const all = await DB.getTransactions();
    let laba = 0;
    for(const t of all){
      if(t.date <= sinceDateExclusive || t.date > asOf) continue;
      if(t.account === DB.ACCOUNT.PENDAPATAN) laba += t.amount;
      if(t.account === DB.ACCOUNT.BEBAN) laba -= t.amount;
    }
    return laba;
  },

  /** Full Neraca (Balance Sheet) as of a given date */
  async neraca(asOf){
    const opening = await this.getOpeningBalances();
    const all = await DB.getTransactions();
    const relevant = all.filter(t => t.date > opening.date && t.date <= asOf);

    let kas = opening.kas;
    let piutang = opening.piutang;
    let asetTetap = opening.asetTetap;
    let utangUsaha = opening.utangUsaha;
    let utangBank = opening.utangBank;
    let modalSetor = opening.modal; // auto-balanced opening equity
    let prive = 0;
    let laba = 0;

    for(const t of relevant){
      kas += (t.type === "in" ? t.amount : -t.amount);
      switch(t.account){
        case DB.ACCOUNT.PIUTANG: piutang -= t.amount; break;
        case DB.ACCOUNT.ASET_TETAP: asetTetap += t.amount; break;
        case DB.ACCOUNT.UTANG_USAHA: utangUsaha -= t.amount; break;
        case DB.ACCOUNT.UTANG_BANK: utangBank += t.amount; break;
        case DB.ACCOUNT.MODAL: modalSetor += t.amount; break;
        case DB.ACCOUNT.PRIVE: prive += t.amount; break;
        case DB.ACCOUNT.PENDAPATAN: laba += t.amount; break;
        case DB.ACCOUNT.BEBAN: laba -= t.amount; break;
      }
    }

    const persediaan = opening.persediaan;
    const totalAset = kas + piutang + persediaan + asetTetap;
    const totalKewajiban = utangUsaha + utangBank;
    const ekuitas = modalSetor + laba - prive;
    const totalKewajibanModal = totalKewajiban + ekuitas;

    return {
      asOf,
      kas, piutang, persediaan, asetTetap, totalAset,
      utangUsaha, utangBank, totalKewajiban,
      modalSetor, labaBerjalan: laba, prive, ekuitas,
      totalKewajibanModal,
      balanced: Math.abs(totalAset - totalKewajibanModal) < 1
    };
  },

  async getOpeningBalances(){
    const def = {
      date: "1970-01-01",
      kas: 0, piutang: 0, persediaan: 0, asetTetap: 0,
      utangUsaha: 0, utangBank: 0, modal: 0
    };
    const saved = await DB.getSetting("openingBalances", null);
    if(!saved) return def;
    const merged = { ...def, ...saved };
    // Modal is always auto-balanced: Aset = Kewajiban + Modal
    merged.modal = (merged.kas + merged.piutang + merged.persediaan + merged.asetTetap)
                 - (merged.utangUsaha + merged.utangBank);
    return merged;
  },

  async setOpeningBalances(vals){
    await DB.setSetting("openingBalances", vals);
  },

  /** last N months of net income, for the dashboard mini chart */
  async lastMonthsNet(n = 6){
    const all = await DB.getTransactions();
    const now = new Date();
    const buckets = [];
    for(let i = n-1; i >= 0; i--){
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const key = d.toISOString().slice(0,7);
      buckets.push({ key, label: d.toLocaleDateString("id-ID",{month:"short"}), pendapatan:0, beban:0 });
    }
    const byKey = Object.fromEntries(buckets.map(b=>[b.key,b]));
    for(const t of all){
      const key = t.date.slice(0,7);
      if(!byKey[key]) continue;
      if(t.account === DB.ACCOUNT.PENDAPATAN) byKey[key].pendapatan += t.amount;
      if(t.account === DB.ACCOUNT.BEBAN) byKey[key].beban += t.amount;
    }
    return buckets;
  }
};
