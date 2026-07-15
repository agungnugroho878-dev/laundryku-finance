# LaundryKu Finance

Aplikasi laporan keuangan untuk UMKM laundry — kini **online** (Firebase), sehingga data yang sama bisa diakses dari HP, tablet, maupun laptop, oleh Owner dan Pegawai sekaligus, secara real-time.

---

## 0. Setup Firebase (WAJIB dilakukan sebelum aplikasi bisa dipakai)

Kalau Anda belum menyelesaikan semua langkah ini di Firebase Console (console.firebase.google.com, project **laundryku-finance**), aplikasi tidak akan bisa login/menyimpan data:

1. **Authentication** → Sign-in method → aktifkan **Email/Password**
2. **Firestore Database** → Create database (kalau belum) → mode **production**
3. **Firestore Database → Rules** tab → hapus rules default, ganti dengan yang di bawah ini → **Publish**:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function isSignedIn() { return request.auth != null; }
    function isOwner() {
      return isSignedIn() &&
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'owner';
    }

    match /users/{uid} {
      allow read: if isSignedIn();
      allow create: if isSignedIn() && request.auth.uid == uid && request.resource.data.role == 'pegawai';
      allow update, delete: if isOwner();
    }

    match /transactions/{id} {
      allow read: if isSignedIn();
      allow create: if isSignedIn();
      allow update, delete: if isOwner();
    }

    match /categories/{id} {
      allow read, write: if isSignedIn();
    }

    match /settings/{id} {
      allow read, write: if isSignedIn();
    }

    match /members/{id} {
      allow read, write: if isSignedIn();
    }

    match /orders/{id} {
      allow read, create, update: if isSignedIn();
      allow delete: if isOwner();
    }
  }
}
```

4. **Daftar akun Owner pertama**: buka aplikasi → klik "Daftar" → isi nama, email, password → daftar (akun baru otomatis jadi role **pegawai** dulu)
5. **Naikkan jadi Owner**: buka Firestore Database → koleksi **`users`** → cari dokumen dengan email Anda → klik field `role` → ubah nilainya dari `pegawai` jadi `owner` → Save
6. Logout dari aplikasi lalu login lagi — sekarang akses Owner (Laporan, Pengaturan, hapus transaksi, dll) sudah aktif

Untuk akun pegawai selanjutnya: mereka tinggal buka aplikasi → **Daftar** sendiri → otomatis dapat role Pegawai (akses terbatas: catat transaksi, lihat member, tidak bisa lihat Laporan keuangan atau ubah Pengaturan).

---

## 1. Cara pakai cepat

1. Buka aplikasinya → login (atau daftar kalau belum punya akun)
2. **Owner**: buka menu **Atur → Saldo Awal Pembukuan** dan isi saldo kas/aset/utang saat ini (boleh dikosongkan/0 kalau baru mulai dari nol)
3. Mulai catat transaksi lewat tombol **+ Kas Masuk** / **+ Kas Keluar** di Beranda atau Transaksi
4. Untuk transaksi kategori **Pendapatan Jasa Cuci** atau **Pendapatan Self-Service**, akan muncul kolom opsional Nama Pelanggan & No. WhatsApp — isi ini untuk bisa langsung **kirim struk via WhatsApp** setelah transaksi tersimpan
5. Untuk self-service: setiap 10x kunjungan (dengan nomor WA diisi), pelanggan otomatis dapat 1x gratis cuci+kering — progress-nya bisa dilihat di tab **Member**
6. **Owner**: buka menu **Laporan** untuk melihat Laba Rugi (per periode) dan Neraca (per tanggal), lalu bisa **Cetak/Simpan PDF** atau **Unduh CSV**

### Menjalankan di komputer (untuk dicoba dulu)
Karena aplikasi ini pakai Service Worker dan Firebase, buka lewat server lokal (bukan langsung double-click file), dan pastikan komputer terhubung internet (untuk login & sinkronisasi data):

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
4. Isi kuesioner **Content Rating**, **Data Safety** (jelaskan bahwa data keuangan disimpan online di Firebase/Firestore milik Anda sendiri, terenkripsi dalam pengiriman, dan hanya bisa diakses akun yang login).
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
├── sw.js                 # service worker (cache offline untuk file aplikasi)
├── css/styles.css        # desain aplikasi
├── js/firebase-config.js   # koneksi ke project Firebase Anda
├── js/db.js               # penyimpanan data (Firestore)
├── js/reports.js          # mesin Laba Rugi & Neraca
├── js/app.js               # tampilan & interaksi
└── icons/                  # ikon aplikasi
```

Semua data (transaksi, member, kategori, saldo) tersimpan di **Firestore** milik project Firebase Anda sendiri — bukan server milik siapa pun yang lain. Data yang sama otomatis muncul di semua perangkat yang login, real-time. Firestore juga menyimpan cache lokal, jadi aplikasi tetap bisa dipakai singkat saat offline dan otomatis sinkron lagi saat online.
