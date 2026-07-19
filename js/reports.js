/* LaundryKu Finance — report engine
 * Turns a list of simple "kas masuk / kas keluar" entries into a real
 * Laba Rugi (Income Statement) and Neraca (Balance Sheet), using the
 * account tag stored on each category/transaction.
 */

/** Local (not UTC) date formatting — using .toISOString() here would shift
 *  dates backward for any timezone ahead of UTC (like Indonesia, UTC+7/+8),
 *  causing "today"/"this month" to sometimes resolve to the wrong day. */
function localDateStr(d = new Date()){
  const y = d.getFullYear();
  const m = String(d.getMonth()+1).padStart(2,'0');
  const day = String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${day}`;
}
function localMonthStr(d = new Date()){
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
}

/* ---------------- Penyusutan Aset Tetap (garis lurus) ---------------- */

function monthIndex(dateStr){
  const [y,m] = dateStr.split("-").map(Number);
  return y*12 + (m-1);
}

function assetMonthlyDepreciation(asset){
  const life = asset.usefulLifeYears || 1;
  const depreciable = (asset.acquisitionCost||0) - (asset.salvageValue||0);
  return depreciable / (life*12);
}

/** Accumulated depreciation for one asset as of a given date (whole-month convention). */
function depreciationAsOf(asset, dateStr){
  if(!asset.acquisitionDate || dateStr < asset.acquisitionDate) return 0;
  const monthly = assetMonthlyDepreciation(asset);
  const monthsElapsed = Math.max(0, monthIndex(dateStr) - monthIndex(asset.acquisitionDate) + 1);
  const maxDepreciable = (asset.acquisitionCost||0) - (asset.salvageValue||0);
  return Math.min(monthsElapsed * monthly, maxDepreciable);
}

/** Depreciation expense that accrued within [start, end] inclusive. */
function depreciationForPeriod(asset, start, end){
  const dayBefore = new Date(start+"T00:00:00");
  dayBefore.setDate(dayBefore.getDate()-1);
  const upTo = depreciationAsOf(asset, end);
  const before = depreciationAsOf(asset, localDateStr(dayBefore));
  return Math.max(0, upTo - before);
}

const Reports = {
  todayStr(){
    return localDateStr();
  },

  startOfMonth(d = new Date()){
    return localDateStr(new Date(d.getFullYear(), d.getMonth(), 1));
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
  async labaRugi(start, end, branchId = null){
    let txs = await DB.getTransactionsInRange(start, end);
    if(branchId) txs = txs.filter(t => t.branchId === branchId);
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

    // Non-cash depreciation expense (from Aset Tetap module) — only assets
    // belonging to this branch (or all assets, in the aggregate view).
    let assets = await DB.getAssets();
    if(branchId) assets = assets.filter(a => a.branchId === branchId);
    let depreciationTotal = 0;
    for(const asset of assets){
      depreciationTotal += depreciationForPeriod(asset, start, end);
    }
    if(depreciationTotal > 0){
      bebanLines["Beban Penyusutan Aset Tetap"] = (bebanLines["Beban Penyusutan Aset Tetap"]||0) + depreciationTotal;
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
  async neraca(asOf, branchId = null){
    const opening = await this.getOpeningBalances(branchId);
    const all = await DB.getTransactions();
    let relevant = all.filter(t => t.date > opening.date && t.date <= asOf);
    if(branchId) relevant = relevant.filter(t => t.branchId === branchId);

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

    // Accumulated depreciation (contra-asset) — only this branch's assets
    // (or all assets, in the aggregate view).
    let assets = await DB.getAssets();
    if(branchId) assets = assets.filter(a => a.branchId === branchId);
    let akumulasiPenyusutan = 0;
    let depresiasiSejakSaldoAwal = 0;
    for(const asset of assets){
      akumulasiPenyusutan += depreciationAsOf(asset, asOf);
      const effectiveStart = asset.acquisitionDate > opening.date ? asset.acquisitionDate : opening.date;
      depresiasiSejakSaldoAwal += depreciationForPeriod(asset, effectiveStart, asOf);
    }
    laba -= depresiasiSejakSaldoAwal;

    const asetTetapBersih = asetTetap - akumulasiPenyusutan;
    const totalAset = kas + piutang + persediaan + asetTetapBersih;
    const totalKewajiban = utangUsaha + utangBank;
    const ekuitas = modalSetor + laba - prive;
    const totalKewajibanModal = totalKewajiban + ekuitas;

    return {
      asOf,
      kas, piutang, persediaan, asetTetap, akumulasiPenyusutan, asetTetapBersih, totalAset,
      utangUsaha, utangBank, totalKewajiban,
      modalSetor, labaBerjalan: laba, prive, ekuitas,
      totalKewajibanModal,
      balanced: Math.abs(totalAset - totalKewajibanModal) < 1
    };
  },

  async getOpeningBalances(branchId = null){
    const def = {
      date: "1970-01-01",
      kas: 0, piutang: 0, persediaan: 0, asetTetap: 0,
      utangUsaha: 0, utangBank: 0, modal: 0
    };

    if(branchId){
      const branch = await DB.getBranchById(branchId);
      const saved = branch?.openingBalances || null;
      if(!saved) return def;
      const merged = { ...def, ...saved };
      merged.modal = (merged.kas + merged.piutang + merged.persediaan + merged.asetTetap)
                   - (merged.utangUsaha + merged.utangBank);
      return merged;
    }

    // Aggregate ("Semua Cabang"): sum every branch's own opening balance.
    const branches = await DB.getBranches();
    const sum = { date: null, kas:0, piutang:0, persediaan:0, asetTetap:0, utangUsaha:0, utangBank:0 };
    for(const b of branches){
      const ob = b.openingBalances;
      if(!ob) continue;
      sum.kas += ob.kas||0; sum.piutang += ob.piutang||0; sum.persediaan += ob.persediaan||0;
      sum.asetTetap += ob.asetTetap||0; sum.utangUsaha += ob.utangUsaha||0; sum.utangBank += ob.utangBank||0;
      if(ob.date && (!sum.date || ob.date < sum.date)) sum.date = ob.date;
    }
    sum.date = sum.date || def.date;
    sum.modal = (sum.kas + sum.piutang + sum.persediaan + sum.asetTetap) - (sum.utangUsaha + sum.utangBank);
    return sum;
  },

  async setOpeningBalances(vals, branchId){
    if(!branchId) return;
    await DB.updateBranch(branchId, { openingBalances: vals });
  },

  /** last N months of net income, for the dashboard mini chart */
  async lastMonthsNet(n = 6){
    const all = await DB.getTransactions();
    const now = new Date();
    const buckets = [];
    for(let i = n-1; i >= 0; i--){
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const key = localMonthStr(d);
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
