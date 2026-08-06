/* LAMAN — app shell & UI */

const ICONS = {
  truckSm: `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="7" width="13" height="9"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="6" cy="18" r="1.6" fill="#fff"/><circle cx="17" cy="18" r="1.6" fill="#fff"/></svg>`,
  hourglass: `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12M6 21h12"/><path d="M7 3c0 5 5 6 5 9s-5 4-5 9M17 3c0 5-5 6-5 9s5 4 5 9"/></svg>`,
  spin: `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-3-6.7"/><path d="M21 3v5h-5"/></svg>`,
  checkCircleSm: `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l5 5L20 7"/></svg>`,
  warnSm: `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l9 16H3L12 3z"/><path d="M12 9v4"/><circle cx="12" cy="16.3" r="0.7" fill="#fff"/></svg>`,
  chevronDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`,
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
  edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>`,
  camera: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>`,
  sort: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5h10M11 9h7M11 13h4"/><path d="m3 17 3 3 3-3M6 18V4"/></svg>`,
  droplet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.7s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/></svg>`,
  shirt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3 2 7l3 4 2-1.5V21h10V9.5L19 11l3-4-6-4-2 2h-4z"/></svg>`,
  hash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 9h14M5 15h14M11 4 8 20M16 4l-3 16"/></svg>`,
  store: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l1.5-5h15L21 9"/><path d="M3 9a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0"/><path d="M5 9v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9"/><path d="M9 21v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  alertTriangle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg>`
};

const state = {
  page: "dashboard",
  businessName: "Usaha Laundry Saya",
  businessTagline: "",
  businessPhone: "",
  businessInstagram: "",
  businessAddress: "",
  businessLogo: "",
  categories: [],
  role: null,
  user: null,
  userName: "",
  businessId: null,
  txForm: { type: "in" },
  reportTab: "labarugi",
  labaRugiRange: { start: Reports.startOfMonth(), end: Reports.todayStr() },
  neracaDate: Reports.todayStr(),
  kasHarianRange: { start: Reports.todayStr(), end: Reports.todayStr() },
  kasHarianPreset: "harian",
  kasHarianFloat: 0,
  cucianFilter: "belum-diproses",
  cucianSort: "deadline-asc",
  cucianSearch: "",
  dashboardPeriod: "month",
  currentBranchId: "all",
  branches: [],
  memberSearch: "",
  memberPage: 1,
  memberPageSize: 25,
  txPage: 1,
  txPageSize: 25,
  cucianPage: 1,
  asetTetapPage: 1,
  asetTetapPageSize: 25,
  persediaanPage: 1,
  persediaanPageSize: 25,
  cucianPageSize: 25,
  cucianShowAllHistory: false,
  cucianSpecialFilter: null,
  absensiReportRange: null,
  viewingPayslipId: null,
  settingsSection: null
};

function el(html){
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function toast(msg, type="success", duration=2400){
  const check = `<svg viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>`;
  const badge = type === "success" ? `<span class="toast-check">${check}</span>` : "";
  const t = el(`<div class="toast ${type==='warn'?'toast-warn':''}">${badge}<span>${msg}</span></div>`);
  document.body.appendChild(t);
  setTimeout(()=>t.remove(), duration);
}

function closeModal(){
  document.querySelectorAll(".modal-backdrop").forEach(m=>m.remove());
}

function openModal(innerHtml){
  closeModal();
  const backdrop = el(`<div class="modal-backdrop"><div class="modal-sheet">${innerHtml}</div></div>`);
  backdrop.addEventListener("click",(e)=>{ if(e.target === backdrop) closeModal(); });
  document.body.appendChild(backdrop);
  pushNavEntry();
  return backdrop;
}

/* ---------------- Back-button navigation (History API) ----------------
 * PWAs/SPAs have no real pages, so the device/browser "Back" button has
 * nothing to go back to by default and just exits the app. We push a
 * history entry on every meaningful in-app navigation (page switch,
 * settings drill-down, modal open) so pressing Back steps back through
 * the app instead of leaving it. */
function pushNavEntry(){
  history.pushState({ navMarker: true }, "", location.href);
}

window.addEventListener("popstate", ()=>{
  if(document.querySelector(".modal-backdrop")){
    closeModal();
    return;
  }
  if(state.page === "pengaturan" && state.settingsSection){
    state.settingsSection = null;
    render();
    return;
  }
  if(state.page !== "dashboard"){
    state.page = "dashboard";
    render();
  }
});

/* ---------------- Navigation ---------------- */

const NAV_ITEMS = [
  { id:"dashboard", label:"Beranda", icon:ICONS.home },
  { id:"cucian", label:"Cucian", icon:ICONS.clock },
  { id:"laporan", label:"Laporan", icon:ICONS.report, ownerOnly:true },
  { id:"absensi", label:"Absensi", icon:ICONS.calendar, pegawaiOnly:true },
  { id:"akun", label:"Akun", icon:ICONS.user }
];

/** Manager has the same feature access as Owner, but (like Pegawai) is locked
 *  to a single assigned branch and can't switch to other branches / "Semua Cabang". */
function isOwnerOrManager(){ return state.role === "owner" || state.role === "manager"; }
function isBranchLocked(){ return state.role === "pegawai" || state.role === "manager"; }
function roleLabel(){ return state.role === "owner" ? "Owner" : state.role === "manager" ? "Manager" : "Pegawai"; }

function visibleNavItems(){
  return NAV_ITEMS.filter(i => {
    if(i.ownerOnly && !isOwnerOrManager()) return false;
    if(i.pegawaiOnly && state.role !== "pegawai") return false;
    return true;
  });
}

function initFabQuickAction(){
  const fab = document.getElementById("fabQuickAction");
  if(!fab || fab.dataset.wired) return;
  fab.dataset.wired = "1";

  function closeFabMenu(){
    document.querySelector(".fab-menu")?.remove();
    fab.classList.remove("open");
  }

  fab.addEventListener("click", ()=>{
    const existing = document.querySelector(".fab-menu");
    if(existing){ closeFabMenu(); return; }
    fab.classList.add("open");
    const menu = el(`
      <div class="fab-menu open">
        <button type="button" data-fab="order">${ICONS.plus} Pesanan Cucian Baru</button>
        <button type="button" data-fab="in">${ICONS.arrowDown} Catat Kas Masuk</button>
        <button type="button" data-fab="out">${ICONS.arrowUp} Catat Kas Keluar</button>
      </div>
    `);
    document.body.appendChild(menu);
    menu.querySelector("[data-fab='order']").addEventListener("click", ()=>{ closeFabMenu(); openAddOrderModal(); });
    menu.querySelector("[data-fab='in']").addEventListener("click", ()=>{ closeFabMenu(); openAddTxModal("in"); });
    menu.querySelector("[data-fab='out']").addEventListener("click", ()=>{ closeFabMenu(); openAddTxModal("out"); });
    setTimeout(()=>{
      document.addEventListener("click", function outside(e){
        if(!menu.contains(e.target) && e.target !== fab){
          closeFabMenu();
          document.removeEventListener("click", outside);
        }
      });
    }, 0);
  });
}

function renderNav(){
  const items = visibleNavItems().map(i => `
    <button data-page="${i.id}" class="${state.page===i.id?'active':''}">
      ${i.icon}<span>${i.label}</span>
    </button>`).join("");
  document.getElementById("bottomNav").innerHTML = items;
  document.getElementById("sidebar").innerHTML = items;
  document.querySelectorAll("[data-page]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      state.page = btn.dataset.page;
      if(state.page === "cucian") state.cucianSpecialFilter = null;
      pushNavEntry();
      render();
    });
  });
}

function updateHeaderBranchInfo(){
  const el = document.getElementById("headerBranchInfo");
  if(!el) return;
  const canSwitch = state.role === "owner" && state.branches.length > 1;

  if(canSwitch){
    const currentLabel = state.currentBranchId === "all" ? "Semua Cabang" : (state.branches.find(b=>b.id===state.currentBranchId)?.name || "Pilih Cabang");
    el.innerHTML = `
      <div class="hbi-pill" title="${escapeHtml(currentLabel)}">
        <span class="hbi-pill-label">${escapeHtml(currentLabel)}</span>
        ${ICONS.chevronDown}
        <select id="headerBranchSwitch" class="hbi-pill-select">
          <option value="all" ${state.currentBranchId==='all'?'selected':''}>Semua Cabang (Gabungan)</option>
          ${state.branches.map(b=>`<option value="${b.id}" ${state.currentBranchId===b.id?'selected':''}>${escapeHtml(b.name)}${b.address ? ' — '+escapeHtml(b.address) : ''}</option>`).join("")}
        </select>
      </div>
    `;
    document.getElementById("headerBranchSwitch").addEventListener("change", (e)=>{
      state.currentBranchId = e.target.value;
      setActiveBranch(state.currentBranchId !== "all" ? state.currentBranchId : (state.branches[0]?.id || null));
      render();
    });
    return;
  }

  const activeBranchId = state.currentBranchId !== "all" ? state.currentBranchId : null;
  const b = activeBranchId ? state.branches.find(x=>x.id===activeBranchId) : state.branches[0];
  const label = b ? b.name : "Semua Cabang";
  const fullTitle = b?.address ? `${b.name} — ${b.address}` : label;
  el.innerHTML = `<div class="hbi-pill hbi-pill-static" title="${escapeHtml(fullTitle)}"><span class="hbi-pill-label">${escapeHtml(label)}</span></div>`;
}

async function render(){
  invalidateReportCaches();
  if(Reports._obCache) Reports._obCache = {};
  if(state.page === "laporan" && !isOwnerOrManager()) state.page = "dashboard";
  renderNav();
  initFabQuickAction();
  document.getElementById("bizName").textContent = state.businessName;
  updateHeaderBranchInfo();
  const main = document.getElementById("appMain");
  main.classList.toggle("wide", state.page === "cucian");
  document.getElementById("appBody")?.classList.toggle("wide", state.page === "cucian");
  main.innerHTML = `<div class="empty-state">Memuat...</div>`;
  try{
    if(state.page === "dashboard") main.innerHTML = await pageDashboard();
    if(state.page === "transaksi") main.innerHTML = await pageTransaksi();
    if(state.page === "cucian") main.innerHTML = await pageCucian();
    if(state.page === "tugas-saya") main.innerHTML = await pageTugasSaya();
    if(state.page === "member") main.innerHTML = await pageMember();
    if(state.page === "absensi") main.innerHTML = await pageAbsensi();
    if(state.page === "akun") main.innerHTML = await pageAkun();
    if(state.page === "langganan" && state.user?.email === SUPER_ADMIN_EMAIL) main.innerHTML = await pageKelolaLangganan();
    if(state.page === "laporan" && isOwnerOrManager()) main.innerHTML = await pageLaporan();
    if(state.page === "pengaturan") main.innerHTML = await pagePengaturan();
  }catch(err){
    console.error("Render error:", err);
    const isIndexError = (err?.message || "").includes("requires an index");
    main.innerHTML = `
      <div class="card" style="border:1.5px solid var(--rose);">
        <p class="small" style="font-weight:700; color:var(--rose); margin-bottom:8px;">Gagal memuat halaman</p>
        ${isIndexError ? `
          <p class="small" style="margin-bottom:10px;">Firestore butuh index tambahan untuk query ini. Buka Console (F12) untuk lihat link biru "Create Index" dari pesan error, klik link itu, tunggu status "Enabled", lalu refresh halaman ini.</p>
        ` : `<p class="small" style="margin-bottom:10px;">${escapeHtml(err?.message || "Terjadi kesalahan tidak diketahui.")}</p>`}
        <button class="btn btn-outline btn-block" data-action="retry-render">Coba Lagi</button>
      </div>
    `;
    main.querySelector("[data-action='retry-render']")?.addEventListener("click", render);
    return;
  }
  bindPageEvents();

  if(state.page === "dashboard"){
    runDashboardCountUps();
    document.querySelectorAll("[data-period]").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        state.dashboardPeriod = btn.dataset.period;
        render();
      });
    });
  }
  if(state.page === "cucian"){ bindCucianControls(); renderCucianList(); }
  if(state.page === "tugas-saya"){
    document.querySelectorAll("[data-action='task-mark-done']").forEach(btn=>{
      btn.addEventListener("click", async ()=>{
        const field = btn.dataset.type === "pickup" ? { pickupDone: true } : { deliveryDone: true };
        await DB.updateOrderFields(btn.dataset.id, field);
        toast(btn.dataset.type === "pickup" ? "Ditandai sudah dijemput" : "Ditandai sudah diantar");
        render();
      });
    });
  }
  if(state.page === "member"){ bindMemberControls(); renderMemberList(); }
  document.querySelectorAll("[data-action='goto-page']").forEach(el=>{
    el.addEventListener("click", ()=>{
      state.page = el.dataset.page;
      if(state.page === "pengaturan") state.settingsSection = null;
      pushNavEntry();
      render();
    });
  });
  if(state.page === "langganan"){
    document.querySelectorAll("[data-action='activate-subscription']").forEach(btn=>{
      btn.addEventListener("click", async ()=>{
        await DB.updateBusinessSubscription(btn.dataset.id, { subscriptionStatus: "active", subscriptionRenewedAt: Reports.todayStr() });
        toast("Langganan diaktifkan — jatuh tempo 1 bulan dari hari ini");
        render();
      });
    });
    document.querySelectorAll("[data-action='renew-subscription']").forEach(btn=>{
      btn.addEventListener("click", async ()=>{
        await DB.updateBusinessSubscription(btn.dataset.id, { subscriptionRenewedAt: Reports.todayStr() });
        toast("Langganan diperpanjang 1 bulan dari hari ini");
        render();
      });
    });
    document.querySelectorAll("[data-action='revert-to-trial']").forEach(btn=>{
      btn.addEventListener("click", async ()=>{
        if(!confirm("Kembalikan usaha ini ke status trial?")) return;
        await DB.updateBusinessSubscription(btn.dataset.id, { subscriptionStatus: "trial" });
        toast("Dikembalikan ke status trial");
        render();
      });
    });
    document.querySelectorAll("[data-action='extend-trial']").forEach(btn=>{
      btn.addEventListener("click", async ()=>{
        const businesses = await DB.getAllBusinessesForAdmin();
        const b = businesses.find(x=>x.id===btn.dataset.id);
        if(!b) return;
        const base = b.trialStartDate ? new Date(b.trialStartDate+"T00:00:00") : new Date();
        const currentTrialDays = b.trialDays || 14;
        await DB.updateBusinessSubscription(btn.dataset.id, {
          trialStartDate: b.trialStartDate || Reports.todayStr(),
          trialDays: currentTrialDays + 7
        });
        toast("Trial diperpanjang 7 hari");
        render();
      });
    });
    document.querySelectorAll("[data-action='delete-business-admin']").forEach(btn=>{
      btn.addEventListener("click", async ()=>{
        const name = btn.dataset.name;
        const typed = prompt(`Tindakan ini PERMANEN dan menghapus SEMUA data usaha ini (transaksi, cucian, member, pegawai, dll).\n\nUntuk konfirmasi, ketik ulang persis nama usahanya:\n"${name}"`);
        if(typed !== name){ toast("Dibatalkan — nama tidak cocok", "warn"); return; }
        await DB.deleteBusinessCompletely(btn.dataset.id);
        toast("Usaha & semua datanya berhasil dihapus");
        render();
      });
    });
    document.querySelectorAll(".plan-select").forEach(sel=>{
      sel.addEventListener("change", async ()=>{
        await DB.updateBusinessSubscription(sel.dataset.id, { plan: sel.value });
        toast(`Paket diubah ke ${PLAN_CONFIG[sel.value]?.label}`);
      });
    });
  }
  document.querySelectorAll("[data-action='goto-cucian-filter']").forEach(el=>{
    el.addEventListener("click", ()=>{
      const f = el.dataset.filter;
      state.page = "cucian";
      state.cucianSearch = "";
      state.cucianPage = 1;
      if(f === "belum-diproses" || f === "sedang-diproses"){
        state.cucianFilter = f;
        state.cucianSpecialFilter = null;
      } else if(f === "ready"){
        state.cucianFilter = "selesai";
        state.cucianSpecialFilter = "ready";
      } else {
        // needs-pickup / overdue span across active statuses — use the special-filter view
        state.cucianSpecialFilter = f;
      }
      pushNavEntry();
      render();
    });
  });
  if(state.page === "pengaturan"){
    document.querySelectorAll("[data-action='goto-settings-section']").forEach(el=>{
      el.addEventListener("click", ()=>{ state.settingsSection = el.dataset.section; pushNavEntry(); render(); });
    });
    const backToSettingsBtn = document.querySelector("[data-action='back-to-settings-menu']");
    if(backToSettingsBtn) backToSettingsBtn.addEventListener("click", ()=>{ state.settingsSection = null; render(); });
  }
  if(state.page === "absensi"){
    const checkInBtn = document.getElementById("checkInBtn");
    if(checkInBtn) checkInBtn.addEventListener("click", async ()=>{
      if(!navigator.geolocation){ toast("Perangkat ini tidak mendukung GPS", "warn"); return; }
      checkInBtn.disabled = true; checkInBtn.textContent = "Mengambil lokasi...";
      const branchId = resolveActionBranchId();
      const branch = await DB.getBranchById(branchId);
      const as = branch.attendanceSettings;
      const staffList = await DB.getBusinessStaff();
      const me = staffList.find(s=>s.uid===state.user.uid);
      const ws = me?.workSchedule || { workStart: "08:00" };
      navigator.geolocation.getCurrentPosition(async (pos)=>{
        const lat = pos.coords.latitude, lng = pos.coords.longitude;
        const distM = haversineKm(as.lat, as.lng, lat, lng) * 1000;
        if(distM > (as.radiusMeters||100)){
          toast(`Anda ${Math.round(distM)}m dari cabang — di luar radius absen (${as.radiusMeters}m)`, "warn");
          checkInBtn.disabled = false; checkInBtn.innerHTML = `${ICONS.pin} Absen Masuk`;
          return;
        }
        const now = Date.now();
        const today = Reports.todayStr();
        const late = minutesLate(now, today, ws.workStart);
        await DB.addAttendance({
          userId: state.user.uid, userName: state.userName || state.user.email,
          branchId, date: today, checkInTime: now, checkInLocation: { lat, lng },
          lateMinutes: late, checkOutTime: null
        });
        toast(late>0 ? `Absen masuk berhasil — terlambat ${late} menit` : "Absen masuk berhasil — tepat waktu");
        render();
      }, ()=>{
        toast("Gagal ambil lokasi GPS — pastikan izin lokasi diizinkan", "warn");
        checkInBtn.disabled = false; checkInBtn.innerHTML = `${ICONS.pin} Absen Masuk`;
      });
    });

    const checkOutBtn = document.getElementById("checkOutBtn");
    if(checkOutBtn) checkOutBtn.addEventListener("click", async ()=>{
      if(!navigator.geolocation){ toast("Perangkat ini tidak mendukung GPS", "warn"); return; }
      checkOutBtn.disabled = true; checkOutBtn.textContent = "Mengambil lokasi...";
      const today = Reports.todayStr();
      const record = await DB.getTodayAttendance(state.user.uid, today);
      navigator.geolocation.getCurrentPosition(async (pos)=>{
        await DB.updateAttendance(record.id, {
          checkOutTime: Date.now(),
          checkOutLocation: { lat: pos.coords.latitude, lng: pos.coords.longitude }
        });
        toast("Absen pulang berhasil");
        render();
      }, async ()=>{
        // GPS optional for checkout — still allow it without location if it fails
        await DB.updateAttendance(record.id, { checkOutTime: Date.now() });
        toast("Absen pulang berhasil (tanpa lokasi)");
        render();
      });
    });

    const absStart = document.getElementById("absStart");
    const absEnd = document.getElementById("absEnd");
    if(absStart) absStart.addEventListener("change", ()=>{ state.absensiReportRange.start = absStart.value; render(); });
    if(absEnd) absEnd.addEventListener("change", ()=>{ state.absensiReportRange.end = absEnd.value; render(); });

    const exportAbsBtn = document.querySelector("[data-action='export-absensi-csv']");
    if(exportAbsBtn) exportAbsBtn.addEventListener("click", async ()=>{
      const range = state.absensiReportRange;
      const records = await DB.getAttendanceInRange(range.start, range.end);
      const staffList = await DB.getBusinessStaff();
      const staffMap = Object.fromEntries(staffList.map(s=>[s.uid, s.name||s.email]));
      const branchMap = Object.fromEntries(state.branches.map(b=>[b.id,b.name]));
      exportAbsensiCsv(records, staffMap, branchMap);
    });

    const genPayslipBtn = document.getElementById("generatePayslipBtn");
    if(genPayslipBtn) genPayslipBtn.addEventListener("click", async ()=>{
      const uid = document.getElementById("payslipStaffSelect").value;
      if(!uid){ toast("Pilih pegawai dulu", "warn"); return; }
      const staffList = await DB.getBusinessStaff();
      const staffMember = staffList.find(s=>s.uid===uid);
      const range = state.absensiReportRange;
      const allRecords = await DB.getAttendanceInRange(range.start, range.end);
      const myRecords = allRecords.filter(r=>r.userId===uid);
      const leaveRequests = (await DB.getLeaveRequestsForUser(uid)).filter(r=>r.status==="approved");
      const approvedLeaveDates = new Set();
      leaveRequests.forEach(r=>{
        const cursor = new Date(r.startDate+"T00:00:00");
        const end = new Date(r.endDate+"T00:00:00");
        while(cursor <= end){
          approvedLeaveDates.add(localDateStr(cursor));
          cursor.setDate(cursor.getDate()+1);
        }
      });
      const slip = calculatePayslip(staffMember, myRecords, range.start, range.end, approvedLeaveDates);
      if(!slip){ toast("Pegawai ini belum diatur gajinya", "warn"); return; }
      const id = await DB.addPayslip(slip);
      toast("Slip gaji dibuat");
      state.viewingPayslipId = id;
      render();
    });

    document.querySelectorAll("[data-action='view-payslip']").forEach(card=>{
      card.addEventListener("click", ()=>{
        state.viewingPayslipId = card.dataset.id;
        render();
      });
    });
    const backBtn = document.querySelector("[data-action='back-to-absensi']");
    if(backBtn) backBtn.addEventListener("click", ()=>{ state.viewingPayslipId = null; render(); });

    const delPayslipBtn = document.querySelector("[data-action='delete-payslip']");
    if(delPayslipBtn) delPayslipBtn.addEventListener("click", async ()=>{
      if(!confirm("Hapus slip gaji ini? Kalau slip ini sudah ditandai dibayar, transaksi Beban Gaji yang terkait juga akan ikut dihapus.")) return;
      const id = delPayslipBtn.dataset.id;
      const allTx = await DB.getTransactions();
      const linkedTx = allTx.find(t => t.payslipId === id);
      if(linkedTx) await DB.deleteTransaction(linkedTx.id);
      await DB.deletePayslip(id);
      toast("Slip gaji dihapus");
      state.viewingPayslipId = null;
      render();
    });

    const markPaidBtn = document.querySelector("[data-action='mark-payslip-paid']");
    if(markPaidBtn) markPaidBtn.addEventListener("click", async ()=>{
      const id = markPaidBtn.dataset.id;
      const paidDate = document.getElementById("payslipPaidDate").value || Reports.todayStr();
      const slips = await DB.getAllPayslips();
      const slip = slips.find(s=>s.id===id);
      if(!slip) return;
      const branchId = (await DB.getBusinessStaff()).find(s=>s.uid===slip.userId)?.branchId || resolveActionBranchId();
      await DB.addTransaction({
        type: "out", categoryId: "gaji", categoryName: "Gaji Karyawan",
        account: DB.ACCOUNT.BEBAN, amount: slip.totalPay, date: paidDate,
        note: `Gaji ${slip.userName} — periode ${fmtDate(slip.periodStart)} s/d ${fmtDate(slip.periodEnd)}`,
        branchId, payslipId: id
      });
      await DB.updatePayslip(id, { paidStatus: true, paidDate });
      toast("Ditandai sudah dibayar — tercatat sebagai Beban Gaji");
      render();
    });

    const submitLeaveBtn = document.getElementById("submitLeaveBtn");
    if(submitLeaveBtn) submitLeaveBtn.addEventListener("click", async ()=>{
      const startDate = document.getElementById("leaveStart").value;
      const endDate = document.getElementById("leaveEnd").value;
      const reason = document.getElementById("leaveReason").value.trim();
      if(!startDate || !endDate){ toast("Isi tanggal dulu", "warn"); return; }
      if(endDate < startDate){ toast("Tanggal selesai tidak boleh sebelum tanggal mulai", "warn"); return; }
      await DB.addLeaveRequest({
        userId: state.user.uid, userName: state.userName || state.user.email,
        startDate, endDate, reason
      });
      toast("Pengajuan izin terkirim — menunggu persetujuan Owner");
      render();
    });

    document.querySelectorAll("[data-action='approve-leave']").forEach(btn=>{
      btn.addEventListener("click", async ()=>{
        await DB.updateLeaveRequestStatus(btn.dataset.id, "approved", state.user.uid);
        toast("Izin disetujui");
        render();
      });
    });
    document.querySelectorAll("[data-action='reject-leave']").forEach(btn=>{
      btn.addEventListener("click", async ()=>{
        await DB.updateLeaveRequestStatus(btn.dataset.id, "rejected", state.user.uid);
        toast("Izin ditolak");
        render();
      });
    });
  }
  if(state.page === "transaksi"){
    const txPageSizeSelect = document.getElementById("txPageSizeSelect");
    if(txPageSizeSelect) txPageSizeSelect.addEventListener("change", ()=>{
      state.txPageSize = parseInt(txPageSizeSelect.value);
      state.txPage = 1;
      render();
    });
    const txPrevBtn = document.querySelector("[data-action='tx-prev-page']");
    if(txPrevBtn) txPrevBtn.addEventListener("click", ()=>{ state.txPage--; render(); });
    const txNextBtn = document.querySelector("[data-action='tx-next-page']");
    if(txNextBtn) txNextBtn.addEventListener("click", ()=>{ state.txPage++; render(); });
  }
}

/* ---------------- Dashboard ---------------- */

/* ---------------- Analisis Pendapatan per Layanan ---------------- */

const SERVICE_TYPE_META = {
  "kiloan": { label: "Kiloan", color: "var(--suds-blue)", bg: "#EAF2F9", text: "var(--suds-blue-dark)", icon: "droplet" },
  "satuan": { label: "Satuan", color: "var(--coin)", bg: "var(--coin-bg)", text: "var(--coin)", icon: "shirt" },
  "self-service": { label: "Self-Service", color: "var(--mint)", bg: "var(--mint-bg)", text: "var(--mint)", icon: "clock" }
};

const PERIOD_LABELS = {
  "today": "Hari Ini",
  "week": "7 Hari",
  "month": "Bulan Ini",
  "year": "Tahun Ini"
};

function getPeriodRange(period){
  const today = Reports.todayStr();
  if(period === "today") return { start: today, end: today };
  if(period === "week"){
    const d = new Date(); d.setDate(d.getDate()-6);
    return { start: localDateStr(d), end: today };
  }
  if(period === "year"){
    return { start: `${new Date().getFullYear()}-01-01`, end: today };
  }
  return { start: Reports.startOfMonth(), end: today }; // "month" default
}

async function computeServiceBreakdown(start, end, branchId = null){
  let txs = await DB.getTransactionsInRange(start, end);
  if(branchId) txs = txs.filter(t => t.branchId === branchId);
  const breakdown = {
    "kiloan": { total: 0, count: 0 },
    "satuan": { total: 0, count: 0 },
    "self-service": { total: 0, count: 0 }
  };
  for(const t of txs){
    if(t.type === "in" && t.serviceType && breakdown[t.serviceType]){
      breakdown[t.serviceType].total += t.amount;
      breakdown[t.serviceType].count += 1;
    }
  }
  const omzetTotal = breakdown.kiloan.total + breakdown.satuan.total + breakdown["self-service"].total;
  const omzetCount = breakdown.kiloan.count + breakdown.satuan.count + breakdown["self-service"].count;
  return { breakdown, omzetTotal, omzetCount };
}

async function getServiceTrend(n = 6, branchId = null){
  let all = await DB.getTransactions();
  if(branchId) all = all.filter(t => t.branchId === branchId);
  const now = new Date();
  const buckets = [];
  for(let i = n-1; i >= 0; i--){
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const key = localMonthStr(d);
    buckets.push({ key, label: d.toLocaleDateString("id-ID",{month:"short"}), kiloan:0, satuan:0, "self-service":0 });
  }
  const byKey = Object.fromEntries(buckets.map(b=>[b.key,b]));
  for(const t of all){
    const key = t.date.slice(0,7);
    if(!byKey[key] || t.type !== "in" || !t.serviceType) continue;
    if(byKey[key][t.serviceType] !== undefined) byKey[key][t.serviceType] += t.amount;
  }
  return buckets;
}

async function pagePegawaiDashboard(){
  const today = Reports.todayStr();
  const txToday = (await DB.getTransactions()).filter(t=>t.date===today && t.branchId===state.currentBranchId).length;
  const recentOrders = filterOrdersByBranch(await DB.getRecentOrders(10)).slice(0,5);
  const branchName = state.branches.find(b=>b.id===state.currentBranchId)?.name || "";
  const opStatusStrip = await renderOpStatusStrip(state.currentBranchId);

  return `
    <div class="hero-balance">
      <div class="card-title">Selamat Datang</div>
      <div class="amount" style="font-family:var(--font-display); font-size:24px;">${escapeHtml(state.userName || "")}</div>
      <div class="sub"><span>Pegawai · ${escapeHtml(branchName)}</span></div>
    </div>
    ${opStatusStrip}

    <div class="quick-actions">
      <button class="in" data-action="add" data-type="in"><span class="qa-icon">${ICONS.arrowDown}</span>Catat Kas Masuk</button>
      <button class="out" data-action="add" data-type="out"><span class="qa-icon">${ICONS.arrowUp}</span>Catat Kas Keluar</button>
    </div>
    <button class="btn btn-primary btn-block" data-action="add-order" style="margin-bottom:14px;">${ICONS.plus} Pesanan Cucian Baru</button>

    <div class="card">
      <div class="card-title">Transaksi Tercatat Hari Ini</div>
      <div class="amount num" style="font-size:21px; font-weight:700;">${txToday}</div>
    </div>

    <div>
      <div class="row-between" style="margin-bottom:8px;">
        <div class="card-title" style="margin-bottom:0">Pesanan Terbaru</div>
        <button class="btn btn-ghost btn" data-page="cucian">Lihat semua</button>
      </div>
      ${recentOrders.length===0 ? emptyState("Belum ada pesanan cucian.") :
        recentOrders.map(o=>`
          <div class="tx-item">
            <div class="tx-dot in">${serviceIconFor(o)}</div>
            <div class="tx-info">
              <div class="cat">${escapeHtml(o.customerName||"Tanpa nama")}</div>
              <div class="meta">${o.receiptNo||""}</div>
            </div>
            <span class="status-badge status-${o.status}">${STATUS_LABEL[o.status]}</span>
          </div>
        `).join("")}
    </div>
  `;
}

async function renderOpStatusStrip(activeBranchId){
  let opActiveOrders = await DB.getActiveOrders();
  let opSelesaiOrders = await getSelesaiOrdersForDisplay();
  if(activeBranchId){
    opActiveOrders = opActiveOrders.filter(o=>o.branchId===activeBranchId);
    opSelesaiOrders = opSelesaiOrders.filter(o=>o.branchId===activeBranchId);
  }
  const opStats = {
    perluDijemput: opActiveOrders.filter(o=>o.needsPickup && !o.pickupDone).length,
    belumDiproses: opActiveOrders.filter(o=>o.status==="belum-diproses").length,
    sedangDiproses: opActiveOrders.filter(o=>o.status==="sedang-diproses").length,
    siapDiambilAntar: opSelesaiOrders.filter(o=>!o.needsDelivery || !o.deliveryDone).length,
    terlambat: opActiveOrders.filter(o=>o.estimatedReadyAt && formatCountdown(o.estimatedReadyAt).overdue).length
  };
  return `
    <h3 class="section-title no-print">Status Cucian</h3>
    <div class="op-status-grid no-print">
      <div class="op-status-item" data-action="goto-cucian-filter" data-filter="needs-pickup">
        <div class="op-status-icon" style="background:linear-gradient(135deg,#E8836A,#D9694F);">${ICONS.truckSm}</div>
        <div class="op-status-num" style="color:var(--rose);">${opStats.perluDijemput}</div>
        <div class="op-status-label">Perlu Dijemput</div>
      </div>
      <div class="op-status-item" data-action="goto-cucian-filter" data-filter="belum-diproses">
        <div class="op-status-icon" style="background:linear-gradient(135deg,#F2B25A,#D99A3C);">${ICONS.hourglass}</div>
        <div class="op-status-num" style="color:var(--coin);">${opStats.belumDiproses}</div>
        <div class="op-status-label">Belum Diproses</div>
      </div>
      <div class="op-status-item" data-action="goto-cucian-filter" data-filter="sedang-diproses">
        <div class="op-status-icon" style="background:linear-gradient(135deg,#4E97E0,#2361A8);">${ICONS.spin}</div>
        <div class="op-status-num" style="color:var(--suds-blue);">${opStats.sedangDiproses}</div>
        <div class="op-status-label">Sedang Diproses</div>
      </div>
      <div class="op-status-item" data-action="goto-cucian-filter" data-filter="ready">
        <div class="op-status-icon" style="background:linear-gradient(135deg,#6BBE9E,#3A7A63);">${ICONS.checkCircleSm}</div>
        <div class="op-status-num" style="color:var(--mint);">${opStats.siapDiambilAntar}</div>
        <div class="op-status-label">Siap Diambil/Antar</div>
      </div>
      <div class="op-status-item" data-action="goto-cucian-filter" data-filter="overdue">
        <div class="op-status-icon" style="background:linear-gradient(135deg,#E8836A,#B23A22);">${ICONS.warnSm}</div>
        <div class="op-status-num" style="color:var(--rose);">${opStats.terlambat}</div>
        <div class="op-status-label">Terlambat</div>
      </div>
    </div>
  `;
}

async function pageDashboard(){
  if(!isOwnerOrManager()) return pagePegawaiDashboard();

  const activeBranchId = state.currentBranchId !== "all" ? state.currentBranchId : null;
  const neraca = await Reports.neraca(Reports.todayStr(), activeBranchId);
  const monthRange = { start: Reports.startOfMonth(), end: Reports.todayStr() };
  const lr = await Reports.labaRugi(monthRange.start, monthRange.end, activeBranchId);
  const months = await Reports.lastMonthsNet(6);
  const maxAbs = Math.max(1, ...months.map(m => Math.max(m.pendapatan, m.beban)));
  let txs = await DB.getTransactions();
  if(activeBranchId) txs = txs.filter(t=>t.branchId===activeBranchId);
  txs = txs.slice(0,5);
  const cats = Object.fromEntries(state.categories.map(c=>[c.id,c]));

  const period = state.dashboardPeriod || "month";
  const periodRange = getPeriodRange(period);
  const { breakdown, omzetTotal, omzetCount } = await computeServiceBreakdown(periodRange.start, periodRange.end, activeBranchId);
  const trend = await getServiceTrend(6, activeBranchId);
  const trendMax = Math.max(1, ...trend.map(m => m.kiloan + m.satuan + m["self-service"]));

  const opStatusStrip = await renderOpStatusStrip(activeBranchId);

  return `
    <div class="hero-balance">
      <div class="card-title">Saldo Kas Saat Ini</div>
      <div class="amount num" data-countup="${neraca.kas}">Rp0</div>
      <div class="sub">
        <span>Aset: <b>${Reports.formatRupiah(neraca.totalAset)}</b></span>
        <span>Modal: <b>${Reports.formatRupiah(neraca.ekuitas)}</b></span>
      </div>
    </div>
    ${opStatusStrip}

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
      <div class="card-title" style="margin-bottom:10px;">Analisis Pendapatan Layanan</div>
      <div class="period-pills">
        ${Object.entries(PERIOD_LABELS).map(([id,label])=>`
          <button class="period-pill ${period===id?'active':''}" data-period="${id}">${label}</button>
        `).join("")}
      </div>

      <div class="service-stat-grid">
        ${Object.entries(SERVICE_TYPE_META).map(([key,meta])=>`
          <div class="service-stat-tile" style="background:${meta.bg};">
            <div class="service-stat-icon" style="background:${meta.color}; color:#fff;">${ICONS[meta.icon]}</div>
            <div class="service-stat-label" style="color:${meta.text};">${meta.label}</div>
            <div class="service-stat-amount num" style="color:${meta.text};">${Reports.formatRupiah(breakdown[key].total)}</div>
            <div class="service-stat-count">${breakdown[key].count} transaksi</div>
          </div>
        `).join("")}
        <div class="service-stat-tile total">
          <div class="service-stat-icon" style="background:rgba(255,255,255,.2); color:#fff;">${ICONS.hash}</div>
          <div class="service-stat-label">Total Omzet</div>
          <div class="service-stat-amount num">${Reports.formatRupiah(omzetTotal)}</div>
          <div class="service-stat-count">${omzetCount} transaksi</div>
        </div>
      </div>

      <div class="card-title" style="margin:18px 0 8px;">Tren 6 Bulan Terakhir</div>
      <div class="trend-legend">
        ${Object.values(SERVICE_TYPE_META).map(m=>`<span class="trend-legend-item"><span class="trend-dot" style="background:${m.color};"></span>${m.label}</span>`).join("")}
      </div>
      <div class="trend-chart">
        ${trend.map(m=>{
          const kH = Math.round((m.kiloan/trendMax)*90);
          const sH = Math.round((m.satuan/trendMax)*90);
          const ssH = Math.round((m["self-service"]/trendMax)*90);
          return `
            <div class="trend-col">
              <div class="trend-bars">
                <div class="trend-bar" style="height:${kH}px; background:var(--suds-blue);" title="Kiloan: ${Reports.formatRupiah(m.kiloan)}"></div>
                <div class="trend-bar" style="height:${sH}px; background:var(--coin);" title="Satuan: ${Reports.formatRupiah(m.satuan)}"></div>
                <div class="trend-bar" style="height:${ssH}px; background:var(--mint);" title="Self-Service: ${Reports.formatRupiah(m["self-service"])}"></div>
              </div>
              <div class="lbl">${m.label}</div>
            </div>
          `;
        }).join("")}
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

    <div>
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
  let txs = await DB.getTransactions();
  if(isBranchLocked()){
    txs = txs.filter(t => t.branchId === state.currentBranchId);
  } else if(state.currentBranchId !== "all"){
    txs = txs.filter(t => t.branchId === state.currentBranchId);
  }
  const cats = Object.fromEntries(state.categories.map(c=>[c.id,c]));
  const activeBranchName = isBranchLocked()
    ? state.branches.find(b=>b.id===state.currentBranchId)?.name
    : (state.currentBranchId !== "all" ? state.branches.find(b=>b.id===state.currentBranchId)?.name : "Semua Cabang");

  const pageSize = state.txPageSize || 25;
  const totalPages = Math.max(1, Math.ceil(txs.length / pageSize));
  if(state.txPage > totalPages) state.txPage = totalPages;
  if(state.txPage < 1) state.txPage = 1;
  const start = (state.txPage - 1) * pageSize;
  const pageItems = txs.slice(start, start + pageSize);

  return `
    <div class="btn-row" style="margin-bottom:14px;">
      <button class="btn btn-primary btn-block" data-action="add" data-type="in">${ICONS.plus} Kas Masuk</button>
      <button class="btn btn-outline btn-block" data-action="add" data-type="out">${ICONS.plus} Kas Keluar</button>
    </div>
    <div class="row-between no-print" style="margin-bottom:10px;">
      <span class="small muted">${txs.length} transaksi</span>
      <select id="txPageSizeSelect" style="border:1.5px solid var(--line); border-radius:8px; padding:6px 8px; font-size:12.5px;">
        ${[10,25,50,100].map(n=>`<option value="${n}" ${pageSize===n?'selected':''}>${n} / halaman</option>`).join("")}
      </select>
    </div>
    <div>
      ${pageItems.length===0 ? emptyState("Belum ada transaksi tercatat.") :
        pageItems.map(t=>txItemHtml(t, cats, state.role==='owner')).join("")}
      ${txs.length > pageSize ? `
        <div class="row-between" style="margin-top:10px;">
          <button class="btn btn-outline" data-action="tx-prev-page" ${state.txPage<=1?'disabled':''}>← Sebelumnya</button>
          <span class="small muted">Halaman ${state.txPage} dari ${totalPages}</span>
          <button class="btn btn-outline" data-action="tx-next-page" ${state.txPage>=totalPages?'disabled':''}>Selanjutnya →</button>
        </div>
      ` : ""}
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
      ${canSendReceipt ? `<button class="tx-del" data-action="print-receipt" data-id="${t.id}" title="Cetak struk">${ICONS.printer}</button>` : ""}
      ${showDelete ? `<button class="tx-del" data-action="delete-tx" data-id="${t.id}">${ICONS.trash}</button>` : ""}
    </div>
  `;
}

function emptyState(msg){
  return `<div class="empty-state"><div class="es-icon">${ICONS.bubble}</div><div class="es-msg">${msg}</div></div>`;
}

/** Formats a raw digit string/number into Indonesian thousand-separated form, e.g. 26500 -> "26.500" */
function formatThousands(val){
  const digits = String(val ?? "").replace(/\D/g, "");
  if(!digits) return "";
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

/** Parses a thousand-separated Rupiah string back into a plain Number, e.g. "26.500" -> 26500 */
function parseThousands(str){
  const digits = String(str ?? "").replace(/\D/g, "");
  return digits ? parseInt(digits, 10) : 0;
}

/** Wires live thousand-separator formatting onto a text input as the user types. */
function attachThousandsInput(el){
  if(!el) return;
  el.addEventListener("input", ()=>{
    const cursorFromEnd = el.value.length - el.selectionStart;
    el.value = formatThousands(el.value);
    const pos = Math.max(0, el.value.length - cursorFromEnd);
    el.setSelectionRange(pos, pos);
  });
}

function escapeHtml(s){
  return s.replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}

/* ---------------- Laporan ---------------- */

const ASSET_CATEGORIES = {
  "paket-mesin": { label: "Paket Mesin (Cuci + Dryer)", defaultLife: 5 },
  "mesin-cuci": { label: "Mesin Cuci", defaultLife: 5 },
  "dryer": { label: "Dryer / Pengering", defaultLife: 5 },
  "peralatan-lain": { label: "Peralatan Lain", defaultLife: 4 }
};

const INVENTORY_CATEGORIES = {
  "bahan-cuci": { label: "Bahan Cuci (deterjen, pewangi, pemutih)" },
  "kemasan": { label: "Kemasan (plastik, kantong, label)" },
  "perlengkapan": { label: "Perlengkapan Lain" }
};

let _xlsxLoadPromise = null;
function ensureXlsxLoaded(){
  if(window.XLSX) return Promise.resolve();
  if(_xlsxLoadPromise) return _xlsxLoadPromise;
  _xlsxLoadPromise = new Promise((resolve, reject)=>{
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js";
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
  return _xlsxLoadPromise;
}

async function exportAsetTetapExcel(){
  toast("Menyiapkan file Excel...");
  await ensureXlsxLoaded();
  const activeBranchId = state.currentBranchId !== "all" ? state.currentBranchId : null;
  let assets = await DB.getAssets();
  if(activeBranchId) assets = assets.filter(a => a.branchId === activeBranchId);
  const today = Reports.todayStr();
  let totalCost = 0, totalAccum = 0;
  const rows = assets.map(a => {
    const accum = depreciationAsOf(a, today);
    totalCost += a.acquisitionCost;
    totalAccum += accum;
    return { ...a, accum, book: a.acquisitionCost - accum };
  });
  const totalBook = totalCost - totalAccum;

  const aoa = [
    [state.businessName],
    [reportBranchLabel()],
    ["Kartu Inventaris Barang (KIB) — Aset Tetap"],
    [`Per ${fmtDate(today)}`],
    [],
    ["ID Aset","Jenis Aset","Nama Aset","Tanggal Perolehan","Nilai Perolehan (Rp)","Umur Ekonomis (Tahun)","Penyusutan per Bulan (Rp)","Akumulasi Penyusutan (Rp)","Nilai Buku (Rp)"],
    ...rows.map(a => [
      a.id, a.category, a.name + (a.brand ? ` (${a.brand})` : ""), a.acquisitionDate,
      a.acquisitionCost, a.usefulLifeYears, assetMonthlyDepreciation(a), a.accum, a.book
    ]),
    [],
    ["", "", "", "TOTAL", totalCost, "", "", totalAccum, totalBook]
  ];

  const ws = XLSX.utils.aoa_to_sheet(aoa);
  ws["!cols"] = [{wch:22},{wch:16},{wch:26},{wch:14},{wch:16},{wch:14},{wch:18},{wch:18},{wch:16}];
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Aset Tetap");
  XLSX.writeFile(wb, `Aset-Tetap-${state.businessName.replace(/[^a-z0-9]/gi,'_')}-${today}.xlsx`);
}

async function exportPersediaanExcel(){
  toast("Menyiapkan file Excel...");
  await ensureXlsxLoaded();
  const activeBranchId = state.currentBranchId !== "all" ? state.currentBranchId : null;
  let items = await DB.getInventoryItems();
  if(activeBranchId) items = items.filter(i => i.branchId === activeBranchId);
  const totalValue = items.reduce((s,i)=>s+(i.totalValue||0), 0);
  const today = Reports.todayStr();

  const aoa = [
    [state.businessName],
    [reportBranchLabel()],
    ["Laporan Persediaan"],
    [`Per ${fmtDate(today)}`],
    [],
    ["ID Persediaan","Jenis Persediaan","Nama Persediaan","Jumlah","Satuan","Harga per Unit (Rp)","Total (Rp)"],
    ...items.map(i => [
      i.id, INVENTORY_CATEGORIES[i.category]?.label || i.category || "-", i.name,
      i.qty||0, i.unit||"pcs", i.avgUnitCost||0, i.totalValue||0
    ]),
    [],
    ["", "", "", "", "", "TOTAL", totalValue]
  ];

  const ws = XLSX.utils.aoa_to_sheet(aoa);
  ws["!cols"] = [{wch:22},{wch:20},{wch:26},{wch:10},{wch:10},{wch:16},{wch:16}];
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Persediaan");
  XLSX.writeFile(wb, `Persediaan-${state.businessName.replace(/[^a-z0-9]/gi,'_')}-${today}.xlsx`);
}

async function renderAsetTetapSection(){
  const activeBranchId = state.currentBranchId !== "all" ? state.currentBranchId : null;
  let assets = await DB.getAssets();
  if(activeBranchId) assets = assets.filter(a => a.branchId === activeBranchId);
  const today = Reports.todayStr();
  let totalCost = 0, totalAccum = 0;
  const rows = assets.map(a => {
    const accum = depreciationAsOf(a, today);
    totalCost += a.acquisitionCost;
    totalAccum += accum;
    return { ...a, accum, book: a.acquisitionCost - accum };
  });
  const totalBook = totalCost - totalAccum;
  const branchMap = Object.fromEntries(state.branches.map(b=>[b.id,b.name]));

  return `
    <div class="receipt" style="margin-bottom:14px;">
      <div class="r-head">
        <div class="biz">${state.businessName}</div>
        <div class="small muted" style="margin:2px 0 4px;">${reportBranchLabel()}</div>
        <div class="period">Kartu Inventaris Barang (KIB) — Aset Tetap<br>Per ${fmtDate(today)}</div>
      </div>
    </div>
    <div class="card no-print">
      <div class="card-title">Ringkasan Aset Tetap</div>
      <div class="r-row"><span>Total Harga Perolehan</span><span class="val num">${Reports.formatRupiah(totalCost)}</span></div>
      <div class="r-row"><span>Total Akumulasi Penyusutan</span><span class="val num">-${Reports.formatRupiah(totalAccum)}</span></div>
      <div class="r-row total"><span>Total Nilai Buku</span><span class="val num">${Reports.formatRupiah(totalBook)}</span></div>
    </div>

    <button class="btn btn-primary btn-block no-print" data-action="add-asset" style="margin:14px 0;">${ICONS.plus} Tambah Aset Tetap</button>

    ${rows.length === 0 ? emptyState("Belum ada aset tetap terdaftar.") : (()=>{
      const pageSize = state.asetTetapPageSize || 25;
      const totalPages = Math.max(1, Math.ceil(rows.length / pageSize));
      if(state.asetTetapPage > totalPages) state.asetTetapPage = totalPages;
      if(state.asetTetapPage < 1) state.asetTetapPage = 1;
      const pstart = (state.asetTetapPage - 1) * pageSize;
      const pageRows = rows.slice(pstart, pstart + pageSize);
      return `
      <div class="row-between no-print" style="margin-bottom:10px;">
        <span class="small muted">${rows.length} aset</span>
        <select id="asetTetapPageSizeSelect" style="border:1.5px solid var(--line); border-radius:8px; padding:6px 8px; font-size:12.5px;">
          ${[10,25,50,100].map(n=>`<option value="${n}" ${pageSize===n?'selected':''}>${n} / halaman</option>`).join("")}
        </select>
      </div>
      <div class="kib-table-wrap">
        <table class="kib-table">
          <thead>
            <tr>
              <th>ID Aset</th><th>Jenis Aset</th><th>Nama Aset</th><th>Tgl Perolehan</th>
              <th class="num">Nilai Perolehan</th><th>Umur Ekonomis</th>
              <th class="num">Penyusutan/Bulan</th><th class="num">Akumulasi Penyusutan</th><th class="num">Nilai Buku</th>
            </tr>
          </thead>
          <tbody>
            ${pageRows.map(a => `
              <tr>
                <td>${a.id.slice(0,8)}</td>
                <td>${escapeHtml(a.category)}</td>
                <td>${escapeHtml(a.name)}${a.brand ? ' ('+escapeHtml(a.brand)+')' : ''}</td>
                <td>${fmtDate(a.acquisitionDate)}</td>
                <td class="num">${Reports.formatRupiah(a.acquisitionCost)}</td>
                <td>${a.usefulLifeYears} tahun</td>
                <td class="num">${Reports.formatRupiah(assetMonthlyDepreciation(a))}</td>
                <td class="num">${Reports.formatRupiah(a.accum)}</td>
                <td class="num">${Reports.formatRupiah(a.book)}</td>
              </tr>
            `).join("")}
            <tr class="kib-total-row">
              <td colspan="4">TOTAL (semua aset)</td>
              <td class="num">${Reports.formatRupiah(totalCost)}</td>
              <td></td>
              <td></td>
              <td class="num">${Reports.formatRupiah(totalAccum)}</td>
              <td class="num">${Reports.formatRupiah(totalBook)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      ${rows.length > pageSize ? `
        <div class="row-between no-print" style="margin-top:10px;">
          <button class="btn btn-outline" id="asetTetapPrevPage" ${state.asetTetapPage<=1?'disabled':''}>← Sebelumnya</button>
          <span class="small muted">Halaman ${state.asetTetapPage} dari ${totalPages}</span>
          <button class="btn btn-outline" id="asetTetapNextPage" ${state.asetTetapPage>=totalPages?'disabled':''}>Selanjutnya →</button>
        </div>
      ` : ""}

      <div class="btn-row no-print" style="margin-top:14px;">
        <button class="btn btn-outline btn-block" data-action="print">${ICONS.printer} Cetak / Simpan PDF</button>
        <button class="btn btn-outline btn-block" data-action="export-aset-excel">${ICONS.download} Unduh Excel</button>
      </div>

      <h3 class="section-title no-print" style="margin-top:20px;">Kelola Aset (edit/hapus)</h3>
      ${rows.map(a => `
        <div class="card no-print" style="margin-bottom:12px;">
          <div class="row-between">
            <div>
              <div style="font-weight:700;">${escapeHtml(a.name)}</div>
              <div class="small muted">${escapeHtml(a.category)}${a.brand ? ' · '+escapeHtml(a.brand) : ''}${!activeBranchId ? ' · '+escapeHtml(branchMap[a.branchId]||'Cabang tidak diketahui') : ''}</div>
            </div>
            <div style="display:flex; gap:6px;">
              <button class="tx-del" data-action="edit-asset" data-id="${a.id}">${ICONS.edit}</button>
              <button class="tx-del" data-action="delete-asset" data-id="${a.id}">${ICONS.trash}</button>
            </div>
          </div>
          <div class="small muted" style="margin-top:8px;">Perolehan: ${fmtDate(a.acquisitionDate)} · Umur manfaat: ${a.usefulLifeYears} tahun</div>
          <div class="small" style="margin-top:6px; line-height:1.9;">
            Harga Perolehan: <b class="num">${Reports.formatRupiah(a.acquisitionCost)}</b><br>
            Penyusutan/bulan: <span class="num">${Reports.formatRupiah(assetMonthlyDepreciation(a))}</span><br>
            Akumulasi Penyusutan: <span class="num">${Reports.formatRupiah(a.accum)}</span><br>
            Nilai Buku: <b class="num" style="color:var(--mint);">${Reports.formatRupiah(a.book)}</b>
          </div>
        </div>
      `).join("")}
      `;
    })()}
  `;
}

async function renderArusKasHarianSection(){
  const activeBranchId = state.currentBranchId !== "all" ? state.currentBranchId : null;
  const { start, end } = state.kasHarianRange;
  let txs = await DB.getTransactionsInRange(start, end);
  if(activeBranchId) txs = txs.filter(t => t.branchId === activeBranchId);

  const inTxs = txs.filter(t => t.type === "in");
  const outTxs = txs.filter(t => t.type === "out");

  const byMethod = { tunai: 0, qris: 0, transfer: 0, lainnya: 0 };
  inTxs.forEach(t => {
    const m = t.paymentMethod && byMethod.hasOwnProperty(t.paymentMethod) ? t.paymentMethod : "lainnya";
    byMethod[m] += t.amount || 0;
  });
  const totalMasuk = inTxs.reduce((s,t)=>s+(t.amount||0), 0);
  const totalKeluar = outTxs.reduce((s,t)=>s+(t.amount||0), 0);
  const totalKeluarTunai = outTxs.filter(t => !t.paymentMethod || t.paymentMethod === "tunai").reduce((s,t)=>s+(t.amount||0), 0);
  const kasTunaiSeharusnya = (state.kasHarianFloat||0) + byMethod.tunai - totalKeluarTunai;
  const periodLabel = start === end ? fmtDate(start) : `${fmtDate(start)} — ${fmtDate(end)}`;

  const presetBtn = (id,label) => `<button type="button" class="btn ${state.kasHarianPreset===id?'btn-primary':'btn-outline'}" data-kas-preset="${id}" style="flex:1; padding:9px 4px; font-size:12.5px;">${label}</button>`;

  return `
    <div class="card no-print">
      <div class="card-title">Rentang Waktu</div>
      <div class="btn-row" style="margin-bottom:10px;">
        ${presetBtn("harian","Harian")}
        ${presetBtn("bulanan","Bulanan")}
        ${presetBtn("tahunan","Tahunan")}
      </div>
      <div class="date-range">
        <input type="date" id="kasHarianStart" value="${start}">
        <span class="muted small">s/d</span>
        <input type="date" id="kasHarianEnd" value="${end}">
      </div>
    </div>

    <div class="receipt" style="margin-bottom:14px;">
      <div class="r-head">
        <div class="biz">${state.businessName}</div>
        <div class="small muted" style="margin:2px 0 4px;">${reportBranchLabel()}</div>
        <div class="period">Arus Kas<br>${periodLabel}</div>
      </div>
      <div class="r-row"><span>Jumlah Transaksi</span><span class="val num">${txs.length}</span></div>
      <div class="r-row section">Pendapatan per Metode Pembayaran</div>
      <div class="r-row"><span>Tunai</span><span class="val pos num">${Reports.formatRupiah(byMethod.tunai)}</span></div>
      <div class="r-row"><span>QRIS</span><span class="val pos num">${Reports.formatRupiah(byMethod.qris)}</span></div>
      <div class="r-row"><span>Transfer</span><span class="val pos num">${Reports.formatRupiah(byMethod.transfer)}</span></div>
      ${byMethod.lainnya > 0 ? `<div class="r-row"><span>Lainnya/Tidak diketahui</span><span class="val pos num">${Reports.formatRupiah(byMethod.lainnya)}</span></div>` : ""}
      <div class="r-row total"><span>Total Pendapatan</span><span class="val num">${Reports.formatRupiah(totalMasuk)}</span></div>
      <div class="r-row section">Pengeluaran</div>
      <div class="r-row"><span>Total Kas Keluar</span><span class="val neg num">${Reports.formatRupiah(totalKeluar)}</span></div>
    </div>

    <div class="card" style="background:var(--foam-white);">
      <div class="card-title">Cek Posisi Kas Tunai Fisik</div>
      <p class="small muted" style="margin-bottom:12px;">Isi modal awal (uang kembalian yang ditaruh pagi hari), lalu sistem hitung berapa uang tunai yang seharusnya ada di laci sekarang — cocokkan dengan uang fisiknya saat tutup buku. Paling akurat kalau rentang waktu di atas diset ke "Harian".</p>
      <div class="field" style="margin-bottom:8px;">
        <label>Modal Awal / Uang Kembalian Pagi (Rp)</label>
        <input type="text" inputmode="numeric" id="kasHarianFloatInput" value="${state.kasHarianFloat ? formatThousands(state.kasHarianFloat) : ''}" placeholder="0">
      </div>
      <button class="btn btn-outline btn-block no-print" id="kasHarianFloatSaveBtn" style="margin-bottom:16px;">Simpan Modal Awal</button>

      <div class="cash-calc">
        <div class="cash-calc-row">
          <div class="cash-calc-op" style="background:var(--foam-white); color:var(--ink-navy); border:1.5px solid var(--line);">=</div>
          <span class="cash-calc-label">Modal Awal</span>
          <span class="cash-calc-val num">${Reports.formatRupiah(state.kasHarianFloat||0)}</span>
        </div>
        <div class="cash-calc-row">
          <div class="cash-calc-op" style="background:var(--mint-bg); color:var(--mint);">+</div>
          <span class="cash-calc-label">Pendapatan Tunai</span>
          <span class="cash-calc-val num" style="color:var(--mint);">${Reports.formatRupiah(byMethod.tunai)}</span>
        </div>
        <div class="cash-calc-row">
          <div class="cash-calc-op" style="background:var(--rose-bg); color:var(--rose);">−</div>
          <span class="cash-calc-label">Kas Keluar Tunai</span>
          <span class="cash-calc-val num" style="color:var(--rose);">${Reports.formatRupiah(totalKeluarTunai)}</span>
        </div>
      </div>

      <div class="cash-calc-result">
        <span>Kas Tunai Seharusnya Ada</span>
        <span class="num">${Reports.formatRupiah(kasTunaiSeharusnya)}</span>
      </div>
    </div>

    <div class="btn-row no-print" style="margin-top:14px;">
      <button class="btn btn-outline btn-block" data-action="print">${ICONS.printer} Cetak / Simpan PDF</button>
    </div>
  `;
}

async function renderPersediaanSection(){
  const activeBranchId = state.currentBranchId !== "all" ? state.currentBranchId : null;
  let items = await DB.getInventoryItems();
  if(activeBranchId) items = items.filter(i => i.branchId === activeBranchId);
  const totalValue = items.reduce((s,i)=>s+(i.totalValue||0), 0);
  const branchMap = Object.fromEntries(state.branches.map(b=>[b.id,b.name]));

  const grouped = {};
  items.forEach(i => {
    const cat = i.category || "lainnya";
    if(!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(i);
  });

  const opnames = (await DB.getAllStockOpnames()).filter(o => !activeBranchId || o.branchId === activeBranchId);
  const lastOpname = opnames.find(o => o.status === "selesai");

  return `
    <div class="receipt" style="margin-bottom:14px;">
      <div class="r-head">
        <div class="biz">${state.businessName}</div>
        <div class="small muted" style="margin:2px 0 4px;">${reportBranchLabel()}</div>
        <div class="period">Laporan Persediaan<br>Per ${fmtDate(Reports.todayStr())}</div>
      </div>
    </div>
    <div class="card no-print">
      <div class="card-title">Ringkasan Persediaan</div>
      <div class="r-row total"><span>Total Nilai Persediaan${lastOpname ? ' (hasil Stock Opname)' : ' (perkiraan sistem)'}</span><span class="val num">${Reports.formatRupiah(totalValue)}</span></div>
      ${lastOpname ? `<p class="small muted" style="margin-top:6px;">Stock opname terakhir: ${fmtDate(lastOpname.date)}</p>` : `<p class="small muted" style="margin-top:6px;">Belum pernah stock opname — nilai ini dihitung dari akumulasi pembelian saja.</p>`}
    </div>

    <button class="btn btn-primary btn-block no-print" data-action="start-stock-opname" style="margin:14px 0;">${ICONS.calendar} Mulai Stock Opname</button>

    ${items.length === 0 ? emptyState("Belum ada persediaan tercatat. Catat lewat Kas Keluar → kategori \"Beli Persediaan (Stok)\".") : (()=>{
      const pageSize = state.persediaanPageSize || 25;
      const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
      if(state.persediaanPage > totalPages) state.persediaanPage = totalPages;
      if(state.persediaanPage < 1) state.persediaanPage = 1;
      const pstart = (state.persediaanPage - 1) * pageSize;
      const pageItems = items.slice(pstart, pstart + pageSize);
      return `
      <div class="row-between no-print" style="margin-bottom:10px;">
        <span class="small muted">${items.length} barang</span>
        <select id="persediaanPageSizeSelect" style="border:1.5px solid var(--line); border-radius:8px; padding:6px 8px; font-size:12.5px;">
          ${[10,25,50,100].map(n=>`<option value="${n}" ${pageSize===n?'selected':''}>${n} / halaman</option>`).join("")}
        </select>
      </div>
      <div class="kib-table-wrap">
        <table class="kib-table">
          <thead>
            <tr>
              <th>ID Persediaan</th><th>Jenis Persediaan</th><th>Nama Persediaan</th>
              <th class="num">Jumlah</th><th class="num">Harga per Unit</th><th class="num">Total</th>
            </tr>
          </thead>
          <tbody>
            ${pageItems.map(i => `
              <tr>
                <td>${i.id.slice(0,8)}</td>
                <td>${escapeHtml(INVENTORY_CATEGORIES[i.category]?.label || i.category || '-')}</td>
                <td>${escapeHtml(i.name)}</td>
                <td class="num">${(i.qty||0).toLocaleString('id-ID')} ${escapeHtml(i.unit||'pcs')}</td>
                <td class="num">${Reports.formatRupiah(i.avgUnitCost||0)}</td>
                <td class="num">${Reports.formatRupiah(i.totalValue||0)}</td>
              </tr>
            `).join("")}
            <tr class="kib-total-row">
              <td colspan="5">TOTAL NILAI PERSEDIAAN (semua barang)</td>
              <td class="num">${Reports.formatRupiah(totalValue)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      ${items.length > pageSize ? `
        <div class="row-between no-print" style="margin-top:10px;">
          <button class="btn btn-outline" id="persediaanPrevPage" ${state.persediaanPage<=1?'disabled':''}>← Sebelumnya</button>
          <span class="small muted">Halaman ${state.persediaanPage} dari ${totalPages}</span>
          <button class="btn btn-outline" id="persediaanNextPage" ${state.persediaanPage>=totalPages?'disabled':''}>Selanjutnya →</button>
        </div>
      ` : ""}

      <div class="btn-row no-print" style="margin-top:14px;">
        <button class="btn btn-outline btn-block" data-action="print">${ICONS.printer} Cetak / Simpan PDF</button>
        <button class="btn btn-outline btn-block" data-action="export-persediaan-excel">${ICONS.download} Unduh Excel</button>
      </div>

      <h3 class="section-title no-print" style="margin-top:20px;">Kelola Persediaan (hapus)</h3>
      ${Object.entries(grouped).map(([cat, catItems])=>`
        <h4 class="small no-print" style="font-weight:700; margin:16px 0 8px;">${INVENTORY_CATEGORIES[cat]?.label || cat}</h4>
        ${catItems.map(i=>`
          <div class="card no-print" style="margin-bottom:10px;">
            <div class="row-between">
              <div>
                <div style="font-weight:700;">${escapeHtml(i.name)}</div>
                <div class="small muted">${(i.qty||0).toLocaleString('id-ID')} ${escapeHtml(i.unit||'pcs')}${!activeBranchId ? ' · '+escapeHtml(branchMap[i.branchId]||'Cabang tidak diketahui') : ''}</div>
              </div>
              <button class="tx-del" data-action="delete-inventory-item" data-id="${i.id}">${ICONS.trash}</button>
            </div>
            <div class="small" style="margin-top:8px; line-height:1.9;">
              Harga Rata-rata: <span class="num">${Reports.formatRupiah(i.avgUnitCost||0)}</span> / ${escapeHtml(i.unit||'pcs')}<br>
              Total Nilai: <b class="num" style="color:var(--mint);">${Reports.formatRupiah(i.totalValue||0)}</b>
            </div>
          </div>
        `).join("")}
      `).join("")}
      `;
    })()}

    ${opnames.length ? `
      <h3 class="section-title no-print" style="margin-top:20px;">Riwayat Stock Opname</h3>
      ${opnames.map(o=>`
        <div class="card no-print" style="margin-bottom:10px; cursor:pointer;" data-action="view-stock-opname" data-id="${o.id}">
          <div class="row-between">
            <div>
              <div style="font-weight:700;">${fmtDate(o.date)}</div>
              <div class="small muted">${o.items?.length||0} jenis barang dihitung</div>
            </div>
            <span class="status-badge ${o.status==='selesai'?'status-selesai':'status-belum-diproses'}">${o.status==='selesai'?'Selesai':'Draft'}</span>
          </div>
        </div>
      `).join("")}
    ` : ""}
  `;
}

async function openStockOpnameModal(existingOpname){
  const branchId = resolveActionBranchId();
  let items = await DB.getInventoryItems();
  if(branchId) items = items.filter(i => i.branchId === branchId);
  const isReadOnly = existingOpname?.status === "selesai";

  const countMap = {};
  if(existingOpname){
    (existingOpname.items||[]).forEach(i => { countMap[i.itemId] = i.countedQty; });
  }

  const modal = openModal(`
    <h2>${existingOpname ? 'Detail Stock Opname' : 'Stock Opname'} — ${fmtDate(existingOpname?.date || Reports.todayStr())}</h2>
    ${!existingOpname ? `<div class="field"><label>Tanggal Opname</label><input type="date" id="opnameDate" value="${Reports.todayStr()}"></div>` : ""}
    <p class="small muted" style="margin-bottom:14px;">Hitung fisik tiap barang, isi jumlah sebenarnya di gudang/toko. Nilai persediaan akan disesuaikan berdasarkan hasil hitungan ini.</p>
    ${items.length === 0 ? emptyState("Belum ada persediaan tercatat untuk dihitung.") : items.map(i => `
      <div class="field" style="border-bottom:1px dashed var(--line); padding-bottom:10px;">
        <label>${escapeHtml(i.name)} <span class="small muted">(sistem: ${(i.qty||0).toLocaleString('id-ID')} ${escapeHtml(i.unit||'pcs')})</span></label>
        <input type="number" class="opname-count-input" data-item-id="${i.id}" data-unit-cost="${i.avgUnitCost||0}" data-item-name="${escapeHtml(i.name)}" data-category="${i.category||''}"
          value="${countMap[i.id] ?? (i.qty||0)}" step="0.01" ${isReadOnly ? 'disabled' : ''}>
      </div>
    `).join("")}
    ${!isReadOnly ? `
      <button class="btn btn-primary btn-block" data-action="complete-stock-opname" data-id="${existingOpname?.id||''}" style="margin-top:14px;">Selesaikan Opname & Sesuaikan Stok</button>
      <button class="btn btn-outline btn-block" data-action="save-draft-opname" data-id="${existingOpname?.id||''}" style="margin-top:10px;">Simpan sebagai Draft</button>
    ` : `<p class="small" style="color:var(--mint); font-weight:600; margin-top:10px;">✓ Opname ini sudah selesai dan sudah menyesuaikan nilai persediaan.</p>`}
  `);

  function collectCounts(){
    return Array.from(modal.querySelectorAll(".opname-count-input")).map(inp => ({
      itemId: inp.dataset.itemId,
      itemName: inp.dataset.itemName,
      category: inp.dataset.category,
      systemQty: parseFloat(inp.defaultValue) || 0,
      countedQty: parseFloat(inp.value) || 0,
      unitCost: parseFloat(inp.dataset.unitCost) || 0,
      countedValue: (parseFloat(inp.value) || 0) * (parseFloat(inp.dataset.unitCost) || 0)
    }));
  }

  modal.querySelector("[data-action='save-draft-opname']")?.addEventListener("click", async ()=>{
    const counts = collectCounts();
    const totalValue = counts.reduce((s,c)=>s+c.countedValue, 0);
    const date = modal.querySelector("#opnameDate")?.value || existingOpname?.date || Reports.todayStr();
    if(existingOpname){
      await DB.updateStockOpname(existingOpname.id, { items: counts, totalValue, date });
    } else {
      await DB.addStockOpname({ date, branchId, status: "draft", items: counts, totalValue });
    }
    toast("Draft stock opname disimpan");
    closeModal();
    render();
  });

  modal.querySelector("[data-action='complete-stock-opname']")?.addEventListener("click", async ()=>{
    if(!confirm("Selesaikan stock opname ini? Nilai persediaan akan disesuaikan mengikuti hasil hitungan fisik ini.")) return;
    const counts = collectCounts();
    const totalValue = counts.reduce((s,c)=>s+c.countedValue, 0);
    const date = modal.querySelector("#opnameDate")?.value || existingOpname?.date || Reports.todayStr();

    for(const c of counts){
      await DB.updateInventoryItem(c.itemId, { qty: c.countedQty, totalValue: c.countedValue });
    }
    if(existingOpname){
      await DB.updateStockOpname(existingOpname.id, { items: counts, totalValue, date, status: "selesai", completedAt: Date.now(), completedBy: state.user?.uid });
    } else {
      await DB.addStockOpname({ date, branchId, status: "selesai", items: counts, totalValue, completedAt: Date.now(), completedBy: state.user?.uid });
    }
    toast("Stock opname selesai — nilai persediaan disesuaikan");
    closeModal();
    render();
  });
}

function openSalaryConfigModal(staffMember){
  const cfg = staffMember.salaryConfig || {
    type: "harian", baseAmount: 0,
    allowances: [{ label: "Tunjangan Makan", amount: 0, enabled: false }, { label: "Tunjangan Transport", amount: 0, enabled: false }],
    lateDeduction: { enabled: false, perMinutes: 15, amountPerInterval: 5000 },
    absenceDeduction: { enabled: false, amountPerDay: 0 }
  };
  if(!cfg.absenceDeduction) cfg.absenceDeduction = { enabled: false, amountPerDay: 0 };
  const ws = staffMember.workSchedule || { workStart: "08:00", workEnd: "17:00", offDays: [0] };

  const modal = openModal(`
    <h2>Kelola Pegawai — ${escapeHtml(staffMember.name || staffMember.email)}</h2>

    <div class="field" style="background:var(--foam-white); border-radius:10px; padding:12px;">
      <p class="small" style="font-weight:700; margin-bottom:8px;">🕐 Jam Kerja & Hari Libur</p>
      <div class="field"><label>Tanggal Mulai Kerja</label><input type="date" id="wsStartDate" value="${ws.startDate || Reports.todayStr()}"></div>
      <p class="small muted" style="margin:-6px 0 10px;">Perhitungan alpa &amp; gaji cuma dimulai dari tanggal ini — hari sebelum tanggal ini tidak ikut dihitung sama sekali.</p>
      <div style="display:flex; gap:10px;">
        <div class="field" style="flex:1;"><label>Jam Masuk</label><input type="time" id="wsStart" value="${ws.workStart}"></div>
        <div class="field" style="flex:1;"><label>Jam Pulang</label><input type="time" id="wsEnd" value="${ws.workEnd}"></div>
      </div>
      <label class="small" style="font-weight:600; display:block; margin-bottom:6px;">Hari Libur Mingguan</label>
      <div style="display:flex; flex-wrap:wrap; gap:8px;">
        ${["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"].map((d,i)=>`
          <label style="display:flex; align-items:center; gap:5px; background:var(--paper); border:1px solid var(--line); border-radius:8px; padding:6px 10px; cursor:pointer;">
            <input type="checkbox" class="ws-off-day" value="${i}" ${(ws.offDays||[0]).includes(i)?'checked':''} style="width:auto; margin:0;">
            <span class="small">${d}</span>
          </label>
        `).join("")}
      </div>
    </div>

    <div class="field">
      <label>Jenis Gaji Pokok</label>
      <select id="salType">
        <option value="harian" ${cfg.type==='harian'?'selected':''}>Harian (dihitung dari jumlah hari absen masuk)</option>
        <option value="mingguan" ${cfg.type==='mingguan'?'selected':''}>Mingguan (nominal tetap per periode)</option>
        <option value="bulanan" ${cfg.type==='bulanan'?'selected':''}>Bulanan (nominal tetap per periode)</option>
      </select>
    </div>
    <div class="field"><label id="salBaseLabel">Nominal Gaji Pokok (Rp)</label><input type="number" id="salBase" value="${cfg.baseAmount}"></div>

    <div class="field" style="background:var(--foam-white); border-radius:10px; padding:12px;">
      <p class="small" style="font-weight:700; margin-bottom:8px;">Tunjangan (opsional, bisa pilih beberapa)</p>
      <div id="salAllowanceList"></div>
      <button type="button" class="btn btn-outline btn-block" id="addAllowanceBtn" style="margin-top:8px;">${ICONS.plus} Tambah Tunjangan</button>
    </div>

    <div class="field" style="background:var(--foam-white); border-radius:10px; padding:12px;">
      <label style="display:flex; align-items:center; gap:8px; cursor:pointer;">
        <input type="checkbox" id="salLateEnabled" ${cfg.lateDeduction.enabled?'checked':''} style="width:auto; margin:0;">
        <span class="small" style="font-weight:700;">Potongan Keterlambatan</span>
      </label>
      <div id="salLateFields" style="display:${cfg.lateDeduction.enabled?'block':'none'}; margin-top:10px;">
        <p class="small muted" style="margin-bottom:8px;">Setiap kelipatan menit ini terlambat, potongan sekian rupiah (dihitung per hari absen).</p>
        <div style="display:flex; gap:10px; align-items:flex-end;">
          <div class="field" style="flex:1;"><label>Tiap berapa menit</label><input type="number" id="salLatePerMin" value="${cfg.lateDeduction.perMinutes}"></div>
          <div class="field" style="flex:1;"><label>Potongan (Rp)</label><input type="number" id="salLateAmount" value="${cfg.lateDeduction.amountPerInterval}"></div>
        </div>
      </div>
    </div>

    <div class="field" style="background:var(--foam-white); border-radius:10px; padding:12px; margin-bottom:0;">
      <label style="display:flex; align-items:center; gap:8px; cursor:pointer;">
        <input type="checkbox" id="salAbsenceEnabled" ${cfg.absenceDeduction.enabled?'checked':''} style="width:auto; margin:0;">
        <span class="small" style="font-weight:700;">Potongan Tanpa Izin (Alpa)</span>
      </label>
      <div id="salAbsenceFields" style="display:${cfg.absenceDeduction.enabled?'block':'none'}; margin-top:10px;">
        <p class="small muted" style="margin-bottom:8px;">Berlaku untuk hari kerja (bukan hari libur) yang sama sekali tidak ada absen masuk.</p>
        <div class="field" style="margin-bottom:0;"><label>Potongan per Hari Alpa (Rp)</label><input type="number" id="salAbsenceAmount" value="${cfg.absenceDeduction.amountPerDay}"></div>
      </div>
    </div>

    <button class="btn btn-primary btn-block" data-action="save-salary-config" style="margin-top:14px;">Simpan Pengaturan Pegawai</button>
  `);

  const salType = modal.querySelector("#salType");
  const salBaseLabel = modal.querySelector("#salBaseLabel");
  function updateBaseLabel(){
    const map = { harian: "Nominal Gaji Pokok per Hari (Rp)", mingguan: "Nominal Gaji Pokok per Minggu (Rp)", bulanan: "Nominal Gaji Pokok per Bulan (Rp)" };
    salBaseLabel.textContent = map[salType.value];
  }
  salType.addEventListener("change", updateBaseLabel);
  updateBaseLabel();

  let allowances = cfg.allowances.map(a=>({ type: "bulanan", ...a }));
  const allowanceList = modal.querySelector("#salAllowanceList");
  function renderAllowances(){
    allowanceList.innerHTML = allowances.map((a,i)=>`
      <div style="border:1px solid var(--line); border-radius:10px; padding:10px; margin-bottom:8px; background:var(--paper);">
        <div style="display:flex; gap:8px; align-items:center; margin-bottom:8px;">
          <input type="checkbox" class="allow-enabled" data-i="${i}" ${a.enabled?'checked':''} style="width:auto; margin:0;">
          <input type="text" class="allow-label" data-i="${i}" value="${escapeHtml(a.label)}" placeholder="Nama tunjangan" style="flex:2;">
          <button type="button" class="tx-del allow-remove" data-i="${i}">${ICONS.trash}</button>
        </div>
        <div style="display:flex; gap:8px;">
          <select class="allow-type" data-i="${i}" style="flex:1;">
            <option value="bulanan" ${a.type!=='harian'?'selected':''}>Flat (tiap periode)</option>
            <option value="harian" ${a.type==='harian'?'selected':''}>Harian (per hari masuk)</option>
          </select>
          <input type="number" class="allow-amount" data-i="${i}" value="${a.amount}" placeholder="Rp" style="flex:1;">
        </div>
        <p class="small muted" style="margin-top:6px; margin-bottom:0;">${a.type==='harian' ? 'Nominal per HARI — dikali jumlah hari masuk, tidak dibayar kalau tidak masuk.' : 'Nominal FLAT per periode slip, tidak terpengaruh jumlah hari masuk.'}</p>
      </div>
    `).join("");
    allowanceList.querySelectorAll(".allow-enabled").forEach(el=> el.addEventListener("change", ()=>{ allowances[el.dataset.i].enabled = el.checked; }));
    allowanceList.querySelectorAll(".allow-label").forEach(el=> el.addEventListener("input", ()=>{ allowances[el.dataset.i].label = el.value; }));
    allowanceList.querySelectorAll(".allow-type").forEach(el=> el.addEventListener("change", ()=>{ allowances[el.dataset.i].type = el.value; renderAllowances(); }));
    allowanceList.querySelectorAll(".allow-amount").forEach(el=> el.addEventListener("input", ()=>{ allowances[el.dataset.i].amount = parseFloat(el.value)||0; }));
    allowanceList.querySelectorAll(".allow-remove").forEach(el=> el.addEventListener("click", ()=>{ allowances.splice(parseInt(el.dataset.i),1); renderAllowances(); }));
  }
  renderAllowances();

  modal.querySelector("#addAllowanceBtn").addEventListener("click", ()=>{
    allowances.push({ label: "", amount: 0, enabled: true, type: "bulanan" });
    renderAllowances();
  });

  modal.querySelector("#salLateEnabled").addEventListener("change", (e)=>{
    modal.querySelector("#salLateFields").style.display = e.target.checked ? "block" : "none";
  });
  modal.querySelector("#salAbsenceEnabled").addEventListener("change", (e)=>{
    modal.querySelector("#salAbsenceFields").style.display = e.target.checked ? "block" : "none";
  });

  modal.querySelector("[data-action='save-salary-config']").addEventListener("click", async ()=>{
    const workSchedule = {
      startDate: modal.querySelector("#wsStartDate").value || Reports.todayStr(),
      workStart: modal.querySelector("#wsStart").value || "08:00",
      workEnd: modal.querySelector("#wsEnd").value || "17:00",
      offDays: Array.from(modal.querySelectorAll(".ws-off-day:checked")).map(el=>parseInt(el.value))
    };
    const salaryConfig = {
      type: salType.value,
      baseAmount: parseFloat(modal.querySelector("#salBase").value) || 0,
      allowances: allowances.filter(a=>a.label.trim()),
      lateDeduction: {
        enabled: modal.querySelector("#salLateEnabled").checked,
        perMinutes: parseFloat(modal.querySelector("#salLatePerMin").value) || 15,
        amountPerInterval: parseFloat(modal.querySelector("#salLateAmount").value) || 0
      },
      absenceDeduction: {
        enabled: modal.querySelector("#salAbsenceEnabled").checked,
        amountPerDay: parseFloat(modal.querySelector("#salAbsenceAmount").value) || 0
      }
    };
    await DB.setSalaryConfig(staffMember.uid, salaryConfig);
    await DB.updateStaffWorkSchedule(staffMember.uid, workSchedule);
    toast("Pengaturan pegawai disimpan");
    closeModal();
    render();
  });
}

function openBranchModal(existing){
  const isEdit = !!existing;
  const ds = existing?.deliverySettings || {};
  const as = existing?.attendanceSettings || {};
  const modal = openModal(`
    <h2>${isEdit ? 'Edit' : 'Tambah'} Cabang</h2>
    <div class="field"><label>Nama Cabang</label><input type="text" id="branchName" placeholder="Contoh: Cabang Sanur" value="${escapeHtml(existing?.name||'')}"></div>
    <div class="field"><label>Alamat (opsional)</label><textarea id="branchAddress" placeholder="Contoh: Jl. Danau Tamblingan No. 5">${escapeHtml(existing?.address||'')}</textarea></div>

    <div class="field" style="background:var(--foam-white); border-radius:10px; padding:12px;">
      <p class="small" style="font-weight:700; margin-bottom:8px;">🚚 Ongkir Otomatis (opsional)</p>
      <p class="small muted" style="margin-bottom:10px;">Set lokasi cabang ini di peta, lalu tentukan radius gratis ongkir — jarak lebih dari itu otomatis kena tarif per km.</p>
      <div id="branchLocationStatus" class="small muted" style="margin-bottom:8px;">${ds.lat ? `📍 Lokasi tersimpan: ${ds.lat.toFixed(5)}, ${ds.lng.toFixed(5)}` : 'Lokasi belum diset'}</div>
      <button type="button" class="btn btn-outline btn-block" id="setBranchLocationBtn" style="margin-bottom:10px;">${ICONS.pin} Set Lokasi Cabang di Peta</button>
      <div class="field"><label>Radius Gratis Ongkir (km)</label><input type="number" id="branchFreeRadius" value="${ds.freeRadiusKm||3}" step="0.5"></div>
      <div class="field" style="margin-bottom:0;"><label>Tarif per KM di Luar Radius (Rp)</label><input type="number" id="branchPerKmRate" value="${ds.perKmRate||2000}"></div>
    </div>

    <div class="field" style="background:var(--foam-white); border-radius:10px; padding:12px;">
      <p class="small" style="font-weight:700; margin-bottom:8px;">🕐 Absensi Pegawai (opsional)</p>
      <p class="small muted" style="margin-bottom:10px;">Pakai lokasi cabang yang sama di atas — pegawai cuma bisa absen kalau HP-nya berada dalam radius ini dari cabang. Jam kerja & hari libur diatur per pegawai di Atur → Anggota Tim → Kelola Pegawai.</p>
      <div class="field" style="margin-bottom:0;"><label>Radius Absen (meter)</label><input type="number" id="attRadius" value="${as.radiusMeters||100}"></div>
    </div>

    <button class="btn btn-primary btn-block" data-action="save-branch" style="margin-top:14px;">Simpan</button>
  `);

  let pickedLat = ds.lat || null;
  let pickedLng = ds.lng || null;

  modal.querySelector("#setBranchLocationBtn").addEventListener("click", ()=>{
    openMapPickerModal(pickedLat, pickedLng, (lat,lng)=>{
      pickedLat = lat; pickedLng = lng;
      modal.querySelector("#branchLocationStatus").textContent = `📍 Lokasi tersimpan: ${lat.toFixed(5)}, ${lng.toFixed(5)}`;
    });
  });

  modal.querySelector("[data-action='save-branch']").addEventListener("click", async ()=>{
    const name = modal.querySelector("#branchName").value.trim();
    const address = modal.querySelector("#branchAddress").value.trim();
    if(!name){ toast("Isi nama cabang", "warn"); return; }

    const deliverySettings = {
      lat: pickedLat, lng: pickedLng,
      freeRadiusKm: parseFloat(modal.querySelector("#branchFreeRadius").value) || 0,
      perKmRate: parseFloat(modal.querySelector("#branchPerKmRate").value) || 0
    };
    const attendanceSettings = {
      lat: pickedLat, lng: pickedLng,
      radiusMeters: parseFloat(modal.querySelector("#attRadius").value) || 100
    };

    if(isEdit){
      await DB.updateBranch(existing.id, { name, address, deliverySettings, attendanceSettings });
      toast("Cabang diperbarui");
    } else {
      await DB.addBranch({ name, address, deliverySettings, attendanceSettings });
      toast("Cabang ditambahkan");
    }
    closeModal();
    render();
  });
}

function openAssetModal(existing){
  const isEdit = !!existing;
  if(!isEdit){
    const guardBranchId = resolveActionBranchId();
    if(!guardBranchId){ toast("Pilih cabang spesifik dulu di Beranda sebelum tambah aset", "warn"); return; }
  }
  const modal = openModal(`
    <h2>${isEdit ? 'Edit' : 'Tambah'} Aset Tetap</h2>
    <div class="field">
      <label>Jenis Aset</label>
      <select id="assetCategory">
        ${Object.entries(ASSET_CATEGORIES).map(([id,c])=>`<option value="${id}" ${existing?.categoryId===id?'selected':''}>${c.label}</option>`).join("")}
      </select>
    </div>
    <div class="field"><label>Nama/Keterangan Aset</label><input type="text" id="assetName" placeholder="Contoh: Mesin Cuci Front Loading 10kg" value="${escapeHtml(existing?.name||'')}"></div>
    <div class="field"><label>Merk</label><input type="text" id="assetBrand" placeholder="Contoh: LG, Electrolux" value="${escapeHtml(existing?.brand||'')}"></div>
    <div class="field"><label>Harga Perolehan (Rp)</label><input type="number" id="assetCost" value="${existing?.acquisitionCost||''}"></div>
    <div class="field"><label>Tanggal Perolehan</label><input type="date" id="assetDate" value="${existing?.acquisitionDate||Reports.todayStr()}"></div>
    <div class="field"><label>Umur Manfaat (tahun) <span class="small muted">— estimasi umum, bisa disesuaikan</span></label><input type="number" id="assetLife" value="${existing?.usefulLifeYears||5}"></div>
    <div class="field"><label>Nilai Residu (Rp, opsional)</label><input type="number" id="assetSalvage" value="${existing?.salvageValue||0}"></div>
    ${!isEdit ? `
      <div class="field" style="display:flex; align-items:center; gap:8px;">
        <input type="checkbox" id="assetLogCash" style="width:auto; margin:0;">
        <label for="assetLogCash" style="margin:0; font-weight:400;">Catat juga sebagai pengeluaran kas sekarang (baru dibeli tunai)</label>
      </div>
    ` : ''}
    <button class="btn btn-primary btn-block" data-action="save-asset" style="margin-top:10px;">Simpan</button>
  `);

  modal.querySelector("#assetCategory").addEventListener("change", (e)=>{
    const cat = ASSET_CATEGORIES[e.target.value];
    if(cat) modal.querySelector("#assetLife").value = cat.defaultLife;
  });

  modal.querySelector("[data-action='save-asset']").addEventListener("click", async ()=>{
    const categoryId = modal.querySelector("#assetCategory").value;
    const name = modal.querySelector("#assetName").value.trim();
    const brand = modal.querySelector("#assetBrand").value.trim();
    const acquisitionCost = parseFloat(modal.querySelector("#assetCost").value);
    const acquisitionDate = modal.querySelector("#assetDate").value;
    const usefulLifeYears = parseFloat(modal.querySelector("#assetLife").value);
    const salvageValue = parseFloat(modal.querySelector("#assetSalvage").value) || 0;

    if(!name){ toast("Isi nama aset", "warn"); return; }
    if(!acquisitionCost || acquisitionCost <= 0){ toast("Isi harga perolehan yang valid", "warn"); return; }
    if(!acquisitionDate){ toast("Isi tanggal perolehan", "warn"); return; }
    if(!usefulLifeYears || usefulLifeYears <= 0){ toast("Isi umur manfaat yang valid", "warn"); return; }

    const payload = {
      categoryId, category: ASSET_CATEGORIES[categoryId]?.label || categoryId,
      name, brand, acquisitionCost, acquisitionDate, usefulLifeYears, salvageValue
    };
    if(!isEdit) payload.branchId = resolveActionBranchId();

    if(isEdit){
      await DB.updateAsset(existing.id, payload);
      toast("Aset diperbarui");
    } else {
      await DB.addAsset(payload);
      if(modal.querySelector("#assetLogCash")?.checked){
        await DB.addTransaction({
          type: "out", categoryId: "beli-aset", categoryName: "Beli Peralatan/Aset Tetap",
          account: DB.ACCOUNT.ASET_TETAP, amount: acquisitionCost, date: acquisitionDate,
          note: `${name}${brand?' ('+brand+')':''}`, branchId: resolveActionBranchId()
        });
      }
      toast("Aset ditambahkan");
    }
    closeModal();
    render();
  });
}

async function pageLaporan(){
  const activeBranchId = state.currentBranchId !== "all" ? state.currentBranchId : null;
  const tabBtn = (id,label) => `<button class="report-tab-btn ${state.reportTab===id?'active':''}" data-report-tab="${id}">${label}</button>`;
  let body = "";
  if(state.reportTab === "labarugi"){
    const lr = await Reports.labaRugi(state.labaRugiRange.start, state.labaRugiRange.end, activeBranchId);
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
  } else if(state.reportTab === "neraca"){
    const neraca = await Reports.neraca(state.neracaDate, activeBranchId);
    body = `
      <div class="card no-print">
        <div class="card-title">Per Tanggal</div>
        <input type="date" id="neracaDate" value="${state.neracaDate}">
      </div>
      ${renderNeracaReceipt(neraca)}
    `;
  } else if(state.reportTab === "aset-tetap"){
    body = await renderAsetTetapSection();
  } else if(state.reportTab === "persediaan"){
    body = await renderPersediaanSection();
  } else {
    body = await renderArusKasHarianSection();
  }

  return `
    <div class="report-tabs no-print">
      ${tabBtn("labarugi","Laba Rugi")}
      ${tabBtn("neraca","Neraca")}
      ${tabBtn("aset-tetap","Aset Tetap")}
      ${tabBtn("persediaan","Persediaan")}
      ${tabBtn("kas-harian","Arus Kas")}
    </div>
    ${body}
    ${(state.reportTab === "labarugi" || state.reportTab === "neraca") ? `
      <div class="btn-row no-print">
        <button class="btn btn-outline btn-block" data-action="print">${ICONS.printer} Cetak / Simpan PDF</button>
        <button class="btn btn-outline btn-block" data-action="export-csv">${ICONS.download} Unduh CSV</button>
      </div>
    ` : ""}
  `;
}

function reportBranchLabel(){
  const activeBranchId = state.currentBranchId !== "all" ? state.currentBranchId : null;
  if(activeBranchId){
    const b = state.branches.find(x=>x.id===activeBranchId);
    return b ? `${escapeHtml(b.name)}${b.address ? ' — '+escapeHtml(b.address) : ''}` : '';
  }
  if(state.branches.length === 1){
    const b = state.branches[0];
    return `${escapeHtml(b.name)}${b.address ? ' — '+escapeHtml(b.address) : ''}`;
  }
  return "Semua Cabang (Gabungan)";
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
        <div class="small muted" style="margin:2px 0 4px;">${reportBranchLabel()}</div>
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
        <div class="small muted" style="margin:2px 0 4px;">${reportBranchLabel()}</div>
        <div class="period">Neraca (Laporan Posisi Keuangan)<br>Per ${fmtDate(n.asOf)}</div>
      </div>

      <div class="r-row section">Aset</div>
      <div class="r-row"><span>Kas</span><span class="val num">${Reports.formatRupiah(n.kas)}</span></div>
      <div class="r-row"><span>Piutang Usaha</span><span class="val num">${Reports.formatRupiah(n.piutang)}</span></div>
      <div class="r-row"><span>Persediaan</span><span class="val num">${Reports.formatRupiah(n.persediaan)}</span></div>
      <div class="r-row"><span>Peralatan/Aset Tetap (Harga Perolehan)</span><span class="val num">${Reports.formatRupiah(n.asetTetap)}</span></div>
      ${n.akumulasiPenyusutan > 0 ? `<div class="r-row"><span>Akumulasi Penyusutan</span><span class="val num">-${Reports.formatRupiah(n.akumulasiPenyusutan)}</span></div>
      <div class="r-row"><span style="padding-left:12px;">Nilai Buku Aset Tetap</span><span class="val num">${Reports.formatRupiah(n.asetTetapBersih)}</span></div>` : ''}
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

function fmtDateTime(timestamp){
  const d = new Date(timestamp);
  const datePart = d.toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"});
  const timePart = d.toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"});
  return `${datePart}, ${timePart}`;
}

/* ---------------- Pengaturan ---------------- */

async function pagePengaturan(){
  const isOwner = isOwnerOrManager();
  const opening = isOwner ? await Reports.getOpeningBalances(getActiveBranch()) : null;
  const pricing = isOwner ? await getPricing() : null;
  const kiloanLoyalty = isOwner ? await getKiloanLoyalty() : null;
  const ssLoyalty = isOwner ? await getSelfServiceLoyalty() : null;
  const printerSettings = isOwner ? await getPrinterSettings() : null;
  const photoRetentionDays = isOwner ? await DB.getSetting("photoRetentionDays", 10) : null;
  let staff = isOwner ? await DB.getBusinessStaff() : null;
  if(staff && state.role === "manager"){
    staff = staff.filter(s => s.uid === state.user?.uid || (s.role !== "owner" && s.branchId === state.userBranchId));
  }
  const branchList = isOwner ? await DB.getBranches() : null;
  const customCats = state.categories.filter(c=>!c.system);

  const accountCard = `
    <h3 class="section-title">Akun</h3>
    <div class="card">
      <div class="row-between">
        <div>
          <div style="font-weight:700;">${state.userName || state.user?.email || ""}</div>
          <div class="small muted">${state.user?.email || ""} · ${roleLabel()}</div>
        </div>
        <button class="btn" data-action="logout" style="background:var(--foam-white); border:none;">Keluar</button>
      </div>
    </div>
  `;

  if(!isOwner){
    return `
      ${accountCard}
      <h3 class="section-title">Tentang</h3>
      <div class="card small muted">
        LAMAN — aplikasi manajemen usaha laundry. Laporan keuangan & pengaturan lanjutan hanya bisa diakses oleh akun Owner.
      </div>
    `;
  }

  const SETTINGS_MENU_META = {
    profil:  { label: "Profil Usaha",   desc: "Nama, kontak, logo",              icon: ICONS.camera,   color: "var(--suds-blue)", bg: "#EAF2F9" },
    harga:   { label: "Harga Layanan",  desc: "Kiloan, satuan, self-service",    icon: ICONS.report,    color: "var(--coin)",      bg: "var(--coin-bg)" },
    promo:   { label: "Promo & Loyalty",desc: "Promo kiloan & self-service",     icon: ICONS.star,      color: "var(--mint)",      bg: "var(--mint-bg)" },
    cabang:  { label: `Cabang (${branchList.length})`, desc: "Lokasi, ongkir, absen", icon: ICONS.pin, color: "var(--rose)",      bg: "var(--rose-bg)" },
    tim:     { label: `Anggota Tim (${staff.length})`, desc: "Peran & kelola gaji", icon: ICONS.user,   color: "var(--ink-navy)",  bg: "var(--foam-white)" },
    saldo:   { label: "Saldo Awal",     desc: "Pembukuan awal per cabang",       icon: ICONS.list,      color: "var(--suds-blue)", bg: "#EAF2F9" },
    lainnya: { label: "Lainnya",        desc: "Printer, foto, data, tentang",    icon: ICONS.settings,  color: "var(--text-muted)",bg: "var(--foam-white)" }
  };

  const section = state.settingsSection;

  if(!section){
    return `
      ${accountCard}
      <h3 class="section-title">Pengaturan Usaha</h3>
      <div class="akun-menu-grid">
        ${Object.entries(SETTINGS_MENU_META).map(([id,m])=>`
          <div class="akun-menu-item" data-action="goto-settings-section" data-section="${id}">
            <div class="akun-menu-icon" style="background:${m.bg}; color:${m.color};">${m.icon}</div>
            <div class="akun-menu-label">${m.label}</div>
            <div class="akun-menu-desc">${m.desc}</div>
          </div>
        `).join("")}
      </div>
    `;
  }

  const backBtn = `<button class="btn btn-outline no-print" data-action="back-to-settings-menu" style="margin-bottom:14px;">${ICONS.arrowUp} Kembali ke Pengaturan</button>`;

  const sections = {};

  sections.profil = `
    <h3 class="section-title">Profil Usaha</h3>
    <div class="card">
      <div class="field">
        <label>Nama Usaha</label>
        <input type="text" id="bizNameInput" value="${escapeHtml(state.businessName)}">
      </div>
      <div class="field">
        <label>Tagline (opsional, muncul di struk)</label>
        <input type="text" id="bizTaglineInput" placeholder="Contoh: Membersihkan dengan Sempurna, Harga Terjangkau" value="${escapeHtml(state.businessTagline||'')}">
      </div>
      <div class="field">
        <label>No. WhatsApp Usaha (opsional, muncul di struk)</label>
        <input type="tel" inputmode="numeric" id="bizPhoneInput" placeholder="08xxxxxxxxxx" value="${escapeHtml(state.businessPhone||'')}">
      </div>
      <div class="field">
        <label>Instagram Usaha (opsional, muncul di struk)</label>
        <input type="text" id="bizInstagramInput" placeholder="@namausaha" value="${escapeHtml(state.businessInstagram||'')}">
      </div>
      <div class="field">
        <label>Alamat Usaha (opsional, muncul di struk)</label>
        <textarea id="bizAddressInput" placeholder="Contoh: Jl. Melati No. 10, Denpasar">${escapeHtml(state.businessAddress||'')}</textarea>
      </div>
      <div class="field">
        <label>Logo Usaha (opsional, muncul di struk gambar & cetak)</label>
        <input type="file" id="bizLogoInput" accept="image/*" style="display:none;">
        <button type="button" class="btn btn-outline btn-block" id="bizLogoBtn">${ICONS.camera} ${state.businessLogo ? 'Ganti Logo' : 'Unggah Logo'}</button>
        <div id="bizLogoPreviewWrap" style="margin-top:10px; ${state.businessLogo?'':'display:none;'}">
          <img id="bizLogoPreview" src="${state.businessLogo||''}" style="width:64px; height:64px; object-fit:cover; border-radius:10px; border:1px solid var(--line);">
          <button type="button" class="btn btn-ghost" id="bizLogoRemoveBtn" style="color:var(--rose);">Hapus Logo</button>
        </div>
      </div>
      <button class="btn btn-primary" data-action="save-biz-name">Simpan Profil</button>
    </div>
  `;

  sections.harga = `
    <h3 class="section-title">Harga Layanan${state.branches.length > 1 ? ` — ${escapeHtml(state.branches.find(b=>b.id===getActiveBranch())?.name||'')}` : ''}</h3>
    <div class="card">
      <p class="small muted">Harga & estimasi waktu pengerjaan ini otomatis dipakai saat mencatat pesanan cucian baru di menu Cucian.${state.branches.length > 1 ? ' Tiap cabang punya harga masing-masing — pilih cabang di Beranda dulu untuk atur harga cabang lain.' : ''}</p>
      <p class="small" style="font-weight:700; margin:14px 0 6px;">Kiloan</p>
      ${Object.entries(KILOAN_LABELS).map(([id,label]) => `
        <div class="small" style="margin-bottom:6px;">
          <b>${label}:</b>
          ${(pricing.kiloan[id]||[]).length === 0 ? ' <span class="muted">belum ada opsi</span>' :
            (pricing.kiloan[id]||[]).map(t=>`<span class="tag" style="margin:2px;">${tierLabel(t)} · Rp${t.rate.toLocaleString('id-ID')}/kg</span>`).join("")}
        </div>
      `).join("")}
      <p class="small" style="font-weight:700; margin:14px 0 6px;">Self-Service</p>
      <div class="small">
        <span class="tag" style="margin:2px;">Cuci Saja · ${Reports.formatRupiah(pricing.selfService['cuci'])}</span>
        <span class="tag" style="margin:2px;">Kering Saja · ${Reports.formatRupiah(pricing.selfService['kering'])}</span>
        <span class="tag" style="margin:2px;">Cuci+Kering · ${Reports.formatRupiah(pricing.selfService['cuci-kering'])}</span>
      </div>
      <p class="small" style="font-weight:700; margin:14px 0 6px;">Cuci Satuan (${pricing.satuan.length} jenis barang)</p>
      <button class="btn btn-primary btn-block" data-action="open-price-settings" style="margin-top:10px;">${ICONS.edit} Setting Harga</button>
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
  `;

  sections.promo = `
    <h3 class="section-title">Promo Kiloan</h3>
    <p class="small muted" style="margin:-6px 0 10px;">Tiap jenis kiloan punya target & bentuk promo sendiri-sendiri — akumulasi beratnya juga dihitung terpisah per jenis.</p>
    ${Object.entries(KILOAN_LABELS).map(([key,label]) => {
      const cfg = kiloanLoyalty[key];
      return `
        <div class="card">
          <div class="card-title">${label}</div>
          <div class="field">
            <label>Aktifkan Promo?</label>
            <select id="kl-enabled-${key}">
              <option value="0" ${!cfg.enabled?'selected':''}>Nonaktif</option>
              <option value="1" ${cfg.enabled?'selected':''}>Aktif</option>
            </select>
          </div>
          <div class="field"><label>Akumulasi berapa kg untuk dapat promo?</label><input type="number" id="kl-threshold-${key}" value="${cfg.thresholdKg}"></div>
          <div class="field">
            <label>Bentuk Promo</label>
            <select id="kl-type-${key}">
              <option value="discount" ${cfg.promoType==='discount'?'selected':''}>Potongan Harga (Rp)</option>
              <option value="free-kg" ${cfg.promoType==='free-kg'?'selected':''}>Gratis Sejumlah Kg</option>
            </select>
          </div>
          <div class="field" id="kl-discount-field-${key}" style="display:${cfg.promoType==='discount'?'block':'none'}">
            <label>Nilai Potongan (Rp)</label><input type="number" id="kl-discount-amount-${key}" value="${cfg.discountAmount}">
          </div>
          <div class="field" id="kl-freekg-field-${key}" style="display:${cfg.promoType==='free-kg'?'block':'none'}">
            <label>Jumlah Kg Gratis</label><input type="number" id="kl-freekg-${key}" value="${cfg.freeKg}">
          </div>
          <button class="btn btn-primary" data-action="save-kiloan-loyalty" data-subtype="${key}">Simpan Promo ${label}</button>
        </div>
      `;
    }).join("")}

    <h3 class="section-title">Promo Self-Service</h3>
    <div class="card">
      <p class="small muted">Pelanggan yang cuci self-service akan otomatis terhitung jumlah kunjungannya (per nomor WA). Saat mencapai target, kunjungan berikutnya otomatis gratis.</p>
      <div class="field">
        <label>Aktifkan Promo Self-Service?</label>
        <select id="ss-enabled">
          <option value="0" ${!ssLoyalty.enabled?'selected':''}>Nonaktif</option>
          <option value="1" ${ssLoyalty.enabled?'selected':''}>Aktif</option>
        </select>
      </div>
      <div class="field"><label>Setiap berapa kali kunjungan dapat gratis 1x?</label><input type="number" id="ss-target" value="${ssLoyalty.visitTarget}" min="1"></div>
      <button class="btn btn-primary" data-action="save-ss-loyalty">Simpan Promo Self-Service</button>
    </div>
  `;

  sections.cabang = `
    <h3 class="section-title">Cabang (${branchList.length})</h3>
    <div class="card" style="background:#EAF3FF;">
      <div class="row-between">
        <span class="small" style="font-weight:700; color:#1E5FA8;">Paket Anda: ${PLAN_CONFIG[state.businessPlan]?.label || 'Rintisan'}</span>
        <span class="small" style="color:#5B6B85;">${branchList.length} / ${PLAN_CONFIG[state.businessPlan]?.maxBranches === Infinity ? '∞' : PLAN_CONFIG[state.businessPlan]?.maxBranches || 1} cabang terpakai</span>
      </div>
    </div>
    <p class="small muted" style="margin:10px 0 12px;">Tiap cabang punya kode undangan, harga layanan, dan kas sendiri-sendiri (tetap ada rekap gabungan di Beranda/Laporan). Bagikan kode cabang ke pegawai supaya mereka bergabung ke cabang yang benar.</p>
    ${branchList.map(b => `
      <div class="card" style="margin-bottom:10px;">
        <div class="row-between" style="align-items:flex-start;">
          <div>
            <div style="font-size:13.5px; font-weight:700; color:var(--ink-navy);">${escapeHtml(b.name)}</div>
            ${b.address ? `<div class="small muted" style="margin-top:2px;">${escapeHtml(b.address)}</div>` : ''}
          </div>
          <div style="display:flex; gap:8px; flex-shrink:0;">
            <button class="tx-del" data-action="edit-branch" data-id="${b.id}">${ICONS.edit}</button>
            ${branchList.length > 1 ? `<button class="tx-del" data-action="delete-branch" data-id="${b.id}">${ICONS.trash}</button>` : ''}
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:8px; margin-top:10px;">
          <div style="flex:1; background:var(--foam-white); border-radius:9px; padding:10px 12px; font-family:var(--font-mono); font-size:11.5px; color:#5B6B85; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${b.id}</div>
          <button class="btn" data-action="copy-branch-code" data-id="${b.id}" style="background:#EAF3FF; color:#1E5FA8; border:none; white-space:nowrap;">Salin Kode</button>
        </div>
      </div>
    `).join("")}
    <button class="btn btn-primary btn-block" data-action="add-branch" style="margin-top:4px;">${ICONS.plus} Tambah Cabang</button>
  `;

  sections.tim = `
    <h3 class="section-title">Anggota Tim (${staff.length})</h3>
    <p class="small muted" style="margin-bottom:12px;">Bisa lebih dari 1 Owner untuk usaha yang sama — misalnya Anda dan pasangan, masing-masing pakai email sendiri, akses penuh berdua. Naikkan akun Pegawai jadi Owner di sini.</p>
    ${staff.map(s => `
      <div class="card" style="margin-bottom:10px;">
        <div class="row-between" style="align-items:flex-start;">
          <div>
            <div style="font-size:13.5px; font-weight:700; color:var(--ink-navy);">${escapeHtml(s.name || s.email)}${s.uid === state.user?.uid ? ' <span class="small muted">(Anda)</span>' : ''}</div>
            <div class="small muted" style="margin-top:2px;">${escapeHtml(s.email || '')}</div>
          </div>
          <span class="status-badge ${s.role==='owner' ? 'status-selesai' : s.role==='manager' ? 'status-sedang-diproses' : 'status-belum-diproses'}">${s.role==='owner' ? 'Owner' : s.role==='manager' ? 'Manager' : 'Pegawai'}</span>
        </div>
        ${s.role!=='owner' ? `<div class="small muted" style="margin-top:6px;">Cabang: ${escapeHtml(branchList.find(b=>b.id===s.branchId)?.name || 'Belum ada cabang')}</div>` : ''}
        ${s.uid !== state.user?.uid ? `
          ${state.role === "owner" ? `
            <div style="margin-top:10px;">
              <select class="role-select" data-uid="${s.uid}" style="width:100%; background:var(--foam-white); border:none; border-radius:9px; padding:10px 12px; font-size:12.5px; color:var(--ink-navy);">
                <option value="pegawai" ${s.role==='pegawai'?'selected':''}>Pegawai</option>
                <option value="manager" ${s.role==='manager'?'selected':''}>Manager (kontrol penuh, 1 cabang)</option>
                <option value="owner" ${s.role==='owner'?'selected':''}>Owner (kontrol penuh, semua cabang)</option>
              </select>
            </div>
          ` : ''}
          ${s.role!=='owner' ? `
            <div class="field" style="margin-top:8px; margin-bottom:0;">
              <label class="small">Cabang yang Dikelola</label>
              <select class="branch-assign-select" data-uid="${s.uid}">
                <option value="">— Pilih cabang —</option>
                ${branchList.map(b=>`<option value="${b.id}" ${s.branchId===b.id?'selected':''}>${escapeHtml(b.name)}</option>`).join("")}
              </select>
            </div>
          ` : ''}
        ` : ''}
        <button class="btn btn-block" data-action="set-salary-config" data-uid="${s.uid}" style="margin-top:10px; background:var(--foam-white); border:none; color:var(--ink-navy);">${ICONS.report} Kelola Pegawai${s.salaryConfig ? ' (sudah diatur)' : ''}</button>
      </div>
    `).join("")}
  `;

  sections.saldo = `
    <h3 class="section-title">Saldo Awal Pembukuan${state.branches.length > 1 ? ` — ${escapeHtml(state.branches.find(b=>b.id===getActiveBranch())?.name||'')}` : ''}</h3>
    <div class="card">
      <p class="small muted">Isi saldo di sini jika usahamu sudah berjalan sebelum mulai pakai aplikasi ini. Modal dihitung otomatis agar neraca selalu seimbang.${state.branches.length > 1 ? ' Saldo awal ini khusus untuk cabang yang sedang aktif — pilih cabang lain di Beranda untuk atur saldo awal cabang lain.' : ''}</p>
      <div class="field"><label>Tanggal Saldo Awal</label><input type="date" id="ob-date" value="${opening.date==='1970-01-01'?Reports.todayStr():opening.date}"></div>
      <div class="field"><label>Kas</label><input type="number" id="ob-kas" value="${opening.kas}"></div>
      <div class="field"><label>Piutang Usaha</label><input type="number" id="ob-piutang" value="${opening.piutang}"></div>
      <div class="field"><label>Persediaan</label><input type="number" id="ob-persediaan" value="${opening.persediaan}"></div>
      <div class="field"><label>Peralatan/Aset Tetap</label><input type="number" id="ob-asetTetap" value="${opening.asetTetap}"></div>
      <div class="field"><label>Utang Usaha</label><input type="number" id="ob-utangUsaha" value="${opening.utangUsaha}"></div>
      <div class="field"><label>Utang Bank</label><input type="number" id="ob-utangBank" value="${opening.utangBank}"></div>
      <button class="btn btn-primary" data-action="save-opening">Simpan Saldo Awal</button>
    </div>
  `;

  sections.lainnya = `
    <h3 class="section-title">Pengaturan Printer</h3>
    <div class="card">
      <p class="small muted">Untuk cetak struk lewat printer thermal Bluetooth. Sesuaikan lebar kertas supaya teks tidak terpotong.</p>
      <div class="field">
        <label>Lebar Kertas</label>
        <select id="printer-width">
          <option value="32" ${printerSettings.widthChars===32?'selected':''}>58mm (32 karakter)</option>
          <option value="48" ${printerSettings.widthChars===48?'selected':''}>80mm (48 karakter)</option>
        </select>
      </div>
      <button class="btn btn-primary" data-action="save-printer-settings">Simpan Pengaturan Printer</button>
      <p class="small muted" style="margin-top:10px;">Cetak via Bluetooth hanya didukung browser Chrome di Android/Desktop (tidak didukung Safari/iPhone). Untuk iPhone, gunakan opsi "Dialog Print/PDF" saat cetak struk.</p>
    </div>

    <h3 class="section-title">Foto Pesanan</h3>
    <div class="card">
      <p class="small muted">Foto pesanan yang sudah Selesai akan otomatis dihapus dari penyimpanan setelah sekian hari (supaya kuota penyimpanan tidak terus menumpuk).</p>
      <div class="field">
        <label>Hapus otomatis setelah (hari)</label>
        <input type="number" id="photo-retention-days" value="${photoRetentionDays}" min="1">
      </div>
      <button class="btn btn-primary" data-action="save-photo-retention">Simpan</button>
    </div>

    <h3 class="section-title">Data</h3>
    <div class="card">
      <div class="btn-row" style="margin-bottom:10px;">
        <button class="btn btn-outline btn-block" data-action="export-json">Cadangkan Data (JSON)</button>
        <button class="btn btn-outline btn-block" data-action="import-json">Pulihkan Data</button>
      </div>
      <button class="btn btn-danger btn-block" data-action="reset-testing-data" style="margin-bottom:10px;">Hapus Transaksi, Cucian & Member (Reset Testing)</button>
      <p class="small muted" style="margin:-4px 0 10px;">Cuma hapus data transaksi, pesanan cucian, dan member — pengaturan harga, promo, cabang, pegawai, gaji, tetap aman. Cocok kalau selama ini baru testing dan mau mulai bersih.</p>
      <button class="btn btn-danger btn-block" data-action="wipe-data">Hapus Semua Data</button>
    </div>

    <h3 class="section-title">Tentang</h3>
    <div class="card small muted">
      LAMAN v1.0 — aplikasi manajemen usaha laundry: kasir, laporan keuangan, kurir & ongkir, absensi, dan gaji pegawai. Data tersimpan online (Firestore) dan tersinkron ke semua perangkat yang login.
      <br><br>
      Peta & pencarian alamat oleh OpenStreetMap contributors. Perhitungan jarak jalan oleh <a href="https://openrouteservice.org" target="_blank" rel="noopener">openrouteservice.org</a> by HeiGIT.
    </div>
  `;

  return `${backBtn}${sections[section] || ""}`;
}

/* ---------------- Streak (motivation) ---------------- */

async function streakCardHtml(){
  const txs = await DB.getTransactions();
  if(txs.length === 0) return "";
  const dateSet = new Set(txs.map(t=>t.date));
  const toStr = (dt) => localDateStr(dt);
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

function genTierId(){ return "t" + Date.now().toString(36) + Math.random().toString(36).slice(2,6); }

const DEFAULT_PRICING = {
  kiloan: {
    "cuci-kering-lipat": [
      { id: genTierId(), duration: 3, unit: "hari", rate: 6000 },
      { id: genTierId(), duration: 1, unit: "hari", rate: 8000 }
    ],
    "cuci-setrika": [
      { id: genTierId(), duration: 2, unit: "hari", rate: 8000 }
    ],
    "setrika-saja": [
      { id: genTierId(), duration: 1, unit: "hari", rate: 5000 }
    ]
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

const DEFAULT_KILOAN_LOYALTY_ITEM = {
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

function tierLabel(tier){
  return `${tier.duration} ${tier.unit}`;
}

let _activeBranchId = null;
function setActiveBranch(branchId){ _activeBranchId = branchId; }
function getActiveBranch(){ return _activeBranchId; }

async function getPricing(){
  if(!_activeBranchId) return JSON.parse(JSON.stringify(DEFAULT_PRICING));
  const branch = await DB.getBranchById(_activeBranchId);
  const saved = branch?.pricing || null;
  if(!saved) return JSON.parse(JSON.stringify(DEFAULT_PRICING));
  const kiloan = {};
  for(const key of Object.keys(KILOAN_LABELS)){
    const savedTiers = saved?.kiloan?.[key];
    kiloan[key] = Array.isArray(savedTiers) ? savedTiers : DEFAULT_PRICING.kiloan[key];
  }
  return {
    kiloan,
    selfService: { ...DEFAULT_PRICING.selfService, ...(saved.selfService||{}) },
    satuan: Array.isArray(saved.satuan) ? saved.satuan : DEFAULT_PRICING.satuan
  };
}

async function setPricing(p){
  if(!_activeBranchId) return;
  await DB.updateBranch(_activeBranchId, { pricing: p });
}

/** Returns { "cuci-kering-lipat": {enabled,thresholdKg,...}, "cuci-setrika": {...}, "setrika-saja": {...} } */
async function getKiloanLoyalty(){
  const saved = await DB.getSetting("kiloanLoyaltyBySubtype", null);
  const result = {};
  for(const key of Object.keys(KILOAN_LABELS)){
    result[key] = { ...DEFAULT_KILOAN_LOYALTY_ITEM, ...(saved?.[key]||{}) };
  }
  return result;
}

/** Saves the config for just ONE kiloan sub-type, leaving the others untouched. */
async function setKiloanLoyaltyFor(subTypeKey, config){
  const all = await getKiloanLoyalty();
  all[subTypeKey] = config;
  await DB.setSetting("kiloanLoyaltyBySubtype", all);
}

const DEFAULT_SELF_SERVICE_LOYALTY = { enabled: true, visitTarget: 10 };

async function getSelfServiceLoyalty(){
  const saved = await DB.getSetting("selfServiceLoyalty", null);
  return { ...DEFAULT_SELF_SERVICE_LOYALTY, ...(saved||{}) };
}

async function setSelfServiceLoyalty(v){
  await DB.setSetting("selfServiceLoyalty", v);
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
  const urgency = overdue ? "overdue" : (diff < 2*3600*1000 ? "urgent" : "normal");
  return overdue
    ? { overdue: true, urgency, text: `Terlambat ${label}` }
    : { overdue: false, urgency, text: `Sisa ${label}` };
}

function openPriceSettingsModal(){
  const branchName = state.branches.find(b=>b.id===getActiveBranch())?.name || "";
  const modal = openModal(`
    <h2>Setting Harga${branchName ? ` — ${escapeHtml(branchName)}` : ''}</h2>

    <h3 class="section-title" style="margin-top:4px;">Kiloan</h3>
    <div id="kiloanPriceGroups"></div>

    <h3 class="section-title">Self-Service</h3>
    <div class="field"><label>Cuci Saja (Rp)</label><input type="number" id="ss-price-cuci"></div>
    <div class="field"><label>Kering Saja (Rp)</label><input type="number" id="ss-price-kering"></div>
    <div class="field"><label>Cuci + Kering (Rp)</label><input type="number" id="ss-price-cuci-kering"></div>
    <button class="btn btn-primary btn-block" data-action="save-ss-price" style="margin-bottom:20px;">Simpan Harga Self-Service</button>

    <h3 class="section-title">Cuci Satuan</h3>
    <div id="satuanPriceList"></div>
    <div class="field-row" style="display:flex; gap:8px; align-items:flex-end;">
      <div class="field" style="flex:1; margin-bottom:0;"><label>Nama Barang</label><input type="text" id="newSatuanName" placeholder="Contoh: Karpet"></div>
      <div class="field" style="width:110px; margin-bottom:0;"><label>Harga (Rp)</label><input type="number" id="newSatuanPrice" placeholder="25000"></div>
      <button type="button" class="btn btn-outline" id="addSatuanItemBtn" style="margin-bottom:14px;">+</button>
    </div>

    <button class="btn btn-outline btn-block" data-action="close-price-settings" style="margin-top:10px;">Tutup</button>
  `);

  async function refreshKiloanGroups(){
    const pricing = await getPricing();
    const box = modal.querySelector("#kiloanPriceGroups");
    box.innerHTML = Object.entries(KILOAN_LABELS).map(([key,label]) => {
      const tiers = pricing.kiloan[key] || [];
      return `
        <div style="border:1px solid var(--line); border-radius:10px; padding:12px; margin-bottom:12px;">
          <p class="small" style="font-weight:700; margin-bottom:8px;">${label}</p>
          <div class="kiloan-tier-recap" data-group="${key}">
            ${tiers.length === 0 ? `<p class="small muted">Belum ada opsi harga.</p>` : tiers.map(t => `
              <div class="row-between" style="padding:6px 0; border-bottom:1px dashed var(--line);">
                <span class="small">${tierLabel(t)} — Rp${t.rate.toLocaleString('id-ID')}/kg</span>
                <div style="display:flex; gap:4px;">
                  <button class="tx-del" data-edit-tier="${key}:${t.id}" title="Edit">${ICONS.edit}</button>
                  <button class="tx-del" data-remove-tier="${key}:${t.id}" title="Hapus">${ICONS.trash}</button>
                </div>
              </div>
            `).join("")}
          </div>
          <div class="field-row" style="display:flex; gap:6px; margin-top:10px;">
            <select class="tier-unit" data-group="${key}" style="width:80px; padding:8px; border-radius:8px; border:1.5px solid var(--line);">
              <option value="jam">Jam</option>
              <option value="hari">Hari</option>
            </select>
            <input type="number" class="tier-duration" data-group="${key}" placeholder="Durasi" style="width:70px; padding:8px; border-radius:8px; border:1.5px solid var(--line);">
            <input type="number" class="tier-rate" data-group="${key}" placeholder="Rp/kg" style="flex:1; padding:8px; border-radius:8px; border:1.5px solid var(--line);">
            <button type="button" class="btn btn-outline add-tier-btn" data-group="${key}" data-editing-id="">+</button>
          </div>
        </div>
      `;
    }).join("");

    box.querySelectorAll("[data-edit-tier]").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        const [key, tierId] = btn.dataset.editTier.split(":");
        getPricing().then(pricing=>{
          const tier = (pricing.kiloan[key]||[]).find(t=>t.id===tierId);
          if(!tier) return;
          box.querySelector(`.tier-unit[data-group="${key}"]`).value = tier.unit;
          box.querySelector(`.tier-duration[data-group="${key}"]`).value = tier.duration;
          box.querySelector(`.tier-rate[data-group="${key}"]`).value = tier.rate;
          const addBtn = box.querySelector(`.add-tier-btn[data-group="${key}"]`);
          addBtn.dataset.editingId = tierId;
          addBtn.textContent = "✓ Update";
          toast("Ubah nilainya lalu klik Update");
        });
      });
    });
    box.querySelectorAll("[data-remove-tier]").forEach(btn=>{
      btn.addEventListener("click", async ()=>{
        const [key, tierId] = btn.dataset.removeTier.split(":");
        const pricing = await getPricing();
        pricing.kiloan[key] = (pricing.kiloan[key]||[]).filter(t=>t.id!==tierId);
        await setPricing(pricing);
        toast("Opsi harga dihapus");
        refreshKiloanGroups();
      });
    });
    box.querySelectorAll(".add-tier-btn").forEach(btn=>{
      btn.addEventListener("click", async ()=>{
        const key = btn.dataset.group;
        const editingId = btn.dataset.editingId;
        const unit = box.querySelector(`.tier-unit[data-group="${key}"]`).value;
        const duration = parseFloat(box.querySelector(`.tier-duration[data-group="${key}"]`).value);
        const rate = parseFloat(box.querySelector(`.tier-rate[data-group="${key}"]`).value);
        if(!duration || duration <= 0){ toast("Isi durasi yang valid", "warn"); return; }
        if(isNaN(rate) || rate < 0){ toast("Isi harga yang valid", "warn"); return; }
        const pricing = await getPricing();
        if(!pricing.kiloan[key]) pricing.kiloan[key] = [];
        if(editingId){
          const tier = pricing.kiloan[key].find(t=>t.id===editingId);
          if(tier){ tier.duration = duration; tier.unit = unit; tier.rate = rate; }
          await setPricing(pricing);
          toast("Opsi harga diperbarui");
        } else {
          pricing.kiloan[key].push({ id: genTierId(), duration, unit, rate });
          await setPricing(pricing);
          toast("Opsi harga ditambahkan");
        }
        refreshKiloanGroups();
      });
    });
  }

  async function refreshSatuanList(){
    const pricing = await getPricing();
    const box = modal.querySelector("#satuanPriceList");
    box.innerHTML = pricing.satuan.length === 0
      ? `<p class="small muted">Belum ada barang.</p>`
      : pricing.satuan.map(s => `
        <div class="row-between" style="padding:8px 0; border-bottom:1px dashed var(--line);">
          <span class="small">${escapeHtml(s.name)}</span>
          <div style="display:flex; align-items:center; gap:8px;">
            <input type="number" class="satuan-price-input" data-id="${s.id}" value="${s.price}" style="width:100px; padding:6px 8px; border-radius:8px; border:1.5px solid var(--line);">
            <button class="tx-del" data-action="remove-satuan-item" data-id="${s.id}">${ICONS.trash}</button>
          </div>
        </div>
      `).join("");

    box.querySelectorAll(".satuan-price-input").forEach(inp=>{
      inp.addEventListener("change", async ()=>{
        const pricing = await getPricing();
        const item = pricing.satuan.find(s=>s.id===inp.dataset.id);
        if(item){ item.price = parseFloat(inp.value) || 0; await setPricing(pricing); toast("Harga diperbarui"); }
      });
    });
    box.querySelectorAll("[data-action='remove-satuan-item']").forEach(btn=>{
      btn.addEventListener("click", async ()=>{
        const pricing = await getPricing();
        pricing.satuan = pricing.satuan.filter(s=>s.id!==btn.dataset.id);
        await setPricing(pricing);
        toast("Barang dihapus");
        refreshSatuanList();
      });
    });
  }

  modal.querySelector("#addSatuanItemBtn").addEventListener("click", async ()=>{
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
    toast("Barang ditambahkan");
    refreshSatuanList();
  });

  modal.querySelector("[data-action='save-ss-price']").addEventListener("click", async ()=>{
    const pricing = await getPricing();
    pricing.selfService = {
      cuci: parseFloat(modal.querySelector("#ss-price-cuci").value) || 0,
      kering: parseFloat(modal.querySelector("#ss-price-kering").value) || 0,
      "cuci-kering": parseFloat(modal.querySelector("#ss-price-cuci-kering").value) || 0
    };
    await setPricing(pricing);
    toast("Harga self-service disimpan");
  });

  modal.querySelector("[data-action='close-price-settings']").addEventListener("click", ()=>{
    closeModal();
    render();
  });

  async function init(){
    const pricing = await getPricing();
    modal.querySelector("#ss-price-cuci").value = pricing.selfService.cuci;
    modal.querySelector("#ss-price-kering").value = pricing.selfService.kering;
    modal.querySelector("#ss-price-cuci-kering").value = pricing.selfService["cuci-kering"];
    refreshKiloanGroups();
    refreshSatuanList();
  }
  init();
}

function computeTotal(pricing, serviceType, subType, weightKg){
  return pricing.selfService[subType] || 0;
}

/* ---------------- Foto Pakaian (Cloudinary) ---------------- */

async function uploadPhotoToCloudinary(file){
  const form = new FormData();
  form.append("file", file);
  form.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
  const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
    method: "POST", body: form
  });
  if(!res.ok) throw new Error("Upload gagal");
  const data = await res.json();
  return { url: data.secure_url, publicId: data.public_id };
}

/** Photos may be stored as either a plain URL string (older orders, before
 *  public_id tracking existed) or {url, publicId} (current format). */
function photoUrl(p){ return typeof p === "string" ? p : p.url; }
function photoPublicId(p){ return typeof p === "string" ? null : p.publicId; }

/** Opens a live camera preview with an explicit device picker (built-in or
 *  external/USB webcam). Calls onPhotoUploaded(url) each time a photo is
 *  captured & uploaded. Caller is responsible for re-rendering thumbnails.
 *  Built as its own standalone overlay (not via openModal/closeModal) so it
 *  can sit on top of another open modal (e.g. the order form) without
 *  destroying it. */
function openCameraCaptureModal(onPhotoUploaded){
  if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
    toast("Browser ini tidak mendukung akses kamera langsung. Gunakan opsi Galeri/File.", "warn");
    return;
  }

  const overlay = el(`
    <div class="camera-overlay" style="z-index:70;">
      <div class="modal-sheet">
        <h2>Ambil Foto</h2>
        <div class="field">
          <label>Pilih Kamera</label>
          <select id="cameraDeviceSelect"><option value="">Memuat daftar kamera...</option></select>
        </div>
        <div style="background:#000; border-radius:10px; overflow:hidden; margin-bottom:14px; position:relative;">
          <video id="cameraPreview" autoplay playsinline style="width:100%; display:block; max-height:320px; object-fit:contain;"></video>
        </div>
        <div id="cameraError" class="auth-error"></div>
        <button type="button" class="btn btn-primary btn-block" id="captureBtn" style="margin-bottom:10px;">${ICONS.plus} Jepret & Simpan Foto</button>
        <div id="capturedCount" class="small muted" style="text-align:center; margin-bottom:10px;">Belum ada foto diambil.</div>
        <button type="button" class="btn btn-outline btn-block" id="closeCameraBtn">Selesai</button>
      </div>
    </div>
  `);
  document.body.appendChild(overlay);

  let capturedCount = 0;
  let localStream = null;
  const video = overlay.querySelector("#cameraPreview");
  const errBox = overlay.querySelector("#cameraError");
  const select = overlay.querySelector("#cameraDeviceSelect");

  function stopStream(){
    if(localStream){
      localStream.getTracks().forEach(t => t.stop());
      localStream = null;
    }
  }

  function closeCameraOverlay(){
    stopStream();
    overlay.remove();
  }

  async function startStream(deviceId){
    stopStream();
    errBox.textContent = "";
    try{
      const constraints = { video: deviceId ? { deviceId: { exact: deviceId } } : true, audio: false };
      localStream = await navigator.mediaDevices.getUserMedia(constraints);
      video.srcObject = localStream;
    }catch(err){
      errBox.textContent = "Tidak bisa membuka kamera ini. Coba pilih kamera lain.";
    }
  }

  async function populateDeviceList(){
    try{
      // Request permission once first so device labels (e.g. "USB Webcam") show up.
      const tempStream = await navigator.mediaDevices.getUserMedia({ video: true });
      const devices = await navigator.mediaDevices.enumerateDevices();
      const cameras = devices.filter(d => d.kind === "videoinput");
      select.innerHTML = cameras.map((d,i) => `<option value="${d.deviceId}">${d.label || "Kamera " + (i+1)}</option>`).join("");
      if(cameras.length === 0){
        errBox.textContent = "Tidak ada kamera terdeteksi.";
        tempStream.getTracks().forEach(t=>t.stop());
        return;
      }
      localStream = tempStream;
      video.srcObject = tempStream;
      // If a specific device was already chosen in the dropdown, switch to it.
      if(select.value) await startStream(select.value);
    }catch(err){
      errBox.textContent = "Izin kamera ditolak atau tidak tersedia. Gunakan opsi Galeri/File sebagai gantinya.";
    }
  }

  select.addEventListener("change", ()=> startStream(select.value));

  overlay.querySelector("#captureBtn").addEventListener("click", async ()=>{
    if(!video.videoWidth){ toast("Kamera belum siap, tunggu sebentar", "warn"); return; }
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    const btn = overlay.querySelector("#captureBtn");
    btn.disabled = true;
    btn.textContent = "Mengunggah...";
    try{
      const blob = await new Promise(r => canvas.toBlob(r, "image/jpeg", 0.9));
      const file = new File([blob], `foto-${Date.now()}.jpg`, { type: "image/jpeg" });
      const result = await uploadPhotoToCloudinary(file);
      onPhotoUploaded(result);
      capturedCount++;
      overlay.querySelector("#capturedCount").textContent = `${capturedCount} foto sudah diambil.`;
    }catch(err){
      toast("Gagal unggah foto — cek koneksi internet", "warn");
    }
    btn.disabled = false;
    btn.innerHTML = `${ICONS.plus} Jepret & Simpan Foto`;
  });

  overlay.querySelector("#closeCameraBtn").addEventListener("click", closeCameraOverlay);

  populateDeviceList();
}

function trackingUrl(orderId){
  const base = location.href.replace(/index\.html.*$/, "").replace(/\/?$/, "/");
  return `${base}track.html?id=${orderId}`;
}

/* ---------------- Cucian (Order Tracking) ---------------- */

const ORDER_FLOW = ["belum-diproses", "sedang-diproses", "selesai"];
const STATUS_LABEL = {
  "belum-diproses": "Belum Diproses",
  "sedang-diproses": "Sedang Diproses",
  "selesai": "Selesai"
};

const PAYMENT_METHOD_LABEL = {
  tunai: "Tunai",
  qris: "QRIS",
  transfer: "Transfer"
};

function nextOrderStatus(current){
  const i = ORDER_FLOW.indexOf(current);
  return (i >= 0 && i < ORDER_FLOW.length - 1) ? ORDER_FLOW[i+1] : null;
}

const SELESAI_WINDOW_DAYS = 30;

function filterOrdersByBranch(orders){
  if(isBranchLocked()) return orders.filter(o => o.branchId === state.currentBranchId);
  if(state.currentBranchId !== "all") return orders.filter(o => o.branchId === state.currentBranchId);
  return orders;
}

async function getSelesaiOrdersForDisplay(){
  if(state.cucianShowAllHistory){
    return filterOrdersByBranch((await DB.getOrders()).filter(o=>o.status==="selesai"));
  }
  const since = Date.now() - SELESAI_WINDOW_DAYS*24*3600*1000;
  return filterOrdersByBranch(await DB.getRecentCompletedOrders(since));
}

function fmtHM(ms){
  if(!ms) return "—";
  return new Date(ms).toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"});
}

function minutesLate(checkInTimeMs, dateStr, workStart){
  const [h,m] = (workStart||"08:00").split(":").map(Number);
  const workStartMs = new Date(dateStr+"T00:00:00").getTime() + (h*60+m)*60000;
  return Math.max(0, Math.round((checkInTimeMs - workStartMs) / 60000));
}

async function renderMyWorkScheduleCard(){
  const doc = await fs.collection("users").doc(state.user.uid).get();
  const ws = doc.exists ? doc.data().workSchedule : null;
  if(!ws){
    return `<div class="card"><p class="small muted">Jam kerja & hari libur belum diatur Owner.</p></div>`;
  }
  const dayLabels = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
  const offDays = ws.offDays || [0];
  return `
    <div class="card">
      <div class="card-title">Jam Kerja Saya</div>
      <div class="row-between" style="margin-bottom:10px;">
        <span class="small">Jam Masuk</span>
        <span class="small" style="font-weight:700;">${ws.workStart || '08:00'}</span>
      </div>
      <div class="row-between" style="margin-bottom:12px;">
        <span class="small">Jam Pulang</span>
        <span class="small" style="font-weight:700;">${ws.workEnd || '17:00'}</span>
      </div>
      <p class="small" style="font-weight:600; margin-bottom:8px;">Hari Kerja & Libur</p>
      <div style="display:flex; flex-wrap:wrap; gap:6px;">
        ${dayLabels.map((d,i)=>`
          <span class="tag" style="${offDays.includes(i) ? 'background:var(--rose-bg); color:var(--rose);' : 'background:var(--mint-bg); color:var(--mint);'}">${d}${offDays.includes(i)?' (Libur)':''}</span>
        `).join("")}
      </div>
      ${ws.startDate ? `<p class="small muted" style="margin-top:10px;">Mulai kerja: ${fmtDate(ws.startDate)}</p>` : ""}
    </div>
  `;
}

async function pageAbsensi(){
  if(state.viewingPayslipId){
    const slips = isOwnerOrManager() ? await DB.getAllPayslips() : await DB.getPayslipsForUser(state.user.uid);
    const slip = slips.find(s=>s.id===state.viewingPayslipId);
    if(slip) return payslipDetailHtml(slip);
    state.viewingPayslipId = null;
  }

  const branchId = resolveActionBranchId();
  const branch = branchId ? await DB.getBranchById(branchId) : null;
  const attSettings = branch?.attendanceSettings || null;
  const today = Reports.todayStr();
  const todayRecord = state.user ? await DB.getTodayAttendance(state.user.uid, today) : null;
  const todayLabel = new Date().toLocaleDateString("id-ID",{weekday:'long', day:'numeric', month:'long', year:'numeric'});

  let actionArea;
  if(!branchId){
    actionArea = `<p class="small muted">Pilih cabang spesifik dulu di Beranda untuk bisa absen.</p>`;
  } else if(!attSettings?.lat){
    actionArea = `<p class="small muted">Cabang ini belum diset lokasi absensinya — Owner perlu atur dulu di Atur → Cabang.</p>`;
  } else if(!todayRecord){
    actionArea = `<button class="btn btn-primary btn-block" id="checkInBtn">${ICONS.pin} Absen Masuk</button>`;
  } else if(!todayRecord.checkOutTime){
    actionArea = `<button class="btn btn-primary btn-block" id="checkOutBtn">${ICONS.pin} Absen Pulang</button>`;
  } else {
    actionArea = `<p class="small" style="color:var(--mint); font-weight:600;">✓ Absensi hari ini sudah lengkap</p>`;
  }

  const staffSection = `
    <div class="hero-balance">
      <div class="card-title">Absensi Hari Ini</div>
      <div class="amount" style="font-family:var(--font-display); font-size:19px;">${todayLabel}</div>
      <div class="sub">
        <span>Masuk: <b>${fmtHM(todayRecord?.checkInTime)}</b>${todayRecord ? (todayRecord.lateMinutes>0 ? ` (terlambat ${todayRecord.lateMinutes} menit)` : ' (tepat waktu)') : ''}</span>
        <span>Pulang: <b>${fmtHM(todayRecord?.checkOutTime)}</b></span>
      </div>
    </div>
    ${actionArea}
    ${state.role === "pegawai" ? await renderMyWorkScheduleCard() : ""}
  `;

  const ownerSection = isOwnerOrManager() ? await renderAbsensiOwnerReport() : "";
  const leaveSection = state.user ? await renderMyLeaveRequestsSection(state.user.uid) : "";
  const myPayslipsSection = (state.role === "pegawai" && state.user) ? await renderMyPayslipsSection(state.user.uid) : "";

  return `${staffSection}${leaveSection}${ownerSection}${myPayslipsSection}`;
}

const LEAVE_STATUS_LABEL = { pending: "Menunggu", approved: "Disetujui", rejected: "Ditolak" };
const LEAVE_STATUS_COLOR = { pending: "var(--coin)", approved: "var(--mint)", rejected: "var(--rose)" };

async function renderMyLeaveRequestsSection(userId){
  const requests = await DB.getLeaveRequestsForUser(userId);
  return `
    <h3 class="section-title" style="margin-top:24px;">Ajukan Izin</h3>
    <div class="card">
      <div style="display:flex; gap:10px;">
        <div class="field" style="flex:1;"><label>Dari Tanggal</label><input type="date" id="leaveStart" value="${Reports.todayStr()}"></div>
        <div class="field" style="flex:1;"><label>Sampai Tanggal</label><input type="date" id="leaveEnd" value="${Reports.todayStr()}"></div>
      </div>
      <div class="field" style="margin-bottom:0;"><label>Alasan</label><textarea id="leaveReason" placeholder="Contoh: Sakit, acara keluarga, dll"></textarea></div>
      <button class="btn btn-primary btn-block" id="submitLeaveBtn" style="margin-top:10px;">Ajukan Izin</button>
    </div>
    ${requests.length ? `
      <div class="card">
        <div class="card-title">Riwayat Pengajuan Saya</div>
        ${requests.map(r=>`
          <div style="padding:10px 0; border-bottom:1px dashed var(--line);">
            <div class="row-between">
              <div class="small" style="font-weight:600;">${fmtDate(r.startDate)}${r.startDate!==r.endDate ? ` — ${fmtDate(r.endDate)}` : ''}</div>
              <span class="small" style="font-weight:700; color:${LEAVE_STATUS_COLOR[r.status]};">${LEAVE_STATUS_LABEL[r.status]}</span>
            </div>
            <div class="small muted">${escapeHtml(r.reason||'-')}</div>
          </div>
        `).join("")}
      </div>
    ` : ""}
  `;
}

function calculatePayslip(staffMember, attendanceRecords, periodStart, periodEnd, approvedLeaveDates){
  const cfg = staffMember.salaryConfig;
  if(!cfg) return null;
  const leaveDates = approvedLeaveDates || new Set();
  const attendanceCount = attendanceRecords.length;

  const basePay = cfg.type === "harian" ? cfg.baseAmount * attendanceCount : cfg.baseAmount;

  const allowanceDetails = (cfg.allowances||[]).filter(a=>a.enabled).map(a=>{
    // Fall back to the old (pre-per-allowance-type) behavior for configs saved before this option existed.
    const allowType = a.type || (cfg.type === "harian" ? "harian" : "bulanan");
    return {
      label: a.label,
      amount: allowType === "harian" ? a.amount * attendanceCount : a.amount
    };
  });
  const totalAllowances = allowanceDetails.reduce((s,a)=>s+a.amount, 0);

  const deductionDetails = [];
  let totalDeduction = 0;
  if(cfg.lateDeduction?.enabled){
    for(const rec of attendanceRecords){
      if(rec.lateMinutes > 0){
        const intervals = Math.floor(rec.lateMinutes / cfg.lateDeduction.perMinutes);
        const deduction = intervals * cfg.lateDeduction.amountPerInterval;
        if(deduction > 0){
          totalDeduction += deduction;
          deductionDetails.push({ date: rec.date, lateMinutes: rec.lateMinutes, deduction });
        }
      }
    }
  }

  const absenceDetails = [];
  const excusedDetails = [];
  let totalAbsenceDeduction = 0;
  if(cfg.absenceDeduction?.enabled){
    const attendedDates = new Set(attendanceRecords.map(r=>r.date));
    const offDays = staffMember.workSchedule?.offDays ?? [0];
    const startDate = staffMember.workSchedule?.startDate || "1970-01-01";
    const cursor = new Date(periodStart+"T00:00:00");
    const end = new Date(periodEnd+"T00:00:00");
    while(cursor <= end){
      const dateStr = localDateStr(cursor);
      const isOffDay = offDays.includes(cursor.getDay());
      const isFuture = dateStr > Reports.todayStr();
      const isBeforeStart = dateStr < startDate;
      if(!isOffDay && !isFuture && !isBeforeStart && !attendedDates.has(dateStr)){
        if(leaveDates.has(dateStr)){
          excusedDetails.push({ date: dateStr });
        } else {
          absenceDetails.push({ date: dateStr, deduction: cfg.absenceDeduction.amountPerDay });
          totalAbsenceDeduction += cfg.absenceDeduction.amountPerDay;
        }
      }
      cursor.setDate(cursor.getDate()+1);
    }
  }
  totalDeduction += totalAbsenceDeduction;

  return {
    userId: staffMember.uid, userName: staffMember.name || staffMember.email,
    periodStart, periodEnd,
    salaryType: cfg.type, baseAmount: cfg.baseAmount, attendanceCount,
    basePay, allowanceDetails, totalAllowances,
    deductionDetails, absenceDetails, excusedDetails, totalAbsenceDeduction, totalDeduction,
    totalPay: basePay + totalAllowances - totalDeduction
  };
}

function payslipDetailHtml(s){
  return `
    <div class="card no-print" style="margin-bottom:14px;">
      <button class="btn btn-outline" data-action="back-to-absensi">${ICONS.arrowUp} Kembali</button>
    </div>
    <div class="receipt">
      <h2 style="text-align:center;">SLIP GAJI</h2>
      <p class="small muted" style="text-align:center; margin-top:-8px;">${escapeHtml(state.businessName)}</p>
      <div class="r-row"><span>Nama</span><span class="val">${escapeHtml(s.userName)}</span></div>
      <div class="r-row"><span>Periode</span><span class="val">${fmtDate(s.periodStart)} — ${fmtDate(s.periodEnd)}</span></div>
      <div class="r-row"><span>Jenis Gaji Pokok</span><span class="val">${s.salaryType === 'harian' ? 'Harian' : s.salaryType === 'mingguan' ? 'Mingguan' : 'Bulanan'}</span></div>
      ${s.salaryType === "harian" ? `<div class="r-row"><span>Jumlah Hari Masuk</span><span class="val">${s.attendanceCount} hari</span></div>` : ""}
      <div class="r-row" style="margin-top:10px;"><span>Gaji Pokok</span><span class="val num">${Reports.formatRupiah(s.basePay)}</span></div>
      ${s.allowanceDetails.map(a=>`<div class="r-row"><span>${escapeHtml(a.label)}</span><span class="val num">${Reports.formatRupiah(a.amount)}</span></div>`).join("")}
      ${s.deductionDetails.length ? `
        <div class="r-row" style="margin-top:6px;"><span style="font-weight:700;">Potongan Keterlambatan</span><span></span></div>
        ${s.deductionDetails.map(d=>`<div class="r-row"><span style="padding-left:12px;">${fmtDate(d.date)} (telat ${d.lateMinutes} menit)</span><span class="val num">-${Reports.formatRupiah(d.deduction)}</span></div>`).join("")}
      ` : ""}
      ${s.absenceDetails?.length ? `
        <div class="r-row" style="margin-top:6px;"><span style="font-weight:700;">Potongan Tanpa Izin (Alpa)</span><span></span></div>
        ${s.absenceDetails.map(d=>`<div class="r-row"><span style="padding-left:12px;">${fmtDate(d.date)}</span><span class="val num">-${Reports.formatRupiah(d.deduction)}</span></div>`).join("")}
      ` : ""}
      ${s.excusedDetails?.length ? `
        <div class="r-row" style="margin-top:6px;"><span style="font-weight:700; color:var(--mint);">Izin Disetujui (Tidak Dipotong)</span><span></span></div>
        ${s.excusedDetails.map(d=>`<div class="r-row"><span style="padding-left:12px;">${fmtDate(d.date)}</span><span class="val" style="color:var(--mint);">Izin</span></div>`).join("")}
      ` : ""}
      <div class="r-row total" style="margin-top:10px;"><span>TOTAL GAJI DITERIMA</span><span class="val num">${Reports.formatRupiah(s.totalPay)}</span></div>
    </div>

    <div class="card" style="margin-top:14px;">
      ${s.paidStatus ? `
        <p class="small" style="font-weight:700; color:var(--mint);">✓ Sudah Dibayar</p>
        <p class="small muted">Dibayar tanggal ${fmtDate(s.paidDate)} — otomatis tercatat sebagai Beban Gaji di Laporan Keuangan.</p>
      ` : isOwnerOrManager() ? `
        <p class="small" style="font-weight:700; margin-bottom:10px;">Status Pembayaran</p>
        <div class="field"><label>Tanggal Dibayarkan</label><input type="date" id="payslipPaidDate" value="${Reports.todayStr()}"></div>
        <button class="btn btn-primary btn-block no-print" data-action="mark-payslip-paid" data-id="${s.id}">Tandai Sudah Dibayar</button>
        <p class="small muted" style="margin-top:8px;">Begitu ditandai, otomatis tercatat sebagai transaksi Kas Keluar (Beban Gaji) di tanggal itu — masuk ke Laporan Laba Rugi.</p>
      ` : `<p class="small muted">Belum ditandai dibayar oleh Owner.</p>`}
    </div>

    <div class="btn-row no-print" style="margin-top:14px;">
      <button class="btn btn-outline btn-block" data-action="print">${ICONS.printer} Cetak / Simpan PDF</button>
      ${isOwnerOrManager() ? `<button class="btn btn-danger btn-block" data-action="delete-payslip" data-id="${s.id}">Hapus</button>` : ""}
    </div>
  `;
}

async function renderMyPayslipsSection(userId){
  const slips = await DB.getPayslipsForUser(userId);
  return `
    <h3 class="section-title" style="margin-top:24px;">Slip Gaji Saya</h3>
    ${slips.length===0 ? emptyState("Belum ada slip gaji.") : slips.map(s=>`
      <div class="card" data-action="view-payslip" data-id="${s.id}" style="cursor:pointer; margin-bottom:10px;">
        <div class="row-between">
          <div>
            <div style="font-weight:700;">${fmtDate(s.periodStart)} — ${fmtDate(s.periodEnd)}</div>
            <div class="small muted">${s.attendanceCount} hari masuk</div>
          </div>
          <div class="small" style="font-weight:700; color:var(--mint);">${Reports.formatRupiah(s.totalPay)}</div>
        </div>
      </div>
    `).join("")}
  `;
}

async function renderAbsensiOwnerReport(){
  const range = state.absensiReportRange || { start: Reports.startOfMonth(), end: Reports.todayStr() };
  state.absensiReportRange = range;
  let records = await DB.getAttendanceInRange(range.start, range.end);
  let staffList = await DB.getBusinessStaff();
  if(state.role === "manager"){
    records = records.filter(r => r.branchId === state.userBranchId);
    staffList = staffList.filter(s => s.uid === state.user?.uid || (s.role !== "owner" && s.branchId === state.userBranchId));
  }
  const staffMap = Object.fromEntries(staffList.map(s=>[s.uid, s.name||s.email]));
  const branchMap = Object.fromEntries(state.branches.map(b=>[b.id,b.name]));
  const lateCount = records.filter(r=>r.lateMinutes>0).length;

  return `
    <h3 class="section-title" style="margin-top:24px;">Rekap Absensi Semua Pegawai</h3>
    <div class="card no-print">
      <div class="card-title">Periode</div>
      <div class="date-range">
        <input type="date" id="absStart" value="${range.start}">
        <span class="muted small">s/d</span>
        <input type="date" id="absEnd" value="${range.end}">
      </div>
      ${lateCount>0 ? `<p class="small" style="color:var(--rose); margin-top:8px;">⚠ ${lateCount} catatan terlambat di periode ini</p>` : ''}
    </div>
    <div class="card">
      ${records.length===0 ? emptyState("Belum ada data absensi di periode ini.") : `
        <div style="overflow-x:auto;">
          <table style="width:100%; border-collapse:collapse; font-size:12.5px;">
            <thead><tr style="text-align:left; border-bottom:2px solid var(--line);">
              <th style="padding:8px 6px;">Tanggal</th><th style="padding:8px 6px;">Nama</th><th style="padding:8px 6px;">Cabang</th>
              <th style="padding:8px 6px;">Masuk</th><th style="padding:8px 6px;">Pulang</th><th style="padding:8px 6px;">Terlambat</th>
            </tr></thead>
            <tbody>
              ${records.map(r=>`
                <tr style="border-bottom:1px solid var(--line);">
                  <td style="padding:8px 6px;">${fmtDate(r.date)}</td>
                  <td style="padding:8px 6px;">${escapeHtml(staffMap[r.userId]||r.userName||'-')}</td>
                  <td style="padding:8px 6px;">${escapeHtml(branchMap[r.branchId]||'-')}</td>
                  <td style="padding:8px 6px;" class="num">${fmtHM(r.checkInTime)}</td>
                  <td style="padding:8px 6px;" class="num">${fmtHM(r.checkOutTime)}</td>
                  <td style="padding:8px 6px;" class="num">${r.lateMinutes>0 ? `<span style="color:var(--rose); font-weight:700;">${r.lateMinutes} menit</span>` : '-'}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `}
    </div>
    <div class="btn-row no-print">
      <button class="btn btn-outline btn-block" data-action="print">${ICONS.printer} Cetak / Simpan PDF</button>
      <button class="btn btn-outline btn-block" data-action="export-absensi-csv">${ICONS.download} Unduh Excel (CSV)</button>
    </div>

    <h3 class="section-title" style="margin-top:24px;">Buat Slip Gaji</h3>
    <div class="card no-print">
      <div class="field">
        <label>Pegawai</label>
        <select id="payslipStaffSelect">
          <option value="">— Pilih pegawai —</option>
          ${staffList.filter(s=>s.salaryConfig).map(s=>`<option value="${s.uid}">${escapeHtml(s.name||s.email)}</option>`).join("")}
        </select>
      </div>
      ${staffList.filter(s=>!s.salaryConfig).length > 0 ? `<p class="small muted">${staffList.filter(s=>!s.salaryConfig).length} pegawai belum diatur gajinya (atur dulu di Atur → Anggota Tim).</p>` : ""}
      <p class="small muted" style="margin:8px 0;">Pakai periode yang sama dengan filter tanggal rekap absensi di atas (${fmtDate(range.start)} — ${fmtDate(range.end)}).</p>
      <button class="btn btn-primary btn-block" id="generatePayslipBtn">Buat Slip Gaji</button>
    </div>

    ${await renderLeaveApprovalSection()}

    <h3 class="section-title" style="margin-top:24px;">Riwayat Slip Gaji (Semua Pegawai)</h3>
    ${await renderAllPayslipsList()}
  `;
}

async function renderLeaveApprovalSection(){
  let requests = await DB.getAllLeaveRequests();
  if(state.role === "manager"){
    const myStaff = (await DB.getBusinessStaff()).filter(s => s.role !== "owner" && s.branchId === state.userBranchId).map(s=>s.uid);
    requests = requests.filter(r => myStaff.includes(r.userId));
  }
  const pending = requests.filter(r=>r.status==="pending");
  const decided = requests.filter(r=>r.status!=="pending").slice(0,10);

  return `
    <h3 class="section-title" style="margin-top:24px;">Pengajuan Izin Pegawai${pending.length ? ` (${pending.length} menunggu)` : ''}</h3>
    ${pending.length===0 ? emptyState("Tidak ada pengajuan izin yang menunggu.") : pending.map(r=>`
      <div class="card" style="margin-bottom:10px;">
        <div style="font-weight:700;">${escapeHtml(r.userName)}</div>
        <div class="small muted" style="margin-top:2px;">${fmtDate(r.startDate)}${r.startDate!==r.endDate ? ` — ${fmtDate(r.endDate)}` : ''}</div>
        <div class="small" style="margin-top:6px;">${escapeHtml(r.reason||'-')}</div>
        <div class="btn-row" style="margin-top:10px;">
          <button class="btn btn-primary btn-block" data-action="approve-leave" data-id="${r.id}" style="background:var(--mint);">Setujui</button>
          <button class="btn btn-outline btn-block" data-action="reject-leave" data-id="${r.id}">Tolak</button>
        </div>
      </div>
    `).join("")}
    ${decided.length ? `
      <div class="card">
        <div class="card-title">Riwayat Keputusan Terbaru</div>
        ${decided.map(r=>`
          <div style="padding:8px 0; border-bottom:1px dashed var(--line);">
            <div class="row-between">
              <div class="small">${escapeHtml(r.userName)} · ${fmtDate(r.startDate)}${r.startDate!==r.endDate ? `—${fmtDate(r.endDate)}` : ''}</div>
              <span class="small" style="font-weight:700; color:${LEAVE_STATUS_COLOR[r.status]};">${LEAVE_STATUS_LABEL[r.status]}</span>
            </div>
          </div>
        `).join("")}
      </div>
    ` : ""}
  `;
}

async function renderAllPayslipsList(){
  let slips = await DB.getAllPayslips();
  if(state.role === "manager"){
    const myStaff = (await DB.getBusinessStaff()).filter(s => s.role !== "owner" && s.branchId === state.userBranchId).map(s=>s.uid);
    slips = slips.filter(s => myStaff.includes(s.userId));
  }
  if(slips.length === 0) return emptyState("Belum ada slip gaji dibuat.");
  return slips.map(s=>`
    <div class="card" data-action="view-payslip" data-id="${s.id}" style="cursor:pointer; margin-bottom:10px;">
      <div class="row-between">
        <div>
          <div style="font-weight:700;">${escapeHtml(s.userName)}</div>
          <div class="small muted">${fmtDate(s.periodStart)} — ${fmtDate(s.periodEnd)}</div>
        </div>
        <div class="small" style="font-weight:700; color:var(--mint);">${Reports.formatRupiah(s.totalPay)}</div>
      </div>
    </div>
  `).join("");
}

function exportAbsensiCsv(records, staffMap, branchMap){
  const header = "Tanggal,Nama,Cabang,Jam Masuk,Jam Pulang,Terlambat (menit)\n";
  const rows = records.map(r=>{
    const name = (staffMap[r.userId]||r.userName||"").replace(/"/g,'""');
    const branch = (branchMap[r.branchId]||"").replace(/"/g,'""');
    return `${r.date},"${name}","${branch}",${fmtHM(r.checkInTime)},${fmtHM(r.checkOutTime)},${r.lateMinutes||0}`;
  }).join("\n");
  downloadFile(`absensi-${Reports.todayStr()}.csv`, header + rows, "text/csv");
}

const SUPER_ADMIN_EMAIL = "agungnugroho878@gmail.com";

const PLAN_CONFIG = {
  rintisan:   { label: "Rintisan",   maxBranches: 1,        price: 99000 },
  berkembang: { label: "Berkembang", maxBranches: 5,        price: 199000 },
  jaringan:   { label: "Jaringan",   maxBranches: Infinity, price: 399000 }
};

const AKUN_MENU_META = {
  transaksi:   { label: "Riwayat Transaksi", desc: "Semua catatan kas masuk/keluar", icon: ICONS.list, color: "var(--suds-blue)", bg: "#EAF2F9" },
  member:      { label: "Member",     desc: "Pelanggan & promo loyalty",     icon: ICONS.star,     color: "var(--coin)",      bg: "var(--coin-bg)" },
  "tugas-saya":{ label: "Tugas Saya", desc: "Tugas jemput & antar Anda",     icon: ICONS.pin,      color: "var(--rose)", bg: "var(--rose-bg)" },
  absensi:     { label: "Absensi",    desc: "Absen masuk/pulang & gaji",     icon: ICONS.calendar, color: "var(--mint)",      bg: "var(--mint-bg)" },
  laporan:     { label: "Laporan",    desc: "Laba Rugi, Neraca, Aset Tetap", icon: ICONS.report,   color: "var(--suds-blue-dark)", bg: "#EAF2F9" },
  pengaturan:  { label: "Atur",       desc: "Profil usaha, harga, cabang",   icon: ICONS.settings, color: "var(--ink-navy)",  bg: "var(--foam-white)" },
  langganan:   { label: "Kelola Langganan", desc: "Trial & status semua usaha (admin)", icon: ICONS.report, color: "#8B5CF6", bg: "#F1EBFC" }
};

async function pageKelolaLangganan(){
  const businesses = await DB.getAllBusinessesForAdmin();
  const today = Reports.todayStr();

  const counts = {};
  const owners = {};
  const settingsMap = {};
  await Promise.all(businesses.map(async b=>{
    const [c, owner, settings] = await Promise.all([
      DB.getBusinessDataCounts(b.id),
      DB.getOwnerForBusiness(b.id),
      DB.getBusinessSettingsById(b.id)
    ]);
    counts[b.id] = c;
    owners[b.id] = owner;
    settingsMap[b.id] = settings;
  }));

  function trialInfo(b){
    if(b.subscriptionStatus === "active") return { label: "Aktif (Berlangganan)", color: "var(--mint)", daysLeft: null };
    if(!b.trialStartDate) return { label: "Trial (tanggal tidak diketahui)", color: "var(--coin)", daysLeft: null };
    const trialEnd = new Date(b.trialStartDate+"T00:00:00");
    trialEnd.setDate(trialEnd.getDate() + (b.trialDays||14));
    const daysLeft = Math.ceil((trialEnd - new Date())/(24*60*60*1000));
    if(daysLeft < 0) return { label: `Trial Berakhir (${Math.abs(daysLeft)} hari lalu)`, color: "var(--rose)", daysLeft };
    return { label: `Trial — ${daysLeft} hari lagi`, color: "var(--coin)", daysLeft };
  }

  function billingInfo(b){
    if(b.subscriptionStatus !== "active" || !b.subscriptionRenewedAt) return null;
    const start = b.subscriptionRenewedAt;
    const due = new Date(start+"T00:00:00");
    due.setMonth(due.getMonth()+1);
    const dueStr = localDateStr(due);
    const daysLeft = Math.ceil((due - new Date())/(24*60*60*1000));
    return { start, due: dueStr, daysLeft, overdue: daysLeft < 0 };
  }

  return `
    <h3 class="section-title">Kelola Langganan Semua Usaha</h3>
    <p class="small muted" style="margin-bottom:14px;">Cuma Anda (admin platform) yang bisa lihat & atur halaman ini. Cek jumlah data untuk bedakan usaha yang beneran dipakai dari yang kosong/bekas percobaan.</p>
    ${businesses.length===0 ? emptyState("Belum ada usaha terdaftar.") : businesses.map(b=>{
      const info = trialInfo(b);
      const c = counts[b.id] || { transactions:0, orders:0, members:0 };
      const isEmpty = c.transactions===0 && c.orders===0 && c.members===0;
      const owner = owners[b.id];
      const settings = settingsMap[b.id] || {};
      const billing = billingInfo(b);
      return `
        <div class="card" style="margin-bottom:12px; ${isEmpty ? 'border:1.5px dashed var(--line);' : 'border:1.5px solid var(--mint);'}">
          <div class="row-between">
            <div>
              <div style="font-weight:700;">${escapeHtml(b.name)}</div>
              <div class="small muted">Daftar: ${b.createdAt ? new Date(b.createdAt).toLocaleDateString('id-ID') : '-'} · ID: ${b.id.slice(0,8)}...</div>
            </div>
            <span class="small" style="font-weight:700; color:${info.color};">${info.label}</span>
          </div>

          <div class="small" style="margin-top:10px; line-height:1.8; background:var(--foam-white); border-radius:8px; padding:8px 10px;">
            <b>Owner:</b> ${escapeHtml(owner?.name || owner?.email || 'Tidak ditemukan')}${owner?.email ? ` (${escapeHtml(owner.email)})` : ''}<br>
            <b>Kode Undangan/ID Bisnis:</b> <span class="num">${b.id}</span><br>
            <b>No. HP:</b> ${escapeHtml(settings.businessPhone || '-')}<br>
            <b>Alamat:</b> ${escapeHtml(settings.businessAddress || '-')}
          </div>

          ${billing ? `
            <div class="small" style="margin-top:8px; padding:8px 10px; border-radius:8px; background:${billing.overdue ? 'var(--rose-bg)' : 'var(--mint-bg)'};">
              <b>Mulai Langganan:</b> ${fmtDate(billing.start)}<br>
              <b>Jatuh Tempo:</b> ${fmtDate(billing.due)} ${billing.overdue ? `<span style="color:var(--rose); font-weight:700;">(lewat ${Math.abs(billing.daysLeft)} hari — perlu diperpanjang!)</span>` : `<span style="color:var(--mint); font-weight:700;">(${billing.daysLeft} hari lagi)</span>`}
            </div>
          ` : ''}

          <div class="small" style="margin-top:8px; ${isEmpty ? 'color:var(--text-muted);' : 'color:var(--mint); font-weight:600;'}">
            ${isEmpty ? '📭 Kosong — kemungkinan besar bekas percobaan, aman dihapus' : `📦 Ada data: ${c.transactions} transaksi · ${c.orders} pesanan cucian · ${c.members} member`}
          </div>
          <div class="field" style="margin-top:10px; margin-bottom:8px;">
            <label class="small">Paket</label>
            <select class="plan-select" data-id="${b.id}">
              ${Object.entries(PLAN_CONFIG).map(([id,p])=>`<option value="${id}" ${(b.plan||'rintisan')===id?'selected':''}>${p.label} (${p.maxBranches===Infinity?'tanpa batas':p.maxBranches+' cabang'} — Rp${p.price.toLocaleString('id-ID')}/bln)</option>`).join("")}
            </select>
          </div>
          <div class="btn-row" style="margin-top:10px;">
            ${b.subscriptionStatus !== "active"
              ? `<button class="btn btn-primary btn-block" data-action="activate-subscription" data-id="${b.id}" style="background:var(--mint);">Aktifkan Langganan</button>`
              : `<button class="btn btn-primary btn-block" data-action="renew-subscription" data-id="${b.id}" style="background:var(--mint);">Perpanjang 1 Bulan</button>
                 <button class="btn btn-outline btn-block" data-action="revert-to-trial" data-id="${b.id}">Kembalikan ke Trial</button>`}
            <button class="btn btn-outline btn-block" data-action="extend-trial" data-id="${b.id}">+7 Hari Trial</button>
          </div>
          <button class="btn btn-danger btn-block" data-action="delete-business-admin" data-id="${b.id}" data-name="${escapeHtml(b.name)}" style="margin-top:8px;">Hapus Usaha Ini (Testing/Sampah)</button>
          </div>
        </div>
      `;
    }).join("")}
  `;
}

async function pageAkun(){
  const menuIds = ["transaksi", "member", "tugas-saya"];
  if(isOwnerOrManager()) menuIds.push("absensi");
  menuIds.push("pengaturan");
  if(state.user?.email === SUPER_ADMIN_EMAIL) menuIds.push("langganan");

  return `
    <div class="hero-balance">
      <div class="card-title">Akun</div>
      <div class="amount" style="font-family:var(--font-display); font-size:20px;">${escapeHtml(state.userName || state.user?.email || "")}</div>
      <div class="sub"><span>${roleLabel()} · ${escapeHtml(state.businessName)}</span></div>
    </div>

    <div class="akun-menu-grid">
      ${menuIds.map(id=>{
        const m = AKUN_MENU_META[id];
        return `
          <div class="akun-menu-item" data-action="goto-page" data-page="${id}">
            <div class="akun-menu-icon" style="background:${m.bg}; color:${m.color};">${m.icon}</div>
            <div class="akun-menu-label">${m.label}</div>
            <div class="akun-menu-desc">${m.desc}</div>
          </div>
        `;
      }).join("")}
    </div>

    <button class="btn btn-outline btn-block" data-action="logout" style="margin-top:18px;">Keluar</button>
  `;
}

async function pageTugasSaya(){
  const uid = state.user?.uid;
  const activeOrders = await DB.getActiveOrders();
  const recentSelesai = await getSelesaiOrdersForDisplay();
  const seen = new Set();
  const allRelevant = [...activeOrders, ...recentSelesai].filter(o=>{
    if(seen.has(o.id)) return false;
    seen.add(o.id);
    return true;
  });

  const myTasks = allRelevant.filter(o => o.courierId === uid);
  const pickupTasks = myTasks.filter(o => o.needsPickup && !o.pickupDone);
  const deliveryTasks = myTasks.filter(o => o.needsDelivery && !o.deliveryDone);

  function taskCardHtml(o, type){
    const address = type === "pickup" ? o.pickupAddress : o.deliveryAddress;
    const location = type === "pickup" ? o.pickupLocation : o.deliveryLocation;
    const mapsUrl = location ? `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}` : null;
    return `
      <div class="card" style="margin-bottom:12px;">
        <div class="row-between">
          <div>
            <div style="font-weight:700;">${escapeHtml(o.customerName || "Tanpa nama")}</div>
            <div class="small muted">${escapeHtml(o.customerPhone || "")}</div>
          </div>
          <span class="order-id-badge">${ICONS.hash}${o.receiptNo || "------"}</span>
        </div>
        ${address ? `<div class="small" style="margin-top:8px;">📍 ${escapeHtml(address)}</div>` : `<div class="small muted" style="margin-top:8px;">Alamat belum diisi</div>`}
        <div class="btn-row" style="margin-top:10px;">
          ${mapsUrl ? `<a href="${mapsUrl}" target="_blank" rel="noopener" class="btn btn-outline btn-block" style="text-decoration:none;">${ICONS.pin} Navigasi</a>` : ""}
          <button class="btn btn-primary btn-block" data-action="task-mark-done" data-id="${o.id}" data-type="${type}">Tandai Selesai</button>
        </div>
      </div>
    `;
  }

  return `
    <p class="small muted" style="margin-bottom:14px;">Daftar pesanan yang jadi tugas jemput/antar Anda. Tandai selesai begitu sudah dikerjakan.</p>
    <h3 class="section-title">🚗 Perlu Dijemput (${pickupTasks.length})</h3>
    ${pickupTasks.length===0 ? emptyState("Tidak ada tugas jemput saat ini.") : pickupTasks.map(o=>taskCardHtml(o,"pickup")).join("")}
    <h3 class="section-title" style="margin-top:20px;">📦 Perlu Diantar (${deliveryTasks.length})</h3>
    ${deliveryTasks.length===0 ? emptyState("Tidak ada tugas antar saat ini.") : deliveryTasks.map(o=>taskCardHtml(o,"delivery")).join("")}
  `;
}

async function pageCucian(){
  const activeOrders = filterOrdersByBranch(await DB.getActiveOrders());
  const selesaiOrders = await getSelesaiOrdersForDisplay();
  const filter = state.cucianFilter || "belum-diproses";
  const counts = {
    "belum-diproses": activeOrders.filter(o=>o.status==="belum-diproses").length,
    "sedang-diproses": activeOrders.filter(o=>o.status==="sedang-diproses").length,
    "selesai": selesaiOrders.length
  };
  const isActiveTab = filter !== "selesai";
  const activeBranchName = isBranchLocked()
    ? state.branches.find(b=>b.id===state.currentBranchId)?.name
    : (state.currentBranchId !== "all" ? state.branches.find(b=>b.id===state.currentBranchId)?.name : "Semua Cabang");

  const tabBtn = (id,label) => `
    <button class="cucian-tab ${filter===id?'active':''} status-${id}" data-cucian-tab="${id}">
      ${label}<span class="cucian-tab-count">${counts[id]}</span>
    </button>`;

  const sortOptions = isActiveTab ? `
    <option value="deadline-asc" ${state.cucianSort==='deadline-asc'?'selected':''}>Deadline terdekat</option>
    <option value="deadline-desc" ${state.cucianSort==='deadline-desc'?'selected':''}>Deadline terlama</option>
    <option value="created-desc" ${state.cucianSort==='created-desc'?'selected':''}>Baru dibuat</option>
    <option value="created-asc" ${state.cucianSort==='created-asc'?'selected':''}>Lama dibuat</option>
  ` : `
    <option value="created-desc" ${state.cucianSort==='created-desc'?'selected':''}>Baru selesai</option>
    <option value="created-asc" ${state.cucianSort==='created-asc'?'selected':''}>Lama selesai</option>
  `;

  const specialFilterLabels = {
    "needs-pickup": "🚗 Perlu Dijemput",
    "overdue": "⏰ Terlambat",
    "ready": "📦 Siap Diambil/Antar"
  };
  const specialFilterBanner = state.cucianSpecialFilter ? `
    <div class="row-between" style="background:var(--foam-white); border-radius:10px; padding:10px 14px; margin-bottom:12px;">
      <span class="small" style="font-weight:700;">Filter aktif: ${specialFilterLabels[state.cucianSpecialFilter]}</span>
      <button class="btn btn-ghost" data-action="clear-cucian-special-filter" style="padding:4px 8px;">Hapus Filter ✕</button>
    </div>
  ` : "";

  return `
    <button class="btn btn-primary btn-block" data-action="add-order" style="margin-bottom:14px;">${ICONS.plus} Pesanan Cucian Baru</button>
    ${specialFilterBanner}

    <div class="cucian-search">
      ${ICONS.search}
      <input type="text" id="cucianSearchInput" placeholder="Cari ID, nama, atau no. WA..." value="${escapeHtml(state.cucianSearch)}">
    </div>

    <div class="cucian-tabs">
      ${tabBtn("belum-diproses","Belum Diproses")}
      ${tabBtn("sedang-diproses","Sedang Diproses")}
      ${tabBtn("selesai","Selesai")}
    </div>

    ${filter === "selesai" ? `
      <label class="small muted" style="display:flex; align-items:center; gap:8px; margin-bottom:10px; cursor:pointer;">
        <input type="checkbox" id="cucianShowAllHistoryToggle" ${state.cucianShowAllHistory?'checked':''} style="width:auto; margin:0;">
        Tampilkan semua riwayat (bukan cuma ${SELESAI_WINDOW_DAYS} hari terakhir) — mungkin lebih lambat kalau riwayatnya sudah banyak
      </label>
    ` : ""}

    <div class="cucian-sort-row">
      ${ICONS.sort}
      <select id="cucianSortSelect">${sortOptions}</select>
    </div>

    <div id="cucianListContainer"></div>
  `;
}

function applySearchSort(orders, search, sort){
  let list = orders;
  if(search){
    const q = search.trim().toLowerCase();
    list = list.filter(o =>
      String(o.receiptNo||"").toLowerCase().includes(q) ||
      (o.customerName||"").toLowerCase().includes(q) ||
      (o.customerPhone||"").toLowerCase().includes(q)
    );
  }
  const sorters = {
    "deadline-asc": (a,b) => (a.estimatedReadyAt ?? Infinity) - (b.estimatedReadyAt ?? Infinity),
    "deadline-desc": (a,b) => (b.estimatedReadyAt ?? -Infinity) - (a.estimatedReadyAt ?? -Infinity),
    "created-desc": (a,b) => (b.createdAt||0) - (a.createdAt||0),
    "created-asc": (a,b) => (a.createdAt||0) - (b.createdAt||0)
  };
  return list.slice().sort(sorters[sort] || sorters["created-desc"]);
}

function filterAndSortOrders(orders, status, search, sort){
  const list = orders.filter(o => o.status === status);
  return applySearchSort(list, search, sort);
}

async function renderCucianList(){
  const container = document.getElementById("cucianListContainer");
  if(!container) return;

  let list;
  if(state.cucianSpecialFilter === "needs-pickup"){
    const all = filterOrdersByBranch(await DB.getActiveOrders()).filter(o => o.needsPickup && !o.pickupDone);
    list = applySearchSort(all, state.cucianSearch, state.cucianSort);
  } else if(state.cucianSpecialFilter === "overdue"){
    const all = filterOrdersByBranch(await DB.getActiveOrders()).filter(o => o.estimatedReadyAt && formatCountdown(o.estimatedReadyAt).overdue);
    list = applySearchSort(all, state.cucianSearch, state.cucianSort);
  } else if(state.cucianSpecialFilter === "ready" && state.cucianFilter === "selesai"){
    const all = (await getSelesaiOrdersForDisplay()).filter(o => !o.needsDelivery || !o.deliveryDone);
    list = applySearchSort(all, state.cucianSearch, state.cucianSort);
  } else {
    const all = state.cucianFilter === "selesai"
      ? await getSelesaiOrdersForDisplay()
      : filterOrdersByBranch(await DB.getActiveOrders());
    list = filterAndSortOrders(all, state.cucianFilter, state.cucianSearch, state.cucianSort);
  }

  const pageSize = state.cucianPageSize || 25;
  const totalPages = Math.max(1, Math.ceil(list.length / pageSize));
  if(state.cucianPage > totalPages) state.cucianPage = totalPages;
  if(state.cucianPage < 1) state.cucianPage = 1;
  const start = (state.cucianPage - 1) * pageSize;
  const pageItems = list.slice(start, start + pageSize);

  container.innerHTML = `
    <div class="row-between no-print" style="margin-bottom:10px;">
      <span class="small muted">${list.length} pesanan</span>
      <select id="cucianPageSizeSelect" style="border:1.5px solid var(--line); border-radius:8px; padding:6px 8px; font-size:12.5px;">
        ${[10,25,50,100].map(n=>`<option value="${n}" ${pageSize===n?'selected':''}>${n} / halaman</option>`).join("")}
      </select>
    </div>
    <div class="cucian-grid">
      ${pageItems.length === 0 ? emptyState("Tidak ada pesanan yang cocok di sini.") : pageItems.map(orderCardHtml).join("")}
    </div>
    ${list.length > pageSize ? `
      <div class="row-between no-print" style="margin-top:14px;">
        <button class="btn btn-outline" id="cucianPrevPage" ${state.cucianPage<=1?'disabled':''}>← Sebelumnya</button>
        <span class="small muted">Halaman ${state.cucianPage} dari ${totalPages}</span>
        <button class="btn btn-outline" id="cucianNextPage" ${state.cucianPage>=totalPages?'disabled':''}>Selanjutnya →</button>
      </div>
    ` : ""}
  `;
  bindCucianCardEvents();

  const pageSizeSelect = document.getElementById("cucianPageSizeSelect");
  if(pageSizeSelect) pageSizeSelect.addEventListener("change", ()=>{
    state.cucianPageSize = parseInt(pageSizeSelect.value);
    state.cucianPage = 1;
    renderCucianList();
  });
  const prevBtn = document.getElementById("cucianPrevPage");
  if(prevBtn) prevBtn.addEventListener("click", ()=>{ state.cucianPage--; renderCucianList(); });
  const nextBtn = document.getElementById("cucianNextPage");
  if(nextBtn) nextBtn.addEventListener("click", ()=>{ state.cucianPage++; renderCucianList(); });
}

function serviceIconFor(o){
  if(o.serviceType === "satuan") return ICONS.shirt;
  if(o.serviceType === "self-service") return ICONS.clock;
  return ICONS.droplet;
}

function openOrderDetailModal(o){
  const dateLabel = new Date(o.createdAt).toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"});
  const itemLines = o.kiloanItems?.length ? o.kiloanItems.map(l=>`${l.subTypeLabel} (${l.duration} ${l.unit}) — ${l.weightKg}kg × Rp${l.rate.toLocaleString('id-ID')} = ${Reports.formatRupiah(l.subtotal)}`)
    : o.satuanItems?.length ? o.satuanItems.map(l=>`${l.qty}x ${l.name} = ${Reports.formatRupiah(l.price*l.qty)}`)
    : o.subTypeLabel ? [o.subTypeLabel] : [];

  const modal = openModal(`
    <h2>Detail Pesanan</h2>
    <div class="row-between" style="margin-bottom:14px;">
      <span class="order-id-badge">${ICONS.hash}${o.receiptNo || '------'}</span>
      <div style="display:flex; gap:6px;">
        <span class="status-badge status-${o.status}">${STATUS_LABEL[o.status]}</span>
        ${o.paymentStatus === "belum-lunas" ? `<span class="status-badge" style="background:var(--rose-bg); color:var(--rose);">Belum Lunas</span>` : o.paymentMethod ? `<span class="status-badge" style="background:var(--mint-bg); color:var(--mint);">Lunas</span>` : ""}
      </div>
    </div>

    <div class="small" style="line-height:1.9;">
      <b>${escapeHtml(o.customerName || "Tanpa nama")}</b><br>
      ${o.customerPhone ? `${escapeHtml(o.customerPhone)}<br>` : ""}
      Diterima: ${dateLabel}
      ${o.durationLabel ? ` · Estimasi: ${o.durationLabel}` : ""}
      ${o.estimatedReadyAt ? `<br>Estimasi Selesai: <b>${fmtDateTime(o.estimatedReadyAt)}</b>` : ""}
    </div>

    <div class="small" style="margin-top:14px; padding:12px; background:var(--foam-white); border-radius:10px; line-height:1.9;">
      ${itemLines.map(l=>`${l}<br>`).join("")}
      ${typeof o.total === "number" ? `<b>Total: ${Reports.formatRupiah(o.total)}</b>` : ""}
      ${o.discountAmount ? `<br><span style="color:var(--coin);">🎁 ${escapeHtml(o.discountReason||'Diskon promo')}: -${Reports.formatRupiah(o.discountAmount)}</span>` : ""}
      ${o.paymentMethod ? `<br>Metode: <b>${PAYMENT_METHOD_LABEL[o.paymentMethod] || o.paymentMethod}</b>` : ""}
    </div>

    ${o.paymentStatus === "belum-lunas" && o.piutangAmount > 0 ? `
      <div class="small" style="margin-top:10px; padding:12px; background:var(--rose-bg); border-radius:10px;">
        <p style="font-weight:700; color:var(--rose); margin-bottom:8px;">Piutang: ${Reports.formatRupiah(o.piutangAmount)}</p>
        <div class="field" style="margin-bottom:8px;">
          <select id="pelunasanMethod">
            <option value="tunai">Tunai</option>
            <option value="qris">QRIS</option>
            <option value="transfer">Transfer</option>
          </select>
        </div>
        <button class="btn btn-primary btn-block" data-action="terima-pelunasan" data-id="${o.id}" style="background:var(--mint);">Terima Pelunasan ${Reports.formatRupiah(o.piutangAmount)}</button>
      </div>
    ` : ""}

    ${o.note ? `<div class="small muted" style="margin-top:10px;">📝 ${escapeHtml(o.note)}</div>` : ""}

    <div id="orderDetailPhotoSection" style="margin-top:14px;"></div>

    ${(o.needsPickup || o.needsDelivery) ? `
      <div style="margin-top:14px; padding:12px; background:var(--foam-white); border-radius:10px;">
        <p class="small" style="font-weight:700; margin-bottom:8px;">🚚 Jemput & Antar</p>
        ${o.courierName ? `<div class="small" style="margin-bottom:8px;">Kurir: <b>${escapeHtml(o.courierName)}</b>${o.deliveryFee ? ` · Ongkir: ${Reports.formatRupiah(o.deliveryFee)}` : ''}${o.distanceKm ? ` · Jarak: ${o.distanceKm} km` : ''}</div>` : ''}
        ${o.needsPickup ? `
          <div class="row-between" style="padding:8px 0; border-bottom:1px dashed var(--line);">
            <div>
              <div class="small" style="font-weight:600;">${o.pickupDone ? '✓ Sudah Dijemput' : 'Belum Dijemput'}</div>
              ${o.pickupAddress ? `<div class="small muted">${escapeHtml(o.pickupAddress)}</div>` : ''}
            </div>
            ${!o.pickupDone ? `<button class="btn btn-outline" data-action="mark-pickup-done" data-id="${o.id}">Tandai Selesai</button>` : ''}
          </div>
        ` : ''}
        ${o.needsDelivery ? `
          <div class="row-between" style="padding:8px 0;">
            <div>
              <div class="small" style="font-weight:600;">${o.deliveryDone ? '✓ Sudah Diantar' : 'Belum Diantar'}</div>
              ${o.deliveryAddress ? `<div class="small muted">${escapeHtml(o.deliveryAddress)}</div>` : ''}
            </div>
            ${!o.deliveryDone ? `<button class="btn btn-outline" data-action="mark-delivery-done" data-id="${o.id}">Tandai Selesai</button>` : ''}
          </div>
        ` : ''}
      </div>
    ` : ""}

    ${o.customerPhone ? `<button class="btn btn-block" data-action="detail-send-tracking" style="margin-top:16px; background:#EAF3FF; color:#1E5FA8;">${ICONS.star} Kirim Link Pantau</button>` : ""}
    <button class="btn btn-outline btn-block" data-action="detail-close" style="margin-top:10px;">Tutup</button>
  `);

  let photos = o.photos ? [...o.photos] : [];
  const photoSection = modal.querySelector("#orderDetailPhotoSection");

  function renderPhotoSection(){
    photoSection.innerHTML = `
      <p class="small" style="font-weight:700; margin-bottom:8px; display:flex; align-items:center; gap:6px;"><span style="display:inline-flex; width:14px; height:14px;">${ICONS.camera}</span>Foto Pakaian (${photos.length})</p>
      ${photos.length ? `
        <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:8px; margin-bottom:10px;">
          ${photos.map((p,i)=>`
            <div style="position:relative;">
              <img src="${photoUrl(p)}" data-full="${photoUrl(p)}" class="order-detail-photo" style="width:100%; aspect-ratio:1; object-fit:cover; border-radius:8px; cursor:pointer;">
              <button type="button" data-remove-detail-photo="${i}" style="position:absolute; top:-6px; right:-6px; width:20px; height:20px; border-radius:50%; background:var(--rose); color:#fff; border:none; font-size:12px; line-height:1; cursor:pointer;">✕</button>
            </div>
          `).join("")}
        </div>
      ` : `<p class="small muted" style="margin-bottom:10px;">Belum ada foto.</p>`}
      <div class="btn-row">
        <button type="button" class="btn btn-block" id="detailAddCameraBtn" style="background:#F2F6FB; color:#142A4D;">${ICONS.camera} Kamera</button>
        <button type="button" class="btn btn-block" id="detailAddGalleryBtn" style="background:#F2F6FB; color:#142A4D;">${ICONS.chat} Galeri/File</button>
      </div>
      <input type="file" id="detailPhotoInput" accept="image/*" multiple style="display:none;">
    `;

    photoSection.querySelectorAll(".order-detail-photo").forEach(img=>{
      img.addEventListener("click", ()=> window.open(img.dataset.full, "_blank"));
    });
    photoSection.querySelectorAll("[data-remove-detail-photo]").forEach(btn=>{
      btn.addEventListener("click", async ()=>{
        photos.splice(parseInt(btn.dataset.removeDetailPhoto), 1);
        await DB.updateOrderFields(o.id, { photos });
        renderPhotoSection();
        renderCucianList();
      });
    });
    photoSection.querySelector("#detailAddCameraBtn").addEventListener("click", ()=>{
      openCameraCaptureModal(async (photo)=>{
        photos.push(photo);
        await DB.updateOrderFields(o.id, { photos });
        renderPhotoSection();
        renderCucianList();
      });
    });
    photoSection.querySelector("#detailAddGalleryBtn").addEventListener("click", ()=>{
      photoSection.querySelector("#detailPhotoInput").click();
    });
    photoSection.querySelector("#detailPhotoInput").addEventListener("change", async (e)=>{
      const files = Array.from(e.target.files || []);
      if(files.length === 0) return;
      const btn = photoSection.querySelector("#detailAddGalleryBtn");
      btn.textContent = "Mengunggah...";
      btn.disabled = true;
      try{
        for(const file of files){
          const photo = await uploadPhotoToCloudinary(file);
          photos.push(photo);
        }
        await DB.updateOrderFields(o.id, { photos });
        renderPhotoSection();
        renderCucianList();
      }catch(err){
        toast("Gagal unggah foto — cek koneksi internet", "warn");
        renderPhotoSection();
      }
      e.target.value = "";
    });
  }
  renderPhotoSection();

  const markPickupBtn = modal.querySelector("[data-action='mark-pickup-done']");
  if(markPickupBtn) markPickupBtn.addEventListener("click", async ()=>{
    await DB.updateOrderFields(o.id, { pickupDone: true });
    toast("Ditandai sudah dijemput");
    closeModal();
    renderCucianList();
  });
  const markDeliveryBtn = modal.querySelector("[data-action='mark-delivery-done']");
  if(markDeliveryBtn) markDeliveryBtn.addEventListener("click", async ()=>{
    await DB.updateOrderFields(o.id, { deliveryDone: true });
    toast("Ditandai sudah diantar");
    closeModal();
    renderCucianList();
  });

  const pelunasanBtn = modal.querySelector("[data-action='terima-pelunasan']");
  if(pelunasanBtn) pelunasanBtn.addEventListener("click", async ()=>{
    const method = modal.querySelector("#pelunasanMethod").value;
    const amount = o.piutangAmount;
    if(!confirm(`Tandai piutang ${Reports.formatRupiah(amount)} sudah dibayar lunas via ${PAYMENT_METHOD_LABEL[method]}?`)) return;
    const cat = state.categories.find(c=>c.id===(o.serviceType==="satuan"?"cuci-satuan":o.serviceType==="self-service"?"self-service":"jasa-cuci"));
    await DB.addTransaction({
      type: "in", categoryId: cat?.id || "jasa-cuci", categoryName: cat?.name || "Pendapatan Jasa Cuci",
      account: cat?.account, amount, date: Reports.todayStr(),
      note: `Pelunasan piutang #${o.receiptNo || o.id.slice(0,6)}`, customerName: o.customerName,
      orderId: o.id, branchId: o.branchId, paymentMethod: method
    });
    await DB.updateOrderFields(o.id, { paymentStatus: "lunas", piutangAmount: 0, amountPaid: o.total, paymentMethod: method });
    toast("Piutang berhasil dilunasi");
    closeModal();
    renderCucianList();
  });

  const trackBtn = modal.querySelector("[data-action='detail-send-tracking']");
  if(trackBtn) trackBtn.addEventListener("click", ()=>{
    const url = trackingUrl(o.id);
    const msg = `Halo${o.customerName ? " "+o.customerName : ""}, pantau status cucianmu (termasuk foto barang) di link ini:\n${url}`;
    const phone = normalizePhone(o.customerPhone);
    const waUrl = phone ? `https://wa.me/${phone}?text=${encodeURIComponent(msg)}` : `https://wa.me/?text=${encodeURIComponent(msg)}`;
    trackWaSendAndWarn();
    window.open(waUrl, "_blank");
  });

  modal.querySelector("[data-action='detail-close']").addEventListener("click", closeModal);
}

function orderCardHtml(o){
  const dateLabel = new Date(o.createdAt).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"});
  const next = nextOrderStatus(o.status);
  const showCountdown = o.estimatedReadyAt && o.status !== "selesai";
  const countdown = showCountdown ? formatCountdown(o.estimatedReadyAt) : null;
  const itemLines = o.kiloanItems?.length ? o.kiloanItems.map(l=>`${l.subTypeLabel} ${l.weightKg}kg`).join(", ")
    : o.satuanItems?.length ? o.satuanItems.map(l=>`${l.qty}x ${l.name}`).join(", ")
    : o.subTypeLabel || "";

  return `
    <div class="order-card status-${o.status}" data-action="view-order-detail" data-id="${o.id}" style="cursor:pointer;">
      <div class="order-card-top">
        <div class="order-service-icon ${countdown?.overdue ? 'overdue' : 'status-'+o.status}">${serviceIconFor(o)}</div>
        <div class="order-card-id">
          <span class="order-id-badge">${ICONS.hash}${o.receiptNo || '------'}</span>
          <span class="status-badge status-${o.status}">${STATUS_LABEL[o.status]}</span>
          ${o.paymentStatus === "belum-lunas" ? `<span class="status-badge" style="background:var(--rose-bg); color:var(--rose);">Belum Lunas</span>` : ""}
        </div>
      </div>

      ${o.status === "selesai" && o.needsDelivery && !o.deliveryDone ? `
        <div class="delivery-pending-banner">${ICONS.pin} Sudah selesai dicuci — <b>belum diantar</b></div>
      ` : ""}
      ${o.status === "selesai" && o.needsPickup && !o.pickupDone ? `
        <div class="delivery-pending-banner">${ICONS.pin} <b>Belum dijemput</b> dari pelanggan</div>
      ` : ""}

      <div class="order-card-customer">
        <div class="order-customer-name">${escapeHtml(o.customerName || "Tanpa nama")}</div>
        <div class="small muted">${o.customerPhone || "—"}${o.weightKg ? ` · ${o.weightKg} kg total` : ""}</div>
      </div>

      ${itemLines ? `<div class="order-card-items">${escapeHtml(itemLines)}${typeof o.total === 'number' ? ` <span class="num order-card-total">${Reports.formatRupiah(o.total)}</span>` : ""}</div>` : ""}
      ${o.photos?.length ? `<div class="small muted" style="margin-top:2px;">📷 ${o.photos.length} pcs pakaian difoto</div>` : ""}
      ${o.discountAmount ? `<div class="small" style="color:var(--coin); margin-top:2px;">🎁 ${escapeHtml(o.discountReason || 'Diskon promo')}</div>` : ""}
      ${o.note ? `<div class="small muted" style="margin-top:4px;">${escapeHtml(o.note)}</div>` : ""}
      ${(o.needsPickup || o.needsDelivery) ? `
        <div class="small" style="margin-top:6px; display:flex; gap:6px; flex-wrap:wrap;">
          ${o.needsPickup ? `<span class="tag" style="font-size:10.5px; padding:4px 9px; background:${o.pickupDone?'var(--mint-bg)':'var(--coin-bg)'}; color:${o.pickupDone?'var(--mint)':'var(--coin)'};">${o.pickupDone?'✓':''} Jemput</span>` : ""}
          ${o.needsDelivery ? `<span class="tag" style="font-size:10.5px; padding:4px 9px; background:${o.deliveryDone?'var(--mint-bg)':'var(--coin-bg)'}; color:${o.deliveryDone?'var(--mint)':'var(--coin)'};">${o.deliveryDone?'✓':''} Antar</span>` : ""}
          ${o.courierName ? `<span class="tag" style="font-size:10.5px; padding:4px 9px;">🚚 ${escapeHtml(o.courierName)}</span>` : ""}
        </div>
      ` : ""}

      <div class="order-card-meta">
        <span>Diterima ${dateLabel}</span>
        ${o.durationLabel ? `<span>· estimasi ${o.durationLabel}</span>` : ""}
      </div>
      ${countdown ? `<div class="deadline-badge urgency-${countdown.urgency}">${countdown.overdue?ICONS.alertTriangle:ICONS.clock}${countdown.text}</div>` : ""}

      <div class="btn-row" style="margin-top:12px;">
        ${next ? `<button class="btn btn-primary btn-block" data-action="advance-order" data-id="${o.id}" data-next="${next}">Tandai: ${STATUS_LABEL[next]}</button>` : ""}
        ${o.needsDelivery && !o.deliveryDone ? `<button class="btn btn-primary btn-block" data-action="mark-delivery-done" data-id="${o.id}" style="background:var(--mint);">Tandai Sudah Diantar</button>` : ""}
        ${o.needsPickup && !o.pickupDone ? `<button class="btn btn-primary btn-block" data-action="mark-pickup-done" data-id="${o.id}" style="background:var(--coin);">Tandai Sudah Dijemput</button>` : ""}
        ${o.customerPhone ? `<button class="btn btn-outline" data-action="wa-order" data-id="${o.id}">${ICONS.chat}</button>` : ""}
        ${o.photos?.length ? `<button class="btn btn-outline" data-action="send-tracking" data-id="${o.id}" title="Kirim link pantau">${ICONS.star}</button>` : ""}
        ${isOwnerOrManager() ? `<button class="btn btn-outline" data-action="delete-order" data-id="${o.id}">${ICONS.trash}</button>` : ""}
      </div>
    </div>
  `;
}

let _cucianSearchDebounce = null;

function bindCucianControls(){
  const searchInput = document.getElementById("cucianSearchInput");
  if(searchInput) searchInput.addEventListener("input", ()=>{
    clearTimeout(_cucianSearchDebounce);
    _cucianSearchDebounce = setTimeout(()=>{
      state.cucianSearch = searchInput.value;
      state.cucianPage = 1;
      renderCucianList();
    }, 250);
  });

  const sortSelect = document.getElementById("cucianSortSelect");
  if(sortSelect) sortSelect.addEventListener("change", ()=>{
    state.cucianSort = sortSelect.value;
    state.cucianPage = 1;
    renderCucianList();
  });

  document.querySelectorAll("[data-cucian-tab]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      state.cucianFilter = btn.dataset.cucianTab;
      state.cucianSort = state.cucianFilter === "selesai" ? "created-desc" : "deadline-asc";
      state.cucianPage = 1;
      state.cucianSpecialFilter = null;
      render();
    });
  });

  const clearSpecialFilterBtn = document.querySelector("[data-action='clear-cucian-special-filter']");
  if(clearSpecialFilterBtn) clearSpecialFilterBtn.addEventListener("click", ()=>{
    state.cucianSpecialFilter = null;
    state.cucianPage = 1;
    render();
  });

  const showAllHistoryToggle = document.getElementById("cucianShowAllHistoryToggle");
  if(showAllHistoryToggle) showAllHistoryToggle.addEventListener("change", ()=>{
    state.cucianShowAllHistory = showAllHistoryToggle.checked;
    state.cucianPage = 1;
    render();
  });
}

function bindCucianCardEvents(){
  document.querySelectorAll("[data-action='view-order-detail']").forEach(card=>{
    card.addEventListener("click", async (e)=>{
      if(e.target.closest(".btn-row")) return; // don't open detail when clicking an action button
      const o = await DB.getOrderById(card.dataset.id);
      if(o) openOrderDetailModal(o);
    });
  });
  document.querySelectorAll("[data-action='mark-delivery-done']").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      await DB.updateOrderFields(btn.dataset.id, { deliveryDone: true });
      toast("Ditandai sudah diantar");
      renderCucianList();
    });
  });
  document.querySelectorAll("[data-action='mark-pickup-done']").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      await DB.updateOrderFields(btn.dataset.id, { pickupDone: true });
      toast("Ditandai sudah dijemput");
      renderCucianList();
    });
  });
  document.querySelectorAll("[data-action='advance-order']").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      await DB.updateOrderStatus(btn.dataset.id, btn.dataset.next);
      toast(`Status diubah: ${STATUS_LABEL[btn.dataset.next]}`);
      if(btn.dataset.next === "selesai"){
        const o = await DB.getOrderById(btn.dataset.id);
        if(o) offerPickupNotify(o);
      } else {
        renderCucianList();
      }
    });
  });
  document.querySelectorAll("[data-action='wa-order']").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      const o = await DB.getOrderById(btn.dataset.id);
      if(o) sendOrderStatusWA(o);
    });
  });
  document.querySelectorAll("[data-action='send-tracking']").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      const o = await DB.getOrderById(btn.dataset.id);
      if(!o) return;
      const url = trackingUrl(o.id);
      const msg = `Halo${o.customerName ? " "+o.customerName : ""}, pantau status cucianmu (termasuk foto barang) di link ini:\n${url}`;
      const phone = normalizePhone(o.customerPhone);
      const waUrl = phone ? `https://wa.me/${phone}?text=${encodeURIComponent(msg)}` : `https://wa.me/?text=${encodeURIComponent(msg)}`;
      trackWaSendAndWarn();
      window.open(waUrl, "_blank");
    });
  });
  document.querySelectorAll("[data-action='delete-order']").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      if(!confirm("Hapus pesanan ini?")) return;
      await DB.deleteOrder(btn.dataset.id);
      toast("Pesanan dihapus");
      renderCucianList();
    });
  });
}

function buildOrderStatusText(o){
  const lines = [];
  const isReady = o.status === "selesai";
  lines.push(`*${state.businessName}*`);
  if(isReady){
    lines.push(`Halo${o.customerName ? " " + o.customerName : ""}! 🎉`);
    lines.push(`Cucianmu *sudah selesai dan siap diambil* ya!`);
  } else {
    lines.push(`Halo${o.customerName ? " " + o.customerName : ""}, update status cucianmu:`);
  }
  lines.push("");
  lines.push(`📦 *${STATUS_LABEL[o.status]}*`);
  if(o.receiptNo) lines.push(`Struk No.: ${o.receiptNo}`);
  if(o.weightKg) lines.push(`Berat: ${o.weightKg} kg`);
  if(o.note) lines.push(`Catatan: ${o.note}`);
  if(o.id) lines.push(`\nPantau/lihat foto: ${trackingUrl(o.id)}`);
  lines.push("");
  lines.push(isReady ? "Ditunggu kedatangannya ya, terima kasih! 🙏" : "Terima kasih sudah mencuci di tempat kami 🙏");
  return lines.join("\n");
}

function offerPickupNotify(o){
  if(!o.customerPhone){
    render();
    return;
  }
  const modal = openModal(`
    <div style="text-align:center; padding:6px 0 4px;">
      <div style="font-size:36px; margin-bottom:8px;">🎉</div>
      <h2>Cucian Siap Diambil!</h2>
      <p class="small muted" style="margin:6px 0 18px;">Kirim notifikasi ke ${escapeHtml(o.customerName||"pelanggan")} sekarang?</p>
    </div>
    <button class="btn btn-primary btn-block" data-action="notify-yes" style="background:#25A366; margin-bottom:10px;">${ICONS.chat} Kirim Notifikasi via WA</button>
    <button class="btn btn-outline btn-block" data-action="notify-skip">Lewati</button>
  `);
  modal.querySelector("[data-action='notify-yes']").addEventListener("click", ()=>{
    sendOrderStatusWA(o);
    closeModal();
    render();
  });
  modal.querySelector("[data-action='notify-skip']").addEventListener("click", ()=>{
    closeModal();
    render();
  });
}

function sendOrderStatusWA(o){
  const text = encodeURIComponent(buildOrderStatusText(o));
  const phone = normalizePhone(o.customerPhone);
  const url = phone ? `https://wa.me/${phone}?text=${text}` : `https://wa.me/?text=${text}`;
  trackWaSendAndWarn();
  window.open(url, "_blank");
}

function resolveActionBranchId(){
  if(isBranchLocked()) return state.userBranchId || state.branches[0]?.id || null;
  if(state.currentBranchId !== "all") return state.currentBranchId;
  if(state.branches.length === 1) return state.branches[0].id;
  return null; // ambiguous — owner must pick a specific branch first
}

async function openAddOrderModal(){
  const branchId = resolveActionBranchId();
  if(!branchId){ toast("Pilih cabang spesifik dulu di Beranda sebelum catat pesanan", "warn"); return; }
  const pricing = await getPricing();
  const kiloanLoyalty = await getKiloanLoyalty();
  const ssLoyalty = await getSelfServiceLoyalty();
  const kiloanJenisOptions = Object.entries(KILOAN_LABELS).map(([id,label])=>`<option value="${id}">${label}</option>`).join("");
  const selfServiceOptions = Object.entries(SELF_SERVICE_LABELS).map(([id,label])=>`<option value="${id}">${label} (Rp${pricing.selfService[id].toLocaleString('id-ID')})</option>`).join("");
  const satuanOptions = pricing.satuan.map(s=>`<option value="${s.id}">${s.name} (${Reports.formatRupiah(s.price)})</option>`).join("");
  const staffList = await DB.getBusinessStaff();
  const currentBranch = await DB.getBranchById(branchId);
  const branchDeliverySettings = currentBranch?.deliverySettings || null;
  const courierOptions = `<option value="">— Pilih kurir —</option>` + staffList.map(s=>`<option value="${s.uid}">${escapeHtml(s.name||s.email)}</option>`).join("");

  const modal = openModal(`
    <h2>Pesanan Cucian Baru</h2>
    <div class="seg seg-navy" id="serviceSeg" style="margin-bottom:16px;">
      <button type="button" class="active" data-svc="kiloan">Kiloan</button>
      <button type="button" data-svc="satuan">Satuan</button>
      <button type="button" data-svc="self-service">Self-Service</button>
    </div>

    <div id="kiloanFields">
      <div class="field"><label>Jenis Layanan</label><select id="kiloanJenisPicker">${kiloanJenisOptions}</select></div>
      <div class="field-row" style="display:flex; gap:8px; align-items:flex-end;">
        <div class="field" style="flex:1; margin-bottom:0;"><label>Opsi Durasi & Harga</label><select id="kiloanTierPicker"></select></div>
        <div class="field" style="width:90px; margin-bottom:0;"><label>Berat (kg)</label><input type="number" step="0.1" id="kiloanWeight" placeholder="5"></div>
        <button type="button" class="btn btn-primary" id="addKiloanLine" style="margin-bottom:0; width:44px; flex-shrink:0;">+</button>
      </div>
      <div id="kiloanCart" style="margin:10px 0;"></div>
    </div>

    <div id="satuanFields" style="display:none;">
      ${pricing.satuan.length === 0 ? `<p class="small muted">Belum ada daftar barang satuan. Tambahkan dulu di Atur → Setting Harga.</p>` : `
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

    <div id="loyaltyLookup"></div>

    <div class="field">
      <label>Total (Rp) <span class="small muted">— otomatis, bisa diubah manual</span></label>
      <input type="text" inputmode="numeric" class="amount-input" id="ordTotal" value="0">
    </div>
    <div class="field-row" style="display:flex; gap:10px;">
      <div class="field" style="flex:1;"><label>Bayar (Rp)</label><input type="text" inputmode="numeric" id="ordBayar" placeholder="Samakan dengan Total jika pas"></div>
      <div class="field" style="flex:1;"><label>Kembalian</label><input type="text" id="ordKembalian" value="Rp0" disabled style="background:var(--foam-white);"></div>
    </div>
    <div class="field">
      <label>Metode Pembayaran</label>
      <select id="ordPaymentMethod">
        <option value="tunai">Tunai</option>
        <option value="qris">QRIS</option>
        <option value="transfer">Transfer</option>
      </select>
    </div>
    <p class="small" id="ordPiutangHint" style="display:none; margin:-10px 0 14px; padding:10px 12px; background:var(--coin-bg); color:var(--coin); border-radius:10px;"></p>

    <button type="button" class="btn btn-outline btn-block" id="searchMemberBtn" style="margin-bottom:14px;">${ICONS.search} Cari Pelanggan Terdaftar</button>
    <div class="field"><label>Nama Pelanggan</label><input type="text" id="ordCustName" placeholder="Contoh: Budi"></div>
    <div class="field"><label>No. WhatsApp Pelanggan (opsional)</label><input type="tel" inputmode="numeric" id="ordCustPhone" placeholder="08xxxxxxxxxx"></div>
    <div id="memberMatchNote"></div>
    <div class="field"><label>Catatan (opsional)</label><textarea id="ordNote" placeholder="Contoh: Jangan pakai pewangi"></textarea></div>

    <div class="field" style="background:var(--foam-white); border-radius:10px; padding:12px;">
      <label style="display:flex; align-items:center; gap:8px; cursor:pointer;">
        <input type="checkbox" id="ordCourierToggle" style="width:auto; margin:0;">
        <span>🚚 Perlu Jemput/Antar?</span>
      </label>
      <div id="courierFields" style="display:none; margin-top:12px;">
        <label style="display:flex; align-items:center; gap:8px; cursor:pointer; margin-bottom:10px;">
          <input type="checkbox" id="ordNeedsPickup" style="width:auto; margin:0;">
          <span class="small">Perlu Jemput (ambil cucian kotor dari pelanggan)</span>
        </label>
        <div class="field" id="pickupAddressField" style="display:none;">
          <label>Alamat Jemput</label>
          <textarea id="ordPickupAddress" placeholder="Alamat lengkap untuk dijemput"></textarea>
          <button type="button" class="btn btn-outline btn-block" id="setPickupLocationBtn" style="margin-top:8px;">${ICONS.pin} Set Lokasi Jemput di Peta</button>
          <div id="pickupLocationStatus" class="small muted" style="margin-top:6px;"></div>
        </div>

        <label style="display:flex; align-items:center; gap:8px; cursor:pointer; margin-bottom:10px;">
          <input type="checkbox" id="ordNeedsDelivery" style="width:auto; margin:0;">
          <span class="small">Perlu Antar (kirim cucian bersih ke pelanggan)</span>
        </label>
        <div class="field" id="deliveryAddressField" style="display:none;">
          <label style="display:flex; align-items:center; gap:8px; font-weight:400;">
            <input type="checkbox" id="ordSameAddress" style="width:auto; margin:0;">
            <span class="small" style="font-weight:400;">Sama seperti alamat jemput</span>
          </label>
          <label style="margin-top:8px;">Alamat Antar</label>
          <textarea id="ordDeliveryAddress" placeholder="Alamat lengkap untuk diantar"></textarea>
          <button type="button" class="btn btn-outline btn-block" id="setDeliveryLocationBtn" style="margin-top:8px;">${ICONS.pin} Set Lokasi Antar di Peta</button>
          <div id="deliveryLocationStatus" class="small muted" style="margin-top:6px;"></div>
        </div>

        <div class="field"><label>Kurir Bertugas</label><select id="ordCourier">${courierOptions}</select></div>
        <div class="field" style="margin-bottom:0;">
          <label>Ongkos Kirim (Rp)</label>
          <input type="text" inputmode="numeric" id="ordDeliveryFee" placeholder="0">
          <div id="deliveryFeeHint" class="small muted" style="margin-top:6px;"></div>
        </div>
      </div>
    </div>

    <div class="field">
      <label>Foto Pakaian (opsional)</label>
      <input type="file" id="ordPhotoInput" accept="image/*" multiple style="display:none;">
      <div class="btn-row">
        <button type="button" class="btn btn-outline btn-block" id="ordCameraBtn">${ICONS.camera} Kamera (pilih perangkat)</button>
        <button type="button" class="btn btn-outline btn-block" id="ordPhotoBtn">${ICONS.chat} Galeri / File</button>
      </div>
      <div id="ordPhotoPreview" style="display:flex; flex-wrap:wrap; gap:8px; margin-top:10px;"></div>
      <div id="ordPhotoCount" class="small muted" style="margin-top:8px;"></div>
    </div>

    <button class="btn btn-primary btn-block" data-action="save-order">Simpan & Catat Pendapatan</button>
  `);

  let serviceType = "kiloan";
  let kiloanCart = []; // [{subType, subTypeLabel, tierId, duration, unit, rate, weightKg, subtotal}]
  let satuanCart = []; // [{id, name, price, qty}]
  let photoUrls = [];
  let pendingKiloanPromo = null; // preview only — authoritative check happens again on save

  function refreshKiloanTierOptions(){
    const jenis = modal.querySelector("#kiloanJenisPicker").value;
    const tiers = pricing.kiloan[jenis] || [];
    const tierSelect = modal.querySelector("#kiloanTierPicker");
    tierSelect.innerHTML = tiers.map(t=>`<option value="${t.id}">${tierLabel(t)} — Rp${t.rate.toLocaleString('id-ID')}/kg</option>`).join("")
      || `<option value="">Belum ada opsi harga untuk jenis ini</option>`;
  }
  modal.querySelector("#kiloanJenisPicker").addEventListener("change", refreshKiloanTierOptions);
  refreshKiloanTierOptions();

  function renderPhotoPreview(){
    const box = modal.querySelector("#ordPhotoPreview");
    box.innerHTML = photoUrls.map((p,i) => `
      <div style="position:relative; width:64px; height:64px;">
        <img src="${photoUrl(p)}" style="width:64px; height:64px; object-fit:cover; border-radius:8px; border:1px solid var(--line);">
        <button type="button" data-remove-photo="${i}" style="position:absolute; top:-6px; right:-6px; width:20px; height:20px; border-radius:50%; background:var(--rose); color:#fff; border:none; font-size:12px; line-height:1; cursor:pointer;">✕</button>
      </div>
    `).join("");
    modal.querySelector("#ordPhotoCount").textContent = photoUrls.length > 0
      ? `Total ${photoUrls.length} pcs pakaian difoto`
      : "";
    box.querySelectorAll("[data-remove-photo]").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        photoUrls.splice(parseInt(btn.dataset.removePhoto), 1);
        renderPhotoPreview();
      });
    });
  }

  modal.querySelector("#ordCameraBtn").addEventListener("click", ()=>{
    openCameraCaptureModal((photo)=>{
      photoUrls.push(photo);
      renderPhotoPreview();
    });
  });
  modal.querySelector("#ordPhotoBtn").addEventListener("click", ()=>{
    modal.querySelector("#ordPhotoInput").click();
  });
  modal.querySelector("#ordPhotoInput").addEventListener("change", async (e)=>{
    let files = Array.from(e.target.files || []);
    if(files.length === 0) return;
    const btn = modal.querySelector("#ordPhotoBtn");
    btn.textContent = "Mengunggah...";
    btn.disabled = true;
    try{
      for(const file of files){
        const photo = await uploadPhotoToCloudinary(file);
        photoUrls.push(photo);
        renderPhotoPreview();
      }
    }catch(err){
      toast("Gagal unggah foto — cek koneksi internet", "warn");
    }
    btn.innerHTML = `${ICONS.chat} Ambil / Unggah Foto`;
    btn.disabled = false;
    e.target.value = "";
  });

  function renderKiloanCart(){
    const box = modal.querySelector("#kiloanCart");
    if(kiloanCart.length === 0){
      box.innerHTML = `<p class="small muted">Belum ada layanan ditambahkan.</p>`;
      return;
    }
    box.innerHTML = kiloanCart.map((line,i) => `
      <div class="row-between" style="padding:6px 0; border-bottom:1px dashed var(--line);">
        <span class="small">${line.subTypeLabel} (${line.duration} ${line.unit}) — ${line.weightKg}kg</span>
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="small num">${Reports.formatRupiah(line.subtotal)}</span>
          <button class="tx-del" data-remove-kiloan-line="${i}">${ICONS.trash}</button>
        </div>
      </div>
    `).join("");
    box.querySelectorAll("[data-remove-kiloan-line]").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        kiloanCart.splice(parseInt(btn.dataset.removeKiloanLine), 1);
        renderKiloanCart();
        recalcTotal();
        refreshLoyaltyPreview();
      });
    });
  }

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

  function computeDiscountRp(promo, avgRate){
    if(!promo || !promo.applied) return 0;
    return promo.promoType === "discount" ? promo.discountAmount : Math.round(promo.freeKg * avgRate);
  }

  function recalcKembalian(){
    const total = parseThousands(modal.querySelector("#ordTotal").value);
    const bayarStr = modal.querySelector("#ordBayar").value.trim();
    const kembalianField = modal.querySelector("#ordKembalian");
    const piutangHint = modal.querySelector("#ordPiutangHint");
    if(!bayarStr){ kembalianField.value = "Rp0"; piutangHint.style.display = "none"; return; }
    const bayar = parseThousands(bayarStr);
    const change = bayar - total;
    kembalianField.value = Reports.formatRupiah(change);
    kembalianField.style.color = change < 0 ? "var(--rose)" : "";
    if(change < 0){
      piutangHint.style.display = "block";
      piutangHint.textContent = `⚠️ Kurang bayar ${Reports.formatRupiah(Math.abs(change))} — ini akan tercatat sebagai piutang pelanggan.`;
    } else {
      piutangHint.style.display = "none";
    }
  }

  function recalcTotal(){
    let total = 0;
    if(serviceType === "satuan"){
      total = satuanCart.reduce((sum,l) => sum + l.price*l.qty, 0);
    } else if(serviceType === "kiloan"){
      total = kiloanCart.reduce((sum,l) => sum + l.subtotal, 0);
      if(pendingKiloanPromo){
        const subtypeLines = kiloanCart.filter(l=>l.subType===pendingKiloanPromo.subType);
        const subtypeTotal = subtypeLines.reduce((s,l)=>s+l.subtotal,0);
        const subtypeWeight = subtypeLines.reduce((s,l)=>s+l.weightKg,0) || 1;
        const avgRate = subtypeTotal / subtypeWeight;
        total = Math.max(0, total - Math.min(computeDiscountRp(pendingKiloanPromo, avgRate), subtypeTotal));
      }
    } else {
      const subType = modal.querySelector("#ordSubTypeSelf").value;
      total = computeTotal(pricing, "self-service", subType, 0);
    }
    const deliveryFee = parseThousands(modal.querySelector("#ordDeliveryFee")?.value);
    total += deliveryFee;
    modal.querySelector("#ordTotal").value = formatThousands(Math.round(total));
    recalcKembalian();
  }

  async function refreshLoyaltyPreview(){
    const box = modal.querySelector("#loyaltyLookup");
    const phone = modal.querySelector("#ordCustPhone").value.trim();

    if(serviceType === "self-service"){
      if(phone.length < 8){ box.innerHTML = ""; return; }
      const status = await getMemberStatus(phone);
      box.innerHTML = loyaltyNoteHtml(status, ssLoyalty);
      const ssTarget = ssLoyalty.visitTarget || 10;
      if(ssLoyalty.enabled && status.visits >= ssTarget){ modal.querySelector("#ordTotal").value = 0; recalcKembalian(); }
    } else if(serviceType === "kiloan"){
      if(phone.length < 8){ box.innerHTML = ""; pendingKiloanPromo = null; recalcTotal(); return; }
      const status = await getMemberStatus(phone);
      const existingBalances = (typeof status.kiloanBalance === "object" && status.kiloanBalance) || {};
      const cartWeightBySubtype = {};
      for(const line of kiloanCart){
        cartWeightBySubtype[line.subType] = (cartWeightBySubtype[line.subType]||0) + line.weightKg;
      }
      const projectedBalances = { ...existingBalances };
      for(const [subType, w] of Object.entries(cartWeightBySubtype)){
        projectedBalances[subType] = (projectedBalances[subType]||0) + w;
      }
      box.innerHTML = kiloanLoyaltyNoteHtml({ kiloanBalance: projectedBalances }, kiloanLoyalty);

      pendingKiloanPromo = null;
      for(const [subType] of Object.entries(cartWeightBySubtype)){
        const cfg = kiloanLoyalty[subType];
        if(cfg?.enabled && projectedBalances[subType] >= cfg.thresholdKg){
          pendingKiloanPromo = { applied:true, subType, subTypeLabel: KILOAN_LABELS[subType], promoType:cfg.promoType, discountAmount:cfg.discountAmount, freeKg:cfg.freeKg, thresholdKg:cfg.thresholdKg };
          break;
        }
      }
      recalcTotal();
    } else {
      box.innerHTML = "";
    }
  }

  modal.querySelectorAll("#serviceSeg button").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      serviceType = btn.dataset.svc;
      modal.querySelectorAll("#serviceSeg button").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      modal.querySelector("#kiloanFields").style.display = serviceType === "kiloan" ? "block" : "none";
      modal.querySelector("#satuanFields").style.display = serviceType === "satuan" ? "block" : "none";
      modal.querySelector("#selfServiceFields").style.display = serviceType === "self-service" ? "block" : "none";
      recalcTotal();
      refreshLoyaltyPreview();
    });
  });
  modal.querySelector("#ordSubTypeSelf").addEventListener("change", recalcTotal);
  attachThousandsInput(modal.querySelector("#ordTotal"));
  attachThousandsInput(modal.querySelector("#ordBayar"));
  attachThousandsInput(modal.querySelector("#ordDeliveryFee"));
  modal.querySelector("#ordBayar").addEventListener("input", recalcKembalian);

  const courierToggle = modal.querySelector("#ordCourierToggle");
  const courierFields = modal.querySelector("#courierFields");
  courierToggle.addEventListener("change", ()=>{
    courierFields.style.display = courierToggle.checked ? "block" : "none";
  });
  const needsPickup = modal.querySelector("#ordNeedsPickup");
  const pickupAddressField = modal.querySelector("#pickupAddressField");
  needsPickup.addEventListener("change", ()=>{
    pickupAddressField.style.display = needsPickup.checked ? "block" : "none";
  });
  const needsDelivery = modal.querySelector("#ordNeedsDelivery");
  const deliveryAddressField = modal.querySelector("#deliveryAddressField");
  needsDelivery.addEventListener("change", ()=>{
    deliveryAddressField.style.display = needsDelivery.checked ? "block" : "none";
  });
  const sameAddress = modal.querySelector("#ordSameAddress");
  const deliveryAddressInput = modal.querySelector("#ordDeliveryAddress");
  sameAddress.addEventListener("change", ()=>{
    if(sameAddress.checked){
      deliveryAddressInput.value = modal.querySelector("#ordPickupAddress").value;
      deliveryAddressInput.disabled = true;
      if(pickupLoc){
        deliveryLoc = pickupLoc;
        modal.querySelector("#deliveryLocationStatus").textContent = modal.querySelector("#pickupLocationStatus").textContent;
        applyAutoFee();
      }
    } else {
      deliveryAddressInput.disabled = false;
    }
  });
  modal.querySelector("#ordDeliveryFee").addEventListener("input", recalcTotal);

  let pickupLoc = null;
  let deliveryLoc = null;

  async function applyAutoFee(){
    const loc = deliveryLoc || pickupLoc;
    if(!loc || !branchDeliverySettings?.lat){ return; }
    const hint = modal.querySelector("#deliveryFeeHint");
    hint.textContent = "Menghitung jarak...";

    let distanceKm = await roadDistanceKm(branchDeliverySettings.lat, branchDeliverySettings.lng, loc.lat, loc.lng);
    const isRoadDistance = distanceKm !== null;
    if(distanceKm === null){
      distanceKm = haversineKm(branchDeliverySettings.lat, branchDeliverySettings.lng, loc.lat, loc.lng);
    }
    const fee = computeAutoDeliveryFee(distanceKm, branchDeliverySettings);
    modal.querySelector("#ordDeliveryFee").value = formatThousands(fee);
    const distanceLabel = `${distanceKm.toFixed(1)} km${isRoadDistance ? " (jarak jalan)" : " (garis lurus)"}`;
    hint.textContent = fee > 0
      ? `Jarak ${distanceLabel} dari cabang (radius gratis ${branchDeliverySettings.freeRadiusKm}km) — ongkir otomatis: ${Reports.formatRupiah(fee)}`
      : `Jarak ${distanceLabel} dari cabang — masih dalam radius gratis (${branchDeliverySettings.freeRadiusKm}km)`;
    recalcTotal();
  }

  modal.querySelector("#setPickupLocationBtn").addEventListener("click", ()=>{
    openMapPickerModal(pickupLoc?.lat, pickupLoc?.lng, (lat,lng)=>{
      pickupLoc = { lat, lng };
      modal.querySelector("#pickupLocationStatus").textContent = `📍 Lokasi tersimpan: ${lat.toFixed(5)}, ${lng.toFixed(5)}`;
      if(sameAddress.checked){ deliveryLoc = pickupLoc; modal.querySelector("#deliveryLocationStatus").textContent = modal.querySelector("#pickupLocationStatus").textContent; }
      applyAutoFee();
    });
  });
  modal.querySelector("#setDeliveryLocationBtn").addEventListener("click", ()=>{
    openMapPickerModal(deliveryLoc?.lat, deliveryLoc?.lng, (lat,lng)=>{
      deliveryLoc = { lat, lng };
      modal.querySelector("#deliveryLocationStatus").textContent = `📍 Lokasi tersimpan: ${lat.toFixed(5)}, ${lng.toFixed(5)}`;
      applyAutoFee();
    });
  });

  if(!branchDeliverySettings?.lat){
    modal.querySelector("#deliveryFeeHint").textContent = "Cabang ini belum di-set lokasinya — ongkir tidak bisa dihitung otomatis, isi manual. Atur di Atur → Cabang.";
  }

  const custNameInput = modal.querySelector("#ordCustName");
  const custPhoneInput = modal.querySelector("#ordCustPhone");
  const matchNoteBox = modal.querySelector("#memberMatchNote");

  function applyMemberMatch(member){
    if(member && member.name){
      custNameInput.value = member.name;
      custNameInput.readOnly = true;
      custNameInput.style.background = "var(--foam-white)";
      matchNoteBox.innerHTML = `<p class="small" style="color:var(--mint); margin:-6px 0 14px;">✓ Nomor ini terdaftar sebagai <b>${escapeHtml(member.name)}</b>. Nama terkunci — kalau ada kesalahan nama, ubah lewat menu Member.</p>`;

      if(member.address){
        modal.querySelector("#ordPickupAddress").value = member.address;
        if(!modal.querySelector("#ordSameAddress").checked && !modal.querySelector("#ordDeliveryAddress").value){
          modal.querySelector("#ordDeliveryAddress").value = member.address;
        }
      }
      if(member.savedLocation){
        pickupLoc = member.savedLocation;
        modal.querySelector("#pickupLocationStatus").textContent = `📍 Lokasi member tersimpan: ${member.savedLocation.lat.toFixed(5)}, ${member.savedLocation.lng.toFixed(5)}`;
        if(!deliveryLoc){
          deliveryLoc = member.savedLocation;
          modal.querySelector("#deliveryLocationStatus").textContent = modal.querySelector("#pickupLocationStatus").textContent;
        }
        applyAutoFee();
      }
    } else {
      custNameInput.readOnly = false;
      custNameInput.style.background = "";
      matchNoteBox.innerHTML = "";
    }
  }

  custPhoneInput.addEventListener("input", async ()=>{
    refreshLoyaltyPreview();
    const phone = custPhoneInput.value.trim();
    if(phone.length < 8){ applyMemberMatch(null); return; }
    const member = await getMemberStatus(phone);
    applyMemberMatch(member && member.name ? member : null);
  });

  modal.querySelector("#searchMemberBtn").addEventListener("click", ()=>{
    openMemberPickerModal((member)=>{
      custNameInput.value = member.name || "";
      custPhoneInput.value = member.phone ? member.phone.replace(/^62/,'0') : "";
      applyMemberMatch(member);
      custPhoneInput.dispatchEvent(new Event("input"));
    });
  });

  const addKiloanBtn = modal.querySelector("#addKiloanLine");
  addKiloanBtn.addEventListener("click", ()=>{
    const subType = modal.querySelector("#kiloanJenisPicker").value;
    const tierId = modal.querySelector("#kiloanTierPicker").value;
    const weightKg = parseFloat(modal.querySelector("#kiloanWeight").value);
    if(!weightKg || weightKg <= 0){ toast("Isi berat yang valid", "warn"); return; }
    const tier = (pricing.kiloan[subType] || []).find(t=>t.id===tierId);
    if(!tier){ toast("Pilih opsi durasi & harga dulu", "warn"); return; }
    const subtotal = Math.round(tier.rate * weightKg);
    kiloanCart.push({
      subType, subTypeLabel: KILOAN_LABELS[subType], tierId,
      duration: tier.duration, unit: tier.unit, rate: tier.rate,
      weightKg, subtotal
    });
    modal.querySelector("#kiloanWeight").value = "";
    renderKiloanCart();
    recalcTotal();
    refreshLoyaltyPreview();
  });

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
  renderKiloanCart();
  renderSatuanCart();
  recalcTotal();

  modal.querySelector("[data-action='save-order']").addEventListener("click", async ()=>{
    const customerName = modal.querySelector("#ordCustName").value.trim();
    const customerPhone = modal.querySelector("#ordCustPhone").value.trim();
    const userNote = modal.querySelector("#ordNote").value.trim();
    let total = parseThousands(modal.querySelector("#ordTotal").value);
    const bayarRaw = modal.querySelector("#ordBayar").value;
    const amountPaid = bayarRaw === "" ? total : parseThousands(bayarRaw);

    if(!customerName){ toast("Isi nama pelanggan", "warn"); return; }
    if(isNaN(total) || total < 0){ toast("Total tidak valid", "warn"); return; }

    let categoryId, categoryName, note = userNote;
    let discountAmount = 0, discountReason = null, estimatedReadyAt = null, durationLabel = null;
    let totalWeightKg = null;

    if(serviceType === "kiloan"){
      if(kiloanCart.length === 0){ toast("Tambahkan minimal 1 layanan kiloan", "warn"); return; }
      categoryId = "jasa-cuci";
      totalWeightKg = kiloanCart.reduce((s,l)=>s+l.weightKg,0);
      const durLine = kiloanCart.reduce((longest,l)=>{
        const ms = durationMs(l.duration, l.unit);
        return ms > longest.ms ? { ms, label:`${l.duration} ${l.unit}` } : longest;
      }, { ms:0, label:"" });
      estimatedReadyAt = Date.now() + durLine.ms;
      durationLabel = durLine.label;

      if(customerPhone){
        const { promo } = await recordKiloanAccumulation(customerPhone, customerName, kiloanCart, kiloanLoyalty);
        if(promo.applied){
          const subtypeLines = kiloanCart.filter(l=>l.subType===promo.subType);
          const subtypeTotal = subtypeLines.reduce((s,l)=>s+l.subtotal,0);
          const subtypeWeight = subtypeLines.reduce((s,l)=>s+l.weightKg,0);
          const avgRate = subtypeTotal / (subtypeWeight || 1);
          discountAmount = Math.min(computeDiscountRp(promo, avgRate), subtypeTotal);
          discountReason = promo.promoType === "discount"
            ? `Promo Member ${promo.subTypeLabel} (akumulasi ${promo.thresholdKg}kg): Potongan ${Reports.formatRupiah(promo.discountAmount)}`
            : `Promo Member ${promo.subTypeLabel} (akumulasi ${promo.thresholdKg}kg): Gratis ${promo.freeKg}kg`;
        }
      }
    } else if(serviceType === "satuan"){
      if(satuanCart.length === 0){ toast("Tambahkan minimal 1 barang", "warn"); return; }
      categoryId = "cuci-satuan";
      if(customerPhone) await ensureMemberIdentity(customerPhone, customerName);
    } else {
      const subType = modal.querySelector("#ordSubTypeSelf").value;
      categoryId = "self-service";
      var selfSubType = subType, selfSubTypeLabel = SELF_SERVICE_LABELS[subType];
    }

    const cat = state.categories.find(c=>c.id===categoryId);
    categoryName = cat?.name || "";

    let isFreeVisit = false;
    if(serviceType === "self-service" && customerPhone){
      const visitResult = await recordSelfServiceVisit(customerPhone, customerName);
      isFreeVisit = visitResult.isFree;
    }

    const receiptNo = await DB.getNextReceiptCode(serviceType, Reports.todayStr());
    const changeAmount = amountPaid - total;
    const collectedAmount = Math.min(amountPaid, total); // cash actually kept, excludes kembalian given back
    const piutangAmount = Math.max(0, total - amountPaid);
    const paymentStatus = piutangAmount > 0 ? "belum-lunas" : "lunas";
    const paymentMethod = modal.querySelector("#ordPaymentMethod").value;
    const orderRef = fs.collection("orders").doc();
    const orderId = orderRef.id;

    const txRecord = {
      type: "in", categoryId, categoryName,
      account: cat?.account, amount: collectedAmount, date: Reports.todayStr(),
      note, customerName, serviceType, receiptNo, amountPaid, changeAmount, orderId, branchId, paymentMethod,
      orderTotal: total, paymentStatus, piutangAmount
    };
    if(serviceType === "kiloan") txRecord.kiloanItems = kiloanCart;
    if(serviceType === "satuan") txRecord.satuanItems = satuanCart;
    if(serviceType === "self-service"){ txRecord.subType = selfSubType; txRecord.subTypeLabel = selfSubTypeLabel; }
    if(customerPhone) txRecord.customerPhone = customerPhone;
    if(totalWeightKg) txRecord.weightKg = totalWeightKg;
    if(isFreeVisit) txRecord.isFreeVisit = true;
    if(discountAmount > 0){ txRecord.discountAmount = discountAmount; txRecord.discountReason = discountReason; }
    if(estimatedReadyAt){ txRecord.estimatedReadyAt = estimatedReadyAt; txRecord.durationLabel = durationLabel; }
    if(photoUrls.length > 0){ txRecord.hasPhotos = true; txRecord.photoCount = photoUrls.length; }
    if(modal.querySelector("#ordCourierToggle").checked){
      const fee = parseThousands(modal.querySelector("#ordDeliveryFee").value);
      if(fee > 0) txRecord.deliveryFee = fee;
    }

    const txId = await DB.addTransaction(txRecord);

    const orderPayload = { customerName, note, serviceType, total, receiptNo, amountPaid, changeAmount, branchId, paymentMethod, paymentStatus, piutangAmount };
    if(serviceType === "kiloan") orderPayload.kiloanItems = kiloanCart;
    if(serviceType === "satuan") orderPayload.satuanItems = satuanCart;
    if(serviceType === "self-service"){ orderPayload.subType = selfSubType; orderPayload.subTypeLabel = selfSubTypeLabel; }
    if(customerPhone) orderPayload.customerPhone = customerPhone;
    if(totalWeightKg) orderPayload.weightKg = totalWeightKg;
    if(estimatedReadyAt){ orderPayload.estimatedReadyAt = estimatedReadyAt; orderPayload.durationLabel = durationLabel; }
    if(discountAmount > 0){ orderPayload.discountAmount = discountAmount; orderPayload.discountReason = discountReason; }
    if(photoUrls.length > 0) orderPayload.photos = photoUrls;

    if(modal.querySelector("#ordCourierToggle").checked){
      const needsPickupChecked = modal.querySelector("#ordNeedsPickup").checked;
      const needsDeliveryChecked = modal.querySelector("#ordNeedsDelivery").checked;
      const courierUid = modal.querySelector("#ordCourier").value;
      const courierStaff = staffList.find(s=>s.uid===courierUid);
      const deliveryFee = parseThousands(modal.querySelector("#ordDeliveryFee").value);
      if(needsPickupChecked){
        orderPayload.needsPickup = true;
        orderPayload.pickupAddress = modal.querySelector("#ordPickupAddress").value.trim();
        orderPayload.pickupDone = false;
        if(pickupLoc){
          orderPayload.pickupLocation = pickupLoc;
          if(customerPhone){
            const m = await DB.getMember(customerPhone);
            if(m){
              m.savedLocation = pickupLoc;
              if(orderPayload.pickupAddress) m.address = orderPayload.pickupAddress;
              await DB.upsertMember(m);
            }
          }
        }
      }
      if(needsDeliveryChecked){
        orderPayload.needsDelivery = true;
        orderPayload.deliveryAddress = modal.querySelector("#ordDeliveryAddress").value.trim();
        orderPayload.deliveryDone = false;
        if(deliveryLoc) orderPayload.deliveryLocation = deliveryLoc;
      }
      const distLoc = deliveryLoc || pickupLoc;
      if(distLoc && branchDeliverySettings?.lat){
        orderPayload.distanceKm = Math.round(haversineKm(branchDeliverySettings.lat, branchDeliverySettings.lng, distLoc.lat, distLoc.lng) * 10) / 10;
      }
      if(courierUid){
        orderPayload.courierId = courierUid;
        orderPayload.courierName = courierStaff?.name || courierStaff?.email || "";
      }
      if(deliveryFee > 0) orderPayload.deliveryFee = deliveryFee;
    }
    orderPayload.transactionId = txId;

    await DB.addOrder(orderPayload, orderId);

    closeModal();
    toast("Pesanan & pendapatan tersimpan");

    const loyaltyProgressText = await buildLoyaltyProgressText(txRecord);
    offerSendReceipt({ ...txRecord, id: txId, orderId, hasPhotos: photoUrls.length > 0, loyaltyProgressText });
  });
}

function bindMemberRowEvents(){
  document.querySelectorAll("[data-action='view-member-detail']").forEach(card=>{
    card.addEventListener("click", async (e)=>{
      if(e.target.closest(".btn-row")) return; // don't open detail when clicking edit/WA
      const m = await DB.getMember(card.dataset.phone);
      if(!m) return;
      const kiloanLoyalty = await getKiloanLoyalty();
      const ssLoyalty = await getSelfServiceLoyalty();
      openMemberDetailModal(m, kiloanLoyalty, ssLoyalty);
    });
  });
  document.querySelectorAll("[data-action='edit-member']").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      const m = await DB.getMember(btn.dataset.phone);
      if(m) openAddMemberModal(m);
    });
  });
  document.querySelectorAll("[data-action='wa-member']").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      window.open(`https://wa.me/${btn.dataset.phone}`, "_blank");
    });
  });
  document.querySelectorAll("[data-action='claim-kiloan']").forEach(btn=>{
    btn.addEventListener("click", ()=> handleMemberClaimClick(btn));
  });
  document.querySelectorAll("[data-action='claim-selfservice']").forEach(btn=>{
    btn.addEventListener("click", ()=> handleMemberClaimClick(btn));
  });
}

async function handleMemberClaimClick(btn){
  if(btn.dataset.action === "claim-kiloan"){
    const key = btn.dataset.subtype;
    const m = await DB.getMember(btn.dataset.phone);
    const kiloanLoyalty = await getKiloanLoyalty();
    const cfg = kiloanLoyalty[key];
    const balance = (typeof m?.kiloanBalance === "object" && m.kiloanBalance?.[key]) || 0;
    if(!m || balance < cfg.thresholdKg){ toast("Belum memenuhi target", "warn"); return; }
    if(!confirm(`Klaim promo ${KILOAN_LABELS[key]} untuk ${m.name || m.phone} sekarang?`)) return;
    m.kiloanBalance[key] -= cfg.thresholdKg;
    m.kiloanFreeRedeemed = m.kiloanFreeRedeemed || {};
    m.kiloanFreeRedeemed[key] = (m.kiloanFreeRedeemed[key]||0) + 1;
    await DB.upsertMember(m);
    toast(`Promo ${KILOAN_LABELS[key]} diklaim — progress mulai lagi dari awal`);
    renderMemberList();
  } else {
    const m = await DB.getMember(btn.dataset.phone);
    const ssLoyalty = await getSelfServiceLoyalty();
    const target = ssLoyalty.visitTarget || 10;
    if(!m || (m.visits||0) < target){ toast("Belum memenuhi target", "warn"); return; }
    if(!confirm(`Klaim gratis 1x self-service untuk ${m.name || m.phone} sekarang?`)) return;
    m.visits = 0;
    m.freeRedeemed = (m.freeRedeemed||0) + 1;
    await DB.upsertMember(m);
    toast("Gratis 1x diklaim — progress mulai lagi dari awal");
    renderMemberList();
  }
}

async function pageMember(){
  const kiloanLoyalty = await getKiloanLoyalty();
  const ssLoyalty = await getSelfServiceLoyalty();
  return `
    <button class="btn btn-primary btn-block" data-action="add-member" style="margin-bottom:14px;">${ICONS.plus} Tambah Member</button>
    <div class="card" style="background:linear-gradient(120deg, var(--coin-bg), #fff 80%); border:1px solid #F0DFC0;">
      <div class="card-title">Program Loyalty</div>
      <div class="small" style="line-height:1.7;">
        Self-Service: ${ssLoyalty.enabled ? `setiap <b>${ssLoyalty.visitTarget}x</b> kunjungan, gratis 1x cuci+kering berikutnya.` : `<span class="muted">belum diaktifkan — atur di Atur → Promo Self-Service.</span>`}<br>
        ${Object.entries(KILOAN_LABELS).map(([key,label])=>{
          const cfg = kiloanLoyalty[key];
          return `${label}: ${cfg.enabled ? `setiap akumulasi <b>${cfg.thresholdKg}kg</b>, dapat ${cfg.promoType==='discount' ? `potongan <b>${Reports.formatRupiah(cfg.discountAmount)}</b>` : `gratis <b>${cfg.freeKg}kg</b>`}.` : `<span class="muted">belum diaktifkan.</span>`}`;
        }).join("<br>")}
      </div>
    </div>
    <div class="cucian-search" style="margin-bottom:14px;">
      ${ICONS.search}
      <input type="text" id="memberListSearchInput" placeholder="Cari nama atau No. WA..." value="${escapeHtml(state.memberSearch||'')}">
    </div>
    <div id="memberListContainer"></div>
  `;
}

async function renderMemberList(){
  const container = document.getElementById("memberListContainer");
  if(!container) return;
  const kiloanLoyalty = await getKiloanLoyalty();
  const ssLoyalty = await getSelfServiceLoyalty();
  const ssTarget = ssLoyalty.visitTarget || 10;
  const all = (await DB.getAllMembers()).sort((a,b)=> (b.visits+b.freeRedeemed*ssTarget) - (a.visits+a.freeRedeemed*ssTarget));
  const q = (state.memberSearch||"").trim().toLowerCase();
  const members = q
    ? all.filter(m => (m.name||"").toLowerCase().includes(q) || (m.phone||"").includes(q))
    : all;

  const pageSize = state.memberPageSize || 25;
  const totalPages = Math.max(1, Math.ceil(members.length / pageSize));
  if(state.memberPage > totalPages) state.memberPage = totalPages;
  if(state.memberPage < 1) state.memberPage = 1;
  const start = (state.memberPage - 1) * pageSize;
  const pageItems = members.slice(start, start + pageSize);

  container.innerHTML = `
    <div class="row-between no-print" style="margin-bottom:10px;">
      <span class="small muted">${members.length} member${q ? ` dari ${all.length}` : ""}</span>
      <select id="memberPageSizeSelect" style="border:1.5px solid var(--line); border-radius:8px; padding:6px 8px; font-size:12.5px;">
        ${[10,25,50,100].map(n=>`<option value="${n}" ${pageSize===n?'selected':''}>${n} / halaman</option>`).join("")}
      </select>
    </div>
      ${pageItems.length===0 ? emptyState(q ? "Tidak ditemukan." : "Belum ada member. Tambahkan manual, atau otomatis muncul saat transaksi cucian diisi nomor WA.") :
        pageItems.map(m=>memberRowHtml(m, kiloanLoyalty, ssLoyalty)).join("")}
      ${members.length > pageSize ? `
        <div class="row-between" style="margin-top:10px;">
          <button class="btn btn-outline" id="memberPrevPage" ${state.memberPage<=1?'disabled':''}>← Sebelumnya</button>
          <span class="small muted">Halaman ${state.memberPage} dari ${totalPages}</span>
          <button class="btn btn-outline" id="memberNextPage" ${state.memberPage>=totalPages?'disabled':''}>Selanjutnya →</button>
        </div>
      ` : ""}
  `;
  bindMemberRowEvents();

  const pageSizeSelect = document.getElementById("memberPageSizeSelect");
  if(pageSizeSelect) pageSizeSelect.addEventListener("change", ()=>{
    state.memberPageSize = parseInt(pageSizeSelect.value);
    state.memberPage = 1;
    renderMemberList();
  });
  const prevBtn = document.getElementById("memberPrevPage");
  if(prevBtn) prevBtn.addEventListener("click", ()=>{ state.memberPage--; renderMemberList(); });
  const nextBtn = document.getElementById("memberNextPage");
  if(nextBtn) nextBtn.addEventListener("click", ()=>{ state.memberPage++; renderMemberList(); });
}

function bindMemberControls(){
  const input = document.getElementById("memberListSearchInput");
  if(!input) return;
  let debounce = null;
  input.addEventListener("input", ()=>{
    clearTimeout(debounce);
    debounce = setTimeout(()=>{
      state.memberSearch = input.value;
      state.memberPage = 1;
      renderMemberList();
    }, 200);
  });
}

function renderMemberDetailBody(m, kiloanLoyalty, ssLoyalty){
  const ssTarget = ssLoyalty?.visitTarget || 10;
  const ssPct = Math.min(100, (m.visits / ssTarget) * 100);
  const ssReady = ssLoyalty?.enabled && m.visits >= ssTarget;
  const kBalances = (typeof m.kiloanBalance === "object" && m.kiloanBalance) || {};
  const kTotals = (typeof m.kiloanTotalAll === "object" && m.kiloanTotalAll) || {};

  const kiloanSections = Object.entries(KILOAN_LABELS).map(([key,label])=>{
    const cfg = kiloanLoyalty?.[key];
    const balance = kBalances[key] || 0;
    const total = kTotals[key] || 0;
    const threshold = cfg?.thresholdKg || 20;
    const pct = Math.min(100, (balance / threshold) * 100);
    const ready = cfg?.enabled && balance >= threshold;
    return `
      <div style="padding:10px 0; border-bottom:1px dashed var(--line);">
        <div class="small muted">${label} (total ${total.toFixed(1)}kg)</div>
        ${cfg?.enabled ? `
          <div class="loyalty-bar" style="margin-top:4px;"><div class="loyalty-fill" style="width:${pct}%"></div></div>
          <div class="small" style="margin-top:3px;">${ready ? "🎉 Siap promo!" : `${balance.toFixed(1)}/${threshold} kg`}</div>
          ${ready ? `<button class="btn btn-primary btn-block" style="margin-top:8px; background:var(--coin);" data-action="claim-kiloan" data-phone="${m.phone}" data-subtype="${key}">Klaim Promo ${label}</button>` : ""}
        ` : `<div class="small muted" style="margin-top:4px;">Promo belum aktif</div>`}
      </div>
    `;
  }).join("");

  return `
    ${kiloanSections}
    <div style="padding-top:10px;">
      <div class="small muted">Self-Service</div>
      ${ssLoyalty?.enabled ? `
        <div class="loyalty-bar" style="margin-top:4px;"><div class="loyalty-fill" style="width:${ssPct}%"></div></div>
        <div class="small" style="margin-top:3px;">${ssReady ? "🎉 Siap gratis!" : `${m.visits||0}/${ssTarget} kunjungan`}</div>
        ${ssReady ? `<button class="btn btn-primary btn-block" style="margin-top:8px; background:var(--mint);" data-action="claim-selfservice" data-phone="${m.phone}">Klaim Gratis 1x</button>` : ""}
      ` : `<div class="small muted" style="margin-top:4px;">Promo belum aktif — atur di Atur → Promo Self-Service</div>`}
    </div>
  `;
}

function isAnyPromoReady(m, kiloanLoyalty, ssLoyalty){
  const ssTarget = ssLoyalty?.visitTarget || 10;
  if(ssLoyalty?.enabled && (m.visits||0) >= ssTarget) return true;
  const kBalances = (typeof m.kiloanBalance === "object" && m.kiloanBalance) || {};
  for(const key of Object.keys(KILOAN_LABELS)){
    const cfg = kiloanLoyalty?.[key];
    if(cfg?.enabled && (kBalances[key]||0) >= (cfg.thresholdKg||20)) return true;
  }
  return false;
}

function openMemberDetailModal(m, kiloanLoyalty, ssLoyalty){
  const modal = openModal(`
    <h2>${escapeHtml(m.name || "Tanpa nama")}</h2>
    <p class="small muted" style="margin-top:-8px;">${m.phone}${m.address ? " · " + escapeHtml(m.address) : ""}</p>
    ${m.savedLocation ? `<p class="small" style="color:var(--mint); margin-top:4px;">${ICONS.pin} Lokasi peta tersimpan</p>` : ""}
    <div style="margin-top:10px;">
      ${renderMemberDetailBody(m, kiloanLoyalty, ssLoyalty)}
    </div>
    <button class="btn btn-outline btn-block" data-action="detail-close" style="margin-top:16px;">Tutup</button>
  `);
  modal.querySelectorAll("[data-action='claim-kiloan'], [data-action='claim-selfservice']").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      await handleMemberClaimClick(btn);
      closeModal();
    });
  });
  modal.querySelector("[data-action='detail-close']").addEventListener("click", closeModal);
}

function memberRowHtml(m, kiloanLoyalty, ssLoyalty){
  const ready = isAnyPromoReady(m, kiloanLoyalty, ssLoyalty);
  const initial = (m.name || "?").trim().charAt(0).toUpperCase();
  return `
    <div class="card" data-action="view-member-detail" data-phone="${m.phone}" style="margin-bottom:10px; cursor:pointer; display:flex; align-items:center; gap:12px; padding:13px 14px;">
      <div style="width:36px; height:36px; border-radius:50%; background:#EAF3FF; color:#1E5FA8; display:flex; align-items:center; justify-content:center; font-size:14px; font-weight:700; flex-shrink:0;">${escapeHtml(initial)}</div>
      <div style="flex:1; min-width:0;">
        <div style="font-weight:700; display:flex; align-items:center; gap:6px;">${escapeHtml(m.name || "Tanpa nama")}${ready ? `<span class="tag" style="background:var(--coin-bg); color:var(--coin); font-size:10.5px;">🎉 Siap klaim</span>` : ""}</div>
        <div class="small muted" style="font-family:var(--font-mono);">${m.phone}${m.address ? " · " + escapeHtml(m.address) : ""}</div>
      </div>
      <div class="btn-row" style="gap:6px; flex-shrink:0;">
        <button class="tx-del" data-action="edit-member" data-phone="${m.phone}" title="Edit">${ICONS.edit}</button>
        <button class="tx-del" data-action="wa-member" data-phone="${m.phone}" title="Chat WA">${ICONS.chat}</button>
      </div>
    </div>
  `;
}

function openMemberPickerModal(onSelect){
  const overlay = el(`
    <div class="camera-overlay" style="z-index:75;">
      <div class="modal-sheet">
        <h2>Cari Pelanggan Terdaftar</h2>
        <div class="cucian-search" style="margin-bottom:14px;">
          ${ICONS.search}
          <input type="text" id="memberSearchInput" placeholder="Cari nama atau No. WA..." autofocus>
        </div>
        <div id="memberSearchResults"></div>
        <button type="button" class="btn btn-outline btn-block" id="closeMemberPickerBtn" style="margin-top:14px;">Tutup</button>
      </div>
    </div>
  `);
  document.body.appendChild(overlay);

  async function runSearch(){
    const q = overlay.querySelector("#memberSearchInput").value.trim().toLowerCase();
    const box = overlay.querySelector("#memberSearchResults");
    const all = await DB.getAllMembers();
    const filtered = q
      ? all.filter(m => (m.name||"").toLowerCase().includes(q) || (m.phone||"").includes(q))
      : all;
    if(filtered.length === 0){
      box.innerHTML = emptyState(q ? "Tidak ditemukan." : "Belum ada member terdaftar.");
      return;
    }
    box.innerHTML = filtered.slice(0,30).map(m => `
      <div class="tx-item" data-pick-member="${m.phone}" style="cursor:pointer;">
        <div class="tx-dot in">${ICONS.star}</div>
        <div class="tx-info">
          <div class="cat">${escapeHtml(m.name||"Tanpa nama")}</div>
          <div class="meta">${m.phone}</div>
        </div>
      </div>
    `).join("");
    box.querySelectorAll("[data-pick-member]").forEach(row=>{
      row.addEventListener("click", async ()=>{
        const member = all.find(m=>m.phone===row.dataset.pickMember);
        if(member){ onSelect(member); overlay.remove(); }
      });
    });
  }

  overlay.querySelector("#closeMemberPickerBtn").addEventListener("click", ()=> overlay.remove());

  let searchDebounce = null;
  overlay.querySelector("#memberSearchInput").addEventListener("input", ()=>{
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(runSearch, 200);
  });
  runSearch();
}

function openAddMemberModal(existing){
  const isEdit = !!existing;
  const modal = openModal(`
    <h2>${isEdit ? "Edit Member" : "Tambah Member"}</h2>
    <div class="field"><label>No. HP (ID Member)</label><input type="tel" inputmode="numeric" id="memPhone" placeholder="08xxxxxxxxxx" value="${existing?.phone ? existing.phone.replace(/^62/,'0') : ''}" ${isEdit?'disabled':''}></div>
    <div class="field"><label>Nama</label><input type="text" id="memName" placeholder="Contoh: Budi" value="${existing?.name||''}"></div>
    <div class="field">
      <label>Alamat Pengiriman (opsional)</label>
      <textarea id="memAddress" placeholder="Contoh: Jl. Mawar No. 5">${existing?.address||''}</textarea>
      <button type="button" class="btn btn-outline btn-block" id="setMemberLocationBtn" style="margin-top:8px;">${ICONS.pin} Set Lokasi di Peta</button>
      <div id="memberLocationStatus" class="small muted" style="margin-top:6px;">${existing?.savedLocation ? `📍 Lokasi tersimpan: ${existing.savedLocation.lat.toFixed(5)}, ${existing.savedLocation.lng.toFixed(5)}` : 'Belum ada lokasi tersimpan.'}</div>
    </div>
    <button class="btn btn-primary btn-block" data-action="save-member">${isEdit ? "Simpan Perubahan" : "Tambah Member"}</button>
    ${isEdit ? `<button class="btn btn-danger btn-block" data-action="delete-member" style="margin-top:10px;">Hapus Member</button>` : ""}
  `);

  let savedLocation = existing?.savedLocation || null;
  modal.querySelector("#setMemberLocationBtn").addEventListener("click", ()=>{
    openMapPickerModal(savedLocation?.lat, savedLocation?.lng, (lat,lng)=>{
      savedLocation = { lat, lng };
      modal.querySelector("#memberLocationStatus").textContent = `📍 Lokasi tersimpan: ${lat.toFixed(5)}, ${lng.toFixed(5)}`;
    });
  });

  modal.querySelector("[data-action='save-member']").addEventListener("click", async ()=>{
    const phone = normalizePhone(modal.querySelector("#memPhone").value.trim());
    const name = modal.querySelector("#memName").value.trim();
    const address = modal.querySelector("#memAddress").value.trim();
    if(!phone || phone.length < 10){ toast("Isi No. HP yang valid", "warn"); return; }
    if(!name){ toast("Isi nama member", "warn"); return; }

    if(!isEdit){
      const dup = await DB.getMember(phone);
      if(dup){
        toast(`Nomor ini sudah terdaftar sebagai "${dup.name || phone}" — buka & edit member itu, jangan buat baru`, "warn");
        return;
      }
    }

    const rec = existing || { phone, visits:0, freeRedeemed:0, kiloanBalance:0, kiloanTotalAll:0, kiloanFreeRedeemed:0 };
    rec.phone = phone;
    rec.name = name;
    rec.address = address;
    if(savedLocation) rec.savedLocation = savedLocation;
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
  return m || { phone: p, name: "", address: "", visits: 0, freeRedeemed: 0, kiloanBalance: {}, kiloanTotalAll: {}, kiloanFreeRedeemed: {} };
}

/** Keeps the member directory in sync for ANY service type (including Satuan,
 *  which doesn't otherwise touch loyalty). Enforces "1 nomor = 1 nama":
 *  if the phone already belongs to someone, their registered name is kept —
 *  never silently overwritten by a different name typed on a new order. */
async function ensureMemberIdentity(phone, name){
  const p = normalizePhone(phone);
  if(!p) return;
  const existing = await DB.getMember(p);
  if(existing && existing.name){
    return; // registered name is the source of truth — don't touch it here
  }
  const m = existing || { phone: p, visits: 0, freeRedeemed: 0, kiloanBalance: 0, kiloanTotalAll: 0, kiloanFreeRedeemed: 0 };
  m.name = name || m.name || "";
  await DB.upsertMember(m);
}

/** Call after saving a self-service transaction. Returns { isFree, progress, member } */
async function recordSelfServiceVisit(phone, name){
  const p = normalizePhone(phone);
  if(!p) return null;
  const ssLoyalty = await getSelfServiceLoyalty();
  const target = ssLoyalty.visitTarget || 10;
  let m = await DB.getMember(p);
  if(!m) m = { phone: p, name: name || "", visits: 0, freeRedeemed: 0 };
  else if(!m.name && name) m.name = name;

  const isFree = ssLoyalty.enabled && m.visits >= target;
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

function loyaltyNoteHtml(status, ssLoyalty){
  if(!status) return "";
  const target = ssLoyalty?.visitTarget || 10;
  if(!ssLoyalty?.enabled){
    return `<div class="loyalty-note"><div class="small muted">Promo Self-Service belum aktif — atur di Atur → Promo Self-Service.</div></div>`;
  }
  if(status.visits >= target){
    return `<div class="loyalty-note free">🎉 GRATIS! Kunjungan ini adalah bonus member (cuci+kering gratis).</div>`;
  }
  const remaining = target - status.visits;
  const label = status.visits === 0 ? "Pelanggan baru — mulai kumpulkan poin kunjungan." : `Progress: ${status.visits}/${target} menuju gratis 1x cuci+kering.`;
  return `
    <div class="loyalty-note">
      <div class="small">${label}</div>
      <div class="loyalty-bar"><div class="loyalty-fill" style="width:${(status.visits/target)*100}%"></div></div>
      ${status.visits>0 ? `<div class="small muted">${remaining} kali lagi menuju gratis</div>` : ""}
    </div>
  `;
}

/* ---------------- Kiloan loyalty (akumulasi kg -> promo) ---------------- */

/** Called after saving a kiloan transaction. Accumulates weight and applies/reset promo. */
/** kiloanCart: [{subType, weightKg, ...}]. kiloanLoyalty: per-subtype config from getKiloanLoyalty().
 *  Accumulates weight separately per sub-type, and returns at most one qualifying promo
 *  (the first sub-type in the cart that hits its own threshold). */
async function recordKiloanAccumulation(phone, name, kiloanCart, kiloanLoyalty){
  const p = normalizePhone(phone);
  if(!p) return null;
  let m = await DB.getMember(p);
  if(!m) m = { phone: p, name: name || "", visits: 0, freeRedeemed: 0 };
  else if(!m.name && name) m.name = name;

  // Migrate legacy flat-number kiloan fields (pre per-subtype tracking) into the new per-subtype shape.
  if(typeof m.kiloanBalance !== "object" || m.kiloanBalance === null) m.kiloanBalance = {};
  if(typeof m.kiloanTotalAll !== "object" || m.kiloanTotalAll === null) m.kiloanTotalAll = {};
  if(typeof m.kiloanFreeRedeemed !== "object" || m.kiloanFreeRedeemed === null) m.kiloanFreeRedeemed = {};

  const weightBySubtype = {};
  for(const line of kiloanCart){
    weightBySubtype[line.subType] = (weightBySubtype[line.subType]||0) + line.weightKg;
  }

  let qualifyingPromo = null;
  for(const [subType, weightKg] of Object.entries(weightBySubtype)){
    m.kiloanBalance[subType] = (m.kiloanBalance[subType]||0) + weightKg;
    m.kiloanTotalAll[subType] = (m.kiloanTotalAll[subType]||0) + weightKg;

    const cfg = kiloanLoyalty?.[subType];
    if(!qualifyingPromo && cfg?.enabled && m.kiloanBalance[subType] >= cfg.thresholdKg){
      qualifyingPromo = {
        applied: true, subType, subTypeLabel: KILOAN_LABELS[subType],
        promoType: cfg.promoType, discountAmount: cfg.discountAmount,
        freeKg: cfg.freeKg, thresholdKg: cfg.thresholdKg
      };
      m.kiloanBalance[subType] -= cfg.thresholdKg; // carry-over remainder, not a hard reset
      m.kiloanFreeRedeemed[subType] = (m.kiloanFreeRedeemed[subType]||0) + 1;
    }
  }

  m.lastKiloanVisit = Reports.todayStr();
  await DB.upsertMember(m);
  return { promo: qualifyingPromo || { applied: false }, member: m };
}

/** status: a member record (or getMemberStatus() result). kiloanLoyalty: per-subtype config. */
function kiloanLoyaltyNoteHtml(status, kiloanLoyalty){
  if(!kiloanLoyalty) return "";
  const balances = (typeof status?.kiloanBalance === "object" && status.kiloanBalance) || {};
  const sections = Object.entries(KILOAN_LABELS).map(([key,label])=>{
    const cfg = kiloanLoyalty[key];
    if(!cfg?.enabled) return "";
    const balance = balances[key] || 0;
    if(balance >= cfg.thresholdKg){
      const promoText = cfg.promoType === "discount"
        ? `Potongan ${Reports.formatRupiah(cfg.discountAmount)}`
        : `Gratis ${cfg.freeKg} kg`;
      return `<div class="loyalty-note free">🎉 ${label}: promo aktif! ${promoText} akan otomatis diterapkan.</div>`;
    }
    const remaining = cfg.thresholdKg - balance;
    return `
      <div class="loyalty-note">
        <div class="small">${label}: ${balance.toFixed(1)}/${cfg.thresholdKg} kg</div>
        <div class="loyalty-bar"><div class="loyalty-fill" style="width:${Math.min(100,(balance/cfg.thresholdKg)*100)}%"></div></div>
        <div class="small muted">${remaining.toFixed(1)} kg lagi menuju promo</div>
      </div>
    `;
  }).filter(Boolean);
  return sections.join("");
}

/* ---------------- Struk via WhatsApp ---------------- */

/* ---------------- Peta & Ongkir Otomatis ---------------- */

function haversineKm(lat1, lng1, lat2, lng2){
  const R = 6371;
  const dLat = (lat2-lat1) * Math.PI/180;
  const dLng = (lng2-lng1) * Math.PI/180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

/** Actual driving distance via OpenRouteService (free tier, commercial-use allowed).
 *  Returns km, or null if no API key configured or the request fails —
 *  callers should fall back to haversineKm() in that case. */
async function roadDistanceKm(lat1, lng1, lat2, lng2){
  if(!ORS_API_KEY) return null;
  try{
    const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${ORS_API_KEY}&start=${lng1},${lat1}&end=${lng2},${lat2}`;
    const res = await fetch(url);
    if(!res.ok) return null;
    const data = await res.json();
    const meters = data?.features?.[0]?.properties?.summary?.distance;
    return typeof meters === "number" ? meters/1000 : null;
  }catch(e){
    return null;
  }
}

function computeAutoDeliveryFee(distanceKm, deliverySettings){
  if(!deliverySettings || !deliverySettings.freeRadiusKm) return 0;
  const excess = distanceKm - deliverySettings.freeRadiusKm;
  if(excess <= 0) return 0;
  return Math.ceil(excess * (deliverySettings.perKmRate||0));
}

/** Standalone map picker overlay (own class, doesn't disturb any modal open behind it).
 *  onConfirm(lat, lng) is called when the user confirms a location. */
function openMapPickerModal(initialLat, initialLng, onConfirm){
  const overlay = el(`
    <div class="camera-overlay" style="z-index:80;">
      <div class="modal-sheet">
        <h2>Pilih Lokasi</h2>
        <p class="small muted" style="margin-bottom:10px;">Ketik alamat untuk cari, tempel koordinat/link Google Maps, geser pin untuk pas-kan titiknya, ketuk/klik langsung di peta, atau pakai lokasi GPS saat ini.</p>
        <div class="cucian-search" style="margin-bottom:10px;">
          ${ICONS.search}
          <input type="text" id="mapSearchInput" placeholder="Ketik alamat, misal: Jl. Pemuda No. 27 Mataram">
        </div>
        <div id="mapSearchResults" style="margin-bottom:10px;"></div>

        <div class="field" style="background:var(--foam-white); border-radius:10px; padding:10px; margin-bottom:10px;">
          <label class="small" style="font-weight:600;">Atau tempel koordinat / link Google Maps</label>
          <p class="small muted" style="margin:2px 0 8px;">Kalau pelanggan share lokasi lewat WhatsApp: buka lokasinya di Google Maps → salin link atau koordinat → tempel di sini</p>
          <div style="display:flex; gap:8px;">
            <input type="text" id="mapPasteInput" placeholder="Contoh: -8.5715, 116.1033 atau link maps.google.com" style="flex:1;">
            <button type="button" class="btn btn-outline" id="mapPasteBtn">Pakai</button>
          </div>
        </div>

        <div id="mapPickerEl" style="height:320px; border-radius:12px; overflow:hidden; margin-bottom:10px;"></div>
        <div id="mapPickerCoords" class="small muted" style="margin-bottom:10px;">Belum ada titik dipilih.</div>
        <button type="button" class="btn btn-outline btn-block" id="mapUseGpsBtn" style="margin-bottom:10px;">${ICONS.pin} Gunakan Lokasi GPS Saat Ini</button>
        <button type="button" class="btn btn-primary btn-block" id="mapConfirmBtn" style="margin-bottom:10px;" disabled>Konfirmasi Lokasi</button>
        <button type="button" class="btn btn-outline btn-block" id="mapCancelBtn">Batal</button>
      </div>
    </div>
  `);
  document.body.appendChild(overlay);

  let picked = (initialLat && initialLng) ? { lat: initialLat, lng: initialLng } : null;
  const startLat = initialLat || -6.2;
  const startLng = initialLng || 106.8;

  const map = L.map(overlay.querySelector("#mapPickerEl")).setView([startLat, startLng], picked ? 15 : 12);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap"
  }).addTo(map);

  let marker = picked ? L.marker([picked.lat, picked.lng], { draggable: true }).addTo(map) : null;
  if(marker) marker.on("dragend", ()=>{ const p = marker.getLatLng(); setPoint(p.lat, p.lng, false); });
  const coordsBox = overlay.querySelector("#mapPickerCoords");
  const confirmBtn = overlay.querySelector("#mapConfirmBtn");

  function setPoint(lat, lng, recenter){
    picked = { lat, lng };
    if(marker){
      marker.setLatLng([lat,lng]);
    } else {
      marker = L.marker([lat,lng], { draggable: true }).addTo(map);
      marker.on("dragend", ()=>{ const p = marker.getLatLng(); setPoint(p.lat, p.lng, false); });
    }
    if(recenter) map.setView([lat,lng], 16);
    coordsBox.textContent = `Titik dipilih: ${lat.toFixed(5)}, ${lng.toFixed(5)} — geser pin kalau perlu digeser`;
    confirmBtn.disabled = false;
  }
  if(picked) coordsBox.textContent = `Titik dipilih: ${picked.lat.toFixed(5)}, ${picked.lng.toFixed(5)} — geser pin kalau perlu digeser`;

  map.on("click", (e)=> setPoint(e.latlng.lat, e.latlng.lng, false));

  const searchInput = overlay.querySelector("#mapSearchInput");
  const searchResults = overlay.querySelector("#mapSearchResults");
  let searchDebounce = null;
  searchInput.addEventListener("input", ()=>{
    clearTimeout(searchDebounce);
    const q = searchInput.value.trim();
    if(q.length < 4){ searchResults.innerHTML = ""; return; }
    searchDebounce = setTimeout(async ()=>{
      searchResults.innerHTML = `<p class="small muted">Mencari...</p>`;
      try{
        const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=5&countrycodes=id&q=${encodeURIComponent(q)}`);
        const results = await res.json();
        if(!results.length){ searchResults.innerHTML = `<p class="small muted">Alamat tidak ditemukan — coba ketik lebih detail, atau taruh pin manual di peta.</p>`; return; }
        searchResults.innerHTML = results.map((r,i)=>`
          <div class="tx-item" data-search-result="${i}" style="cursor:pointer;">
            <div class="tx-dot in">${ICONS.pin}</div>
            <div class="tx-info"><div class="cat" style="font-size:13px;">${escapeHtml(r.display_name)}</div></div>
          </div>
        `).join("");
        searchResults.querySelectorAll("[data-search-result]").forEach(row=>{
          row.addEventListener("click", ()=>{
            const r = results[parseInt(row.dataset.searchResult)];
            setPoint(parseFloat(r.lat), parseFloat(r.lon), true);
            searchResults.innerHTML = "";
            searchInput.value = r.display_name;
          });
        });
      }catch(err){
        searchResults.innerHTML = `<p class="small muted">Gagal mencari — cek koneksi internet, atau taruh pin manual di peta.</p>`;
      }
    }, 600);
  });

  overlay.querySelector("#mapPasteBtn").addEventListener("click", ()=>{
    const raw = overlay.querySelector("#mapPasteInput").value.trim();
    if(!raw){ toast("Tempel koordinat atau link dulu", "warn"); return; }
    // Try: plain "lat, lng" or "lat lng"
    let match = raw.match(/(-?\d{1,3}\.\d+)[,\s]+(-?\d{1,3}\.\d+)/);
    // Try: Google Maps URL patterns like /@lat,lng, or ?q=lat,lng, or !3dlat!4dlng
    if(!match) match = raw.match(/@(-?\d{1,3}\.\d+),(-?\d{1,3}\.\d+)/);
    if(!match) match = raw.match(/[?&]q=(-?\d{1,3}\.\d+),(-?\d{1,3}\.\d+)/);
    if(!match) match = raw.match(/!3d(-?\d{1,3}\.\d+)!4d(-?\d{1,3}\.\d+)/);
    if(!match){
      toast("Format tidak dikenali — pastikan ada angka koordinat (lat, lng) di teks/link itu", "warn");
      return;
    }
    const lat = parseFloat(match[1]), lng = parseFloat(match[2]);
    if(Math.abs(lat) > 90 || Math.abs(lng) > 180){
      toast("Angka koordinat tidak valid", "warn");
      return;
    }
    setPoint(lat, lng, true);
    toast("Titik lokasi diterapkan dari koordinat yang ditempel");
  });

  overlay.querySelector("#mapUseGpsBtn").addEventListener("click", ()=>{
    if(!navigator.geolocation){ toast("Perangkat/browser ini tidak mendukung GPS", "warn"); return; }
    navigator.geolocation.getCurrentPosition(
      (pos)=> setPoint(pos.coords.latitude, pos.coords.longitude, true),
      ()=> toast("Gagal ambil lokasi GPS — pastikan izin lokasi diizinkan", "warn")
    );
  });

  function closeOverlay(){ overlay.remove(); }

  overlay.querySelector("#mapConfirmBtn").addEventListener("click", ()=>{
    if(!picked) return;
    onConfirm(picked.lat, picked.lng);
    closeOverlay();
  });
  overlay.querySelector("#mapCancelBtn").addEventListener("click", closeOverlay);

  setTimeout(()=> map.invalidateSize(), 100);
}

function normalizePhone(raw){
  if(!raw) return "";
  let digits = raw.replace(/[^\d]/g, "");
  if(digits.startsWith("0")) digits = "62" + digits.slice(1);
  else if(digits.startsWith("620")) digits = "62" + digits.slice(3);
  else if(!digits.startsWith("62")) digits = "62" + digits;
  return digits;
}

/** Normalizes any transaction into a flat list of {desc, detail, subtotal} lines
 *  so every receipt format (text/image/print) renders the same structure. */
function buildReceiptItems(t){
  if(t.kiloanItems?.length){
    return t.kiloanItems.map(l => ({
      desc: l.subTypeLabel,
      detail: `${l.weightKg} kg x ${Reports.formatRupiah(l.rate)}`,
      subtotal: l.subtotal
    }));
  }
  if(t.satuanItems?.length){
    return t.satuanItems.map(l => ({
      desc: l.name,
      detail: `${l.qty} x ${Reports.formatRupiah(l.price)}`,
      subtotal: l.price * l.qty
    }));
  }
  if(t.subTypeLabel || t.categoryName){
    return [{ desc: t.subTypeLabel || t.categoryName, detail: "", subtotal: t.amount + (t.discountAmount||0) }];
  }
  return [];
}

function buildReceiptText(t){
  const items = buildReceiptItems(t);
  const subtotal = items.reduce((s,i)=>s+i.subtotal, 0) || t.amount + (t.discountAmount||0);
  const lines = [];
  lines.push(`*${state.businessName}*`);
  if(state.businessTagline) lines.push(state.businessTagline);
  if(state.businessAddress) lines.push(`📍 ${state.businessAddress}`);
  if(state.businessPhone) lines.push(`WhatsApp: ${state.businessPhone}`);
  if(state.businessInstagram) lines.push(`Instagram: ${state.businessInstagram}`);
  lines.push("--------------------------------");
  lines.push(`Tgl        : ${fmtDate(t.date)}`);
  if(t.receiptNo) lines.push(`Struk No.  : ${t.receiptNo}`);
  if(t.customerName) lines.push(`Pelanggan  : ${t.customerName}`);
  if(t.customerPhone) lines.push(`No. Telp   : ${t.customerPhone}`);
  lines.push("--------------------------------");
  items.forEach(i=>{
    lines.push(i.desc);
    lines.push(`  ${i.detail ? i.detail + "   " : ""}${Reports.formatRupiah(i.subtotal)}`);
  });
  if(t.isFreeVisit) lines.push(`🎁 GRATIS (Reward Member 10x Kunjungan)`);
  if(t.estimatedReadyAt) lines.push(`⏱ Estimasi Selesai: ${fmtDateTime(t.estimatedReadyAt)}`);
  lines.push("--------------------------------");
  if(t.discountAmount > 0){
    lines.push(`Subtotal   : ${Reports.formatRupiah(subtotal)}`);
    lines.push(`Diskon     : -${Reports.formatRupiah(t.discountAmount)}`);
    if(t.discountReason) lines.push(`(${t.discountReason})`);
  }
  if(t.deliveryFee > 0) lines.push(`Ongkos Kirim: ${Reports.formatRupiah(t.deliveryFee)}`);
  const trueTotal = t.orderTotal ?? t.amount;
  lines.push(`Total      : ${Reports.formatRupiah(trueTotal)}`);
  if(typeof t.amountPaid === "number"){
    lines.push(`Bayar      : ${Reports.formatRupiah(t.amountPaid)}`);
    lines.push(`Kembalian  : ${Reports.formatRupiah(t.changeAmount||0)}`);
  }
  if(t.paymentMethod) lines.push(`Metode     : ${PAYMENT_METHOD_LABEL[t.paymentMethod] || t.paymentMethod}`);
  if(t.paymentStatus === "belum-lunas"){
    lines.push(`Status     : ⚠️ BELUM LUNAS (sisa ${Reports.formatRupiah(t.piutangAmount||0)})`);
  } else if(t.paymentMethod){
    lines.push(`Status     : ✅ LUNAS`);
  }
  if(t.note) lines.push(`Catatan: ${t.note}`);
  if(t.photoCount) lines.push(`📷 Total ${t.photoCount} pcs pakaian difoto`);
  lines.push("--------------------------------");
  if(t.orderId){
    lines.push(`📦 Pantau status & foto cucianmu:`);
    lines.push(trackingUrl(t.orderId));
    lines.push("--------------------------------");
  }
  if(t.loyaltyProgressText){
    lines.push(t.loyaltyProgressText);
    lines.push("--------------------------------");
  }
  lines.push("Terima kasih sudah mencuci di tempat kami 🙏");
  return lines.join("\n");
}

const WA_SEND_LOG_KEY = "laman_wa_send_log";
const WA_WARN_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const WA_WARN_THRESHOLD = 5; // more than this many sends in the window triggers a nudge

function trackWaSendAndWarn(){
  let log = [];
  try{ log = JSON.parse(localStorage.getItem(WA_SEND_LOG_KEY) || "[]"); }catch(e){ log = []; }
  const now = Date.now();
  log = log.filter(ts => now - ts < WA_WARN_WINDOW_MS);
  log.push(now);
  try{ localStorage.setItem(WA_SEND_LOG_KEY, JSON.stringify(log)); }catch(e){}
  if(log.length > WA_WARN_THRESHOLD){
    toast(`Sudah ${log.length}x kirim WA dalam 10 menit terakhir — beri jeda sebentar supaya akun WA Business tidak dianggap spam otomatis.`, "warn", 5000);
  }
}

function sendReceiptWA(t){
  const text = encodeURIComponent(buildReceiptText(t));
  const phone = normalizePhone(t.customerPhone);
  const url = phone ? `https://wa.me/${phone}?text=${text}` : `https://wa.me/?text=${text}`;
  trackWaSendAndWarn();
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

/* ---------------- Cetak Struk — Printer Thermal Bluetooth (ESC/POS) ---------------- */

// Common "transparent UART" BLE service used by many generic ESC/POS
// thermal printers (GOOJPRT, MUNBYN, and similar white-label models).
const BLE_PRINTER_SERVICE = "49535343-fe7d-4ae5-8fa9-9fafd205e455";
const BLE_PRINTER_WRITE_CHAR = "49535343-8841-43f4-a8d4-ecbe34729bb3";

let cachedPrinterDevice = null;
let cachedPrinterChar = null;

async function getPrinterSettings(){
  const saved = await DB.getSetting("printerSettings", null);
  return { widthChars: 32, ...(saved||{}) }; // 32 chars ≈ 58mm paper, 48 ≈ 80mm
}

async function setPrinterSettings(v){
  await DB.setSetting("printerSettings", v);
}

function stripForPrinter(str){
  // Thermal printers can't render emoji/unicode reliably — keep it plain ASCII.
  // (No .trim() here — these strings often end in an intentional "\n" line break,
  // which .trim() would silently delete, causing every line to run together.)
  return (str||"").replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, "");
}

/** Wraps text to fit `width` characters per line, breaking at word boundaries
 *  (spaces) instead of mid-word — thermal printers auto-wrap at a fixed
 *  character count with no regard for word breaks, which can split a word
 *  like "Selaparang" into "Selap" + "arang" across two lines. */
function wordWrap(str, width){
  const words = (str||"").split(" ");
  const lines = [];
  let current = "";
  for(const word of words){
    if(current === ""){
      current = word;
    } else if((current + " " + word).length <= width){
      current += " " + word;
    } else {
      lines.push(current);
      current = word;
    }
  }
  if(current) lines.push(current);
  return lines.join("\n");
}

function padRow(label, value, width){
  label = stripForPrinter(label); value = stripForPrinter(value);
  const space = width - label.length - value.length;
  if(space < 1) return label + " " + value;
  return label + " ".repeat(space) + value;
}

function buildEscPos(t, width){
  const ESC = 0x1B, GS = 0x1D;
  const enc = new TextEncoder();
  const chunks = [];
  const raw = (...bytes) => chunks.push(new Uint8Array(bytes));
  const text = (str) => chunks.push(enc.encode(stripForPrinter(str)));
  const items = buildReceiptItems(t);
  const subtotal = items.reduce((s,i)=>s+i.subtotal, 0);

  raw(ESC,0x40);           // init
  raw(ESC,0x61,1);         // center
  raw(ESC,0x45,1);         // bold on
  raw(GS,0x21,0x11);       // double width+height
  text(wordWrap(state.businessName, Math.floor(width/2)) + "\n");
  raw(GS,0x21,0x00);       // normal size
  raw(ESC,0x45,0);         // bold off
  if(state.businessTagline) text(wordWrap(state.businessTagline, width) + "\n");
  if(state.businessAddress) text(wordWrap(state.businessAddress, width) + "\n");
  if(state.businessPhone) text(`WhatsApp: ${state.businessPhone}\n`);
  if(state.businessInstagram) text(`Instagram: ${state.businessInstagram}\n`);
  text("\n");
  text("-".repeat(width) + "\n");

  raw(ESC,0x61,0);         // left align
  text(padRow("Tgl", fmtDate(t.date), width) + "\n");
  if(t.receiptNo) text(padRow("Struk No.", t.receiptNo, width) + "\n");
  if(t.customerName) text(padRow("Pelanggan", t.customerName, width) + "\n");
  if(t.customerPhone) text(padRow("No. Telp", t.customerPhone, width) + "\n");
  text("-".repeat(width) + "\n");
  text("\n");

  items.forEach(i=>{
    text(i.desc + "\n");
    text(padRow(i.detail ? "  "+i.detail : "", Reports.formatRupiah(i.subtotal), width) + "\n");
    text("\n");
  });
  if(t.isFreeVisit){
    raw(ESC,0x61,1); raw(ESC,0x45,1);
    text("*** GRATIS REWARD MEMBER ***\n");
    raw(ESC,0x45,0); raw(ESC,0x61,0);
    text("\n");
  }
  if(t.estimatedReadyAt){
    raw(ESC,0x61,0);
    text(`Estimasi Selesai:\n${fmtDateTime(t.estimatedReadyAt)}\n`);
    text("\n");
  }
  if(t.photoCount){
    raw(ESC,0x61,0);
    text(`Total ${t.photoCount} pcs pakaian difoto\n`);
    text("\n");
  }

  text("-".repeat(width) + "\n");
  text("\n");
  if(t.discountAmount > 0){
    text(padRow("Subtotal", Reports.formatRupiah(subtotal), width) + "\n");
    text(padRow("Diskon", `-${Reports.formatRupiah(t.discountAmount)}`, width) + "\n");
    text("\n");
  }
  if(t.deliveryFee > 0) text(padRow("Ongkos Kirim", Reports.formatRupiah(t.deliveryFee), width) + "\n");

  raw(ESC,0x45,1);
  raw(GS,0x21,0x01); // taller total
  text(padRow("TOTAL", Reports.formatRupiah(t.orderTotal ?? t.amount), width) + "\n");
  raw(GS,0x21,0x00);
  raw(ESC,0x45,0);
  text("\n");

  if(typeof t.amountPaid === "number"){
    text(padRow("Bayar", Reports.formatRupiah(t.amountPaid), width) + "\n");
    text(padRow("Kembalian", Reports.formatRupiah(t.changeAmount||0), width) + "\n");
    text("\n");
  }
  if(t.paymentMethod) text(padRow("Metode", PAYMENT_METHOD_LABEL[t.paymentMethod] || t.paymentMethod, width) + "\n");
  if(t.paymentStatus === "belum-lunas"){
    text(padRow("Status", `BELUM LUNAS`, width) + "\n");
    text(padRow("Sisa", Reports.formatRupiah(t.piutangAmount||0), width) + "\n");
  } else if(t.paymentMethod){
    text(padRow("Status", "LUNAS", width) + "\n");
  }
  text("\n");

  text("-".repeat(width) + "\n");
  text("\n");
  raw(ESC,0x61,1);
  text("Terima kasih sudah\nmencuci di tempat kami\n");
  text("\n\n\n");
  raw(GS,0x56,1); // partial cut (ignored harmlessly if no cutter)

  const total = chunks.reduce((s,c)=>s+c.length,0);
  const out = new Uint8Array(total);
  let offset = 0;
  for(const c of chunks){ out.set(c, offset); offset += c.length; }
  return out;
}

async function connectPrinter(){
  if(cachedPrinterDevice?.gatt?.connected && cachedPrinterChar) return cachedPrinterChar;
  if(!navigator.bluetooth){
    throw new Error("NO_BLUETOOTH");
  }
  const device = await navigator.bluetooth.requestDevice({
    acceptAllDevices: true,
    optionalServices: [BLE_PRINTER_SERVICE]
  });
  const server = await device.gatt.connect();
  const service = await server.getPrimaryService(BLE_PRINTER_SERVICE);
  const characteristic = await service.getCharacteristic(BLE_PRINTER_WRITE_CHAR);
  cachedPrinterDevice = device;
  cachedPrinterChar = characteristic;
  return characteristic;
}

async function printReceiptBluetooth(t){
  try{
    const settings = await getPrinterSettings();
    const data = buildEscPos(t, settings.widthChars);
    const characteristic = await connectPrinter();
    const chunkSize = 100;
    for(let i=0; i<data.length; i+=chunkSize){
      const slice = data.slice(i, i+chunkSize);
      await characteristic.writeValueWithoutResponse(slice);
      await new Promise(r => setTimeout(r, 25));
    }
    toast("Struk terkirim ke printer");
  }catch(err){
    if(err.message === "NO_BLUETOOTH"){
      toast("Browser ini tidak mendukung Bluetooth print. Coba Chrome di Android, atau pakai Cetak PDF/Sistem.", "warn");
    } else if(err.name === "NotFoundError"){
      // user cancelled the device picker — no need to alarm
    } else {
      toast("Gagal cetak — pastikan printer menyala & dalam jangkauan", "warn");
    }
  }
}

/* ---------------- Cetak Struk — jalur cadangan (dialog print browser) ---------------- */

function printReceiptSystemDialog(t){
  const items = buildReceiptItems(t);
  const subtotal = items.reduce((s,i)=>s+i.subtotal, 0);

  const area = document.createElement("div");
  area.id = "receiptPrintArea";
  area.innerHTML = `
    <div class="print-receipt">
      ${state.businessLogo ? `<img src="${state.businessLogo}" class="pr-logo">` : ""}
      <div class="pr-biz">${state.businessName}</div>
      ${state.businessTagline ? `<div class="pr-tagline">${escapeHtml(state.businessTagline)}</div>` : ""}
      ${state.businessAddress ? `<div class="pr-tagline">${escapeHtml(state.businessAddress)}</div>` : ""}
      ${state.businessPhone ? `<div class="pr-tagline">WhatsApp: ${escapeHtml(state.businessPhone)}</div>` : ""}
      ${state.businessInstagram ? `<div class="pr-tagline">Instagram: ${escapeHtml(state.businessInstagram)}</div>` : ""}
      <div class="pr-divider"></div>
      <div class="pr-row"><span>Tgl</span><span>${fmtDate(t.date)}</span></div>
      ${t.receiptNo ? `<div class="pr-row"><span>Struk No.</span><span>${t.receiptNo}</span></div>` : ""}
      ${t.customerName ? `<div class="pr-row"><span>Pelanggan</span><span>${escapeHtml(t.customerName)}</span></div>` : ""}
      ${t.customerPhone ? `<div class="pr-row"><span>No. Telp</span><span>${escapeHtml(t.customerPhone)}</span></div>` : ""}
      <div class="pr-divider"></div>
      ${items.map(i=>`
        <div class="pr-item-desc">${escapeHtml(i.desc)}</div>
        <div class="pr-row"><span class="pr-item-detail">${escapeHtml(i.detail)}</span><span>${Reports.formatRupiah(i.subtotal)}</span></div>
      `).join("")}
      ${t.isFreeVisit ? `<div class="pr-badge">GRATIS REWARD MEMBER</div>` : ""}
      ${t.estimatedReadyAt ? `<div class="pr-row"><span>Estimasi Selesai</span><span>${fmtDateTime(t.estimatedReadyAt)}</span></div>` : ""}
      ${t.photoCount ? `<div class="pr-row"><span>Foto Pakaian</span><span>${t.photoCount} pcs</span></div>` : ""}
      <div class="pr-divider"></div>
      ${t.discountAmount > 0 ? `
        <div class="pr-row"><span>Subtotal</span><span>${Reports.formatRupiah(subtotal)}</span></div>
        <div class="pr-row"><span>Diskon</span><span>-${Reports.formatRupiah(t.discountAmount)}</span></div>
      ` : ""}
      <div class="pr-total"><span>TOTAL</span><span>${Reports.formatRupiah(t.orderTotal ?? t.amount)}</span></div>
      ${typeof t.amountPaid === "number" ? `
        <div class="pr-row"><span>Bayar</span><span>${Reports.formatRupiah(t.amountPaid)}</span></div>
        <div class="pr-row"><span>Kembalian</span><span>${Reports.formatRupiah(t.changeAmount||0)}</span></div>
      ` : ""}
      ${t.paymentMethod ? `<div class="pr-row"><span>Metode</span><span>${PAYMENT_METHOD_LABEL[t.paymentMethod] || t.paymentMethod}</span></div>` : ""}
      ${t.paymentStatus === "belum-lunas" ? `
        <div class="pr-row" style="color:#D9694F; font-weight:700;"><span>Status</span><span>BELUM LUNAS</span></div>
        <div class="pr-row" style="color:#D9694F;"><span>Sisa</span><span>${Reports.formatRupiah(t.piutangAmount||0)}</span></div>
      ` : t.paymentMethod ? `<div class="pr-row" style="color:#4E9C82; font-weight:700;"><span>Status</span><span>LUNAS</span></div>` : ""}
      <div class="pr-divider"></div>
      <div class="pr-thanks">Terima kasih sudah mencuci<br>di tempat kami</div>
    </div>
  `;
  document.body.appendChild(area);
  document.body.classList.add("printing-receipt");
  window.print();
  setTimeout(()=>{
    document.body.classList.remove("printing-receipt");
    area.remove();
  }, 500);
}

function loadImageEl(url){
  return new Promise((resolve, reject)=>{
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
}

async function generateReceiptCanvas(t){
  const width = 480;
  const padding = 32;
  const items = buildReceiptItems(t);
  const subtotal = items.reduce((s,i)=>s+i.subtotal, 0);

  let logoImg = null;
  if(state.businessLogo){
    try{ logoImg = await loadImageEl(state.businessLogo); }catch(e){ logoImg = null; }
  }

  const infoRows = [];
  infoRows.push(["Tgl", fmtDate(t.date)]);
  if(t.receiptNo) infoRows.push(["Struk No.", t.receiptNo]);
  if(t.customerName) infoRows.push(["Pelanggan", t.customerName]);
  if(t.customerPhone) infoRows.push(["No. Telp", t.customerPhone]);

  const footRows = [];
  if(t.discountAmount > 0){
    footRows.push(["Subtotal", Reports.formatRupiah(subtotal), false]);
    footRows.push(["Diskon", `-${Reports.formatRupiah(t.discountAmount)}`, true]);
  }
  if(t.deliveryFee > 0) footRows.push(["Ongkos Kirim", Reports.formatRupiah(t.deliveryFee), false]);
  const payRows = [];
  if(typeof t.amountPaid === "number"){
    payRows.push(["Bayar", Reports.formatRupiah(t.amountPaid)]);
    payRows.push(["Kembalian", Reports.formatRupiah(t.changeAmount||0)]);
  }
  if(t.paymentMethod) payRows.push(["Metode", PAYMENT_METHOD_LABEL[t.paymentMethod] || t.paymentMethod]);
  if(t.paymentStatus === "belum-lunas"){
    payRows.push(["Status", "BELUM LUNAS"]);
    payRows.push(["Sisa", Reports.formatRupiah(t.piutangAmount||0)]);
  } else if(t.paymentMethod){
    payRows.push(["Status", "LUNAS"]);
  }

  const scale = 2;
  const contactLines = (state.businessAddress?1:0) + (state.businessPhone?1:0) + (state.businessInstagram?1:0);
  const logoHeight = logoImg ? 58 : 0;
  const estHeight = padding*2 + logoHeight
    + 30 + (state.businessTagline?16:0) + contactLines*15 + 14   // header + divider
    + infoRows.length*22 + 14                   // info block + divider
    + items.reduce((s)=>s+40, 0) + (t.isFreeVisit?26:0) + (t.estimatedReadyAt?36:0) + (t.photoCount?20:0) + 14 // items + divider
    + footRows.length*22
    + 34                                         // total row
    + payRows.length*22 + 14                     // pay rows + divider
    + 40;                                        // thanks

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
  const drawRow = (label, value, y, opts={}) => {
    ctx.textAlign = "left";
    ctx.fillStyle = opts.color || "#5C6B70";
    ctx.font = `${opts.bold?600:400} 13px -apple-system, sans-serif`;
    ctx.fillText(label, padding, y);
    ctx.textAlign = "right";
    ctx.fillStyle = opts.valueColor || "#16232E";
    ctx.font = `${opts.bold?700:600} 13px -apple-system, sans-serif`;
    ctx.fillText(value, width-padding, y);
  };

  let y = padding + 12;
  if(logoImg){
    const logoSize = 48;
    ctx.drawImage(logoImg, width/2 - logoSize/2, y - 12, logoSize, logoSize);
    y += logoSize + 6;
  }
  ctx.textAlign = "center";
  ctx.fillStyle = "#16232E";
  ctx.font = "700 22px Georgia, serif";
  ctx.fillText(state.businessName, width/2, y);
  y += 24;
  if(state.businessTagline){
    ctx.fillStyle = "#5C6B70";
    ctx.font = "400 11px -apple-system, sans-serif";
    ctx.fillText(state.businessTagline, width/2, y);
    y += 16;
  }
  if(state.businessAddress){
    ctx.fillStyle = "#5C6B70";
    ctx.font = "400 11px -apple-system, sans-serif";
    ctx.fillText(state.businessAddress, width/2, y);
    y += 15;
  }
  if(state.businessPhone){
    ctx.fillStyle = "#5C6B70";
    ctx.font = "400 11px -apple-system, sans-serif";
    ctx.fillText(`WhatsApp: ${state.businessPhone}`, width/2, y);
    y += 15;
  }
  if(state.businessInstagram){
    ctx.fillStyle = "#5C6B70";
    ctx.font = "400 11px -apple-system, sans-serif";
    ctx.fillText(`Instagram: ${state.businessInstagram}`, width/2, y);
    y += 15;
  }
  y += 8;
  drawDivider(y); y += 22;

  for(const [label,value] of infoRows){ drawRow(label, value, y); y += 22; }
  drawDivider(y); y += 22;

  for(const item of items){
    ctx.textAlign = "left";
    ctx.fillStyle = "#16232E";
    ctx.font = "600 13px -apple-system, sans-serif";
    ctx.fillText(item.desc, padding, y);
    y += 18;
    drawRow(item.detail, Reports.formatRupiah(item.subtotal), y);
    y += 22;
  }
  if(t.isFreeVisit){
    ctx.textAlign = "center";
    ctx.fillStyle = "#C98A3B";
    ctx.font = "700 13px -apple-system, sans-serif";
    ctx.fillText("GRATIS — Reward Member 10x Kunjungan", width/2, y+4);
    y += 26;
  }
  if(t.estimatedReadyAt){
    ctx.textAlign = "left";
    ctx.fillStyle = "#3E7CB1";
    ctx.font = "700 12px -apple-system, sans-serif";
    ctx.fillText("Estimasi Selesai", padding, y);
    y += 16;
    ctx.font = "600 13px -apple-system, sans-serif";
    ctx.fillText(fmtDateTime(t.estimatedReadyAt), padding, y);
    y += 20;
  }
  if(t.photoCount){
    ctx.textAlign = "left";
    ctx.fillStyle = "#5C6B70";
    ctx.font = "400 12px -apple-system, sans-serif";
    ctx.fillText(`📷 Total ${t.photoCount} pcs pakaian difoto`, padding, y);
    y += 20;
  }
  drawDivider(y); y += 22;

  for(const [label,value,isDiscount] of footRows){
    drawRow(label, value, y, isDiscount ? { color:"#C98A3B", valueColor:"#C98A3B" } : {});
    y += 22;
  }

  ctx.textAlign = "left";
  ctx.fillStyle = "#16232E";
  ctx.font = "700 16px -apple-system, sans-serif";
  ctx.fillText("TOTAL", padding, y+2);
  ctx.textAlign = "right";
  ctx.font = "700 20px 'Courier New', monospace";
  ctx.fillText(Reports.formatRupiah(t.orderTotal ?? t.amount), width-padding, y+2);
  y += 32;

  if(payRows.length){
    for(const [label,value] of payRows){ drawRow(label, value, y); y += 22; }
    y += 2;
  }
  drawDivider(y); y += 24;

  ctx.textAlign = "center";
  ctx.fillStyle = "#5C6B70";
  ctx.font = "italic 13px -apple-system, sans-serif";
  wrapCanvasText(ctx, "Terima kasih sudah mencuci di tempat kami 🙏", width/2, y, width-padding*2, 18);

  return canvas;
}

function canvasToBlob(canvas){
  return new Promise(resolve => canvas.toBlob(resolve, "image/png"));
}

async function shareReceiptImage(t){
  const canvas = await generateReceiptCanvas(t);
  const blob = await canvasToBlob(canvas);
  const safeName = (t.customerName || "pelanggan").replace(/[^a-z0-9]+/gi, "-");
  const fileName = `struk-${safeName}-${t.date}.png`;
  const file = new File([blob], fileName, { type: "image/png" });
  const shareText = t.orderId
    ? `Struk pembayaran\n\n📦 Pantau status & foto cucianmu:\n${trackingUrl(t.orderId)}${t.loyaltyProgressText ? `\n\n${t.loyaltyProgressText}` : ""}`
    : `Struk pembayaran${t.loyaltyProgressText ? `\n\n${t.loyaltyProgressText}` : ""}`;

  if(navigator.canShare && navigator.canShare({ files: [file] })){
    try{
      await navigator.share({ files: [file], title: state.businessName, text: shareText });
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
  const branchId = resolveActionBranchId();
  if(!branchId){ toast("Pilih cabang spesifik dulu di Beranda sebelum catat transaksi", "warn"); return; }
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
      <input type="text" inputmode="numeric" class="amount-input" id="txAmount" placeholder="0">
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
      <label>Metode Pembayaran</label>
      <select id="txPaymentMethod">
        <option value="tunai">Tunai</option>
        <option value="qris">QRIS</option>
        <option value="transfer">Transfer</option>
      </select>
    </div>
    <div class="field">
      <label>Catatan (opsional)</label>
      <textarea id="txNote" placeholder="Contoh: Beli deterjen"></textarea>
    </div>

    <div id="assetDetailFields" style="display:none;">
      <div class="field" style="background:var(--foam-white); border-radius:10px; padding:12px; margin-top:-6px;">
        <p class="small" style="font-weight:700; margin-bottom:10px;">📦 Rincian Aset Tetap</p>
        <div class="field">
          <label>Jenis Aset</label>
          <select id="txAssetCategory">
            ${Object.entries(ASSET_CATEGORIES).map(([id,c])=>`<option value="${id}">${c.label}</option>`).join("")}
          </select>
        </div>
        <div class="field"><label>Nama/Keterangan Aset</label><input type="text" id="txAssetName" placeholder="Contoh: Mesin Cuci Front Loading 10kg"></div>
        <div class="field"><label>Merk</label><input type="text" id="txAssetBrand" placeholder="Contoh: LG, Electrolux"></div>
        <div class="field"><label>Umur Manfaat (tahun) <span class="small muted">— estimasi umum, bisa disesuaikan</span></label><input type="number" id="txAssetLife" value="5"></div>
        <div class="field" style="margin-bottom:0;"><label>Nilai Residu (Rp, opsional)</label><input type="number" id="txAssetSalvage" value="0"></div>
      </div>
    </div>

    <div id="inventoryDetailFields" style="display:none;">
      <div class="field" style="background:var(--foam-white); border-radius:10px; padding:12px; margin-top:-6px;">
        <p class="small" style="font-weight:700; margin-bottom:10px;">📦 Rincian Persediaan</p>
        <div class="field">
          <label>Jenis Persediaan</label>
          <select id="txInvCategory">
            ${Object.entries(INVENTORY_CATEGORIES).map(([id,c])=>`<option value="${id}">${c.label}</option>`).join("")}
          </select>
        </div>
        <div class="field">
          <label>Nama Barang</label>
          <input type="text" id="txInvName" list="txInvNameList" placeholder="Contoh: Deterjen Cair 5L (ketik baru atau pilih yang sudah ada)">
          <datalist id="txInvNameList"></datalist>
        </div>
        <div style="display:flex; gap:10px;">
          <div class="field" style="flex:1;"><label>Jumlah</label><input type="number" id="txInvQty" value="1" min="0.01" step="0.01"></div>
          <div class="field" style="flex:1;"><label>Satuan</label><input type="text" id="txInvUnit" placeholder="pcs, liter, kg" value="pcs"></div>
        </div>
        <p class="small muted" style="margin-bottom:0;">Harga satuan otomatis dihitung dari Jumlah (Rp) di atas ÷ Jumlah barang.</p>
      </div>
    </div>

    <button class="btn btn-primary btn-block" data-action="save-tx">Simpan Transaksi</button>
  `);

  const inventoryFieldsBox = modal.querySelector("#inventoryDetailFields");
  DB.getInventoryItems().then(items=>{
    modal.querySelector("#txInvNameList").innerHTML = [...new Set(items.map(i=>i.name))].map(n=>`<option value="${escapeHtml(n)}"></option>`).join("");
    modal._inventoryItemsCache = items;
  });

  attachThousandsInput(modal.querySelector("#txAmount"));
  const assetFieldsBox = modal.querySelector("#assetDetailFields");
  let currentType = defaultType;
  function toggleAssetFields(){
    const categoryId = modal.querySelector("#txCategory").value;
    assetFieldsBox.style.display = (currentType === "out" && categoryId === "beli-aset") ? "block" : "none";
    inventoryFieldsBox.style.display = (currentType === "out" && categoryId === "beli-persediaan") ? "block" : "none";
  }
  modal.querySelector("#txCategory").addEventListener("change", toggleAssetFields);
  modal.querySelector("#txAssetCategory").addEventListener("change", (e)=>{
    const cat = ASSET_CATEGORIES[e.target.value];
    if(cat) modal.querySelector("#txAssetLife").value = cat.defaultLife;
  });
  toggleAssetFields();

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
      toggleAssetFields();
    });
  });

  modal.querySelector("[data-action='save-tx']").addEventListener("click", async ()=>{
    const amount = parseThousands(modal.querySelector("#txAmount").value);
    const categoryId = modal.querySelector("#txCategory").value;
    const date = modal.querySelector("#txDate").value;
    const note = modal.querySelector("#txNote").value.trim();
    const paymentMethod = modal.querySelector("#txPaymentMethod").value;

    if(isNaN(amount) || amount <= 0){ toast("Isi jumlah yang valid", "warn"); return; }
    if(!categoryId){ toast("Pilih kategori", "warn"); return; }
    const cat = state.categories.find(c=>c.id===categoryId);

    const record = {
      type: currentType, categoryId, categoryName: cat?.name,
      account: cat?.account, amount, date, note, branchId, paymentMethod
    };

    await DB.addTransaction(record);

    if(currentType === "out" && categoryId === "beli-aset"){
      const assetCategoryId = modal.querySelector("#txAssetCategory").value;
      const assetName = modal.querySelector("#txAssetName").value.trim() || note || "Aset Tetap";
      const brand = modal.querySelector("#txAssetBrand").value.trim();
      const usefulLifeYears = parseFloat(modal.querySelector("#txAssetLife").value) || 5;
      const salvageValue = parseFloat(modal.querySelector("#txAssetSalvage").value) || 0;
      await DB.addAsset({
        categoryId: assetCategoryId, category: ASSET_CATEGORIES[assetCategoryId]?.label || assetCategoryId,
        name: assetName, brand, acquisitionCost: amount, acquisitionDate: date,
        usefulLifeYears, salvageValue, branchId
      });
      toast("Transaksi & data aset tetap tersimpan");
    } else if(currentType === "out" && categoryId === "beli-persediaan"){
      const invCategory = modal.querySelector("#txInvCategory").value;
      const invName = modal.querySelector("#txInvName").value.trim() || note || "Persediaan";
      const invUnit = modal.querySelector("#txInvUnit").value.trim() || "pcs";
      const qty = parseFloat(modal.querySelector("#txInvQty").value) || 1;
      const unitCost = amount / qty;

      const existingItems = modal._inventoryItemsCache || await DB.getInventoryItems();
      let item = existingItems.find(i => i.name.toLowerCase() === invName.toLowerCase() && i.category === invCategory);
      let itemId;
      if(item){
        const newQty = (item.qty||0) + qty;
        const newTotalValue = (item.totalValue||0) + amount;
        const newAvgCost = newQty > 0 ? newTotalValue / newQty : unitCost;
        await DB.updateInventoryItem(item.id, { qty: newQty, avgUnitCost: newAvgCost, totalValue: newTotalValue });
        itemId = item.id;
      } else {
        itemId = await DB.addInventoryItem({
          category: invCategory, name: invName, unit: invUnit,
          qty, avgUnitCost: unitCost, totalValue: amount, branchId
        });
      }
      await DB.addInventoryPurchase({
        itemId, itemName: invName, category: invCategory,
        qty, unitCost, total: amount, date, branchId
      });
      toast("Transaksi & stok persediaan tersimpan");
    } else {
      toast("Transaksi tersimpan");
    }
    closeModal();
    render();
  });
}

function openPrintChoiceModal(t){
  const modal = openModal(`
    <h2>Cetak Struk</h2>
    <button class="btn btn-outline btn-block" data-action="print-bluetooth" style="margin-bottom:10px;">${ICONS.printer} Printer Bluetooth</button>
    <button class="btn btn-outline btn-block" data-action="print-dialog">${ICONS.printer} Dialog Print / PDF</button>
  `);
  modal.querySelector("[data-action='print-bluetooth']").addEventListener("click", async ()=>{
    await printReceiptBluetooth(t);
  });
  modal.querySelector("[data-action='print-dialog']").addEventListener("click", ()=>{
    closeModal();
    printReceiptSystemDialog(t);
  });
}

async function buildLoyaltyProgressText(t){
  if(!t.customerPhone) return "";
  const phone = normalizePhone(t.customerPhone);
  if(!phone) return "";
  const member = await DB.getMember(phone);
  if(!member) return "";

  const lines = [];

  if(t.serviceType === "kiloan" && t.kiloanItems?.length){
    const kiloanLoyalty = await getKiloanLoyalty();
    const subtypesInvolved = [...new Set(t.kiloanItems.map(l=>l.subType))];
    const balances = (typeof member.kiloanBalance === "object" && member.kiloanBalance) || {};
    for(const subType of subtypesInvolved){
      const cfg = kiloanLoyalty[subType];
      if(!cfg?.enabled) continue;
      const balance = balances[subType] || 0;
      const label = KILOAN_LABELS[subType];
      if(balance >= cfg.thresholdKg){
        lines.push(`🎉 ${label}: Yeay, promo sudah siap diklaim di kunjungan berikutnya!`);
      } else {
        const remaining = (cfg.thresholdKg - balance).toFixed(1);
        lines.push(`${label}: sudah ${balance.toFixed(1)}/${cfg.thresholdKg} kg — kurang ${remaining} kg lagi buat dapat promo!`);
      }
    }
  }

  if(t.serviceType === "self-service"){
    const ssLoyalty = await getSelfServiceLoyalty();
    if(ssLoyalty.enabled){
      const target = ssLoyalty.visitTarget || 10;
      const visits = member.visits || 0;
      if(visits >= target){
        lines.push(`🎉 Self-Service: Yeay, promo gratis sudah siap diklaim di kunjungan berikutnya!`);
      } else {
        lines.push(`Self-Service: sudah ${visits}/${target} kunjungan — kurang ${target-visits} kali lagi buat gratis!`);
      }
    }
  }

  if(lines.length === 0) return "";
  return `📊 *Progress Promo Kamu:*\n${lines.join("\n")}`;
}

function offerSendReceipt(t){
  const modal = openModal(`
    <div style="text-align:center; padding:6px 0 4px;">
      <div style="width:56px;height:56px;border-radius:50%;background:var(--mint-bg);margin:0 auto 14px;display:flex;align-items:center;justify-content:center;animation:checkPop .4s cubic-bezier(.34,1.56,.64,1) both;">
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--mint)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="width:26px;height:26px;"><path d="M20 6L9 17l-5-5"/></svg>
      </div>
      <h2>Transaksi Tersimpan</h2>
      <p class="small muted" style="margin:6px 0 18px;">Kirim atau cetak struknya sekarang?${t.hasPhotos ? " Link pantau foto ikut terkirim otomatis." : ""}</p>
    </div>
    <button class="btn btn-primary btn-block" data-action="send-wa-image" style="background:#25A366; margin-bottom:10px;">${ICONS.chat} Kirim Struk${t.hasPhotos ? " + Link Pantau" : ""} (Gambar) via WA</button>
    <button class="btn btn-outline btn-block" data-action="send-wa-text" style="margin-bottom:10px;">Kirim sebagai Teks Saja</button>
    <button class="btn btn-outline btn-block" data-action="print-bluetooth" style="margin-bottom:10px;">${ICONS.printer} Cetak (Printer Bluetooth)</button>
    <button class="btn btn-outline btn-block" data-action="print-dialog" style="margin-bottom:10px;">${ICONS.printer} Cetak (Dialog Print/PDF)</button>
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
  modal.querySelector("[data-action='print-bluetooth']").addEventListener("click", async ()=>{
    await printReceiptBluetooth(t);
  });
  modal.querySelector("[data-action='print-dialog']").addEventListener("click", ()=>{
    printReceiptSystemDialog(t);
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
  document.querySelectorAll("[data-action='print-receipt']").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      const txs = await DB.getTransactions();
      const t = txs.find(x => x.id === btn.dataset.id);
      if(t) openPrintChoiceModal(t);
    });
  });
  document.querySelectorAll("[data-action='wa-member']").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      window.open(`https://wa.me/${btn.dataset.phone}`, "_blank");
    });
  });
  const addMemberBtn = document.querySelector("[data-action='add-member']");
  if(addMemberBtn) addMemberBtn.addEventListener("click", ()=> openAddMemberModal(null));
  const addOrderBtn = document.querySelector("[data-action='add-order']");
  if(addOrderBtn) addOrderBtn.addEventListener("click", openAddOrderModal);
  document.querySelectorAll("[data-report-tab]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      state.reportTab = btn.dataset.reportTab;
      state.asetTetapPage = 1;
      state.persediaanPage = 1;
      render();
    });
  });

  const asetTetapPageSizeSelect = document.getElementById("asetTetapPageSizeSelect");
  if(asetTetapPageSizeSelect) asetTetapPageSizeSelect.addEventListener("change", ()=>{
    state.asetTetapPageSize = parseInt(asetTetapPageSizeSelect.value);
    state.asetTetapPage = 1;
    render();
  });
  const asetTetapPrevPage = document.getElementById("asetTetapPrevPage");
  if(asetTetapPrevPage) asetTetapPrevPage.addEventListener("click", ()=>{ state.asetTetapPage--; render(); });
  const asetTetapNextPage = document.getElementById("asetTetapNextPage");
  if(asetTetapNextPage) asetTetapNextPage.addEventListener("click", ()=>{ state.asetTetapPage++; render(); });

  const persediaanPageSizeSelect = document.getElementById("persediaanPageSizeSelect");
  if(persediaanPageSizeSelect) persediaanPageSizeSelect.addEventListener("change", ()=>{
    state.persediaanPageSize = parseInt(persediaanPageSizeSelect.value);
    state.persediaanPage = 1;
    render();
  });
  const persediaanPrevPage = document.getElementById("persediaanPrevPage");
  if(persediaanPrevPage) persediaanPrevPage.addEventListener("click", ()=>{ state.persediaanPage--; render(); });
  const persediaanNextPage = document.getElementById("persediaanNextPage");
  if(persediaanNextPage) persediaanNextPage.addEventListener("click", ()=>{ state.persediaanPage++; render(); });

  const addAssetBtn = document.querySelector("[data-action='add-asset']");
  if(addAssetBtn) addAssetBtn.addEventListener("click", ()=> openAssetModal());
  document.querySelectorAll("[data-action='edit-asset']").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      const assets = await DB.getAssets();
      const a = assets.find(x=>x.id===btn.dataset.id);
      if(a) openAssetModal(a);
    });
  });
  document.querySelectorAll("[data-action='delete-asset']").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      if(!confirm("Hapus aset ini dari daftar? (Transaksi kas yang sudah tercatat sebelumnya tidak ikut terhapus)")) return;
      await DB.deleteAsset(btn.dataset.id);
      toast("Aset dihapus");
      render();
    });
  });
  const startOpnameBtn = document.querySelector("[data-action='start-stock-opname']");
  if(startOpnameBtn) startOpnameBtn.addEventListener("click", ()=> openStockOpnameModal(null));
  document.querySelectorAll("[data-action='view-stock-opname']").forEach(card=>{
    card.addEventListener("click", async ()=>{
      const opnames = await DB.getAllStockOpnames();
      const o = opnames.find(x=>x.id===card.dataset.id);
      if(o) openStockOpnameModal(o);
    });
  });
  document.querySelectorAll("[data-action='delete-inventory-item']").forEach(btn=>{
    btn.addEventListener("click", async (e)=>{
      e.stopPropagation();
      if(!confirm("Hapus barang persediaan ini dari daftar? (Riwayat pembelian sebelumnya tidak ikut terhapus)")) return;
      await DB.deleteInventoryItem(btn.dataset.id);
      toast("Barang persediaan dihapus");
      render();
    });
  });
  const lrStart = document.getElementById("lrStart");
  const lrEnd = document.getElementById("lrEnd");
  if(lrStart) lrStart.addEventListener("change", ()=>{ state.labaRugiRange.start = lrStart.value; render(); });
  if(lrEnd) lrEnd.addEventListener("change", ()=>{ state.labaRugiRange.end = lrEnd.value; render(); });
  const neracaDate = document.getElementById("neracaDate");
  if(neracaDate) neracaDate.addEventListener("change", ()=>{ state.neracaDate = neracaDate.value; render(); });

  document.querySelectorAll("[data-kas-preset]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const preset = btn.dataset.kasPreset;
      state.kasHarianPreset = preset;
      const today = Reports.todayStr();
      if(preset === "harian"){
        state.kasHarianRange = { start: today, end: today };
      } else if(preset === "bulanan"){
        state.kasHarianRange = { start: Reports.startOfMonth(), end: today };
      } else if(preset === "tahunan"){
        state.kasHarianRange = { start: today.slice(0,4)+"-01-01", end: today };
      }
      render();
    });
  });
  const kasHarianStart = document.getElementById("kasHarianStart");
  const kasHarianEnd = document.getElementById("kasHarianEnd");
  if(kasHarianStart) kasHarianStart.addEventListener("change", ()=>{ state.kasHarianRange.start = kasHarianStart.value; state.kasHarianPreset = null; render(); });
  if(kasHarianEnd) kasHarianEnd.addEventListener("change", ()=>{ state.kasHarianRange.end = kasHarianEnd.value; state.kasHarianPreset = null; render(); });

  const kasHarianFloatInput = document.getElementById("kasHarianFloatInput");
  if(kasHarianFloatInput) attachThousandsInput(kasHarianFloatInput);
  const kasHarianFloatSaveBtn = document.getElementById("kasHarianFloatSaveBtn");
  if(kasHarianFloatSaveBtn) kasHarianFloatSaveBtn.addEventListener("click", ()=>{
    state.kasHarianFloat = parseThousands(kasHarianFloatInput.value);
    toast("Modal awal disimpan");
    render();
  });

  const printBtn = document.querySelector("[data-action='print']");
  if(printBtn) printBtn.addEventListener("click", ()=> window.print());

  const csvBtn = document.querySelector("[data-action='export-csv']");
  if(csvBtn) csvBtn.addEventListener("click", exportCsv);

  const exportAsetBtn = document.querySelector("[data-action='export-aset-excel']");
  if(exportAsetBtn) exportAsetBtn.addEventListener("click", exportAsetTetapExcel);

  const exportPersediaanBtn = document.querySelector("[data-action='export-persediaan-excel']");
  if(exportPersediaanBtn) exportPersediaanBtn.addEventListener("click", exportPersediaanExcel);

  const saveBizBtn = document.querySelector("[data-action='save-biz-name']");
  if(saveBizBtn) saveBizBtn.addEventListener("click", async ()=>{
    const val = document.getElementById("bizNameInput").value.trim() || "Usaha Laundry Saya";
    const tagline = document.getElementById("bizTaglineInput").value.trim();
    const phone = document.getElementById("bizPhoneInput").value.trim();
    const instagram = document.getElementById("bizInstagramInput").value.trim();
    const address = document.getElementById("bizAddressInput").value.trim();
    state.businessName = val;
    state.businessTagline = tagline;
    state.businessPhone = phone;
    state.businessInstagram = instagram;
    state.businessAddress = address;
    await DB.setSetting("businessName", val);
    await DB.setSetting("businessTagline", tagline);
    await DB.setSetting("businessPhone", phone);
    await DB.setSetting("businessInstagram", instagram);
    await DB.setSetting("businessAddress", address);
    toast("Profil usaha disimpan");
    render();
  });

  const bizLogoBtn = document.querySelector("#bizLogoBtn");
  if(bizLogoBtn) bizLogoBtn.addEventListener("click", ()=> document.getElementById("bizLogoInput").click());
  const bizLogoInput = document.querySelector("#bizLogoInput");
  if(bizLogoInput) bizLogoInput.addEventListener("change", async (e)=>{
    const file = e.target.files[0];
    if(!file) return;
    bizLogoBtn.textContent = "Mengunggah...";
    bizLogoBtn.disabled = true;
    try{
      const result = await uploadPhotoToCloudinary(file);
      state.businessLogo = result.url;
      await DB.setSetting("businessLogo", result.url);
      toast("Logo tersimpan");
      render();
    }catch(err){
      toast("Gagal unggah logo — cek koneksi internet", "warn");
      bizLogoBtn.innerHTML = `${ICONS.camera} ${state.businessLogo ? 'Ganti Logo' : 'Unggah Logo'}`;
      bizLogoBtn.disabled = false;
    }
  });
  const bizLogoRemoveBtn = document.querySelector("#bizLogoRemoveBtn");
  if(bizLogoRemoveBtn) bizLogoRemoveBtn.addEventListener("click", async ()=>{
    state.businessLogo = "";
    await DB.setSetting("businessLogo", "");
    toast("Logo dihapus");
    render();
  });

  const saveOpeningBtn = document.querySelector("[data-action='save-opening']");
  if(saveOpeningBtn) saveOpeningBtn.addEventListener("click", async ()=>{
    const num = (id)=> parseFloat(document.getElementById(id).value) || 0;
    await Reports.setOpeningBalances({
      date: document.getElementById("ob-date").value || Reports.todayStr(),
      kas: num("ob-kas"), piutang: num("ob-piutang"), persediaan: num("ob-persediaan"),
      asetTetap: num("ob-asetTetap"), utangUsaha: num("ob-utangUsaha"), utangBank: num("ob-utangBank")
    }, getActiveBranch());
    toast("Saldo awal disimpan");
    render();
  });

  const openPriceBtn = document.querySelector("[data-action='open-price-settings']");
  if(openPriceBtn) openPriceBtn.addEventListener("click", openPriceSettingsModal);

  Object.keys(KILOAN_LABELS).forEach(key=>{
    const klType = document.getElementById(`kl-type-${key}`);
    if(klType) klType.addEventListener("change", ()=>{
      document.getElementById(`kl-discount-field-${key}`).style.display = klType.value === "discount" ? "block" : "none";
      document.getElementById(`kl-freekg-field-${key}`).style.display = klType.value === "free-kg" ? "block" : "none";
    });
  });

  document.querySelectorAll("[data-action='save-kiloan-loyalty']").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      const key = btn.dataset.subtype;
      await setKiloanLoyaltyFor(key, {
        enabled: document.getElementById(`kl-enabled-${key}`).value === "1",
        thresholdKg: parseFloat(document.getElementById(`kl-threshold-${key}`).value) || 0,
        promoType: document.getElementById(`kl-type-${key}`).value,
        discountAmount: parseFloat(document.getElementById(`kl-discount-amount-${key}`).value) || 0,
        freeKg: parseFloat(document.getElementById(`kl-freekg-${key}`).value) || 0
      });
      toast(`Promo ${KILOAN_LABELS[key]} disimpan`);
      render();
    });
  });

  const saveSsLoyaltyBtn = document.querySelector("[data-action='save-ss-loyalty']");
  if(saveSsLoyaltyBtn) saveSsLoyaltyBtn.addEventListener("click", async ()=>{
    await setSelfServiceLoyalty({
      enabled: document.getElementById("ss-enabled").value === "1",
      visitTarget: parseInt(document.getElementById("ss-target").value) || 10
    });
    toast("Promo self-service disimpan");
    render();
  });

  const savePrinterBtn = document.querySelector("[data-action='save-printer-settings']");
  if(savePrinterBtn) savePrinterBtn.addEventListener("click", async ()=>{
    await setPrinterSettings({ widthChars: parseInt(document.getElementById("printer-width").value) });
    toast("Pengaturan printer disimpan");
    render();
  });
  const savePhotoRetentionBtn = document.querySelector("[data-action='save-photo-retention']");
  if(savePhotoRetentionBtn) savePhotoRetentionBtn.addEventListener("click", async ()=>{
    const days = parseInt(document.getElementById("photo-retention-days").value) || 10;
    await DB.setSetting("photoRetentionDays", days);
    toast(`Disimpan — foto akan dihapus otomatis setelah ${days} hari`);
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
  const resetTestingBtn = document.querySelector("[data-action='reset-testing-data']");
  if(resetTestingBtn) resetTestingBtn.addEventListener("click", resetTestingData);
  const logoutBtn = document.querySelector("[data-action='logout']");
  if(logoutBtn) logoutBtn.addEventListener("click", ()=> auth.signOut());
  const addBranchBtn = document.querySelector("[data-action='add-branch']");
  if(addBranchBtn) addBranchBtn.addEventListener("click", async ()=>{
    const plan = PLAN_CONFIG[state.businessPlan] || PLAN_CONFIG.rintisan;
    const currentCount = (await DB.getBranches()).length;
    if(currentCount >= plan.maxBranches){
      const waMsg = encodeURIComponent(`Halo, usaha saya sudah mencapai batas ${plan.maxBranches} cabang di Paket ${plan.label}. Saya mau upgrade paket untuk tambah cabang lagi.`);
      openModal(`
        <h2>Batas Paket Tercapai</h2>
        <p class="small muted" style="margin-bottom:16px;">Paket <b>${plan.label}</b> Anda maksimal ${plan.maxBranches} cabang. Upgrade paket untuk menambah cabang lagi.</p>
        <a href="https://wa.me/6285353846073?text=${waMsg}" target="_blank" rel="noopener" class="btn btn-primary btn-block" style="text-decoration:none; display:block; text-align:center;">Hubungi via WhatsApp untuk Upgrade</a>
        <button class="btn btn-outline btn-block" data-action="detail-close" style="margin-top:10px;">Tutup</button>
      `);
      document.querySelector("[data-action='detail-close']")?.addEventListener("click", closeModal);
      return;
    }
    openBranchModal();
  });
  document.querySelectorAll("[data-action='edit-branch']").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      const branches = await DB.getBranches();
      const b = branches.find(x=>x.id===btn.dataset.id);
      if(b) openBranchModal(b);
    });
  });
  document.querySelectorAll("[data-action='delete-branch']").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      if(!confirm("Hapus cabang ini? Harga, saldo awal, dan aset tetap yang terdaftar di cabang ini akan hilang. Pegawai yang terdaftar di cabang ini juga perlu dipindahkan manual.")) return;
      await DB.deleteBranch(btn.dataset.id);
      toast("Cabang dihapus");
      render();
    });
  });
  document.querySelectorAll("[data-action='copy-branch-code']").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      navigator.clipboard?.writeText(btn.dataset.id).then(()=> toast("Kode cabang disalin"));
    });
  });
  document.querySelectorAll(".role-select").forEach(sel=>{
    sel.addEventListener("change", async ()=>{
      const uid = sel.dataset.uid;
      const newRole = sel.value;
      const staff = await DB.getBusinessStaff();
      const target = staff.find(s=>s.uid===uid);
      if(target?.role === "owner"){
        const ownerCount = staff.filter(s=>s.role==="owner").length;
        if(ownerCount <= 1){ toast("Tidak bisa menurunkan Owner terakhir", "warn"); render(); return; }
      }
      const roleLabels = { owner: "Owner (kontrol penuh, semua cabang)", manager: "Manager (kontrol penuh, 1 cabang)", pegawai: "Pegawai" };
      if(!confirm(`Ubah peran akun ini jadi "${roleLabels[newRole]}"?`)){ render(); return; }
      await DB.setStaffRole(uid, newRole);
      toast(`Peran diubah jadi ${roleLabels[newRole]}`);
      render();
    });
  });
  document.querySelectorAll(".branch-assign-select").forEach(sel=>{
    sel.addEventListener("change", async ()=>{
      if(!sel.value){ return; }
      await DB.setStaffBranch(sel.dataset.uid, sel.value);
      toast("Cabang berhasil diatur");
      render();
    });
  });
  document.querySelectorAll("[data-action='set-salary-config']").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      const staff = await DB.getBusinessStaff();
      const s = staff.find(x=>x.uid===btn.dataset.uid);
      if(s) openSalaryConfigModal(s);
    });
  });
}

/* ---------------- Export / Import / Backup ---------------- */

async function exportCsv(){
  let txs = await DB.getTransactions();
  if(state.currentBranchId !== "all"){
    txs = txs.filter(t => t.branchId === state.currentBranchId);
  }
  const branchMap = Object.fromEntries(state.branches.map(b=>[b.id,b.name]));
  const cats = Object.fromEntries(state.categories.map(c=>[c.id,c]));
  const header = "Tanggal,Cabang,Jenis,Kategori,Jenis Layanan,Sub-Layanan,Berat (kg),Pelanggan,Jumlah,Catatan\n";
  const rows = txs.map(t=>{
    const cat = cats[t.categoryId]?.name || t.categoryName || "";
    const jenis = t.type === "in" ? "Kas Masuk" : "Kas Keluar";
    const serviceTypeLabel = { kiloan: "Kiloan", satuan: "Satuan", "self-service": "Self-Service" }[t.serviceType] || "";
    const note = (t.note||"").replace(/"/g,'""');
    const customer = (t.customerName||"").replace(/"/g,'""');
    const branchName = (branchMap[t.branchId]||"").replace(/"/g,'""');
    return `${t.date},"${branchName}",${jenis},"${cat}","${serviceTypeLabel}","${t.subTypeLabel||""}",${t.weightKg||""},"${customer}",${t.amount},"${note}"`;
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
      if(data.openingBalances) await Reports.setOpeningBalances(data.openingBalances, getActiveBranch());
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

async function resetTestingData(){
  if(!confirm("Semua Transaksi, Pesanan Cucian, dan Member usaha ini akan dihapus permanen. Pengaturan harga, promo, cabang, pegawai, dan gaji TETAP AMAN. Lanjutkan?")) return;
  if(!confirm("Yakin? Tindakan ini tidak bisa dibatalkan dan berlaku untuk semua perangkat.")) return;
  const bizId = DB.getBusinessId();
  const scopedCollections = ["transactions", "members", "orders"];
  for(const name of scopedCollections){
    const snap = await fs.collection(name).where("businessId","==",bizId).get();
    const batch = fs.batch();
    snap.docs.forEach(d => batch.delete(d.ref));
    await batch.commit();
  }
  toast("Transaksi, Cucian, dan Member berhasil dihapus");
  location.reload();
}

async function wipeData(){
  if(!confirm("Semua transaksi, member, kategori tambahan, dan saldo awal usaha ini akan dihapus permanen dari server. Lanjutkan?")) return;
  if(!confirm("Yakin? Tindakan ini tidak bisa dibatalkan dan berlaku untuk semua perangkat.")) return;
  const bizId = DB.getBusinessId();
  const scopedCollections = ["transactions", "members", "categories", "orders"];
  for(const name of scopedCollections){
    const snap = await fs.collection(name).where("businessId","==",bizId).get();
    const batch = fs.batch();
    snap.docs.forEach(d => batch.delete(d.ref));
    await batch.commit();
  }
  await fs.collection("businessSettings").doc(bizId).delete();
  location.reload();
}

/* ---------------- Auth (Login / Daftar) ---------------- */

function authShellHtml(inner){
  return `
    <div class="auth-shell">
      <div class="auth-card">
        <div class="auth-logo">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M8 4.5v11.2c0 1.1.9 2 2 2h5.5" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="16.5" cy="17" r="2" fill="#F2B25A"/>
          </svg>
        </div>
        <h1>LAMAN</h1>
        <p class="small muted" style="margin-bottom:20px;">Laundry Manajemen</p>
        ${inner}
      </div>
    </div>
  `;
}

function loginFormHtml(){
  return authShellHtml(`
    <div class="field"><label>Email</label><input type="email" id="authEmail" placeholder="nama@email.com"></div>
    <div class="field"><label>Password</label><input type="password" id="authPassword" placeholder="••••••••"></div>
    <p class="small" style="text-align:right; margin:-8px 0 14px;"><a href="#" data-action="show-forgot-password">Lupa password?</a></p>
    <div id="authError" class="auth-error"></div>
    <button class="btn btn-primary btn-block" data-action="do-login">Masuk</button>
    <p class="small muted" style="text-align:center; margin-top:16px;">
      Belum punya akun? <a href="#" data-action="show-register">Daftar</a>
    </p>
  `);
}

function forgotPasswordFormHtml(){
  return authShellHtml(`
    <p class="small muted" style="margin-bottom:16px;">Masukkan email akun Anda — kami kirim link untuk atur ulang password ke email itu.</p>
    <div class="field"><label>Email</label><input type="email" id="forgotEmail" placeholder="nama@email.com"></div>
    <div id="authError" class="auth-error"></div>
    <div id="forgotSuccess" class="small" style="color:var(--mint); margin-bottom:12px; display:none;">✓ Link reset password terkirim — cek email (termasuk folder spam) lalu ikuti instruksinya.</div>
    <button class="btn btn-primary btn-block" data-action="do-forgot-password">Kirim Link Reset</button>
    <p class="small muted" style="text-align:center; margin-top:16px;">
      <a href="#" data-action="show-login">← Kembali ke halaman Masuk</a>
    </p>
  `);
}

function registerFormHtml(){
  return authShellHtml(`
    <div class="seg" id="regTypeSeg" style="margin-bottom:16px;">
      <button type="button" class="active in" data-regtype="owner">Buat Usaha Baru</button>
      <button type="button" data-regtype="pegawai">Gabung sebagai Pegawai</button>
    </div>
    <div id="ownerFields">
      <div class="field"><label>Nama Usaha</label><input type="text" id="authBizName" placeholder="Contoh: WashSpace Laundry"></div>
    </div>
    <div id="pegawaiFields" style="display:none;">
      <div class="field"><label>Kode Undangan Cabang</label><input type="text" id="authInviteCode" placeholder="Minta ke pemilik/manajer cabang"></div>
    </div>
    <div class="field"><label>Nama Anda</label><input type="text" id="authName" placeholder="Nama Anda"></div>
    <div class="field"><label>Email</label><input type="email" id="authEmail" placeholder="nama@email.com"></div>
    <div class="field"><label>Password</label><input type="password" id="authPassword" placeholder="Minimal 6 karakter"></div>
    <div id="authError" class="auth-error"></div>
    <button class="btn btn-primary btn-block" data-action="do-register">Daftar</button>
    <p class="small muted" style="text-align:center; margin-top:16px;">
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
  root.innerHTML = mode === "register" ? registerFormHtml() : mode === "forgot-password" ? forgotPasswordFormHtml() : loginFormHtml();
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
  root.querySelector("[data-action='show-forgot-password']")?.addEventListener("click", (e)=>{ e.preventDefault(); showAuthScreen("forgot-password"); });

  root.querySelector("[data-action='do-forgot-password']")?.addEventListener("click", async ()=>{
    const email = root.querySelector("#forgotEmail").value.trim();
    if(!email){ setErr("Isi email dulu."); return; }
    const btn = root.querySelector("[data-action='do-forgot-password']");
    btn.disabled = true; btn.textContent = "Mengirim...";
    try{
      await auth.sendPasswordResetEmail(email);
      setErr("");
      root.querySelector("#forgotSuccess").style.display = "block";
    }catch(err){
      console.error("Auth error:", err); setErr(authErrorMessage(err));
    }
    btn.disabled = false; btn.textContent = "Kirim Link Reset";
  });

  root.querySelector("[data-action='do-login']")?.addEventListener("click", async ()=>{
    const email = root.querySelector("#authEmail").value.trim();
    const password = root.querySelector("#authPassword").value;
    if(!email || !password){ setErr("Isi email dan password."); return; }
    try{
      await auth.signInWithEmailAndPassword(email, password);
    }catch(err){
      console.error("Auth error:", err); setErr(authErrorMessage(err));
    }
  });

  let regType = "owner";
  root.querySelectorAll("#regTypeSeg button").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      regType = btn.dataset.regtype;
      root.querySelectorAll("#regTypeSeg button").forEach(b=>b.classList.remove("active","in"));
      btn.classList.add("active","in");
      root.querySelector("#ownerFields").style.display = regType === "owner" ? "block" : "none";
      root.querySelector("#pegawaiFields").style.display = regType === "pegawai" ? "block" : "none";
    });
  });

  root.querySelector("[data-action='do-register']")?.addEventListener("click", async ()=>{
    const name = root.querySelector("#authName").value.trim();
    const email = root.querySelector("#authEmail").value.trim();
    const password = root.querySelector("#authPassword").value;
    if(!name || !email || !password){ setErr("Lengkapi semua kolom."); return; }
    if(password.length < 6){ setErr("Password minimal 6 karakter."); return; }

    if(regType === "owner"){
      const bizName = root.querySelector("#authBizName").value.trim();
      if(!bizName){ setErr("Isi nama usaha."); return; }
      try{
        const cred = await auth.createUserWithEmailAndPassword(email, password);
        const businessId = await DB.createBusiness(bizName, cred.user.uid);
        await fs.collection("users").doc(cred.user.uid).set({
          name, email, role: "owner", businessId, createdAt: Date.now()
        });
      }catch(err){
        console.error("Auth error:", err); setErr(authErrorMessage(err));
      }
    } else {
      const code = root.querySelector("#authInviteCode").value.trim();
      if(!code){ setErr("Isi kode undangan dari pemilik/manajer cabang."); return; }
      try{
        const cred = await auth.createUserWithEmailAndPassword(email, password);
        const branch = await DB.getBranchById(code);
        if(!branch){
          await cred.user.delete().catch(()=>{});
          setErr("Kode undangan tidak ditemukan. Cek lagi dengan pemilik/manajer cabang.");
          return;
        }
        await fs.collection("users").doc(cred.user.uid).set({
          name, email, role: "pegawai", businessId: branch.businessId, branchId: code, createdAt: Date.now()
        });
      }catch(err){
        console.error("Auth error:", err); setErr(authErrorMessage(err));
      }
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
    "auth/weak-password": "Password terlalu lemah (minimal 6 karakter).",
    "auth/unauthorized-domain": "Domain ini belum diizinkan di Firebase. Owner perlu tambahkan domain ini di Firebase Console → Authentication → Settings → Authorized domains.",
    "auth/network-request-failed": "Tidak ada koneksi internet. Cek jaringan lalu coba lagi.",
    "auth/too-many-requests": "Terlalu banyak percobaan. Tunggu sebentar lalu coba lagi.",
    "permission-denied": "Akses ditolak oleh server (Security Rules). Hubungi Owner untuk cek pengaturan Firebase."
  };
  return map[err.code] || `Terjadi kesalahan (${err.code || err.message || 'tidak diketahui'}). Coba lagi.`;
}

/* ---------------- Boot ---------------- */

async function loadUserProfile(user){
  const doc = await fs.collection("users").doc(user.uid).get();
  if(doc.exists) return doc.data();
  const businessId = await DB.createBusiness("Usaha Laundry Saya", user.uid);
  const rec = { name: user.email.split("@")[0], email: user.email, role: "owner", businessId, createdAt: Date.now() };
  await fs.collection("users").doc(user.uid).set(rec);
  return rec;
}

/** Periodically (throttled to ~once/day, owner-only) deletes photos from
 *  Cloudinary for orders that finished 30+ days ago, so storage usage stays
 *  bounded as the business grows instead of accumulating forever. Runs
 *  silently in the background — failures are logged, never shown to the user. */
async function runPhotoCleanupIfDue(){
  if(state.role !== "owner") return;
  const ONE_DAY = 24*3600*1000;
  try{
    const retentionDays = await DB.getSetting("photoRetentionDays", 10);
    const RETENTION_MS = retentionDays*ONE_DAY;
    const lastCheck = await DB.getSetting("lastPhotoCleanupCheck", 0);
    if(Date.now() - lastCheck < ONE_DAY) return;

    const orders = await DB.getOrders();
    const now = Date.now();
    const toClean = orders.filter(o=>{
      if(o.status !== "selesai" || !o.photos?.length) return false;
      const selesaiEntry = [...(o.statusHistory||[])].reverse().find(h=>h.status==="selesai");
      const completedAt = selesaiEntry?.at || o.createdAt;
      return (now - completedAt) > RETENTION_MS;
    });

    if(toClean.length > 0){
      const publicIds = [];
      for(const o of toClean){
        for(const p of o.photos){
          const pid = photoPublicId(p);
          if(pid) publicIds.push(pid);
        }
      }
      if(publicIds.length > 0 && CLEANUP_SHARED_SECRET && !CLEANUP_SHARED_SECRET.startsWith("REPLACE_")){
        await fetch("/api/cleanup-photos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ publicIds, secret: CLEANUP_SHARED_SECRET })
        });
      }
      for(const o of toClean){
        await fs.collection("orders").doc(o.id).update({ photos: [], photosCleanedAt: Date.now() });
      }
    }
    await DB.setSetting("lastPhotoCleanupCheck", Date.now());
  }catch(err){
    console.error("Photo cleanup check failed:", err);
  }
}

async function ensureDefaultBranch(){
  let branches = await DB.getBranches();
  if(branches.length === 0){
    // First-time migration: existing single-branch businesses get a default
    // branch, and any pre-existing business-wide pricing/opening balances move into it.
    const legacyPricing = await DB.getSetting("pricing", null);
    const legacyOpening = await DB.getSetting("openingBalances", null);
    const branchId = await DB.addBranch({ name: "Cabang Utama", address: "" });
    const updates = {};
    if(legacyPricing) updates.pricing = legacyPricing;
    if(legacyOpening) updates.openingBalances = legacyOpening;
    if(Object.keys(updates).length > 0){
      await DB.updateBranch(branchId, updates);
    }
    branches = await DB.getBranches();
  }
  return branches;
}

function showTrialExpiredScreen(sub, trialEnd){
  document.getElementById("app").style.display = "none";
  let root = document.getElementById("authRoot");
  if(!root){
    root = document.createElement("div");
    root.id = "authRoot";
    document.body.appendChild(root);
  }
  root.style.display = "block";
  const waMsg = encodeURIComponent(`Halo, masa trial LAMAN usaha saya sudah berakhir (${fmtDate(trialEnd.toISOString().slice(0,10))}). Saya mau lanjut berlangganan.`);
  root.innerHTML = authShellHtml(`
    <div style="text-align:center; margin-bottom:16px;">
      <div style="font-size:40px; margin-bottom:10px;">⏳</div>
      <h2 style="margin-bottom:8px;">Masa Trial Berakhir</h2>
      <p class="small muted">Trial 14 hari usaha Anda berakhir pada <b>${fmtDate(trialEnd.toISOString().slice(0,10))}</b>. Data Anda tetap aman tersimpan — hubungi kami untuk lanjut berlangganan dan aktifkan kembali akses.</p>
    </div>
    <a href="https://wa.me/6285353846073?text=${waMsg}" target="_blank" rel="noopener" class="btn btn-primary btn-block" style="text-decoration:none; display:block; text-align:center;">Hubungi via WhatsApp untuk Berlangganan</a>
    <button class="btn btn-outline btn-block" data-action="logout-trial-expired" style="margin-top:10px;">Keluar</button>
  `);
  root.querySelector("[data-action='logout-trial-expired']").addEventListener("click", ()=> auth.signOut());
}

async function startApp(){
  const sub = await DB.getCurrentBusinessSubscription();
  state.businessPlan = sub?.plan || "rintisan";
  if(sub && sub.status === "trial" && sub.trialStartDate){
    const trialEnd = new Date(sub.trialStartDate+"T00:00:00");
    trialEnd.setDate(trialEnd.getDate() + (sub.trialDays||14));
    if(new Date() > trialEnd){
      showTrialExpiredScreen(sub, trialEnd);
      return;
    }
  }

  await DB.init();
  const settings = await DB.getAllSettings();
  state.businessName = settings.businessName ?? "Usaha Laundry Saya";
  state.businessTagline = settings.businessTagline ?? "";
  state.businessPhone = settings.businessPhone ?? "";
  state.businessInstagram = settings.businessInstagram ?? "";
  state.businessAddress = settings.businessAddress ?? "";
  state.businessLogo = settings.businessLogo ?? "";
  state.categories = await DB.getCategories();
  state.branches = await ensureDefaultBranch();

  if(isBranchLocked()){
    state.currentBranchId = state.userBranchId || state.branches[0]?.id || "all";
  } else if(state.branches.length === 1){
    state.currentBranchId = state.branches[0].id; // only one branch — no point showing "Semua Cabang"
  }
  setActiveBranch(state.currentBranchId !== "all" ? state.currentBranchId : (state.branches[0]?.id || null));

  if("serviceWorker" in navigator){
    navigator.serviceWorker.register("./sw.js").catch(()=>{});
  }

  history.replaceState({ navMarker: true, base: true }, "", location.href);
  await render();
  runPhotoCleanupIfDue(); // fire-and-forget, throttled to ~once/day, owner-only
}

auth.onAuthStateChanged(async (user) => {
  if(user){
    const profile = await loadUserProfile(user);
    if(!profile.businessId){
      document.getElementById("app").style.display = "none";
      const root = document.getElementById("authRoot") || document.body.appendChild(Object.assign(document.createElement("div"), {id:"authRoot"}));
      root.style.display = "block";
      root.innerHTML = authShellHtml(`
        <div class="auth-error" style="margin-bottom:14px;">
          Akun ini belum terhubung ke usaha manapun (kemungkinan akun lama sebelum update sistem multi-usaha).
          Buka <b>/migrate.html</b>, login pakai akun ini, dan jalankan migrasi satu kali — setelah itu login ulang di sini.
        </div>
        <button class="btn btn-outline btn-block" data-action="logout-stuck">Keluar</button>
      `);
      root.querySelector("[data-action='logout-stuck']").addEventListener("click", ()=> auth.signOut());
      return;
    }
    state.user = user;
    state.role = profile.role || "pegawai";
    state.userName = profile.name || user.email;
    state.businessId = profile.businessId;
    state.userBranchId = profile.branchId || null;
    DB.setBusinessContext(profile.businessId);
    hideAuthScreen();
    await startApp();
  } else {
    state.user = null;
    state.role = null;
    state.businessId = null;
    showAuthScreen("login");
  }
});
