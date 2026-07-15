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
  star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.9 6.3L22 9.3l-5 5 1.2 7.2L12 18l-6.2 3.5L7 14.3l-5-5 7.1-1z"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>`,
  edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>`
};

const state = {
  page: "dashboard",
  businessName: "Usaha Laundry Saya",
  categories: [],
  role: null,
  user: null,
  userName: "",
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
  { id:"cucian", label:"Cucian", icon:ICONS.clock },
  { id:"member", label:"Member", icon:ICONS.star },
  { id:"laporan", label:"Laporan", icon:ICONS.report },
  { id:"pengaturan", label:"Atur", icon:ICONS.settings }
];

function visibleNavItems(){
  if(state.role === "owner") return NAV_ITEMS;
  return NAV_ITEMS.filter(i => i.id !== "laporan");
}

function renderNav(){
  const items = visibleNavItems().map(i => `
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
  if(state.page === "laporan" && state.role !== "owner") state.page = "dashboard";
  renderNav();
  document.getElementById("bizName").textContent = state.businessName;
  const main = document.getElementById("appMain");
  main.innerHTML = `<div class="empty-state">Memuat...</div>`;
  if(state.page === "dashboard") main.innerHTML = await pageDashboard();
  if(state.page === "transaksi") main.innerHTML = await pageTransaksi();
  if(state.page === "cucian") main.innerHTML = await pageCucian();
  if(state.page === "member") main.innerHTML = await pageMember();
  if(state.page === "laporan" && state.role === "owner") main.innerHTML = await pageLaporan();
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
        txs.map(t=>txItemHtml(t, cats, state.role==='owner')).join("")}
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
  const isOwner = state.role === "owner";
  const opening = isOwner ? await Reports.getOpeningBalances() : null;
  const pricing = isOwner ? await getPricing() : null;
  const kiloanLoyalty = isOwner ? await getKiloanLoyalty() : null;
  const customCats = state.categories.filter(c=>!c.system);

  const accountCard = `
    <h3 class="section-title">Akun</h3>
    <div class="card">
      <div class="row-between">
        <div>
          <div style="font-weight:700;">${state.userName || state.user?.email || ""}</div>
          <div class="small muted">${state.user?.email || ""} · ${isOwner ? "Owner" : "Pegawai"}</div>
        </div>
        <button class="btn btn-outline" data-action="logout">Keluar</button>
      </div>
    </div>
  `;

  if(!isOwner){
    return `
      ${accountCard}
      <h3 class="section-title">Tentang</h3>
      <div class="card small muted">
        LaundryKu Finance — aplikasi laporan keuangan UMKM laundry. Laporan keuangan & pengaturan lanjutan hanya bisa diakses oleh akun Owner.
      </div>
    `;
  }

  return `
    ${accountCard}

    <h3 class="section-title">Profil Usaha</h3>
    <div class="card">
      <div class="field">
        <label>Nama Usaha</label>
        <input type="text" id="bizNameInput" value="${escapeHtml(state.businessName)}">
      </div>
      <button class="btn btn-primary" data-action="save-biz-name">Simpan Nama</button>
    </div>

    <h3 class="section-title">Harga Layanan</h3>
    <div class="card">
      <p class="small muted">Harga & estimasi waktu pengerjaan ini otomatis dipakai saat mencatat pesanan cucian baru di menu Cucian.</p>
      <p class="small" style="font-weight:700; margin:14px 0 6px;">Kiloan</p>
      ${Object.entries(KILOAN_LABELS).map(([id,label]) => `
        <div style="border:1px solid var(--line); border-radius:10px; padding:12px; margin-bottom:10px;">
          <p class="small" style="font-weight:600; margin-bottom:8px;">${label}</p>
          <div class="field"><label>Harga per kg (Rp)</label><input type="number" id="price-${id}" value="${pricing.kiloan[id].rate}"></div>
          <div class="field-row" style="display:flex; gap:8px;">
            <div class="field" style="flex:1;"><label>Estimasi Durasi</label><input type="number" id="dur-${id}" value="${pricing.kiloan[id].duration}"></div>
            <div class="field" style="flex:1;"><label>Satuan</label>
              <select id="unit-${id}">
                <option value="jam" ${pricing.kiloan[id].unit==='jam'?'selected':''}>Jam</option>
                <option value="hari" ${pricing.kiloan[id].unit==='hari'?'selected':''}>Hari</option>
              </select>
            </div>
          </div>
        </div>
      `).join("")}
      <p class="small" style="font-weight:700; margin:14px 0 6px;">Self-Service (Rp per sesi)</p>
      <div class="field"><label>Cuci Saja</label><input type="number" id="price-ss-cuci" value="${pricing.selfService['cuci']}"></div>
      <div class="field"><label>Kering Saja</label><input type="number" id="price-ss-kering" value="${pricing.selfService['kering']}"></div>
      <div class="field"><label>Cuci + Kering</label><input type="number" id="price-ss-cuci-kering" value="${pricing.selfService['cuci-kering']}"></div>
      <button class="btn btn-primary" data-action="save-pricing">Simpan Harga</button>
    </div>

    <h3 class="section-title">Harga Cuci Satuan</h3>
    <div class="card">
      <p class="small muted">Daftar barang yang bisa dicuci satuan (jas, gaun, sprei, dll) beserta harga per item.</p>
      <div class="tag-list" style="margin:14px 0;">
        ${pricing.satuan.length===0 ? '<span class="small muted">Belum ada barang satuan.</span>' :
          pricing.satuan.map(s=>`<span class="tag">${s.name} — ${Reports.formatRupiah(s.price)}<button data-action="delete-satuan" data-id="${s.id}">✕</button></span>`).join("")}
      </div>
      <button class="btn btn-outline btn-block" data-action="manage-satuan">Kelola Barang Satuan</button>
    </div>

    <h3 class="section-title">Promo Kiloan</h3>
    <div class="card">
      <p class="small muted">Pelanggan yang mencuci kiloan akan otomatis terakumulasi berat cuciannya (per nomor WA). Saat mencapai target, promo otomatis diterapkan ke transaksi berikutnya.</p>
      <div class="field">
        <label>Aktifkan Promo Kiloan?</label>
        <select id="kl-enabled">
          <option value="0" ${!kiloanLoyalty.enabled?'selected':''}>Nonaktif</option>
          <option value="1" ${kiloanLoyalty.enabled?'selected':''}>Aktif</option>
        </select>
      </div>
      <div class="field"><label>Akumulasi berapa kg untuk dapat promo?</label><input type="number" id="kl-threshold" value="${kiloanLoyalty.thresholdKg}"></div>
      <div class="field">
        <label>Bentuk Promo</label>
        <select id="kl-type">
          <option value="discount" ${kiloanLoyalty.promoType==='discount'?'selected':''}>Potongan Harga (Rp)</option>
          <option value="free-kg" ${kiloanLoyalty.promoType==='free-kg'?'selected':''}>Gratis Sejumlah Kg</option>
        </select>
      </div>
      <div class="field" id="kl-discount-field" style="display:${kiloanLoyalty.promoType==='discount'?'block':'none'}">
        <label>Nilai Potongan (Rp)</label><input type="number" id="kl-discount-amount" value="${kiloanLoyalty.discountAmount}">
      </div>
      <div class="field" id="kl-freekg-field" style="display:${kiloanLoyalty.promoType==='free-kg'?'block':'none'}">
        <label>Jumlah Kg Gratis</label><input type="number" id="kl-freekg" value="${kiloanLoyalty.freeKg}">
      </div>
      <button class="btn btn-primary" data-action="save-kiloan-loyalty">Simpan Promo Kiloan</button>
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

    <h3 class="section-title">Pegawai</h3>
    <div class="card small muted">
      Untuk menambah akun pegawai: minta pegawai mendaftar sendiri lewat halaman "Daftar" di layar login (otomatis dapat akses terbatas). Anda tidak perlu melakukan apa pun setelah itu — akun baru otomatis muncul dengan role Pegawai.
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
      LaundryKu Finance v1.0 — aplikasi laporan keuangan untuk UMKM laundry. Data tersimpan online (Firestore) dan tersinkron ke semua perangkat yang login.
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

/* ---------------- Harga Layanan (Pricing) ---------------- */

const DEFAULT_PRICING = {
  kiloan: {
    "cuci-kering-lipat": { rate: 7000, duration: 1, unit: "hari" },
    "cuci-setrika": { rate: 8000, duration: 2, unit: "hari" },
    "setrika-saja": { rate: 5000, duration: 3, unit: "jam" }
  },
  selfService: {
    "cuci": 10000,
    "kering": 12000,
    "cuci-kering": 20000
  },
  satuan: [
    { id: "jas", name: "Jas", price: 25000 },
    { id: "gaun", name: "Gaun", price: 30000 },
    { id: "sprei", name: "Sprei", price: 15000 },
    { id: "pdl", name: "PDL / Seragam Dinas", price: 12000 },
    { id: "bed-cover", name: "Bed Cover", price: 20000 },
    { id: "jaket", name: "Jaket", price: 15000 },
    { id: "selimut", name: "Selimut", price: 18000 },
    { id: "gorden", name: "Gorden", price: 20000 },
    { id: "boneka", name: "Boneka", price: 15000 }
  ]
};

const DEFAULT_KILOAN_LOYALTY = {
  enabled: false,
  thresholdKg: 20,
  promoType: "discount", // 'discount' (Rp off) | 'free-kg' (X kg gratis)
  discountAmount: 10000,
  freeKg: 3
};

const KILOAN_LABELS = {
  "cuci-kering-lipat": "Cuci Kering Lipat",
  "cuci-setrika": "Cuci Setrika",
  "setrika-saja": "Setrika Saja"
};

const SELF_SERVICE_LABELS = {
  "cuci": "Cuci Saja",
  "kering": "Kering Saja",
  "cuci-kering": "Cuci + Kering"
};

async function getPricing(){
  const saved = await DB.getSetting("pricing", null);
  const kiloanDefault = DEFAULT_PRICING.kiloan;
  const savedKiloan = saved?.kiloan || {};
  const kiloan = {};
  for(const id of Object.keys(kiloanDefault)){
    kiloan[id] = { ...kiloanDefault[id], ...(savedKiloan[id]||{}) };
  }
  if(!saved) return JSON.parse(JSON.stringify(DEFAULT_PRICING));
  return {
    kiloan,
    selfService: { ...DEFAULT_PRICING.selfService, ...(saved.selfService||{}) },
    satuan: Array.isArray(saved.satuan) ? saved.satuan : DEFAULT_PRICING.satuan
  };
}

async function setPricing(p){
  await DB.setSetting("pricing", p);
}

async function getKiloanLoyalty(){
  const saved = await DB.getSetting("kiloanLoyalty", null);
  return { ...DEFAULT_KILOAN_LOYALTY, ...(saved||{}) };
}

async function setKiloanLoyalty(v){
  await DB.setSetting("kiloanLoyalty", v);
}

function durationMs(duration, unit){
  const h = unit === "hari" ? duration*24 : duration;
  return h * 3600 * 1000;
}

function formatCountdown(estimatedReadyAt){
  const diff = estimatedReadyAt - Date.now();
  const overdue = diff < 0;
  const abs = Math.abs(diff);
  const totalMinutes = Math.round(abs/60000);
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const minutes = totalMinutes % 60;
  let label = "";
  if(days > 0) label = `${days}h ${hours}j`;
  else if(hours > 0) label = `${hours}j ${minutes}m`;
  else label = `${minutes}m`;
  return overdue ? { overdue: true, text: `Terlambat ${label}` } : { overdue: false, text: `Sisa ${label}` };
}

function openManageSatuanModal(){
  const modal = openModal(`<h2>Kelola Barang Satuan</h2><div id="satuanList"></div>
    <div class="field"><label>Nama Barang Baru</label><input type="text" id="newSatuanName" placeholder="Contoh: Karpet"></div>
    <div class="field"><label>Harga (Rp)</label><input type="number" id="newSatuanPrice" placeholder="Contoh: 25000"></div>
    <button class="btn btn-primary btn-block" data-action="add-satuan-item">+ Tambah Barang</button>
  `);

  async function refreshList(){
    const pricing = await getPricing();
    modal.querySelector("#satuanList").innerHTML = pricing.satuan.length === 0
      ? `<p class="small muted">Belum ada barang.</p>`
      : pricing.satuan.map(s => `
        <div class="row-between" style="padding:8px 0; border-bottom:1px dashed var(--line);">
          <span class="small">${s.name}</span>
          <div style="display:flex; align-items:center; gap:8px;">
            <input type="number" class="satuan-price-input" data-id="${s.id}" value="${s.price}" style="width:100px; padding:6px 8px; border-radius:8px; border:1.5px solid var(--line);">
            <button class="tx-del" data-action="remove-satuan-item" data-id="${s.id}">${ICONS.trash}</button>
          </div>
        </div>
      `).join("");

    modal.querySelectorAll(".satuan-price-input").forEach(inp=>{
      inp.addEventListener("change", async ()=>{
        const pricing = await getPricing();
        const item = pricing.satuan.find(s=>s.id===inp.dataset.id);
        if(item){ item.price = parseFloat(inp.value) || 0; await setPricing(pricing); toast("Harga diperbarui"); }
      });
    });
    modal.querySelectorAll("[data-action='remove-satuan-item']").forEach(btn=>{
      btn.addEventListener("click", async ()=>{
        const pricing = await getPricing();
        pricing.satuan = pricing.satuan.filter(s=>s.id!==btn.dataset.id);
        await setPricing(pricing);
        refreshList();
      });
    });
  }

  modal.querySelector("[data-action='add-satuan-item']").addEventListener("click", async ()=>{
    const name = modal.querySelector("#newSatuanName").value.trim();
    const price = parseFloat(modal.querySelector("#newSatuanPrice").value);
    if(!name){ toast("Isi nama barang", "warn"); return; }
    if(isNaN(price) || price < 0){ toast("Isi harga yang valid", "warn"); return; }
    const pricing = await getPricing();
    const id = name.toLowerCase().replace(/[^a-z0-9]+/g,"-") + "-" + Date.now().toString(36);
    pricing.satuan.push({ id, name, price });
    await setPricing(pricing);
    modal.querySelector("#newSatuanName").value = "";
    modal.querySelector("#newSatuanPrice").value = "";
    refreshList();
  });

  refreshList();
}

function computeTotal(pricing, serviceType, subType, weightKg){
  if(serviceType === "kiloan"){
    const rate = pricing.kiloan[subType]?.rate || 0;
    return Math.round(rate * (weightKg || 0));
  }
  return pricing.selfService[subType] || 0;
}

/* ---------------- Cucian (Order Tracking) ---------------- */

const ORDER_FLOW = ["belum-diproses", "sedang-diproses", "selesai"];
const STATUS_LABEL = {
  "belum-diproses": "Belum Diproses",
  "sedang-diproses": "Sedang Diproses",
  "selesai": "Selesai"
};

function nextOrderStatus(current){
  const i = ORDER_FLOW.indexOf(current);
  return (i >= 0 && i < ORDER_FLOW.length - 1) ? ORDER_FLOW[i+1] : null;
}

async function pageCucian(){
  const all = await DB.getOrders();
  const filter = state.cucianFilter || "aktif";
  const orders = filter === "semua" ? all
    : filter === "riwayat" ? all.filter(o => o.status === "selesai")
    : all.filter(o => o.status !== "selesai");

  const tabBtn = (id,label) => `<button class="btn ${filter===id?'btn-primary':'btn-outline'}" data-cucian-tab="${id}">${label}</button>`;

  return `
    <button class="btn btn-primary btn-block" data-action="add-order" style="margin-bottom:14px;">${ICONS.plus} Pesanan Cucian Baru</button>
    <div class="btn-row no-print" style="margin-bottom:14px;">
      ${tabBtn("aktif","Aktif")}
      ${tabBtn("semua","Semua")}
      ${tabBtn("riwayat","Selesai")}
    </div>
    <div class="card">
      <div class="card-title">${filter === "aktif" ? "Pesanan Aktif" : filter === "riwayat" ? "Riwayat Selesai" : "Semua Pesanan"} (${orders.length})</div>
      ${orders.length === 0 ? emptyState("Belum ada pesanan cucian di sini.") : orders.map(orderCardHtml).join("")}
    </div>
  `;
}

function orderCardHtml(o){
  const dateLabel = new Date(o.createdAt).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"});
  const next = nextOrderStatus(o.status);
  const showCountdown = o.estimatedReadyAt && o.status !== "selesai";
  const countdown = showCountdown ? formatCountdown(o.estimatedReadyAt) : null;
  return `
    <div class="order-card status-${o.status}">
      <div class="row-between">
        <div>
          <div style="font-weight:700;">${o.customerName || "Tanpa nama"}</div>
          <div class="small muted">${o.customerPhone || ""}${o.weightKg ? ` · ${o.weightKg} kg` : ""}</div>
        </div>
        <span class="status-badge status-${o.status}">${STATUS_LABEL[o.status]}</span>
      </div>
      ${o.subTypeLabel ? `<div class="small" style="margin-top:8px;">${o.subTypeLabel}${typeof o.total === 'number' ? ` · <span class="num">${Reports.formatRupiah(o.total)}</span>` : ""}</div>` : ""}
      ${o.discountAmount ? `<div class="small" style="color:var(--coin); margin-top:2px;">🎁 ${o.discountReason || 'Diskon promo'}</div>` : ""}
      ${o.note ? `<div class="small muted" style="margin-top:4px;">${escapeHtml(o.note)}</div>` : ""}
      <div class="small muted" style="margin-top:8px;">Diterima ${dateLabel}${o.durationLabel ? ` · estimasi ${o.durationLabel}` : ""}</div>
      ${countdown ? `<div class="small" style="margin-top:4px; font-weight:700; color:${countdown.overdue?'var(--rose)':'var(--suds-blue-dark)'}">${countdown.overdue?'⚠ ':'⏱ '}${countdown.text}</div>` : ""}
      <div class="btn-row" style="margin-top:12px;">
        ${next ? `<button class="btn btn-primary btn-block" data-action="advance-order" data-id="${o.id}" data-next="${next}">Tandai: ${STATUS_LABEL[next]}</button>` : ""}
        ${o.customerPhone ? `<button class="btn btn-outline" data-action="wa-order" data-id="${o.id}">${ICONS.chat}</button>` : ""}
        ${state.role === "owner" ? `<button class="btn btn-outline" data-action="delete-order" data-id="${o.id}">${ICONS.trash}</button>` : ""}
      </div>
    </div>
  `;
}

function buildOrderStatusText(o){
  const lines = [];
  lines.push(`*${state.businessName}*`);
  lines.push(`Halo${o.customerName ? " " + o.customerName : ""}, update status cucianmu:`);
  lines.push("");
  lines.push(`📦 *${STATUS_LABEL[o.status]}*`);
  if(o.weightKg) lines.push(`Berat: ${o.weightKg} kg`);
  if(o.note) lines.push(`Catatan: ${o.note}`);
  lines.push("");
  lines.push(o.status === "selesai" ? "Cucian sudah siap diambil ya! 🙏" : "Terima kasih sudah mencuci di tempat kami 🙏");
  return lines.join("\n");
}

function sendOrderStatusWA(o){
  const text = encodeURIComponent(buildOrderStatusText(o));
  const phone = normalizePhone(o.customerPhone);
  const url = phone ? `https://wa.me/${phone}?text=${text}` : `https://wa.me/?text=${text}`;
  window.open(url, "_blank");
}

async function openAddOrderModal(){
  const pricing = await getPricing();
  const kiloanLoyalty = await getKiloanLoyalty();
  const kiloanOptions = Object.entries(KILOAN_LABELS).map(([id,label])=>{
    const p = pricing.kiloan[id];
    return `<option value="${id}">${label} (Rp${p.rate.toLocaleString('id-ID')}/kg · ${p.duration} ${p.unit})</option>`;
  }).join("");
  const selfServiceOptions = Object.entries(SELF_SERVICE_LABELS).map(([id,label])=>`<option value="${id}">${label} (Rp${pricing.selfService[id].toLocaleString('id-ID')})</option>`).join("");
  const satuanOptions = pricing.satuan.map(s=>`<option value="${s.id}">${s.name} (${Reports.formatRupiah(s.price)})</option>`).join("");

  const modal = openModal(`
    <h2>Pesanan Cucian Baru</h2>
    <div class="seg" id="serviceSeg" style="margin-bottom:16px;">
      <button type="button" class="active in" data-svc="kiloan">Kiloan</button>
      <button type="button" data-svc="satuan">Satuan</button>
      <button type="button" data-svc="self-service">Self-Service</button>
    </div>

    <div id="kiloanFields">
      <div class="field"><label>Jenis Layanan</label><select id="ordSubTypeKiloan">${kiloanOptions}</select></div>
      <div class="field"><label>Berat (kg)</label><input type="number" step="0.1" id="ordWeight" placeholder="Contoh: 5"></div>
    </div>

    <div id="satuanFields" style="display:none;">
      ${pricing.satuan.length === 0 ? `<p class="small muted">Belum ada daftar barang satuan. Tambahkan dulu di Atur → Harga Cuci Satuan.</p>` : `
        <div class="field-row" style="display:flex; gap:8px; align-items:flex-end;">
          <div class="field" style="flex:1; margin-bottom:0;"><label>Barang</label><select id="satuanPicker">${satuanOptions}</select></div>
          <div class="field" style="width:80px; margin-bottom:0;"><label>Qty</label><input type="number" id="satuanQty" value="1" min="1"></div>
          <button type="button" class="btn btn-outline" id="addSatuanLine" style="margin-bottom:14px;">+</button>
        </div>
        <div id="satuanCart" style="margin:10px 0;"></div>
      `}
    </div>

    <div id="selfServiceFields" style="display:none;">
      <div class="field"><label>Jenis Layanan</label><select id="ordSubTypeSelf">${selfServiceOptions}</select></div>
    </div>

    <div class="field">
      <label>Total (Rp) <span class="small muted">— otomatis, bisa diubah manual</span></label>
      <input type="number" class="amount-input" id="ordTotal" value="0">
    </div>

    <div class="field"><label>Nama Pelanggan</label><input type="text" id="ordCustName" placeholder="Contoh: Budi"></div>
    <div class="field"><label>No. WhatsApp Pelanggan (opsional)</label><input type="tel" inputmode="numeric" id="ordCustPhone" placeholder="08xxxxxxxxxx"></div>
    <div id="loyaltyLookup"></div>
    <div class="field"><label>Catatan (opsional)</label><textarea id="ordNote" placeholder="Contoh: Jangan pakai pewangi"></textarea></div>
    <button class="btn btn-primary btn-block" data-action="save-order">Simpan & Catat Pendapatan</button>
  `);

  let serviceType = "kiloan";
  let satuanCart = []; // [{id, name, price, qty}]
  let pendingKiloanPromo = null; // preview only — authoritative check happens again on save

  function renderSatuanCart(){
    const box = modal.querySelector("#satuanCart");
    if(!box) return;
    if(satuanCart.length === 0){
      box.innerHTML = `<p class="small muted">Belum ada barang ditambahkan.</p>`;
      return;
    }
    box.innerHTML = satuanCart.map((line,i) => `
      <div class="row-between" style="padding:6px 0; border-bottom:1px dashed var(--line);">
        <span class="small">${line.qty}x ${line.name}</span>
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="small num">${Reports.formatRupiah(line.price*line.qty)}</span>
          <button class="tx-del" data-remove-line="${i}">${ICONS.trash}</button>
        </div>
      </div>
    `).join("");
    box.querySelectorAll("[data-remove-line]").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        satuanCart.splice(parseInt(btn.dataset.removeLine), 1);
        renderSatuanCart();
        recalcTotal();
      });
    });
  }

  function computeDiscountRp(promo, rate){
    if(!promo || !promo.applied) return 0;
    return promo.promoType === "discount" ? promo.discountAmount : Math.round(promo.freeKg * rate);
  }

  function recalcTotal(){
    if(serviceType === "satuan"){
      const total = satuanCart.reduce((sum,l) => sum + l.price*l.qty, 0);
      modal.querySelector("#ordTotal").value = total;
      return;
    }
    const weight = parseFloat(modal.querySelector("#ordWeight")?.value) || 0;
    const subType = serviceType === "kiloan"
      ? modal.querySelector("#ordSubTypeKiloan").value
      : modal.querySelector("#ordSubTypeSelf").value;
    let total = computeTotal(pricing, serviceType, subType, weight);
    if(serviceType === "kiloan" && pendingKiloanPromo){
      const rate = pricing.kiloan[subType]?.rate || 0;
      total = Math.max(0, total - computeDiscountRp(pendingKiloanPromo, rate));
    }
    modal.querySelector("#ordTotal").value = total;
  }

  async function refreshLoyaltyPreview(){
    const box = modal.querySelector("#loyaltyLookup");
    const phone = modal.querySelector("#ordCustPhone").value.trim();

    if(serviceType === "self-service"){
      if(phone.length < 8){ box.innerHTML = ""; return; }
      const status = await getMemberStatus(phone);
      box.innerHTML = loyaltyNoteHtml(status);
      if(status.visits >= LOYALTY_TARGET) modal.querySelector("#ordTotal").value = 0;
    } else if(serviceType === "kiloan"){
      if(phone.length < 8){ box.innerHTML = ""; pendingKiloanPromo = null; recalcTotal(); return; }
      const status = await getMemberStatus(phone);
      const weight = parseFloat(modal.querySelector("#ordWeight").value) || 0;
      const projected = (status.kiloanBalance || 0) + weight;
      box.innerHTML = kiloanLoyaltyNoteHtml({ kiloanBalance: projected }, kiloanLoyalty);
      pendingKiloanPromo = (kiloanLoyalty.enabled && projected >= kiloanLoyalty.thresholdKg)
        ? { applied:true, promoType:kiloanLoyalty.promoType, discountAmount:kiloanLoyalty.discountAmount, freeKg:kiloanLoyalty.freeKg, thresholdKg:kiloanLoyalty.thresholdKg }
        : null;
      recalcTotal();
    } else {
      box.innerHTML = "";
    }
  }

  modal.querySelectorAll("#serviceSeg button").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      serviceType = btn.dataset.svc;
      modal.querySelectorAll("#serviceSeg button").forEach(b=>b.classList.remove("active","in"));
      btn.classList.add("active","in");
      modal.querySelector("#kiloanFields").style.display = serviceType === "kiloan" ? "block" : "none";
      modal.querySelector("#satuanFields").style.display = serviceType === "satuan" ? "block" : "none";
      modal.querySelector("#selfServiceFields").style.display = serviceType === "self-service" ? "block" : "none";
      recalcTotal();
      refreshLoyaltyPreview();
    });
  });
  modal.querySelector("#ordSubTypeKiloan").addEventListener("change", ()=>{ recalcTotal(); refreshLoyaltyPreview(); });
  modal.querySelector("#ordSubTypeSelf").addEventListener("change", recalcTotal);
  modal.querySelector("#ordWeight").addEventListener("input", ()=>{ recalcTotal(); refreshLoyaltyPreview(); });
  modal.querySelector("#ordCustPhone").addEventListener("input", refreshLoyaltyPreview);

  const addSatuanBtn = modal.querySelector("#addSatuanLine");
  if(addSatuanBtn) addSatuanBtn.addEventListener("click", ()=>{
    const picker = modal.querySelector("#satuanPicker");
    const qty = parseInt(modal.querySelector("#satuanQty").value) || 1;
    const item = pricing.satuan.find(s=>s.id===picker.value);
    if(!item) return;
    const existing = satuanCart.find(l=>l.id===item.id);
    if(existing) existing.qty += qty;
    else satuanCart.push({ id:item.id, name:item.name, price:item.price, qty });
    renderSatuanCart();
    recalcTotal();
  });
  renderSatuanCart();
  recalcTotal();

  modal.querySelector("[data-action='save-order']").addEventListener("click", async ()=>{
    const customerName = modal.querySelector("#ordCustName").value.trim();
    const customerPhone = modal.querySelector("#ordCustPhone").value.trim();
    const userNote = modal.querySelector("#ordNote").value.trim();
    let total = parseFloat(modal.querySelector("#ordTotal").value);

    if(!customerName){ toast("Isi nama pelanggan", "warn"); return; }
    if(isNaN(total) || total < 0){ toast("Total tidak valid", "warn"); return; }

    let weightKg = null, subType = null, subTypeLabel = null, categoryId, categoryName, note = userNote;
    let discountAmount = 0, discountReason = null, estimatedReadyAt = null, durationLabel = null;

    if(serviceType === "kiloan"){
      weightKg = parseFloat(modal.querySelector("#ordWeight").value) || null;
      if(!weightKg){ toast("Isi berat cucian", "warn"); return; }
      subType = modal.querySelector("#ordSubTypeKiloan").value;
      subTypeLabel = KILOAN_LABELS[subType];
      categoryId = "jasa-cuci";

      const durCfg = pricing.kiloan[subType];
      estimatedReadyAt = Date.now() + durationMs(durCfg.duration, durCfg.unit);
      durationLabel = `${durCfg.duration} ${durCfg.unit}`;

      if(customerPhone){
        const { promo } = await recordKiloanAccumulation(customerPhone, customerName, weightKg, kiloanLoyalty);
        if(promo.applied){
          const baseTotal = computeTotal(pricing, "kiloan", subType, weightKg);
          discountAmount = Math.min(computeDiscountRp(promo, durCfg.rate), baseTotal);
          discountReason = promo.promoType === "discount"
            ? `Promo Member (akumulasi ${promo.thresholdKg}kg): Potongan ${Reports.formatRupiah(promo.discountAmount)}`
            : `Promo Member (akumulasi ${promo.thresholdKg}kg): Gratis ${promo.freeKg}kg`;
        }
      }
    } else if(serviceType === "satuan"){
      if(satuanCart.length === 0){ toast("Tambahkan minimal 1 barang", "warn"); return; }
      categoryId = "cuci-satuan";
      const itemsSummary = satuanCart.map(l=>`${l.qty}x ${l.name}`).join(", ");
      note = userNote ? `${itemsSummary} — ${userNote}` : itemsSummary;
    } else {
      subType = modal.querySelector("#ordSubTypeSelf").value;
      subTypeLabel = SELF_SERVICE_LABELS[subType];
      categoryId = "self-service";
    }

    const cat = state.categories.find(c=>c.id===categoryId);
    categoryName = serviceType === "satuan" ? (cat?.name || "") : `${cat?.name || ""} — ${subTypeLabel}`;

    let isFreeVisit = false;
    if(serviceType === "self-service" && customerPhone){
      const visitResult = await recordSelfServiceVisit(customerPhone, customerName);
      isFreeVisit = visitResult.isFree;
    }

    const txRecord = {
      type: "in", categoryId, categoryName,
      account: cat?.account, amount: total, date: Reports.todayStr(),
      note, customerName, serviceType
    };
    if(subType) txRecord.subType = subType;
    if(subTypeLabel) txRecord.subTypeLabel = subTypeLabel;
    if(customerPhone) txRecord.customerPhone = customerPhone;
    if(weightKg) txRecord.weightKg = weightKg;
    if(isFreeVisit) txRecord.isFreeVisit = true;
    if(discountAmount > 0){ txRecord.discountAmount = discountAmount; txRecord.discountReason = discountReason; }
    if(serviceType === "satuan") txRecord.satuanItems = satuanCart;

    const txId = await DB.addTransaction(txRecord);

    const orderPayload = { customerName, note, serviceType, total };
    if(subType) orderPayload.subType = subType;
    if(subTypeLabel) orderPayload.subTypeLabel = subTypeLabel;
    if(customerPhone) orderPayload.customerPhone = customerPhone;
    if(weightKg) orderPayload.weightKg = weightKg;
    if(serviceType === "satuan") orderPayload.satuanItems = satuanCart;
    if(estimatedReadyAt){ orderPayload.estimatedReadyAt = estimatedReadyAt; orderPayload.durationLabel = durationLabel; }
    if(discountAmount > 0){ orderPayload.discountAmount = discountAmount; orderPayload.discountReason = discountReason; }
    orderPayload.transactionId = txId;

    await DB.addOrder(orderPayload);
    closeModal();
    toast("Pesanan & pendapatan tersimpan");

    offerSendReceipt({ ...txRecord, id: txId });
  });
}

async function pageMember(){
  const members = (await DB.getAllMembers()).sort((a,b)=> (b.visits+b.freeRedeemed*LOYALTY_TARGET) - (a.visits+a.freeRedeemed*LOYALTY_TARGET));
  const kiloanLoyalty = await getKiloanLoyalty();
  return `
    <button class="btn btn-primary btn-block" data-action="add-member" style="margin-bottom:14px;">${ICONS.plus} Tambah Member</button>
    <div class="card" style="background:linear-gradient(120deg, var(--coin-bg), #fff 80%); border:1px solid #F0DFC0;">
      <div class="card-title">Program Loyalty</div>
      <div class="small" style="line-height:1.5;">
        Self-Service: setiap <b>${LOYALTY_TARGET}x</b> kunjungan, gratis 1x cuci+kering berikutnya.<br>
        Kiloan: ${kiloanLoyalty.enabled ? `setiap akumulasi <b>${kiloanLoyalty.thresholdKg}kg</b>, dapat ${kiloanLoyalty.promoType==='discount' ? `potongan <b>${Reports.formatRupiah(kiloanLoyalty.discountAmount)}</b>` : `gratis <b>${kiloanLoyalty.freeKg}kg</b>`}.` : `<span class="muted">belum diaktifkan — atur di Atur → Promo Kiloan.</span>`}
      </div>
    </div>
    <div class="card">
      <div class="card-title">Daftar Member (${members.length})</div>
      ${members.length===0 ? emptyState("Belum ada member. Tambahkan manual, atau otomatis muncul saat transaksi cucian diisi nomor WA.") :
        members.map(m=>memberRowHtml(m, kiloanLoyalty)).join("")}
    </div>
  `;
}

function memberRowHtml(m, kiloanLoyalty){
  const ssPct = Math.min(100, (m.visits / LOYALTY_TARGET) * 100);
  const ssReady = m.visits >= LOYALTY_TARGET;
  const kBalance = m.kiloanBalance || 0;
  const kThreshold = kiloanLoyalty?.thresholdKg || 20;
  const kPct = Math.min(100, (kBalance / kThreshold) * 100);
  const kReady = kiloanLoyalty?.enabled && kBalance >= kThreshold;

  return `
    <div class="card" style="margin-bottom:10px; box-shadow:none; border:1px solid var(--line);">
      <div class="row-between">
        <div>
          <div style="font-weight:700;">${m.name || "Tanpa nama"}</div>
          <div class="small muted">${m.phone}${m.address ? " · " + escapeHtml(m.address) : ""}</div>
        </div>
        <div style="display:flex; gap:6px;">
          <button class="tx-del" data-action="edit-member" data-phone="${m.phone}" title="Edit">${ICONS.edit}</button>
          <button class="tx-del" data-action="wa-member" data-phone="${m.phone}" title="Chat WA">${ICONS.chat}</button>
        </div>
      </div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-top:12px;">
        <div>
          <div class="small muted">Kiloan (total ${(m.kiloanTotalAll||0).toFixed(1)}kg)</div>
          <div class="loyalty-bar" style="margin-top:4px;"><div class="loyalty-fill" style="width:${kPct}%"></div></div>
          <div class="small" style="margin-top:3px;">${kReady ? "🎉 Siap promo!" : `${kBalance.toFixed(1)}/${kThreshold} kg`}</div>
        </div>
        <div>
          <div class="small muted">Self-Service</div>
          <div class="loyalty-bar" style="margin-top:4px;"><div class="loyalty-fill" style="width:${ssPct}%"></div></div>
          <div class="small" style="margin-top:3px;">${ssReady ? "🎉 Siap gratis!" : `${m.visits||0}/${LOYALTY_TARGET} kunjungan`}</div>
        </div>
      </div>
    </div>
  `;
}

function openAddMemberModal(existing){
  const isEdit = !!existing;
  const modal = openModal(`
    <h2>${isEdit ? "Edit Member" : "Tambah Member"}</h2>
    <div class="field"><label>No. HP (ID Member)</label><input type="tel" inputmode="numeric" id="memPhone" placeholder="08xxxxxxxxxx" value="${existing?.phone ? existing.phone.replace(/^62/,'0') : ''}" ${isEdit?'disabled':''}></div>
    <div class="field"><label>Nama</label><input type="text" id="memName" placeholder="Contoh: Budi" value="${existing?.name||''}"></div>
    <div class="field"><label>Alamat (opsional)</label><textarea id="memAddress" placeholder="Contoh: Jl. Mawar No. 5">${existing?.address||''}</textarea></div>
    <button class="btn btn-primary btn-block" data-action="save-member">${isEdit ? "Simpan Perubahan" : "Tambah Member"}</button>
    ${isEdit ? `<button class="btn btn-danger btn-block" data-action="delete-member" style="margin-top:10px;">Hapus Member</button>` : ""}
  `);

  modal.querySelector("[data-action='save-member']").addEventListener("click", async ()=>{
    const phone = normalizePhone(modal.querySelector("#memPhone").value.trim());
    const name = modal.querySelector("#memName").value.trim();
    const address = modal.querySelector("#memAddress").value.trim();
    if(!phone || phone.length < 10){ toast("Isi No. HP yang valid", "warn"); return; }
    if(!name){ toast("Isi nama member", "warn"); return; }

    const rec = existing || { phone, visits:0, freeRedeemed:0, kiloanBalance:0, kiloanTotalAll:0, kiloanFreeRedeemed:0 };
    rec.phone = phone;
    rec.name = name;
    rec.address = address;
    await DB.upsertMember(rec);
    closeModal();
    toast(isEdit ? "Member diperbarui" : "Member ditambahkan");
    render();
  });

  if(isEdit){
    modal.querySelector("[data-action='delete-member']").addEventListener("click", async ()=>{
      if(!confirm(`Hapus member ${existing.name || existing.phone}?`)) return;
      await DB.deleteMember(existing.phone);
      closeModal();
      toast("Member dihapus");
      render();
    });
  }
}

/* ---------------- Self-service loyalty (10x = gratis 1x) ---------------- */

const LOYALTY_TARGET = 10;

async function getMemberStatus(phone){
  const p = normalizePhone(phone);
  if(!p) return null;
  const m = await DB.getMember(p);
  return m || { phone: p, name: "", address: "", visits: 0, freeRedeemed: 0, kiloanBalance: 0, kiloanTotalAll: 0, kiloanFreeRedeemed: 0 };
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

/* ---------------- Kiloan loyalty (akumulasi kg -> promo) ---------------- */

/** Called after saving a kiloan transaction. Accumulates weight and applies/reset promo. */
async function recordKiloanAccumulation(phone, name, weightKg, kiloanLoyalty){
  const p = normalizePhone(phone);
  if(!p) return null;
  let m = await DB.getMember(p);
  if(!m) m = { phone: p, name: name || "", visits: 0, freeRedeemed: 0, kiloanBalance: 0, kiloanTotalAll: 0, kiloanFreeRedeemed: 0 };
  if(name) m.name = name;

  m.kiloanBalance = (m.kiloanBalance || 0) + weightKg;
  m.kiloanTotalAll = (m.kiloanTotalAll || 0) + weightKg;

  let promo = { applied: false };
  if(kiloanLoyalty.enabled && m.kiloanBalance >= kiloanLoyalty.thresholdKg){
    promo = {
      applied: true,
      promoType: kiloanLoyalty.promoType,
      discountAmount: kiloanLoyalty.discountAmount,
      freeKg: kiloanLoyalty.freeKg,
      thresholdKg: kiloanLoyalty.thresholdKg
    };
    m.kiloanBalance -= kiloanLoyalty.thresholdKg; // carry-over remainder, not a hard reset
    m.kiloanFreeRedeemed = (m.kiloanFreeRedeemed || 0) + 1;
  }
  m.lastKiloanVisit = Reports.todayStr();
  await DB.upsertMember(m);
  return { promo, member: m };
}

function kiloanLoyaltyNoteHtml(status, kiloanLoyalty){
  if(!kiloanLoyalty || !kiloanLoyalty.enabled) return "";
  const balance = status?.kiloanBalance || 0;
  if(balance >= kiloanLoyalty.thresholdKg){
    const promoText = kiloanLoyalty.promoType === "discount"
      ? `Potongan ${Reports.formatRupiah(kiloanLoyalty.discountAmount)}`
      : `Gratis ${kiloanLoyalty.freeKg} kg`;
    return `<div class="loyalty-note free">🎉 Promo aktif! ${promoText} akan otomatis diterapkan ke total.</div>`;
  }
  const remaining = kiloanLoyalty.thresholdKg - balance;
  return `
    <div class="loyalty-note">
      <div class="small">Akumulasi kiloan: ${balance.toFixed(1)}/${kiloanLoyalty.thresholdKg} kg</div>
      <div class="loyalty-bar"><div class="loyalty-fill" style="width:${Math.min(100,(balance/kiloanLoyalty.thresholdKg)*100)}%"></div></div>
      <div class="small muted">${remaining.toFixed(1)} kg lagi menuju promo</div>
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
  if(t.discountAmount > 0){
    lines.push(`Subtotal: ${Reports.formatRupiah(t.amount + t.discountAmount)}`);
    lines.push(`🎁 Diskon: -${Reports.formatRupiah(t.discountAmount)}`);
    if(t.discountReason) lines.push(`(${t.discountReason})`);
  }
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

/* ---------------- Struk sebagai gambar ---------------- */

function wrapCanvasText(ctx, text, cx, y, maxWidth, lineHeight){
  const words = text.split(" ");
  let line = "";
  let lines = [];
  for(const word of words){
    const test = line ? line + " " + word : word;
    if(ctx.measureText(test).width > maxWidth && line){
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  }
  if(line) lines.push(line);
  lines.forEach((l,i) => ctx.fillText(l, cx, y + i*lineHeight));
  return lines.length * lineHeight;
}

function generateReceiptCanvas(t){
  const width = 480;
  const padding = 32;
  const rows = [];
  if(t.categoryName) rows.push(["Layanan", t.categoryName]);
  if(t.customerName) rows.push(["Pelanggan", t.customerName]);
  if(t.weightKg) rows.push(["Berat", `${t.weightKg} kg`]);
  if(t.note) rows.push(["Catatan", t.note]);

  const scale = 2;
  const discountRows = t.discountAmount > 0 ? 2 : 0;
  const estHeight = padding*2 + 34 + 22 + 18 + rows.length*24 + (t.isFreeVisit?30:0) + discountRows*24 + 18 + 40 + 18 + 40;
  const canvas = document.createElement("canvas");
  canvas.width = width*scale; canvas.height = estHeight*scale;
  const ctx = canvas.getContext("2d");
  ctx.scale(scale, scale);

  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0,0,width,estHeight);
  ctx.fillStyle = "#16232E";
  ctx.fillRect(0,0,width,8);

  const drawDivider = (y) => {
    ctx.strokeStyle = "#DDE5E3";
    ctx.setLineDash([4,4]);
    ctx.beginPath(); ctx.moveTo(padding,y); ctx.lineTo(width-padding,y); ctx.stroke();
    ctx.setLineDash([]);
  };

  let y = padding + 14;
  ctx.textAlign = "center";
  ctx.fillStyle = "#16232E";
  ctx.font = "700 22px Georgia, serif";
  ctx.fillText(state.businessName, width/2, y);
  y += 26;
  ctx.fillStyle = "#5C6B70";
  ctx.font = "400 13px -apple-system, sans-serif";
  ctx.fillText(fmtDate(t.date), width/2, y);
  y += 18;
  drawDivider(y); y += 22;

  ctx.textAlign = "left";
  for(const [label, value] of rows){
    ctx.fillStyle = "#5C6B70";
    ctx.font = "400 13px -apple-system, sans-serif";
    ctx.fillText(label, padding, y);
    ctx.textAlign = "right";
    ctx.fillStyle = "#16232E";
    ctx.font = "600 13px -apple-system, sans-serif";
    ctx.fillText(value, width-padding, y);
    ctx.textAlign = "left";
    y += 24;
  }

  if(t.isFreeVisit){
    ctx.textAlign = "center";
    ctx.fillStyle = "#C98A3B";
    ctx.font = "700 14px -apple-system, sans-serif";
    ctx.fillText("🎁 GRATIS — Reward Member 10x Kunjungan", width/2, y+4);
    y += 30;
    ctx.textAlign = "left";
  }

  if(t.discountAmount > 0){
    ctx.textAlign = "left";
    ctx.fillStyle = "#5C6B70";
    ctx.font = "400 13px -apple-system, sans-serif";
    ctx.fillText("Subtotal", padding, y);
    ctx.textAlign = "right";
    ctx.fillStyle = "#16232E";
    ctx.font = "600 13px -apple-system, sans-serif";
    ctx.fillText(Reports.formatRupiah(t.amount + t.discountAmount), width-padding, y);
    y += 24;
    ctx.textAlign = "left";
    ctx.fillStyle = "#C98A3B";
    ctx.font = "600 13px -apple-system, sans-serif";
    ctx.fillText("🎁 Diskon Promo", padding, y);
    ctx.textAlign = "right";
    ctx.fillText(`-${Reports.formatRupiah(t.discountAmount)}`, width-padding, y);
    y += 24;
    ctx.textAlign = "left";
  }

  drawDivider(y); y += 26;
  ctx.fillStyle = "#16232E";
  ctx.font = "700 16px -apple-system, sans-serif";
  ctx.fillText("Total", padding, y);
  ctx.textAlign = "right";
  ctx.font = "700 20px 'Courier New', monospace";
  ctx.fillText(Reports.formatRupiah(t.amount), width-padding, y);
  y += 22;
  ctx.textAlign = "center";
  drawDivider(y); y += 24;

  ctx.fillStyle = "#5C6B70";
  ctx.font = "italic 13px -apple-system, sans-serif";
  wrapCanvasText(ctx, "Terima kasih sudah mencuci di tempat kami 🙏", width/2, y, width-padding*2, 18);

  return canvas;
}

function canvasToBlob(canvas){
  return new Promise(resolve => canvas.toBlob(resolve, "image/png"));
}

async function shareReceiptImage(t){
  const canvas = generateReceiptCanvas(t);
  const blob = await canvasToBlob(canvas);
  const safeName = (t.customerName || "pelanggan").replace(/[^a-z0-9]+/gi, "-");
  const fileName = `struk-${safeName}-${t.date}.png`;
  const file = new File([blob], fileName, { type: "image/png" });

  if(navigator.canShare && navigator.canShare({ files: [file] })){
    try{
      await navigator.share({ files: [file], title: state.businessName, text: "Struk pembayaran" });
      return true;
    }catch(err){
      return false; // user closed the share sheet — not an error
    }
  }
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = fileName;
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
  toast("Gambar struk diunduh — lampirkan manual di WhatsApp", "warn");
  return false;
}

/* ---------------- Add transaction modal ---------------- */

function openAddTxModal(defaultType){
  // jasa-cuci & self-service are created via the Cucian order flow now,
  // so pegawai doesn't have to enter them twice.
  const excludedIds = ["jasa-cuci", "self-service"];
  const cats = state.categories.filter(c => c.type === defaultType && !excludedIds.includes(c.id));
  const catOptions = cats.map(c=>`<option value="${c.id}">${c.name}</option>`).join("");
  const modal = openModal(`
    <h2>${defaultType==='in' ? 'Catat Kas Masuk' : 'Catat Kas Keluar'}</h2>
    <div class="seg" id="typeSeg" style="margin-bottom:16px;">
      <button type="button" class="${defaultType==='in'?'active in':''}" data-type="in">Kas Masuk</button>
      <button type="button" class="${defaultType==='out'?'active out':''}" data-type="out">Kas Keluar</button>
    </div>
    ${defaultType==='in' ? `<p class="small muted" style="margin:-6px 0 14px;">Untuk pendapatan cuci kiloan/self-service, gunakan menu <b>Cucian</b> → harga & pesanan sekaligus tercatat di sana.</p>` : ""}
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
    <div class="field">
      <label>Catatan (opsional)</label>
      <textarea id="txNote" placeholder="Contoh: Beli deterjen"></textarea>
    </div>
    <button class="btn btn-primary btn-block" data-action="save-tx">Simpan Transaksi</button>
  `);

  let currentType = defaultType;
  function refreshCategoryOptions(){
    const sel = modal.querySelector("#txCategory");
    sel.innerHTML = state.categories.filter(c=>c.type===currentType && !excludedIds.includes(c.id)).map(c=>`<option value="${c.id}">${c.name}</option>`).join("");
  }

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

    if(isNaN(amount) || amount <= 0){ toast("Isi jumlah yang valid", "warn"); return; }
    if(!categoryId){ toast("Pilih kategori", "warn"); return; }
    const cat = state.categories.find(c=>c.id===categoryId);

    const record = {
      type: currentType, categoryId, categoryName: cat?.name,
      account: cat?.account, amount, date, note
    };

    await DB.addTransaction(record);
    closeModal();
    toast("Transaksi tersimpan");
    render();
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
    <button class="btn btn-primary btn-block" data-action="send-wa-image" style="background:#25A366; margin-bottom:10px;">${ICONS.chat} Kirim Struk (Gambar) via WA</button>
    <button class="btn btn-outline btn-block" data-action="send-wa-text" style="margin-bottom:10px;">Kirim sebagai Teks Saja</button>
    <button class="btn btn-outline btn-block" data-action="skip-wa">Lewati</button>
  `);
  modal.querySelector("[data-action='send-wa-image']").addEventListener("click", async ()=>{
    await shareReceiptImage(t);
    closeModal();
    render();
  });
  modal.querySelector("[data-action='send-wa-text']").addEventListener("click", ()=>{
    sendReceiptWA(t);
    closeModal();
    render();
  });
  modal.querySelector("[data-action='skip-wa']").addEventListener("click", ()=>{
    closeModal();
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
      await DB.deleteTransaction(btn.dataset.id);
      toast("Transaksi dihapus");
      render();
    });
  });
  document.querySelectorAll("[data-action='send-receipt']").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      const txs = await DB.getTransactions();
      const t = txs.find(x => x.id === btn.dataset.id);
      if(t) await shareReceiptImage(t);
    });
  });
  document.querySelectorAll("[data-action='wa-member']").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      window.open(`https://wa.me/${btn.dataset.phone}`, "_blank");
    });
  });
  const addMemberBtn = document.querySelector("[data-action='add-member']");
  if(addMemberBtn) addMemberBtn.addEventListener("click", ()=> openAddMemberModal(null));
  document.querySelectorAll("[data-action='edit-member']").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      const m = await DB.getMember(btn.dataset.phone);
      if(m) openAddMemberModal(m);
    });
  });
  const addOrderBtn = document.querySelector("[data-action='add-order']");
  if(addOrderBtn) addOrderBtn.addEventListener("click", openAddOrderModal);
  document.querySelectorAll("[data-cucian-tab]").forEach(btn=>{
    btn.addEventListener("click", ()=>{ state.cucianFilter = btn.dataset.cucianTab; render(); });
  });
  document.querySelectorAll("[data-action='advance-order']").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      await DB.updateOrderStatus(btn.dataset.id, btn.dataset.next);
      toast(`Status diubah: ${STATUS_LABEL[btn.dataset.next]}`);
      render();
    });
  });
  document.querySelectorAll("[data-action='wa-order']").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      const orders = await DB.getOrders();
      const o = orders.find(x => x.id === btn.dataset.id);
      if(o) sendOrderStatusWA(o);
    });
  });
  document.querySelectorAll("[data-action='delete-order']").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      if(!confirm("Hapus pesanan ini?")) return;
      await DB.deleteOrder(btn.dataset.id);
      toast("Pesanan dihapus");
      render();
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

  const savePricingBtn = document.querySelector("[data-action='save-pricing']");
  if(savePricingBtn) savePricingBtn.addEventListener("click", async ()=>{
    const num = (id)=> parseFloat(document.getElementById(id).value) || 0;
    const str = (id)=> document.getElementById(id).value;
    const current = await getPricing();
    const kiloan = {};
    for(const id of Object.keys(KILOAN_LABELS)){
      kiloan[id] = { rate: num(`price-${id}`), duration: num(`dur-${id}`), unit: str(`unit-${id}`) };
    }
    await setPricing({
      kiloan,
      selfService: {
        "cuci": num("price-ss-cuci"),
        "kering": num("price-ss-kering"),
        "cuci-kering": num("price-ss-cuci-kering")
      },
      satuan: current.satuan
    });
    toast("Harga layanan disimpan");
    render();
  });

  const klType = document.getElementById("kl-type");
  if(klType) klType.addEventListener("change", ()=>{
    document.getElementById("kl-discount-field").style.display = klType.value === "discount" ? "block" : "none";
    document.getElementById("kl-freekg-field").style.display = klType.value === "free-kg" ? "block" : "none";
  });

  const saveKiloanLoyaltyBtn = document.querySelector("[data-action='save-kiloan-loyalty']");
  if(saveKiloanLoyaltyBtn) saveKiloanLoyaltyBtn.addEventListener("click", async ()=>{
    await setKiloanLoyalty({
      enabled: document.getElementById("kl-enabled").value === "1",
      thresholdKg: parseFloat(document.getElementById("kl-threshold").value) || 0,
      promoType: document.getElementById("kl-type").value,
      discountAmount: parseFloat(document.getElementById("kl-discount-amount").value) || 0,
      freeKg: parseFloat(document.getElementById("kl-freekg").value) || 0
    });
    toast("Promo kiloan disimpan");
    render();
  });

  const manageSatuanBtn = document.querySelector("[data-action='manage-satuan']");
  if(manageSatuanBtn) manageSatuanBtn.addEventListener("click", openManageSatuanModal);

  document.querySelectorAll("[data-action='delete-satuan']").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      if(!confirm("Hapus barang ini dari daftar harga satuan?")) return;
      const pricing = await getPricing();
      pricing.satuan = pricing.satuan.filter(s=>s.id!==btn.dataset.id);
      await setPricing(pricing);
      render();
    });
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
  const logoutBtn = document.querySelector("[data-action='logout']");
  if(logoutBtn) logoutBtn.addEventListener("click", ()=> auth.signOut());
}

/* ---------------- Export / Import / Backup ---------------- */

async function exportCsv(){
  const txs = await DB.getTransactions();
  const cats = Object.fromEntries(state.categories.map(c=>[c.id,c]));
  const header = "Tanggal,Jenis,Kategori,Jenis Layanan,Sub-Layanan,Berat (kg),Pelanggan,Jumlah,Catatan\n";
  const rows = txs.map(t=>{
    const cat = cats[t.categoryId]?.name || t.categoryName || "";
    const jenis = t.type === "in" ? "Kas Masuk" : "Kas Keluar";
    const serviceTypeLabel = { kiloan: "Kiloan", satuan: "Satuan", "self-service": "Self-Service" }[t.serviceType] || "";
    const note = (t.note||"").replace(/"/g,'""');
    const customer = (t.customerName||"").replace(/"/g,'""');
    return `${t.date},${jenis},"${cat}","${serviceTypeLabel}","${t.subTypeLabel||""}",${t.weightKg||""},"${customer}",${t.amount},"${note}"`;
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
  if(!confirm("Semua transaksi, member, kategori tambahan, dan saldo awal akan dihapus permanen dari server. Lanjutkan?")) return;
  if(!confirm("Yakin? Tindakan ini tidak bisa dibatalkan dan berlaku untuk semua perangkat.")) return;
  const collections = ["transactions", "members", "categories", "settings"];
  for(const name of collections){
    const snap = await fs.collection(name).get();
    const batch = fs.batch();
    snap.docs.forEach(d => batch.delete(d.ref));
    await batch.commit();
  }
  location.reload();
}

/* ---------------- Auth (Login / Daftar) ---------------- */

function authShellHtml(inner){
  return `
    <div class="auth-shell">
      <div class="auth-card">
        <div class="auth-logo">
          <svg viewBox="0 0 24 24" fill="none" stroke="#F3F7F6" stroke-width="2"><circle cx="12" cy="12" r="7"/><path d="M9 12a3 3 0 0 0 4.5 2.6"/><circle cx="16" cy="8" r="1.4" fill="#C98A3B" stroke="none"/></svg>
        </div>
        <h1>LaundryKu Finance</h1>
        <p class="small muted" style="margin-bottom:20px;">Laporan keuangan UMKM laundry</p>
        ${inner}
      </div>
    </div>
  `;
}

function loginFormHtml(){
  return authShellHtml(`
    <div class="field"><label>Email</label><input type="email" id="authEmail" placeholder="nama@email.com"></div>
    <div class="field"><label>Password</label><input type="password" id="authPassword" placeholder="••••••••"></div>
    <div id="authError" class="auth-error"></div>
    <button class="btn btn-primary btn-block" data-action="do-login">Masuk</button>
    <p class="small muted" style="text-align:center; margin-top:16px;">
      Belum punya akun? <a href="#" data-action="show-register">Daftar</a>
    </p>
  `);
}

function registerFormHtml(){
  return authShellHtml(`
    <div class="field"><label>Nama</label><input type="text" id="authName" placeholder="Nama Anda"></div>
    <div class="field"><label>Email</label><input type="email" id="authEmail" placeholder="nama@email.com"></div>
    <div class="field"><label>Password</label><input type="password" id="authPassword" placeholder="Minimal 6 karakter"></div>
    <div id="authError" class="auth-error"></div>
    <button class="btn btn-primary btn-block" data-action="do-register">Daftar</button>
    <p class="small muted" style="text-align:center; margin-top:16px;">
      Akun baru otomatis dapat akses <b>Pegawai</b>. Untuk akun Owner pertama, hubungi pemilik usaha.
    </p>
    <p class="small muted" style="text-align:center; margin-top:6px;">
      Sudah punya akun? <a href="#" data-action="show-login">Masuk</a>
    </p>
  `);
}

function showAuthScreen(mode){
  document.getElementById("app").style.display = "none";
  let root = document.getElementById("authRoot");
  if(!root){
    root = document.createElement("div");
    root.id = "authRoot";
    document.body.appendChild(root);
  }
  root.innerHTML = mode === "register" ? registerFormHtml() : loginFormHtml();
  root.style.display = "block";
  wireAuthForm(mode, root);
}

function hideAuthScreen(){
  const root = document.getElementById("authRoot");
  if(root) root.style.display = "none";
  document.getElementById("app").style.display = "";
}

function wireAuthForm(mode, root){
  const errBox = root.querySelector("#authError");
  const setErr = (msg) => { errBox.textContent = msg; };

  root.querySelector("[data-action='show-register']")?.addEventListener("click", (e)=>{ e.preventDefault(); showAuthScreen("register"); });
  root.querySelector("[data-action='show-login']")?.addEventListener("click", (e)=>{ e.preventDefault(); showAuthScreen("login"); });

  root.querySelector("[data-action='do-login']")?.addEventListener("click", async ()=>{
    const email = root.querySelector("#authEmail").value.trim();
    const password = root.querySelector("#authPassword").value;
    if(!email || !password){ setErr("Isi email dan password."); return; }
    try{
      await auth.signInWithEmailAndPassword(email, password);
    }catch(err){
      setErr(authErrorMessage(err));
    }
  });

  root.querySelector("[data-action='do-register']")?.addEventListener("click", async ()=>{
    const name = root.querySelector("#authName").value.trim();
    const email = root.querySelector("#authEmail").value.trim();
    const password = root.querySelector("#authPassword").value;
    if(!name || !email || !password){ setErr("Lengkapi semua kolom."); return; }
    if(password.length < 6){ setErr("Password minimal 6 karakter."); return; }
    try{
      const cred = await auth.createUserWithEmailAndPassword(email, password);
      await fs.collection("users").doc(cred.user.uid).set({
        name, email, role: "pegawai", createdAt: Date.now()
      });
    }catch(err){
      setErr(authErrorMessage(err));
    }
  });
}

function authErrorMessage(err){
  const map = {
    "auth/invalid-email": "Format email tidak valid.",
    "auth/user-not-found": "Akun tidak ditemukan.",
    "auth/wrong-password": "Password salah.",
    "auth/invalid-credential": "Email atau password salah.",
    "auth/email-already-in-use": "Email ini sudah terdaftar.",
    "auth/weak-password": "Password terlalu lemah (minimal 6 karakter)."
  };
  return map[err.code] || "Terjadi kesalahan. Coba lagi.";
}

/* ---------------- Boot ---------------- */

async function loadUserProfile(user){
  const doc = await fs.collection("users").doc(user.uid).get();
  if(doc.exists) return doc.data();
  const rec = { name: user.email.split("@")[0], email: user.email, role: "pegawai", createdAt: Date.now() };
  await fs.collection("users").doc(user.uid).set(rec);
  return rec;
}

async function startApp(){
  await DB.init();
  state.businessName = await DB.getSetting("businessName", "Usaha Laundry Saya");
  state.categories = await DB.getCategories();

  if("serviceWorker" in navigator){
    navigator.serviceWorker.register("./sw.js").catch(()=>{});
  }

  await render();
}

auth.onAuthStateChanged(async (user) => {
  if(user){
    const profile = await loadUserProfile(user);
    state.user = user;
    state.role = profile.role || "pegawai";
    state.userName = profile.name || user.email;
    hideAuthScreen();
    await startApp();
  } else {
    state.user = null;
    state.role = null;
    showAuthScreen("login");
  }
});
