# LaundryKu Finance

Aplikasi laporan keuangan sederhana untuk UMKM laundry. Cukup catat **kas masuk** dan **kas keluar** sehari-hari — aplikasi otomatis menyusun **Laporan Laba Rugi** dan **Neraca** di baliknya. Semua data tersimpan langsung di perangkat (offline, tidak ada server), dan aplikasinya bisa dipasang di HP, tablet, maupun laptop.

---

## 1. Cara pakai cepat

1. Buka `index.html` (lihat cara menjalankan di bawah).
2. Buka menu **Atur → Saldo Awal Pembukuan** dan isi saldo kas/aset/utang saat ini (boleh dikosongkan/0 kalau baru mulai dari nol).
3. Mulai catat transaksi lewat tombol **+ Kas Masuk** / **+ Kas Keluar** di Beranda atau Transaksi.
4. Untuk transaksi kategori **Pendapatan Jasa Cuci**, akan muncul kolom opsional Nama Pelanggan, No. WhatsApp, dan Berat (kg) — isi ini untuk bisa langsung **kirim struk via WhatsApp** setelah transaksi tersimpan (atau kirim ulang kapan saja lewat ikon chat di daftar transaksi).
5. Buka menu **Laporan** untuk melihat Laba Rugi (per periode) dan Neraca (per tanggal), lalu bisa **Cetak/Simpan PDF** atau **Unduh CSV**.
6. Cadangkan data secara berkala lewat **Atur → Cadangkan Data (JSON)** — file ini bisa dipakai untuk memulihkan data di HP lain.

### Rencana pengembangan selanjutnya
Fitur berikut butuh database online (bukan lagi offline-only) karena harus dipakai bersama oleh pegawai & owner dari perangkat berbeda: akun login pegawai/owner, tracking status cucian, dan member/loyalty pelanggan. Ini akan dibangun di fase berikutnya setelah backend (Firebase/Supabase) disiapkan.

### Menjalankan di komputer (untuk dicoba dulu)
Karena aplikasi ini pakai IndexedDB & Service Worker, buka lewat server lokal, bukan langsung double-click file:

```bash
cd laundryku
python3 -m http.server 8080
# lalu buka http://localhost:8080 di browser
```

### Cara install ke HP/tablet (tanpa Play Store dulu)
1. Upload folder `laundryku` ini ke hosting statis gratis, misalnya **Netlify**, **Vercel**, **GitHub Pages**, atau **Firebase Hosting** (tinggal drag-and-drop foldernya).
2. Buka link hasil hosting di Chrome (Android) — akan muncul opsi **"Tambahkan ke layar Utama" / "Install app"**.
3. Aplikasi akan terpasang seperti aplikasi biasa, punya ikon sendiri, dan tetap bisa dipakai offline.

Langkah ini sudah cukup untuk dipakai sehari-hari di toko laundry tanpa perlu ke Play Store sama sekali.

---

## 2. Menerbitkan ke Google Play Store

Ini bagian yang **tidak bisa dilakukan otomatis oleh siapa pun selain Anda**, karena butuh akun & persetujuan dari Google. Tapi aplikasinya sudah disiapkan (manifest + service worker) supaya proses ini singkat. Langkahnya:

### Langkah A — Hosting
Pastikan aplikasi sudah online di URL HTTPS (lihat langkah hosting di atas). Play Store butuh URL live, bukan file lokal.

### Langkah B — Bungkus jadi Android App Bundle (.aab)
Cara termudah, pakai **PWABuilder** (gratis, dari Microsoft, khusus membungkus PWA jadi app store package):

1. Buka **https://www.pwabuilder.com**
2. Masukkan URL aplikasi yang sudah dihosting.
3. Klik **Package for Stores → Android**.
4. PWABuilder akan generate file **.aab** siap upload, lengkap dengan signing key (simpan baik-baik file key-nya, jangan hilang — dibutuhkan tiap update aplikasi).

Alternatif lain (lebih teknis): gunakan **Bubblewrap CLI** dari Google —
```bash
npm install -g @bubblewrap/cli
bubblewrap init --manifest=https://domain-anda.com/manifest.json
bubblewrap build
```

### Langkah C — Akun Google Play Console
1. Daftar di **https://play.google.com/console** (biaya pendaftaran sekali ± USD 25).
2. Buat aplikasi baru, isi Store Listing (nama, deskripsi, screenshot — bisa screenshot dari aplikasi ini langsung di HP).
3. Upload file `.aab` dari Langkah B ke bagian **Production → Create new release**.
4. Isi kuesioner **Content Rating**, **Data Safety** (jelaskan bahwa data keuangan hanya disimpan lokal di perangkat, tidak dikirim ke server manapun — karena memang begitu adanya).
5. Submit untuk review. Biasanya butuh beberapa hari sampai disetujui Google.

### Ikon & splash screen
Ikon sudah disiapkan di folder `icons/` (192px, 512px, dan versi maskable). Kalau ingin desain ulang, ganti file PNG di folder tersebut dengan ukuran yang sama.

---

## 3. Tentang model laporan keuangan

Supaya tetap sederhana untuk dipakai sehari-hari, aplikasi ini memakai pencatatan **berbasis kas** (setiap transaksi = uang masuk/keluar), tapi setiap kategori sudah dipetakan ke akun akuntansi yang tepat di belakang layar, sehingga:

- **Laba Rugi** = Total Pendapatan − Total Beban pada periode yang dipilih.
- **Neraca** dihitung dari Saldo Awal (diisi di menu Atur) + seluruh transaksi sampai tanggal yang dipilih, dan **Modal Disetor Awal dihitung otomatis** supaya Aset selalu sama dengan Kewajiban + Modal.

Beberapa penyederhanaan yang perlu diketahui pemilik usaha:
- Penjualan/pembelian **kredit (belum bayar tunai)** tidak dicatat otomatis sebagai transaksi baru — hanya pelunasan piutang/pembayaran utang yang tercatat sebagai kas. Untuk penjualan kredit, catat manual sebagai penyesuaian di saldo Piutang.
- **Penyusutan aset tetap** tidak dihitung otomatis — aset tetap dicatat sebesar harga beli.
- **Persediaan** bersifat saldo statis (diisi manual), bahan baku yang dibeli langsung dianggap beban, bukan ditambahkan ke persediaan.

Untuk UMKM laundry pada umumnya, penyederhanaan ini sudah memadai. Jika kebutuhan pencatatan makin kompleks (banyak transaksi kredit, banyak aset, dll), pertimbangkan migrasi ke pembukuan double-entry penuh.

---

## 4. Struktur file

```
laundryku/
├── index.html          # halaman utama
├── manifest.json        # konfigurasi PWA (nama, ikon, warna)
├── sw.js                 # service worker (mode offline)
├── css/styles.css        # desain aplikasi
├── js/db.js               # penyimpanan data (IndexedDB)
├── js/reports.js          # mesin Laba Rugi & Neraca
├── js/app.js               # tampilan & interaksi
└── icons/                  # ikon aplikasi
```

Semua data pengguna disimpan di **IndexedDB milik browser/perangkat masing-masing** — tidak ada backend, tidak ada biaya server, dan cocok dipakai di banyak toko laundry secara independen (masing-masing device punya datanya sendiri, kecuali di-backup/restore manual lewat file JSON).
