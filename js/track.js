/* LaundryKu Finance — public order tracking (no login required) */

const ORDER_FLOW = ["belum-diproses", "sedang-diproses", "selesai"];
const STATUS_LABEL = {
  "belum-diproses": "Belum Diproses",
  "sedang-diproses": "Sedang Diproses",
  "selesai": "Selesai"
};

function formatRupiah(n){
  const sign = n < 0 ? "-" : "";
  return sign + "Rp" + Math.round(Math.abs(n)).toLocaleString("id-ID");
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

function formatCountdown(estimatedReadyAt){
  const diff = estimatedReadyAt - Date.now();
  const overdue = diff < 0;
  const abs = Math.abs(diff);
  const totalMinutes = Math.round(abs/60000);
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const minutes = totalMinutes % 60;
  let label = "";
  if(days > 0) label = `${days} hari ${hours} jam`;
  else if(hours > 0) label = `${hours} jam ${minutes} menit`;
  else label = `${minutes} menit`;
  return overdue ? { overdue:true, text:`Terlambat ${label} dari estimasi` } : { overdue:false, text:`Estimasi selesai ${label} lagi` };
}

function buildItemLines(o){
  if(o.kiloanItems?.length) return o.kiloanItems.map(l => `${l.subTypeLabel} — ${l.weightKg} kg`);
  if(o.satuanItems?.length) return o.satuanItems.map(l => `${l.qty}x ${l.name}`);
  if(o.subTypeLabel) return [o.subTypeLabel];
  return [];
}

async function loadOrder(){
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const content = document.getElementById("content");

  if(!id){
    content.innerHTML = `<div class="card center muted">Link tidak valid.</div>`;
    return;
  }

  try{
    const doc = await fs.collection("orders").doc(id).get();
    if(!doc.exists){
      content.innerHTML = `<div class="card center muted">Pesanan tidak ditemukan. Mungkin link sudah kedaluwarsa.</div>`;
      return;
    }
    const o = doc.data();

    const settingsDoc = await fs.collection("businessSettings").doc(o.businessId).get();
    const settings = settingsDoc.exists ? settingsDoc.data() : {};
    document.getElementById("bizName").textContent = settings.businessName || "LaundryKu";
    const contactBits = [settings.businessTagline, settings.businessPhone ? `WA: ${settings.businessPhone}` : null, settings.businessInstagram ? `IG: ${settings.businessInstagram}` : null].filter(Boolean);
    document.getElementById("bizTagline").textContent = contactBits.join(" · ");

    renderOrder(o, content);
  }catch(err){
    content.innerHTML = `<div class="card center muted">Gagal memuat data. Cek koneksi internet dan coba lagi.</div>`;
  }
}

function renderOrder(o, content){
  const currentIdx = ORDER_FLOW.indexOf(o.status);
  const stepsHtml = ORDER_FLOW.map((s,i) => {
    const cls = i < currentIdx ? "done" : i === currentIdx ? "current" : "";
    return `
      <div class="status-step ${cls}">
        <div class="status-line"></div>
        <div class="status-dot">${i < currentIdx ? "✓" : i+1}</div>
        <div class="status-label">${STATUS_LABEL[s]}</div>
      </div>
    `;
  }).join("");

  const showCountdown = o.estimatedReadyAt && o.status !== "selesai";
  const countdown = showCountdown ? formatCountdown(o.estimatedReadyAt) : null;

  const items = buildItemLines(o);
  const dateLabel = o.createdAt ? new Date(o.createdAt).toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"}) : "";

  content.innerHTML = `
    <div class="card">
      <div class="muted center">Status Pesanan${o.receiptNo ? ` · #${String(o.receiptNo).padStart(6,'0')}` : ""}</div>
      <div class="status-track">${stepsHtml}</div>
      ${o.estimatedReadyAt ? `<div class="center muted small-est">Estimasi selesai: <b>${fmtDateTime(o.estimatedReadyAt)}</b></div>` : ""}
      ${countdown ? `<div class="countdown" style="color:${countdown.overdue?'#C1554D':'#3E7CB1'}">${countdown.overdue?'⚠':'⏱'} ${countdown.text}</div>` : ""}
    </div>

    <div class="card">
      <div class="muted" style="margin-bottom:8px;">Detail Pesanan</div>
      <div class="item-row"><span>Pelanggan</span><span>${o.customerName || "-"}</span></div>
      <div class="item-row"><span>Tanggal</span><span>${dateLabel}</span></div>
      ${items.map(i=>`<div class="item-row"><span>${i}</span></div>`).join("")}
      ${typeof o.total === "number" ? `<div class="total-row"><span>Total</span><span>${formatRupiah(o.total)}</span></div>` : ""}
    </div>

    ${o.photos?.length ? `
      <div class="card">
        <div class="muted" style="margin-bottom:8px;">Foto Barang (${o.photos.length})</div>
        <div class="photos">
          ${o.photos.map(url=>`<img src="${url}" data-full="${url}">`).join("")}
        </div>
      </div>
    ` : ""}

    <p class="center muted" style="margin-top:20px;">Halaman ini otomatis memperbarui status setiap 20 detik.</p>
  `;

  content.querySelectorAll(".photos img").forEach(img=>{
    img.addEventListener("click", ()=>{
      document.getElementById("lightboxImg").src = img.dataset.full;
      document.getElementById("lightbox").classList.add("open");
    });
  });
}

document.getElementById("lightbox").addEventListener("click", ()=>{
  document.getElementById("lightbox").classList.remove("open");
});

loadOrder();
setInterval(loadOrder, 20000);
