/* LaundryKu Finance — app shell & UI */

const ICONS = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7"/><path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9"/></svg>`,
  list: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h13M8 12h13M8 18h13"/><path d="M3 6h.01M3 12h.01M3 18h.01"/></svg>`,
  report: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M9 13h6M9 17h6M9 9h2"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.04 1.56V21a2 2 0 0 1-4 0v-.09A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.56-1.04H3a2 2 0 0 1 0-4h.09A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1.04-1.56V3a2 2 0 0 1 4 0v.09A1.7 1.7 0 0 0 15 4.6a1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9a1.7 1.7 0 0 0 1.56 1.04H21a2 2 0 0 1 0 4h-.09A1.7 1.7 0 0 0 19.4 15z"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2m2 0v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V6"/></svg>`,
  arrowUp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>`,
  arrowDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>`,
  bubble: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="7"/><circle cx="16" cy="8" r="2"/></svg>`,
  empty: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 4h16v16H4z" opacity="0"/><circle cx="12" cy="12" r="8"/><path d="M9 12h6"/></svg>`,
  printer: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V3h12v6"/><rect x="6" y="13" width="12" height="8"/><path d="M4 13h16v-2a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2z"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M6 11l6 6 6-6"/><path d="M4 21h16"/></svg>`,
  chat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
  scale: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M7 7l-4 8a4 4 0 0 0 8 0zM21 7l-4 8a4 4 0 0 0 8 0zM3 7h18M12 3l4 4M12 3L8 7"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.9 6.3L22 9.3l-5 5 1.2 7.2L12 18l-6.2 3.5L7 14.3l-5-5 7.1-1z"/></svg>`
};

const state = {
  page: "dashboard",
  businessName: "Usaha Laundry Saya",
  categories: [],
  txForm: { type: "in" },
  reportTab: "labarugi",
  labaRugiRange: { start: Reports.startOfMonth(), end: Reports.todayStr() },
  neracaDate: Reports.todayStr()
};

function el(html){
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function toast(msg, type="success"){
  const check = `<svg viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>`;
  const badge = type === "success" ? `<span class="toast-check">${check}</span>` : "";
  const t = el(`<div class="toast ${type==='warn'?'toast-warn':''}">${badge}<span>${msg}</span></div>`);
  document.body.appendChild(t);
  setTimeout(()=>t.remove(), 2400);
}

function closeModal(){
  document.querySelectorAll(".modal-backdrop").forEach(m=>m.remove());
}

function openModal(innerHtml){
  closeModal();
  const backdrop = el(`<div class="modal-backdrop"><div class="modal-sheet">${innerHtml}</div></div>`);
  backdrop.addEventListener("click",(e)=>{ if(e.target === backdrop) closeModal(); });
  document.body.appendChild(backdrop);
  return backdrop;
}

/* ---------------- Navigation ---------------- */

const NAV_ITEMS = [
  { id:"dashboard", label:"Beranda", icon:ICONS.home },
  { id:"transaksi", label:"Transaksi", icon:ICONS.list },
  { id:"member", label:"Member", icon:ICONS.star },
  { id:"laporan", label:"Laporan", icon:ICONS.report },
  { id:"pengaturan", label:"Atur", icon:ICONS.settings }
];

function renderNav(){
  const items = NAV_ITEMS.map(i => `
    <button data-page="${i.id}" class="${state.page===i.id?'active':''}">
      ${i.icon}<span>${i.label}</span>
    </button>`).join("");
  document.getElementById("bottomNav").innerHTML = items;
  document.getElementById("sidebar").innerHTML = items;
  document.querySelectorAll("[data-page]").forEach(btn=>{
    btn.addEventListener("click", ()=>{ state.page = btn.dataset.page; render(); });
  });
}

async function render(){
  renderNav();
  document.getElementById("bizName").textContent = state.businessName;
  const main = document.getElementById("appMain");
  main.innerHTML = `<div class="empty-state">Memuat...</div>`;
  if(state.page === "dashboard") main.innerHTML = await pageDashboard();
  if(state.page === "transaksi") main.innerHTML = await pageTransaksi();
  if(state.page === "member") main.innerHTML = await pageMember();
  if(state.page === "laporan") main.innerHTML = await pageLaporan();
  if(state.page === "pengaturan") main.innerHTML = await pagePengaturan();
  bindPageEvents();
  if(state.page === "dashboard") runDashboardCountUps();
}

/* ---------------- Dashboard ---------------- */

async function pageDashboard(){
  const neraca = await Reports.neraca(Reports.todayStr());
  const monthRange = { start: Reports.startOfMonth(), end: Reports.todayStr() };
  const lr = await Reports.labaRugi(monthRange.start, monthRange.end);
  const months = await Reports.lastMonthsNet(6);
  const maxAbs = Math.max(1, ...months.map(m => Math.max(m.pendapatan, m.beban)));
  const txs = (await DB.getTransactions()).slice(0,5);
  const cats = Object.fromEntries(state.categories.map(c=>[c.id,c]));

  return `
    <div class="hero-balance">
      <div class="card-title">Saldo Kas Saat Ini</div>
      <div class="amount num" data-countup="${neraca.kas}">Rp0</div>
      <div class="sub">
        <span>Aset: <b>${Reports.formatRupiah(neraca.totalAset)}</b></span>
        <span>Modal: <b>${Reports.formatRupiah(neraca.ekuitas)}</b></span>
      </div>
    </div>

    <div class="quick-actions">
      <button class="in" data-action="add" data-type="in"><span class="qa-icon">${ICONS.arrowDown}</span>Catat Kas Masuk</button>
      <button class="out" data-action="add" data-type="out"><span class="qa-icon">${ICONS.arrowUp}</span>Catat Kas Keluar</button>
    </div>

    ${await streakCardHtml()}

    <div class="stat-grid">
      <div class="card stat-card income">
        <div class="card-title">Pemasukan Bulan Ini</div>
        <div class="amount num" data-countup="${lr.totalPendapatan}">Rp0</div>
      </div>
      <div class="card stat-card expense">
        <div class="card-title">Pengeluaran Bulan Ini</div>
        <div class="amount num" data-countup="${lr.totalBeban}">Rp0</div>
      </div>
    </div>

    <div class="card">
      <div class="row-between">
        <div class="card-title" style="margin-bottom:0">Laba/Rugi Bulan Ini</div>
        <div class="num" style="font-weight:700; color:${lr.labaBersih>=0?'var(--mint)':'var(--rose)'}">
          ${Reports.formatRupiah(lr.labaBersih)}
        </div>
      </div>
      <div class="mini-chart">
        ${months.map(m=>{
          const h = Math.round((Math.max(m.pendapatan,m.beban)/maxAbs)*54)+2;
          const net = m.pendapatan - m.beban;
          const color = net>=0 ? 'var(--mint)' : 'var(--rose)';
          return `<div class="bar-wrap"><div class="bar" style="height:${h}px; background:${color}"></div><div class="lbl">${m.label}</div></div>`;
        }).join("")}
      </div>
    </div>

    <div class="card">
      <div class="row-between" style="margin-bottom:8px;">
        <div class="card-title" style="margin-bottom:0">Transaksi Terbaru</div>
        <button class="btn-ghost btn" data-page="transaksi">Lihat semua</button>
      </div>
      ${txs.length===0 ? emptyState("Belum ada transaksi. Mulai catat kas masuk atau keluar.") :
        txs.map(t=>txItemHtml(t, cats)).join("")}
    </div>
  `;
}

/* ---------------- Transaksi ---------------- */

async function pageTransaksi(){
  const txs = await DB.getTransactions();
  const cats = Object.fromEntries(state.categories.map(c=>[c.id,c]));
  return `
    <div class="btn-row" style="margin-bottom:14px;">
      <button class="btn btn-primary btn-block" data-action="add" data-type="in">${ICONS.plus} Kas Masuk</button>
      <button class="btn btn-outline btn-block" data-action="add" data-type="out">${ICONS.plus} Kas Keluar</button>
    </div>
    <div class="card">
      <div class="card-title">Semua Transaksi (${txs.length})</div>
      ${txs.length===0 ? emptyState("Belum ada transaksi tercatat.") :
        txs.map(t=>txItemHtml(t, cats, true)).join("")}
    </div>
  `;
}

function txItemHtml(t, cats, showDelete=false){
  const cat = cats[t.categoryId];
  const name = cat ? cat.name : (t.categoryName || "Lainnya");
  const dateLabel = new Date(t.date+"T00:00:00").toLocaleDateString("id-ID",{ day:"2-digit", month:"short", year:"numeric" });
  const metaParts = [dateLabel];
  if(t.customerName) metaParts.push(t.customerName);
  if(t.weightKg) metaParts.push(`${t.weightKg} kg`);
  if(t.note) metaParts.push(escapeHtml(t.note));
  const canSendReceipt = t.customerName || t.customerPhone;
  return `
    <div class="tx-item">
      <div class="tx-dot ${t.type}">${t.type==='in'?ICONS.arrowDown:ICONS.arrowUp}</div>
      <div class="tx-info">
        <div class="cat">${name}</div>
        <div class="meta">${metaParts.join(" · ")}</div>
      </div>
      <div class="tx-amt ${t.type} num">${t.type==='in'?'+':'-'}${Reports.formatRupiah(t.amount)}</div>
      ${canSendReceipt ? `<button class="tx-del" data-action="send-receipt" data-id="${t.id}" title="Kirim struk via WA">${ICONS.chat}</button>` : ""}
      ${showDelete ? `<button class="tx-del" data-action="delete-tx" data-id="${t.id}">${ICONS.trash}</button>` : ""}
    </div>
  `;
}

function emptyState(msg){
  return `<div class="empty-state"><div class="es-icon">${ICONS.bubble}</div><div class="es-msg">${msg}</div></div>`;
}

function escapeHtml(s){
  return s.replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}

/* ---------------- Laporan ---------------- */

async function pageLaporan(){
  const tabBtn = (id,label) => `<button class="btn ${state.reportTab===id?'btn-primary':'btn-outline'}" data-report-tab="${id}">${label}</button>`;
  let body = "";
  if(state.reportTab === "labarugi"){
    const lr = await Reports.labaRugi(state.labaRugiRange.start, state.labaRugiRange.end);
    body = `
      <div class="card no-print">
        <div class="card-title">Periode</div>
        <div class="date-range">
          <input type="date" id="lrStart" value="${state.labaRugiRange.start}">
          <span class="muted small">s/d</span>
          <input type="date" id="lrEnd" value="${state.labaRugiRange.end}">
        </div>
      </div>
      ${renderLabaRugiReceipt(lr)}
    `;
  } else {
    const neraca = await Reports.neraca(state.neracaDate);
    body = `
      <div class="card no-print">
        <div class="card-title">Per Tanggal</div>
        <input type="date" id="neracaDate" value="${state.neracaDate}">
      </div>
      ${renderNeracaReceipt(neraca)}
    `;
  }

  return `
    <div class="btn-row no-print" style="margin-bottom:14px;">
      ${tabBtn("labarugi","Laba Rugi")}
      ${tabBtn("neraca","Neraca")}
    </div>
    ${body}
    <div class="btn-row no-print">
      <button class="btn btn-outline btn-block" data-action="print">${ICONS.printer} Cetak / Simpan PDF</button>
      <button class="btn btn-outline btn-block" data-action="export-csv">${ICONS.download} Unduh CSV</button>
    </div>
  `;
}

function renderLabaRugiReceipt(lr){
  const rows = (obj, cls) => Object.entries(obj).map(([name,amt]) =>
    `<div class="r-row"><span>${name}</span><span class="val ${cls} num">${Reports.formatRupiah(amt)}</span></div>`
  ).join("") || `<div class="r-row muted"><span>Tidak ada data</span><span></span></div>`;

  const periodLabel = `${fmtDate(lr.start)} — ${fmtDate(lr.end)}`;

  return `
    <div class="receipt">
      <div class="r-head">
        <div class="biz">${state.businessName}</div>
        <div class="period">Laporan Laba Rugi<br>${periodLabel}</div>
      </div>
      <div class="r-row section">Pendapatan</div>
      ${rows(lr.pendapatanLines, "pos")}
      <div class="r-row total"><span>Total Pendapatan</span><span class="val num">${Reports.formatRupiah(lr.totalPendapatan)}</span></div>

      <div class="r-row section">Beban</div>
      ${rows(lr.bebanLines, "neg")}
      <div class="r-row total"><span>Total Beban</span><span class="val num">${Reports.formatRupiah(lr.totalBeban)}</span></div>

      <div class="r-row total"><span>Laba/Rugi Bersih</span><span class="val num" style="color:${lr.labaBersih>=0?'var(--mint)':'var(--rose)'}">${Reports.formatRupiah(lr.labaBersih)}</span></div>
    </div>
  `;
}

function renderNeracaReceipt(n){
  return `
    <div class="receipt">
      <div class="r-head">
        <div class="biz">${state.businessName}</div>
        <div class="period">Neraca (Laporan Posisi Keuangan)<br>Per ${fmtDate(n.asOf)}</div>
      </div>

      <div class="r-row section">Aset</div>
      <div class="r-row"><span>Kas</span><span class="val num">${Reports.formatRupiah(n.kas)}</span></div>
      <div class="r-row"><span>Piutang Usaha</span><span class="val num">${Reports.formatRupiah(n.piutang)}</span></div>
      <div class="r-row"><span>Persediaan</span><span class="val num">${Reports.formatRupiah(n.persediaan)}</span></div>
      <div class="r-row"><span>Peralatan/Aset Tetap</span><span class="val num">${Reports.formatRupiah(n.asetTetap)}</span></div>
      <div class="r-row total"><span>Total Aset</span><span class="val num">${Reports.formatRupiah(n.totalAset)}</span></div>

      <div class="r-row section">Kewajiban</div>
      <div class="r-row"><span>Utang Usaha</span><span class="val num">${Reports.formatRupiah(n.utangUsaha)}</span></div>
      <div class="r-row"><span>Utang Bank</span><span class="val num">${Reports.formatRupiah(n.utangBank)}</span></div>
      <div class="r-row total"><span>Total Kewajiban</span><span class="val num">${Reports.formatRupiah(n.totalKewajiban)}</span></div>

      <div class="r-row section">Modal</div>
      <div class="r-row"><span>Modal Disetor</span><span class="val num">${Reports.formatRupiah(n.modalSetor)}</span></div>
      <div class="r-row"><span>Laba Berjalan</span><span class="val num">${Reports.formatRupiah(n.labaBerjalan)}</span></div>
      <div class="r-row"><span>Prive</span><span class="val num neg">-${Reports.formatRupiah(n.prive)}</span></div>
      <div class="r-row total"><span>Total Modal</span><span class="val num">${Reports.formatRupiah(n.ekuitas)}</span></div>

      <div class="r-row total"><span>Total Kewajiban + Modal</span><span class="val num">${Reports.formatRupiah(n.totalKewajibanModal)}</span></div>
      <div class="r-balance-note">${n.balanced ? "✓ Neraca seimbang (Aset = Kewajiban + Modal)" : "⚠ Neraca belum seimbang — periksa saldo awal di Pengaturan"}</div>
    </div>
  `;
}

function fmtDate(d){
  return new Date(d+"T00:00:00").toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"});
}

/* ---------------- Pengaturan ---------------- */

async function pagePengaturan(){
  const opening = await Reports.getOpeningBalances();
  const customCats = state.categories.filter(c=>!c.system);

  return `
    <h3 class="section-title">Profil Usaha</h3>
    <div class="card">
      <div class="field">
        <label>Nama Usaha</label>
        <input type="text" id="bizNameInput" value="${escapeHtml(state.businessName)}">
      </div>
      <button class="btn btn-primary" data-action="save-biz-name">Simpan Nama</button>
    </div>

    <h3 class="section-title">Saldo Awal Pembukuan</h3>
    <div class="card">
      <p class="small muted">Isi saldo di sini jika usahamu sudah berjalan sebelum mulai pakai aplikasi ini. Modal dihitung otomatis agar neraca selalu seimbang.</p>
      <div class="field"><label>Tanggal Saldo Awal</label><input type="date" id="ob-date" value="${opening.date==='1970-01-01'?Reports.todayStr():opening.date}"></div>
      <div class="field"><label>Kas</label><input type="number" id="ob-kas" value="${opening.kas}"></div>
      <div class="field"><label>Piutang Usaha</label><input type="number" id="ob-piutang" value="${opening.piutang}"></div>
      <div class="field"><label>Persediaan</label><input type="number" id="ob-persediaan" value="${opening.persediaan}"></div>
      <div class="field"><label>Peralatan/Aset Tetap</label><input type="number" id="ob-asetTetap" value="${opening.asetTetap}"></div>
      <div class="field"><label>Utang Usaha</label><input type="number" id="ob-utangUsaha" value="${opening.utangUsaha}"></div>
      <div class="field"><label>Utang Bank</label><input type="number" id="ob-utangBank" value="${opening.utangBank}"></div>
      <button class="btn btn-primary" data-action="save-opening">Simpan Saldo Awal</button>
    </div>

    <h3 class="section-title">Kategori Tambahan</h3>
    <div class="card">
      <p class="small muted">Kategori dasar (kas masuk/keluar) sudah tersedia. Tambahkan kategori pendapatan atau beban khusus di sini bila perlu.</p>
      <div class="tag-list" style="margin-bottom:14px;">
        ${customCats.length===0 ? '<span class="small muted">Belum ada kategori tambahan.</span>' :
          customCats.map(c=>`<span class="tag">${c.name} (${c.type==='in'?'Pendapatan':'Beban'})<button data-action="delete-cat" data-id="${c.id}">✕</button></span>`).join("")}
      </div>
      <div class="btn-row">
        <button class="btn btn-outline btn-block" data-action="add-cat" data-type="in">+ Kategori Pendapatan</button>
        <button class="btn btn-outline btn-block" data-action="add-cat" data-type="out">+ Kategori Beban</button>
      </div>
    </div>

    <h3 class="section-title">Data</h3>
    <div class="card">
      <div class="btn-row" style="margin-bottom:10px;">
        <button class="btn btn-outline btn-block" data-action="export-json">Cadangkan Data (JSON)</button>
        <button class="btn btn-outline btn-block" data-action="import-json">Pulihkan Data</button>
      </div>
      <button class="btn btn-danger btn-block" data-action="wipe-data">Hapus Semua Data</button>
    </div>

    <h3 class="section-title">Tentang</h3>
    <div class="card small muted">
      LaundryKu Finance v1.0 — aplikasi laporan keuangan untuk UMKM laundry. Semua data tersimpan di perangkat ini (offline), tidak dikirim ke server manapun.
    </div>
  `;
}

/* ---------------- Streak (motivation) ---------------- */

async function streakCardHtml(){
  const txs = await DB.getTransactions();
  if(txs.length === 0) return "";
  const dateSet = new Set(txs.map(t=>t.date));
  const toStr = (dt) => dt.toISOString().slice(0,10);
  let cursor = new Date();
  if(!dateSet.has(toStr(cursor))) cursor.setDate(cursor.getDate()-1);
  let streak = 0;
  while(dateSet.has(toStr(cursor))){
    streak++;
    cursor.setDate(cursor.getDate()-1);
  }
  if(streak < 2) return "";
  return `
    <div class="card streak-card">
      <div class="streak-emoji">🔥</div>
      <div class="streak-text">Mantap! Kamu sudah mencatat transaksi <b>${streak} hari</b> berturut-turut. Kebiasaan kecil ini bikin laporanmu makin akurat.</div>
    </div>
  `;
}

/* ---------------- Animated numbers ---------------- */

function animateCountUp(elm, target, prefix="Rp", duration=700){
  if(!elm) return;
  const startVal = 0;
  const startTime = performance.now();
  const isNeg = target < 0;
  const absTarget = Math.abs(target);
  function tick(now){
    const p = Math.min(1, (now - startTime) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    const val = Math.round(absTarget * eased);
    elm.textContent = (isNeg && val>0 ? "-" : "") + prefix + val.toLocaleString("id-ID");
    if(p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function runDashboardCountUps(){
  document.querySelectorAll("[data-countup]").forEach(elm=>{
    const target = parseFloat(elm.dataset.countup);
    animateCountUp(elm, target);
  });
}

/* ---------------- Member (Self-Service Loyalty) ---------------- */

async function pageMember(){
  const members = (await DB.getAllMembers()).sort((a,b)=> (b.visits+b.freeRedeemed*LOYALTY_TARGET) - (a.visits+a.freeRedeemed*LOYALTY_TARGET));
  return `
    <div class="card" style="background:linear-gradient(120deg, var(--coin-bg), #fff 80%); border:1px solid #F0DFC0;">
      <div class="card-title">Program Loyalty Self-Service</div>
      <div class="small" style="line-height:1.5;">Setiap <b>${LOYALTY_TARGET}x</b> kunjungan cuci+kering self-service, pelanggan dapat <b>1x gratis</b> cuci+kering berikutnya. Poin otomatis bertambah saat Anda catat transaksi self-service dengan nomor WA pelanggan.</div>
    </div>
    <div class="card">
      <div class="card-title">Daftar Member (${members.length})</div>
      ${members.length===0 ? emptyState("Belum ada member. Poin akan muncul di sini otomatis setelah transaksi self-service pertama dengan nomor WA diisi.") :
        members.map(memberRowHtml).join("")}
    </div>
  `;
}

function memberRowHtml(m){
  const pct = Math.min(100, (m.visits / LOYALTY_TARGET) * 100);
  const isReady = m.visits >= LOYALTY_TARGET;
  return `
    <div class="tx-item" style="align-items:flex-start;">
      <div class="tx-dot in">${ICONS.star}</div>
      <div class="tx-info">
        <div class="cat">${m.name || "Tanpa nama"}</div>
        <div class="meta">${m.phone}${m.freeRedeemed ? ` · ${m.freeRedeemed}x sudah redeem gratis` : ""}</div>
        <div class="loyalty-bar" style="margin-top:8px;"><div class="loyalty-fill" style="width:${pct}%"></div></div>
        <div class="small muted" style="margin-top:4px;">${isReady ? "🎉 Siap redeem gratis!" : `${m.visits}/${LOYALTY_TARGET} kunjungan`}</div>
      </div>
      <button class="tx-del" data-action="wa-member" data-phone="${m.phone}" title="Chat WA">${ICONS.chat}</button>
    </div>
  `;
}

/* ---------------- Self-service loyalty (10x = gratis 1x) ---------------- */

const LOYALTY_TARGET = 10;

async function getMemberStatus(phone){
  const p = normalizePhone(phone);
  if(!p) return null;
  const m = await DB.getMember(p);
  return m || { phone: p, name: "", visits: 0, freeRedeemed: 0 };
}

/** Call after saving a self-service transaction. Returns { isFree, progress, member } */
async function recordSelfServiceVisit(phone, name){
  const p = normalizePhone(phone);
  if(!p) return null;
  let m = await DB.getMember(p);
  if(!m) m = { phone: p, name: name || "", visits: 0, freeRedeemed: 0 };
  if(name) m.name = name;

  const isFree = m.visits >= LOYALTY_TARGET;
  if(isFree){
    m.visits = 0;
    m.freeRedeemed = (m.freeRedeemed || 0) + 1;
  } else {
    m.visits += 1;
  }
  m.lastVisit = Reports.todayStr();
  await DB.upsertMember(m);
  return { isFree, progress: m.visits, member: m };
}

function loyaltyNoteHtml(status){
  if(!status) return "";
  if(status.visits >= LOYALTY_TARGET){
    return `<div class="loyalty-note free">🎉 GRATIS! Kunjungan ini adalah bonus member (cuci+kering gratis).</div>`;
  }
  const remaining = LOYALTY_TARGET - status.visits;
  const label = status.visits === 0 ? "Pelanggan baru — mulai kumpulkan poin kunjungan." : `Progress: ${status.visits}/${LOYALTY_TARGET} menuju gratis 1x cuci+kering.`;
  return `
    <div class="loyalty-note">
      <div class="small">${label}</div>
      <div class="loyalty-bar"><div class="loyalty-fill" style="width:${(status.visits/LOYALTY_TARGET)*100}%"></div></div>
      ${status.visits>0 ? `<div class="small muted">${remaining} kali lagi menuju gratis</div>` : ""}
    </div>
  `;
}

/* ---------------- Struk via WhatsApp ---------------- */

function normalizePhone(raw){
  if(!raw) return "";
  let digits = raw.replace(/[^\d]/g, "");
  if(digits.startsWith("0")) digits = "62" + digits.slice(1);
  else if(digits.startsWith("620")) digits = "62" + digits.slice(3);
  else if(!digits.startsWith("62")) digits = "62" + digits;
  return digits;
}

function buildReceiptText(t){
  const lines = [];
  lines.push(`*${state.businessName}*`);
  lines.push(fmtDate(t.date));
  lines.push("");
  if(t.categoryName) lines.push(`Layanan: ${t.categoryName}`);
  if(t.customerName) lines.push(`Pelanggan: ${t.customerName}`);
  if(t.weightKg) lines.push(`Berat: ${t.weightKg} kg`);
  if(t.isFreeVisit) lines.push(`🎁 GRATIS (Reward Member 10x Kunjungan)`);
  lines.push(`Jumlah: ${Reports.formatRupiah(t.amount)}`);
  if(t.note) lines.push(`Catatan: ${t.note}`);
  lines.push("");
  lines.push("Terima kasih sudah mencuci di tempat kami 🙏");
  return lines.join("\n");
}

function sendReceiptWA(t){
  const text = encodeURIComponent(buildReceiptText(t));
  const phone = normalizePhone(t.customerPhone);
  const url = phone ? `https://wa.me/${phone}?text=${text}` : `https://wa.me/?text=${text}`;
  window.open(url, "_blank");
}

/* ---------------- Add transaction modal ---------------- */

function openAddTxModal(defaultType){
  const cats = state.categories.filter(c => c.type === defaultType);
  const catOptions = cats.map(c=>`<option value="${c.id}">${c.name}</option>`).join("");
  const modal = openModal(`
    <h2>${defaultType==='in' ? 'Catat Kas Masuk' : 'Catat Kas Keluar'}</h2>
    <div class="seg" id="typeSeg" style="margin-bottom:16px;">
      <button type="button" class="${defaultType==='in'?'active in':''}" data-type="in">Kas Masuk</button>
      <button type="button" class="${defaultType==='out'?'active out':''}" data-type="out">Kas Keluar</button>
    </div>
    <div class="field">
      <label>Jumlah (Rp)</label>
      <input type="number" inputmode="numeric" class="amount-input" id="txAmount" placeholder="0" min="0">
    </div>
    <div class="field">
      <label>Kategori</label>
      <select id="txCategory">${catOptions}</select>
    </div>
    <div class="field">
      <label>Tanggal</label>
      <input type="date" id="txDate" value="${Reports.todayStr()}">
    </div>
    <div id="customerFields" style="display:none;">
      <div class="field">
        <label>Nama Pelanggan (opsional)</label>
        <input type="text" id="txCustName" placeholder="Contoh: Budi">
      </div>
      <div class="field">
        <label>No. WhatsApp Pelanggan (opsional)</label>
        <input type="tel" inputmode="numeric" id="txCustPhone" placeholder="08xxxxxxxxxx">
      </div>
      <div id="weightFieldWrap" class="field">
        <label>Berat Cucian (kg, opsional)</label>
        <input type="number" step="0.1" id="txWeight" placeholder="Contoh: 5">
      </div>
      <div id="loyaltyLookup"></div>
    </div>
    <div class="field">
      <label>Catatan (opsional)</label>
      <textarea id="txNote" placeholder="Contoh: Cuci reguler"></textarea>
    </div>
    <button class="btn btn-primary btn-block" data-action="save-tx">Simpan Transaksi</button>
  `);

  let currentType = defaultType;
  function refreshCategoryOptions(){
    const sel = modal.querySelector("#txCategory");
    sel.innerHTML = state.categories.filter(c=>c.type===currentType).map(c=>`<option value="${c.id}">${c.name}</option>`).join("");
    toggleCustomerFields();
  }
  function toggleCustomerFields(){
    const sel = modal.querySelector("#txCategory");
    const wrap = modal.querySelector("#customerFields");
    const isJasaCuci = currentType === "in" && sel.value === "jasa-cuci";
    const isSelfService = currentType === "in" && sel.value === "self-service";
    wrap.style.display = (isJasaCuci || isSelfService) ? "block" : "none";
    modal.querySelector("#weightFieldWrap").style.display = isJasaCuci ? "block" : "none";
    modal.querySelector("#loyaltyLookup").innerHTML = "";
    if(isSelfService) modal.querySelector("#txCustPhone").dispatchEvent(new Event("input"));
  }

  modal.querySelector("#txCategory").addEventListener("change", toggleCustomerFields);
  modal.querySelector("#txCustPhone").addEventListener("input", async ()=>{
    const sel = modal.querySelector("#txCategory");
    const box = modal.querySelector("#loyaltyLookup");
    if(currentType !== "in" || sel.value !== "self-service"){ box.innerHTML = ""; return; }
    const phone = modal.querySelector("#txCustPhone").value.trim();
    if(phone.length < 8){ box.innerHTML = ""; return; }
    const status = await getMemberStatus(phone);
    box.innerHTML = loyaltyNoteHtml(status);
  });
  toggleCustomerFields();

  modal.querySelectorAll("#typeSeg button").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      currentType = btn.dataset.type;
      modal.querySelectorAll("#typeSeg button").forEach(b=>{ b.classList.remove("active","in","out"); });
      btn.classList.add("active", currentType);
      refreshCategoryOptions();
    });
  });

  modal.querySelector("[data-action='save-tx']").addEventListener("click", async ()=>{
    const amount = parseFloat(modal.querySelector("#txAmount").value);
    const categoryId = modal.querySelector("#txCategory").value;
    const date = modal.querySelector("#txDate").value;
    const note = modal.querySelector("#txNote").value.trim();
    const isJasaCuci = currentType === "in" && categoryId === "jasa-cuci";
    const isSelfService = currentType === "in" && categoryId === "self-service";

    const amountOk = isSelfService ? (amount >= 0) : (amount > 0);
    if(isNaN(amount) || !amountOk){ toast(isSelfService ? "Isi jumlah (boleh 0 untuk kunjungan gratis)" : "Isi jumlah yang valid", "warn"); return; }
    if(!categoryId){ toast("Pilih kategori", "warn"); return; }
    const cat = state.categories.find(c=>c.id===categoryId);

    const record = {
      type: currentType, categoryId, categoryName: cat?.name,
      account: cat?.account, amount, date, note
    };

    if(isJasaCuci || isSelfService){
      const custName = modal.querySelector("#txCustName").value.trim();
      const custPhone = modal.querySelector("#txCustPhone").value.trim();
      if(custName) record.customerName = custName;
      if(custPhone) record.customerPhone = custPhone;
    }
    if(isJasaCuci){
      const weight = parseFloat(modal.querySelector("#txWeight").value) || null;
      if(weight) record.weightKg = weight;
    }
    if(isSelfService && record.customerPhone){
      const visitResult = await recordSelfServiceVisit(record.customerPhone, record.customerName);
      record.isFreeVisit = visitResult.isFree;
    }

    const id = await DB.addTransaction(record);
    closeModal();

    if((isJasaCuci || isSelfService) && (record.customerName || record.customerPhone)){
      offerSendReceipt({ ...record, id });
    } else {
      toast("Transaksi tersimpan");
      render();
    }
  });
}

function offerSendReceipt(t){
  const modal = openModal(`
    <div style="text-align:center; padding:6px 0 4px;">
      <div style="width:56px;height:56px;border-radius:50%;background:var(--mint-bg);margin:0 auto 14px;display:flex;align-items:center;justify-content:center;animation:checkPop .4s cubic-bezier(.34,1.56,.64,1) both;">
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--mint)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="width:26px;height:26px;"><path d="M20 6L9 17l-5-5"/></svg>
      </div>
      <h2>Transaksi Tersimpan</h2>
      <p class="small muted" style="margin:6px 0 18px;">Kirim struknya ke pelanggan sekarang?</p>
    </div>
    <button class="btn btn-primary btn-block" data-action="send-wa" style="background:#25A366; margin-bottom:10px;">${ICONS.chat} Kirim Struk via WhatsApp</button>
    <button class="btn btn-outline btn-block" data-action="skip-wa">Lewati</button>
  `);
  modal.querySelector("[data-action='send-wa']").addEventListener("click", ()=>{
    sendReceiptWA(t);
    closeModal();
    render();
  });
  modal.querySelector("[data-action='skip-wa']").addEventListener("click", ()=>{
    closeModal();
    toast("Transaksi tersimpan");
    render();
  });
}

function openAddCategoryModal(type){
  const modal = openModal(`
    <h2>${type==='in' ? 'Kategori Pendapatan Baru' : 'Kategori Beban Baru'}</h2>
    <div class="field">
      <label>Nama Kategori</label>
      <input type="text" id="catName" placeholder="${type==='in' ? 'Contoh: Jasa Setrika Kilat' : 'Contoh: Iuran Keamanan'}">
    </div>
    <button class="btn btn-primary btn-block" data-action="save-cat">Simpan Kategori</button>
  `);
  modal.querySelector("[data-action='save-cat']").addEventListener("click", async ()=>{
    const name = modal.querySelector("#catName").value.trim();
    if(!name){ toast("Isi nama kategori", "warn"); return; }
    const id = "custom-" + Date.now();
    await DB.addCategory({
      id, name, type,
      account: type === "in" ? DB.ACCOUNT.PENDAPATAN : DB.ACCOUNT.BEBAN,
      system: false
    });
    state.categories = await DB.getCategories();
    closeModal();
    toast("Kategori ditambahkan");
    render();
  });
}

/* ---------------- Global event binding ---------------- */

function bindPageEvents(){
  const scope = document.getElementById("appMain");
  scope.querySelectorAll("[data-action='add']").forEach(btn=>{
    btn.addEventListener("click", ()=> openAddTxModal(btn.dataset.type));
  });
  scope.querySelectorAll("[data-page]").forEach(btn=>{
    btn.addEventListener("click", ()=>{ state.page = btn.dataset.page; render(); });
  });
  document.querySelectorAll("[data-action='delete-tx']").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      if(!confirm("Hapus transaksi ini?")) return;
      await DB.deleteTransaction(parseInt(btn.dataset.id));
      toast("Transaksi dihapus");
      render();
    });
  });
  document.querySelectorAll("[data-action='send-receipt']").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      const txs = await DB.getTransactions();
      const t = txs.find(x => x.id === parseInt(btn.dataset.id));
      if(t) sendReceiptWA(t);
    });
  });
  document.querySelectorAll("[data-action='wa-member']").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      window.open(`https://wa.me/${btn.dataset.phone}`, "_blank");
    });
  });
  document.querySelectorAll("[data-report-tab]").forEach(btn=>{
    btn.addEventListener("click", ()=>{ state.reportTab = btn.dataset.reportTab; render(); });
  });
  const lrStart = document.getElementById("lrStart");
  const lrEnd = document.getElementById("lrEnd");
  if(lrStart) lrStart.addEventListener("change", ()=>{ state.labaRugiRange.start = lrStart.value; render(); });
  if(lrEnd) lrEnd.addEventListener("change", ()=>{ state.labaRugiRange.end = lrEnd.value; render(); });
  const neracaDate = document.getElementById("neracaDate");
  if(neracaDate) neracaDate.addEventListener("change", ()=>{ state.neracaDate = neracaDate.value; render(); });

  const printBtn = document.querySelector("[data-action='print']");
  if(printBtn) printBtn.addEventListener("click", ()=> window.print());

  const csvBtn = document.querySelector("[data-action='export-csv']");
  if(csvBtn) csvBtn.addEventListener("click", exportCsv);

  const saveBizBtn = document.querySelector("[data-action='save-biz-name']");
  if(saveBizBtn) saveBizBtn.addEventListener("click", async ()=>{
    const val = document.getElementById("bizNameInput").value.trim() || "Usaha Laundry Saya";
    state.businessName = val;
    await DB.setSetting("businessName", val);
    toast("Nama usaha disimpan");
    render();
  });

  const saveOpeningBtn = document.querySelector("[data-action='save-opening']");
  if(saveOpeningBtn) saveOpeningBtn.addEventListener("click", async ()=>{
    const num = (id)=> parseFloat(document.getElementById(id).value) || 0;
    await Reports.setOpeningBalances({
      date: document.getElementById("ob-date").value || Reports.todayStr(),
      kas: num("ob-kas"), piutang: num("ob-piutang"), persediaan: num("ob-persediaan"),
      asetTetap: num("ob-asetTetap"), utangUsaha: num("ob-utangUsaha"), utangBank: num("ob-utangBank")
    });
    toast("Saldo awal disimpan");
    render();
  });

  document.querySelectorAll("[data-action='add-cat']").forEach(btn=>{
    btn.addEventListener("click", ()=> openAddCategoryModal(btn.dataset.type));
  });
  document.querySelectorAll("[data-action='delete-cat']").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      if(!confirm("Hapus kategori ini? Transaksi lama tetap tersimpan.")) return;
      await DB.deleteCategory(btn.dataset.id);
      state.categories = await DB.getCategories();
      render();
    });
  });

  const exportJsonBtn = document.querySelector("[data-action='export-json']");
  if(exportJsonBtn) exportJsonBtn.addEventListener("click", exportJson);
  const importJsonBtn = document.querySelector("[data-action='import-json']");
  if(importJsonBtn) importJsonBtn.addEventListener("click", importJson);
  const wipeBtn = document.querySelector("[data-action='wipe-data']");
  if(wipeBtn) wipeBtn.addEventListener("click", wipeData);
}

/* ---------------- Export / Import / Backup ---------------- */

async function exportCsv(){
  const txs = await DB.getTransactions();
  const cats = Object.fromEntries(state.categories.map(c=>[c.id,c]));
  const header = "Tanggal,Jenis,Kategori,Jumlah,Catatan\n";
  const rows = txs.map(t=>{
    const cat = cats[t.categoryId]?.name || t.categoryName || "";
    const jenis = t.type === "in" ? "Kas Masuk" : "Kas Keluar";
    const note = (t.note||"").replace(/"/g,'""');
    return `${t.date},${jenis},"${cat}",${t.amount},"${note}"`;
  }).join("\n");
  downloadFile(`transaksi-${Reports.todayStr()}.csv`, header + rows, "text/csv");
}

async function exportJson(){
  const data = {
    businessName: state.businessName,
    categories: await DB.getCategories(),
    transactions: await DB.getTransactions(),
    openingBalances: await Reports.getOpeningBalances(),
    exportedAt: new Date().toISOString()
  };
  downloadFile(`laundryku-backup-${Reports.todayStr()}.json`, JSON.stringify(data, null, 2), "application/json");
}

function downloadFile(filename, content, mime){
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
}

function importJson(){
  const input = document.createElement("input");
  input.type = "file"; input.accept = "application/json";
  input.addEventListener("change", async ()=>{
    const file = input.files[0];
    if(!file) return;
    try{
      const text = await file.text();
      const data = JSON.parse(text);
      if(!confirm("Ini akan menimpa data yang ada saat ini. Lanjutkan?")) return;
      for(const c of data.categories||[]) await DB.addCategory(c);
      for(const t of data.transactions||[]){ const copy={...t}; delete copy.id; await DB.addTransaction(copy); }
      if(data.openingBalances) await Reports.setOpeningBalances(data.openingBalances);
      if(data.businessName){ state.businessName = data.businessName; await DB.setSetting("businessName", data.businessName); }
      state.categories = await DB.getCategories();
      toast("Data berhasil dipulihkan");
      render();
    }catch(err){
      toast("Gagal membaca file cadangan", "warn");
    }
  });
  input.click();
}

async function wipeData(){
  if(!confirm("Semua transaksi, kategori tambahan, dan saldo awal akan dihapus permanen. Lanjutkan?")) return;
  if(!confirm("Yakin? Tindakan ini tidak bisa dibatalkan.")) return;
  indexedDB.deleteDatabase("laundryku-db");
  location.reload();
}

/* ---------------- Boot ---------------- */

async function boot(){
  await DB.init();
  state.businessName = await DB.getSetting("businessName", "Usaha Laundry Saya");
  state.categories = await DB.getCategories();

  if("serviceWorker" in navigator){
    navigator.serviceWorker.register("./sw.js").catch(()=>{});
  }

  await render();
}

boot();
