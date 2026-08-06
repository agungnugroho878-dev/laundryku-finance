# LAMAN
*(LAundry MANajemen)*

Aplikasi manajemen usaha laundry lengkap — kasir, laporan keuangan otomatis, kurir & ongkir, absensi, dan gaji pegawai — kini **online** (Firebase) dan **multi-usaha**: satu instalasi aplikasi ini bisa dipakai banyak laundry berbeda sekaligus, masing-masing dengan data yang sepenuhnya terpisah (transaksi, member, harga, pengaturan — semua terisolasi per usaha).

---

## ⚠️ PENTING — kalau Anda sudah pakai versi sebelumnya (data WashSpace sudah ada)

Update ini mengubah struktur data secara mendasar (dari 1-usaha jadi multi-usaha). **Wajib migrasi dulu**, kalau tidak, data WashSpace yang sudah ada akan terlihat kosong setelah update ini.

1. Upload semua file (termasuk `migrate.html` yang baru) ke GitHub seperti biasa, tunggu Vercel selesai deploy
2. Update Security Rules dulu (lihat rules terbaru di bagian bawah) — **Publish**
3. Buka `https://domain-anda.vercel.app/migrate.html`
4. Login pakai akun **Owner** yang sudah ada, isi nama usaha (misal "WashSpace"), klik **Jalankan Migrasi**
5. Tunggu sampai muncul "SELESAI!" di log
6. Buka aplikasi utama, logout lalu login lagi — data lama (transaksi, member, dll) akan muncul kembali, sekarang sudah terlabel sebagai usaha "WashSpace" yang terisolasi dari usaha lain
7. Setelah berhasil, boleh hapus file `migrate.html` dari repo (opsional, tapi lebih aman — supaya tidak ada yang menjalankannya lagi secara tidak sengaja)

---

## 0. Setup Firebase (WAJIB dilakukan sebelum aplikasi bisa dipakai)

1. **Authentication** → Sign-in method → aktifkan **Email/Password**
2. **Firestore Database** → Create database (kalau belum) → mode **production**
3. **Firestore Database → Rules** tab → hapus rules default, ganti dengan yang di bawah ini → **Publish**:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function isSignedIn() { return request.auth != null; }
    function myProfile() {
      return get(/databases/$(database)/documents/users/$(request.auth.uid)).data;
    }
    function myBusinessId() { return myProfile().businessId; }
    function isOwner() { return isSignedIn() && myProfile().role == 'owner'; }
    function isManager() { return isSignedIn() && myProfile().role == 'manager'; }
    function isOwnerOrManager() { return isOwner() || isManager(); }
    function sameBusiness(bizId) { return isSignedIn() && myBusinessId() == bizId; }
    // Ganti email di bawah ini dengan email Owner platform (Anda) — dipakai
    // untuk fitur kelola langganan semua usaha (trial/aktif) lintas tenant.
    function isSuperAdmin() { return isSignedIn() && request.auth.token.email == 'agungnugroho878@gmail.com'; }

    match /users/{uid} {
      allow read: if isSignedIn() && (request.auth.uid == uid || sameBusiness(resource.data.businessId) || isSuperAdmin());
      allow create: if isSignedIn() && request.auth.uid == uid;
      allow update, delete: if (isOwnerOrManager() && sameBusiness(resource.data.businessId)) || isSuperAdmin();
    }

    match /businesses/{bizId} {
      allow get: if isSignedIn();
      allow list: if isSuperAdmin();
      allow create: if isSignedIn();
      allow update, delete: if (isOwner() && sameBusiness(bizId)) || isSuperAdmin();
    }

    match /branches/{branchId} {
      allow get: if isSignedIn();
      allow list: if sameBusiness(resource.data.businessId) || isSuperAdmin();
      allow create, delete: if isOwner() && sameBusiness(request.resource.data.businessId);
      allow update: if (isOwnerOrManager() && sameBusiness(resource.data.businessId)) || isSuperAdmin();
    }

    function isBizOwnerBootstrap(bizId) {
      return isSignedIn() && get(/databases/$(database)/documents/businesses/$(bizId)).data.ownerUid == request.auth.uid;
    }

    match /businessSettings/{bizId} {
      allow get: if true;
      allow list: if false;
      allow write, delete: if sameBusiness(bizId) || isSuperAdmin() || isBizOwnerBootstrap(bizId);
    }

    match /transactions/{id} {
      allow read: if resource == null || sameBusiness(resource.data.businessId) || isSuperAdmin();
      allow create: if isSignedIn() && sameBusiness(request.resource.data.businessId);
      allow update, delete: if (isOwnerOrManager() && sameBusiness(resource.data.businessId)) || isSuperAdmin();
    }

    match /categories/{id} {
      allow read: if resource == null || sameBusiness(resource.data.businessId) || isSuperAdmin();
      allow create, update: if isSignedIn() && sameBusiness(request.resource.data.businessId);
      allow delete: if (isSignedIn() && sameBusiness(resource.data.businessId)) || isSuperAdmin();
    }

    match /members/{id} {
      allow read: if resource == null || sameBusiness(resource.data.businessId) || isSuperAdmin();
      allow create, update: if isSignedIn() && sameBusiness(request.resource.data.businessId);
      allow delete: if (isSignedIn() && sameBusiness(resource.data.businessId)) || isSuperAdmin();
    }

    match /orders/{id} {
      allow get: if true;
      allow list: if sameBusiness(resource.data.businessId) || isSuperAdmin();
      allow create, update: if isSignedIn() && sameBusiness(request.resource.data.businessId);
      allow delete: if (isOwnerOrManager() && sameBusiness(resource.data.businessId)) || isSuperAdmin();
    }

    match /assets/{id} {
      allow read: if resource == null || sameBusiness(resource.data.businessId) || isSuperAdmin();
      allow create, update: if isOwnerOrManager() && sameBusiness(request.resource.data.businessId);
      allow delete: if (isOwnerOrManager() && sameBusiness(resource.data.businessId)) || isSuperAdmin();
    }

    match /inventoryItems/{id} {
      allow read: if resource == null || sameBusiness(resource.data.businessId) || isSuperAdmin();
      allow create: if isOwnerOrManager() && sameBusiness(request.resource.data.businessId);
      allow update, delete: if (isOwnerOrManager() && sameBusiness(resource.data.businessId)) || isSuperAdmin();
    }

    match /inventoryPurchases/{id} {
      allow read: if resource == null || sameBusiness(resource.data.businessId) || isSuperAdmin();
      allow create: if isOwnerOrManager() && sameBusiness(request.resource.data.businessId);
      allow delete: if (isOwnerOrManager() && sameBusiness(resource.data.businessId)) || isSuperAdmin();
    }

    match /stockOpnames/{id} {
      allow read: if resource == null || sameBusiness(resource.data.businessId) || isSuperAdmin();
      allow create: if isSignedIn() && sameBusiness(request.resource.data.businessId);
      allow update: if isSignedIn() && sameBusiness(resource.data.businessId);
      allow delete: if (isOwnerOrManager() && sameBusiness(resource.data.businessId)) || isSuperAdmin();
    }

    match /attendance/{id} {
      allow read: if isOwnerOrManager() && sameBusiness(resource.data.businessId)
                  || (isSignedIn() && resource.data.userId == request.auth.uid && sameBusiness(resource.data.businessId))
                  || isSuperAdmin();
      allow list: if isOwnerOrManager() && sameBusiness(resource.data.businessId)
                  || (isSignedIn() && resource.data.userId == request.auth.uid && sameBusiness(resource.data.businessId))
                  || isSuperAdmin();
      allow create: if isSignedIn() && request.resource.data.userId == request.auth.uid && sameBusiness(request.resource.data.businessId);
      allow update: if isSignedIn() && resource.data.userId == request.auth.uid && sameBusiness(resource.data.businessId);
      allow delete: if (isOwnerOrManager() && sameBusiness(resource.data.businessId)) || isSuperAdmin();
    }

    match /payslips/{id} {
      allow read, list: if isOwnerOrManager() && sameBusiness(resource.data.businessId)
                  || (isSignedIn() && resource.data.userId == request.auth.uid && sameBusiness(resource.data.businessId))
                  || isSuperAdmin();
      allow create: if isOwnerOrManager() && sameBusiness(request.resource.data.businessId);
      allow delete: if (isOwnerOrManager() && sameBusiness(resource.data.businessId)) || isSuperAdmin();
    }

    match /leaveRequests/{id} {
      allow read, list: if isOwnerOrManager() && sameBusiness(resource.data.businessId)
                  || (isSignedIn() && resource.data.userId == request.auth.uid && sameBusiness(resource.data.businessId))
                  || isSuperAdmin();
      allow create: if isSignedIn() && request.resource.data.userId == request.auth.uid && sameBusiness(request.resource.data.businessId);
      allow update: if (isOwnerOrManager() && sameBusiness(resource.data.businessId)) || isSuperAdmin();
      allow delete: if (isOwnerOrManager() && sameBusiness(resource.data.businessId)) || isSuperAdmin();
    }
  }
}
```

> Catatan keamanan: `businessSettings` (nama usaha, harga, promo) sengaja bisa dibaca publik (`allow get: if true`) supaya halaman pantau pelanggan (`track.html`) bisa menampilkan nama usaha tanpa login. Konsekuensinya: siapa pun yang tahu Business ID sebuah usaha (dari kode undangan atau link pantau) bisa melihat daftar harganya. Ini risiko rendah (harga laundry umumnya memang informasi terbuka), tapi kalau ke depan Anda mau data harga/promo benar-benar privat, kabari saya untuk dipisah lagi.

4. **Daftar akun Owner pertama**: buka aplikasi → klik "Daftar" → pilih **"Buat Usaha Baru"** → isi nama usaha, nama Anda, email, password → daftar. Akun ini otomatis jadi **Owner** untuk usaha baru tersebut (tidak perlu naik level manual lagi seperti versi sebelumnya)

Untuk pegawai: Owner buka **Atur → Pegawai**, salin **Kode Undangan Usaha**, bagikan ke pegawai. Pegawai buka aplikasi → **Daftar** → pilih **"Gabung sebagai Pegawai"** → masukkan kode itu → otomatis bergabung ke usaha yang sama (bukan usaha lain).

**Boleh lebih dari 1 Owner untuk usaha yang sama** (misalnya Anda & pasangan, masing-masing pantau dengan email sendiri): orang kedua daftar dulu lewat "Gabung sebagai Pegawai" pakai kode undangan di atas (otomatis jadi Pegawai) → Owner pertama buka **Atur → Anggota Tim** → ubah dropdown perannya jadi **"Owner"**. Selesai, akses penuh untuk keduanya.

**Peran "Manager" (baru)** — untuk usaha multi-cabang yang butuh penanggung jawab di tiap cabang: Manager punya **fitur yang PERSIS SAMA dengan Owner** (Laporan, Kelola Pegawai, Gaji, Persediaan, Atur penuh, dll), **tapi terkunci ke 1 cabang saja** — tidak bisa pindah ke "Semua Cabang" atau cabang lain seperti Owner bisa. Cara mengaktifkan:
1. Pegawai daftar dulu seperti biasa lewat kode undangan (otomatis jadi Pegawai)
2. **Owner asli** (bukan Manager lain) buka **Atur → Anggota Tim** → cari akun itu → ubah dropdown peran jadi **"Manager (kontrol penuh, 1 cabang)"**
3. Muncul pilihan **"Cabang yang Dikelola"** di bawahnya → pilih cabang yang jadi tanggung jawabnya
4. Selesai — akun itu sekarang jadi Manager cabang tersebut

> Catatan: pengubahan peran (jadi Owner/Manager/Pegawai) sengaja **dibatasi cuma Owner asli** yang bisa lakukan — Manager tidak bisa mengubah peran siapa pun (termasuk dirinya sendiri), demi menjaga struktur kewenangan usaha. Manager juga cuma melihat & mengelola data (Anggota Tim, Absensi, Slip Gaji, Pengajuan Izin) milik **cabangnya sendiri saja**, tidak bisa melihat cabang lain.

---

## 0b. Setup Cloudinary (untuk fitur foto pakaian)

1. Daftar gratis di **cloudinary.com** (bisa pakai akun Google, tidak perlu kartu kredit)
2. Di dashboard, catat **Cloud name** Anda (terlihat di halaman utama, contoh: `dxyz1234a`)
3. **Settings (ikon gear) → Upload** → scroll ke **Upload presets** → **Add upload preset**
4. Set **Signing Mode** ke **Unsigned** → beri nama bebas (misal `laundryku_photos`) → **Save**
5. Buka file `js/firebase-config.js` di repo GitHub Anda → cari baris ini di paling bawah:
   ```js
   const CLOUDINARY_CLOUD_NAME = "REPLACE_WITH_CLOUD_NAME";
   const CLOUDINARY_UPLOAD_PRESET = "REPLACE_WITH_UPLOAD_PRESET";
   ```
   Ganti dengan Cloud name dan nama preset Anda → **Commit changes**

Setelah ini, fitur foto pakaian di menu Cucian akan langsung berfungsi.

> Catatan untuk model jual-ke-banyak-usaha: karena Cloudinary di sini masih 1 akun bersama untuk semua usaha yang pakai aplikasi ini, kuota 25 credit/bulan akan terbagi ke semua usaha. Kalau sudah ada beberapa usaha aktif, pantau pemakaian di dashboard Cloudinary dan siapkan upgrade paket berbayar kalau perlu.

---

## 0c. Setup Pembersihan Foto Otomatis (opsional, tapi disarankan)

Fitur ini otomatis menghapus foto dari pesanan yang sudah **Selesai lebih dari 10 hari** — supaya penyimpanan Cloudinary tidak terus menumpuk selamanya seiring usaha berkembang. Ini butuh 1 file kecil yang berjalan di server (bukan di HP), jadi perlu setup environment variable di Vercel:

1. Buka **cloudinary.com** dashboard → halaman utama, catat **API Key** dan **API Secret** (klik "Reveal" untuk lihat Secret-nya — ini **beda** dari Upload Preset yang dipakai sebelumnya, dan harus **dirahasiakan**, jangan taruh di file `firebase-config.js`)
2. Buka **Vercel Dashboard** → project ini → **Settings → Environment Variables** → tambahkan 4 variable ini satu-satu:
   | Name | Value |
   |---|---|
   | `CLOUDINARY_CLOUD_NAME` | Cloud name Anda (sama seperti di firebase-config.js) |
   | `CLOUDINARY_API_KEY` | API Key dari langkah 1 |
   | `CLOUDINARY_API_SECRET` | API Secret dari langkah 1 |
   | `CLEANUP_SECRET` | Bebas, buat sendiri string acak (misal `wsp-clean-8271-xyz`) — ini kunci supaya endpoint pembersihan tidak bisa dipicu orang lain |
3. Setelah menambah 4 variable itu, klik **Redeploy** di tab Deployments (supaya variable barunya aktif)
4. Buka file `js/firebase-config.js` → cari baris:
   ```js
   const CLEANUP_SHARED_SECRET = "REPLACE_WITH_ANY_RANDOM_STRING";
   ```
   Ganti isinya dengan **string acak yang SAMA PERSIS** dengan yang Anda isi untuk `CLEANUP_SECRET` di langkah 2 → Commit

Setelah semua langkah ini selesai, sistem otomatis mengecek (maksimal sekali sehari, saat Owner login) apakah ada pesanan Selesai yang fotonya sudah lebih dari batas hari yang ditentukan, lalu menghapusnya dari Cloudinary secara otomatis — tidak perlu tindakan manual apa pun setelah setup awal ini.

> Jumlah harinya (default 10 hari) bisa diubah kapan saja tanpa perlu update kode — buka **Atur → Foto Pesanan**, ganti angkanya, klik Simpan.

> Catatan: kalau langkah ini dilewati (tidak di-setup), fitur foto tetap berfungsi normal seperti biasa — cuma pembersihan otomatisnya yang tidak aktif, dan foto akan terus menumpuk di Cloudinary.
>
> Catatan keamanan: kunci `CLEANUP_SECRET` ini tetap bisa dilihat siapa saja yang membuka kode sumber aplikasi di browser (karena ini aplikasi web murni tanpa login khusus untuk API-nya) — jadi anggap ini sebagai penghalang dasar, bukan pengaman yang benar-benar kuat. Risikonya rendah karena yang bisa dilakukan cuma menghapus foto pesanan lama milik usaha sendiri, bukan akses ke data lain.

---

## 0d. Setup Ongkir Jarak Jalan Sungguhan (opsional)

Secara default, ongkir otomatis dihitung dari **jarak garis lurus** (haversine) antara cabang dan lokasi pelanggan. Untuk hasil yang lebih akurat (mengikuti jalan yang benar-benar dilewati, bukan tembus gedung/sungai), aplikasi ini bisa pakai **OpenRouteService** — gratis, dan **boleh dipakai untuk produk komersial** (beda dengan OSRM yang sering direkomendasikan orang lain tapi syaratnya "non-commercial only").

1. Daftar gratis di **openrouteservice.org** → Sign up (tidak perlu kartu kredit)
2. Login → buka **Dashboard** → **"Request a token"** → pilih tipe **"Standard"**
3. Salin API key yang muncul
4. Buka file `js/firebase-config.js` → cari baris:
   ```js
   const ORS_API_KEY = "";
   ```
   Tempel API key Anda di antara tanda kutip → Commit

Setelah itu, setiap kali ongkir otomatis dihitung (di form Pesanan Cucian Baru), aplikasi akan coba pakai jarak jalan sungguhan dulu — kalau gagal (misal API sedang bermasalah, atau belum diisi key-nya), otomatis kembali pakai jarak garis lurus seperti biasa, jadi fitur ongkir tidak akan pernah benar-benar berhenti berfungsi.

> Kuota gratis: 2.500 request/hari, 40.000/bulan — lebih dari cukup untuk 1 atau bahkan beberapa usaha laundry sekaligus (tiap hitung ongkir cuma 1 request).
>
> Catatan keamanan: sama seperti `CLEANUP_SECRET`, API key ini juga bisa dilihat siapa saja yang membuka kode sumber di browser. Risikonya rendah (paling buruk, orang lain menghabiskan kuota gratis Anda) — kalau khawatir, ORS API key bisa dibatasi ke domain tertentu saja lewat Dashboard mereka.


---

## 1. Cara pakai cepat

1. Buka aplikasinya → login (atau daftar kalau belum punya akun). Lupa password? Klik **"Lupa password?"** di halaman Masuk → isi email akun → link reset password otomatis dikirim ke email itu (cek folder spam kalau tidak muncul). Password tidak pernah bisa "dilihat" oleh siapa pun (termasuk Owner) — cuma bisa direset lewat email.

> **Navigasi disederhanakan**: menu bawah **Beranda, Cucian, Akun** selalu tampil untuk semua peran, ditambah **1 menu ke-4 yang beda per peran**: Owner dapat **Laporan**, Pegawai dapat **Absensi** (karena ini kegiatan harian pegawai, jadi ditaruh langsung di menu bawah, bukan ditumpuk di Akun). Ditambah tombol **"+"** mengambang untuk aksi cepat (Pesanan Baru, Catat Kas Masuk, Catat Kas Keluar). Menu **Riwayat Transaksi, Member, Tugas Saya, serta Atur** dikumpulkan jadi satu di tab **Akun**, tampil sebagai kartu-kartu berwarna yang tinggal diketuk (Laporan & Absensi tetap ada di situ juga khusus untuk Owner, karena Owner tidak punya slot menu bawah untuk itu).
>
> **Halaman Absensi pegawai** sekarang juga menampilkan kartu **"Jam Kerja Saya"** — jam masuk/pulang dan hari kerja/libur yang sudah diatur Owner (lewat Kelola Pegawai), supaya pegawai bisa cek sendiri jadwalnya tanpa perlu tanya.
>
> **Halaman Atur juga dirapikan** dengan pola yang sama — bukan 1 halaman panjang lagi, sekarang jadi menu kartu: **Profil Usaha, Harga Layanan, Promo & Loyalty, Cabang, Anggota Tim, Saldo Awal, Lainnya** (Printer/Foto/Data/Tentang) — tinggal ketuk salah satu, ada tombol "Kembali" untuk balik ke menu.
>
> **Beranda**: di atasnya ada **"Status Cucian"** (5 kotak: Perlu Dijemput, Belum Diproses, Sedang Diproses, Siap Diambil/Antar, Terlambat) — **klik salah satu kotak untuk langsung lihat daftar pesanan yang SESUAI status itu saja** (bukan semua pesanan). Ada tombol "Hapus Filter" untuk kembali ke tampilan normal.
>
> **Info & pindah cabang** sekarang ada di **pojok kanan atas header** (sejajar dengan logo LAMAN), tampil di SEMUA halaman — nama cabang + alamatnya. Kalau usaha punya lebih dari 1 cabang, bagian itu otomatis jadi **dropdown** untuk Owner pindah cabang (Semua Cabang/cabang tertentu) langsung dari situ, tidak perlu lagi baris terpisah di tiap halaman seperti sebelumnya. Laporan (Laba Rugi, Neraca, Aset Tetap, Persediaan) juga otomatis menampilkan nama & alamat cabang yang sedang aktif di kop laporannya.
1b. **Multi-Cabang**: setiap usaha otomatis punya 1 cabang ("Cabang Utama") sejak awal. Kalau usaha Anda lebih dari 1 lokasi:
   - **Owner**: buka **Atur → Cabang** → **"+ Tambah Cabang"** → isi nama & alamat cabang baru
   - Tiap cabang punya **kode undangan sendiri**, **harga layanan sendiri**, dan **kas/laporan sendiri** — tapi tetap ada tampilan **gabungan (Semua Cabang)** untuk Owner
   - **Pegawai daftar pakai kode cabang** (bukan kode usaha lagi) — otomatis terkunci ke cabang itu saja, tidak bisa lihat/kerja di cabang lain
   - **Owner** bisa pilih cabang mana yang mau dilihat lewat dropdown di Beranda ("Semua Cabang" untuk rekap gabungan, atau pilih 1 cabang spesifik) — pilihan ini berlaku juga saat lihat Transaksi, Cucian, dan Laporan
   - **Penting**: mencatat pesanan/transaksi baru **wajib** memilih 1 cabang spesifik dulu (bukan "Semua Cabang") — kalau masih di mode gabungan dan ada lebih dari 1 cabang, aplikasi akan minta Anda pilih cabang dulu di Beranda
   - **Saldo awal pembukuan** dan **Aset Tetap** juga sudah per-cabang — tampilan "Semua Cabang" otomatis menjumlahkan semua cabang
2. **Owner**: buka menu **Atur → Profil Usaha** dan isi nama, tagline, **No. WhatsApp usaha**, **Instagram usaha**, **alamat**, dan **logo** (opsional, semuanya otomatis muncul di struk — logo muncul di struk gambar & cetak, teks WA/IG pakai ikon 📱📷)
3. **Owner**: di menu **Atur → Harga Layanan**, klik tombol **"Setting Harga"** — popup ini menangani 3 hal sekaligus (harga ini **khusus untuk cabang yang sedang aktif** — pilih cabang lain di Beranda dulu kalau mau atur harga cabang lain):
   - **Kiloan**: untuk tiap jenis (Cuci Kering Lipat, Cuci Setrika, Setrika Saja), bisa tambah **beberapa opsi harga & durasi berbeda** (misal "3 hari — Rp6.000/kg" dan "1 hari — Rp8.000/kg" untuk jenis yang sama) — cocok kalau Anda punya tarif reguler vs kilat/express. Tiap opsi langsung muncul di daftar rekap setelah disimpan
   - **Self-Service**: isi harga Cuci Saja/Kering Saja/Cuci+Kering
   - **Cuci Satuan**: kelola daftar barang (Jas, Gaun, Sprei, PDL, dll) beserta harganya
4. **Owner**: buka menu **Atur → Promo Kiloan** untuk mengaktifkan promo akumulasi berat cucian — **sekarang terpisah per jenis** (Cuci Kering Lipat, Cuci Setrika, Setrika Saja masing-masing punya target kg & bentuk promo sendiri, bisa beda-beda satu sama lain)

   > ⚠️ **Penting**: karena sistem sebelumnya menyimpan akumulasi kiloan sebagai 1 angka gabungan (tidak tahu kg dari jenis mana), progress promo kiloan yang sudah berjalan **otomatis reset ke 0** untuk masing-masing jenis setelah update ini — member mulai menabung lagi dari awal, terpisah per jenis. Riwayat total cucian tetap aman, cuma progress "menuju promo" yang reset.
5. **Owner**: buka menu **Atur → Saldo Awal Pembukuan** dan isi saldo kas/aset/utang saat ini (boleh dikosongkan/0 kalau baru mulai dari nol)
6. **Member bisa ditambah manual** di tab **Member → "+ Tambah Member"** (No. HP jadi ID unik member, plus nama & alamat), atau otomatis muncul saat nomor WA diisi di transaksi cucian — sekarang ada **kolom pencarian** juga di atas daftar member (cari nama/No. WA), dan sistem **menolak** kalau nomor yang diketik sudah terdaftar sebagai member lain
   - **Alamat & lokasi peta tersimpan per member** — tandai sekali lewat "Set Lokasi di Peta" di form Tambah/Edit Member, lalu **otomatis terisi** setiap kali bikin pesanan baru dengan fitur Jemput/Antar untuk nomor yang sama (tidak perlu tandai ulang tiap pesanan). Kalau staff tandai lokasi baru saat bikin pesanan (misal alamat berubah), otomatis ikut ter-update juga di profil membernya untuk pesanan berikutnya
   - Kartu member di daftar sekarang **ringkas** (cuma nama, nomor, alamat) — klik kartunya untuk lihat **rincian lengkap** progress promo (3 jenis kiloan + self-service) dan tombol klaim, di popup terpisah. Kalau ada promo yang siap diklaim, muncul badge kecil "🎉 Siap klaim" di kartunya supaya kelihatan sekilas tanpa perlu buka satu-satu
   - **Pagination**: daftar Member, Transaksi, dan Cucian sekarang punya pilihan tampilkan **10/25/50/100 per halaman**, dengan tombol Sebelumnya/Selanjutnya kalau datanya lebih banyak dari itu
   - Tombol **"Klaim Promo"** (di dalam popup detail member) cuma muncul kalau progress-nya sudah penuh **dan** promo terkait sudah diaktifkan di Atur. Catatan default: **Self-Service otomatis aktif** sejak awal (target 10x kunjungan, sama seperti sebelumnya — bisa dimatikan/diubah di Atur → Promo Self-Service), sedangkan **Promo Kiloan default nonaktif** sampai Anda atur sendiri
7. **Cari pelanggan lama saat catat pesanan**: di form Pesanan Cucian Baru, klik **"Cari Pelanggan Terdaftar"** untuk cari berdasarkan nama/No. WA — pilih, nama & nomor otomatis terisi, tidak perlu ketik ulang. Kalau ketik nomor yang sudah terdaftar secara manual, nama pelanggan **otomatis terisi & terkunci** sesuai data terdaftar (mencegah 1 nomor WA punya beberapa nama berbeda) — kalau perlu koreksi nama, ubah lewat tab Member
7. Untuk pendapatan cucian (Kiloan, Satuan, maupun Self-Service), gunakan menu **Cucian → "+ Pesanan Cucian Baru"**:
   - **Kiloan**: sekarang seperti keranjang — pilih jenis (Cuci Kering Lipat/Cuci Setrika/Setrika Saja), lalu pilih **opsi durasi & harga** yang tersedia untuk jenis itu (kalau Anda sudah setting beberapa opsi, misal reguler vs express), isi berat, klik "+". Bisa tambah beberapa baris berbeda dalam 1 pesanan
   - **Satuan**: pilih barang + jumlah, bisa banyak jenis barang
   - **Self-Service**: pilih 1 jenis
   - Isi **Bayar** (uang yang diterima dari pelanggan) — **Kembalian** otomatis terhitung
   - Kalau nomor WA pelanggan diisi: kiloan otomatis terakumulasi ke saldo kg member (promo otomatis diterapkan kalau target tercapai), self-service kunjungan ke-10 otomatis gratis
8. Setiap pesanan otomatis dapat **kode struk unik** berdasarkan jenis layanan + tanggal, contoh: `KL-160726-001` (Kiloan), `ST-160726-001` (Satuan), `SS-160726-001` (Self-Service) — nomor urut di belakang reset tiap hari per jenis layanan, jadi gampang dikenali sekilas. Total pesanan otomatis terhitung dari harga & berat/jenis layanan (bisa diubah manual), langsung tercatat sebagai pendapatan
9. Setelah pesanan tersimpan, muncul pilihan **kirim atau cetak struk**: kirim gambar/teks via WhatsApp, cetak lewat **printer thermal Bluetooth**, atau cetak lewat **dialog print/PDF biasa** — semua format strukturnya sama persis (nama usaha, tagline, No. WA & Instagram usaha, tanggal, no. struk, pelanggan, rincian tiap item, **estimasi tanggal & jam selesai** untuk pesanan kiloan, subtotal, diskon, total, bayar, kembalian). Estimasi selesai ini juga muncul di halaman pantau online yang dikirim ke pelanggan
9b. **Fitur Kurir (Jemput & Antar, opsional)**: di form Pesanan Cucian Baru, centang **"🚚 Perlu Jemput/Antar?"** untuk membuka:
    - Centang **Perlu Jemput** dan/atau **Perlu Antar** secara terpisah (bisa salah satu atau keduanya), masing-masing dengan kolom alamat sendiri (ada tombol "Sama seperti alamat jemput" biar tidak perlu ketik ulang)
    - Pilih **Kurir Bertugas** dari daftar pegawai/owner yang terdaftar
    - Isi **Ongkos Kirim** manual, ATAU pakai **hitung otomatis berdasarkan jarak** (lihat 9c di bawah)
    - Status jemput/antar muncul sebagai badge di kartu pesanan (Cucian tab) dan bisa ditandai selesai satu-satu lewat popup detail pesanan (klik kartunya)
    - **Pengingat menonjol**: begitu pesanan sudah masuk status **Selesai** (cuciannya sudah beres) tapi **belum diantar/dijemput**, muncul **banner kuning mencolok** di kartu pesanan itu ("Sudah selesai dicuci — belum diantar") beserta tombol **"Tandai Sudah Diantar"** langsung di kartu (tidak perlu buka detail dulu) — supaya pesanan yang masih perlu diantar tidak kelewat tenggelam di antara pesanan Selesai lainnya

9c. **Ongkir Otomatis Berdasarkan Jarak (peta, gratis — tidak pakai Google Maps berbayar)**:
    - Setiap kali muncul popup peta ("Set Lokasi..."), sekarang ada beberapa cara tandai titik: **ketik alamat di kolom cari** (otomatis muncul saran, klik salah satu → peta pindah ke situ dengan pin), **tempel koordinat/link Google Maps** (berguna kalau pelanggan share lokasi lewat WhatsApp — buka lokasinya di Google Maps, salin link/koordinat, tempel di kolom itu), **klik langsung di peta**, atau **"Gunakan Lokasi GPS Saat Ini"**. Pin yang sudah muncul juga **bisa digeser** langsung untuk pas-kan posisinya
    - Kalau alamat pelanggan **belum pernah tersimpan dan tidak ketemu** saat dicari (perumahan kecil/baru sering belum ada di data peta gratis, terutama di luar kota besar): coba cari nama **kecamatan/desa** dulu (biasanya ketemu) lalu geser pin manual berdasarkan patokan dari pelanggan, atau paling akurat — minta pelanggan **share lokasi lewat WhatsApp**, lalu tempel link/koordinatnya seperti di atas
    - **Setup 1x per cabang**: buka **Atur → Cabang → Edit** salah satu cabang → klik **"Set Lokasi Cabang di Peta"** → tandai titik lokasi cabang → isi **Radius Gratis Ongkir (km)** dan **Tarif per KM di Luar Radius (Rp)** → Simpan
    - **Saat catat pesanan**: setelah centang Perlu Jemput/Antar dan isi alamat, klik **"Set Lokasi ... di Peta"** → tandai titik lokasi pelanggan → **jarak & ongkir otomatis terhitung** dan mengisi kolom Ongkos Kirim (masih bisa diedit manual kalau perlu)
    - Kalau cabang belum di-set lokasinya, kolom Ongkos Kirim tetap bisa diisi manual seperti biasa — fitur peta ini murni opsional
    - Peta pakai **OpenStreetMap**, pencarian alamat pakai **Nominatim** (layanan pencarian alamat resmi OpenStreetMap) — keduanya gratis, tanpa API key, tanpa biaya berlangganan apa pun

9d. **Menu "Tugas Saya"** — khusus untuk kurir/pegawai yang ditugaskan Jemput/Antar. Cocok dipakai kurir dari **HP-nya sendiri** (login sebagai akun pegawai-nya) saat sedang di jalan, tidak perlu buka daftar pesanan lengkap:
    - Menampilkan **hanya pesanan yang jadi tugas dia** (berdasarkan "Kurir Bertugas" yang dipilih saat pesanan dibuat), dipisah jadi 2 daftar: **Perlu Dijemput** dan **Perlu Diantar**
    - Tiap kartu ada tombol **"Navigasi"** (buka rute langsung di Google Maps, kalau lokasi sudah ditandai di peta) dan **"Tandai Selesai"**
    - Begitu ditandai selesai, otomatis hilang dari daftar tugas — tidak perlu buka detail pesanan lengkap segala

9e. **Menu "Absensi" (Absensi Pegawai dengan Geotagging)**:
    - **Setup 1x oleh Owner** (di **Atur → Cabang → Edit**, bagian "🕐 Absensi Pegawai" — pakai lokasi cabang yang sama dengan yang di-set untuk ongkir): isi **Radius Absen (meter)** — pegawai cuma bisa absen kalau HP-nya benar-benar berada dalam radius ini dari cabang, **Jam Masuk/Jam Pulang**, dan **Hari Libur Mingguan** (centang hari yang libur)
    - **Pegawai**: buka menu **Absensi** → tombol **"Absen Masuk"** (minta izin lokasi GPS browser saat pertama kali) → kalau di luar radius, ditolak dengan keterangan jaraknya; kalau berhasil, otomatis dihitung **terlambat berapa menit** kalau lewat dari Jam Masuk yang di-set. Sore harinya, tombol berubah jadi **"Absen Pulang"**
    - **Owner**: di menu yang sama, muncul tambahan **Rekap Absensi Semua Pegawai** — bisa pilih rentang tanggal, tabel lengkap (nama, cabang, jam masuk/pulang, keterlambatan disorot merah), dan tombol **"Unduh Excel (CSV)"** atau **"Cetak/Simpan PDF"** — cocok jadi pedoman hitung gaji
    - Catatan: absen pulang tetap bisa dilakukan meski GPS gagal/ditolak (supaya pegawai tidak "terkunci" kalau ada kendala teknis saat pulang), tapi absen masuk **wajib** GPS valid dalam radius

    > ⚠️ Sama seperti fitur "Selesai 30 hari" sebelumnya, query rekap absensi ini kemungkinan butuh Firestore membuat index baru saat pertama kali dipakai — kalau muncul error "The query requires an index" di Console, klik link birunya, tunggu status "Enabled", lalu coba lagi.

9f. **Kelola Pegawai (satu tempat untuk semua pengaturan per pegawai)**:
    - Buka **Atur → Anggota Tim → tombol "Kelola Pegawai"** di tiap pegawai — semuanya jadi satu di sini:
      - **Tanggal Mulai Kerja** (baru) — perhitungan alpa & gaji cuma dimulai dari tanggal ini, hari-hari sebelumnya (misal sebelum pegawai resmi mulai kerja) **tidak ikut dihitung sama sekali**, supaya tidak salah kena potongan untuk hari yang memang belum jadi tanggung jawabnya
      - **Jam Kerja & Hari Libur Mingguan** — per pegawai (bukan per cabang lagi), jadi tiap pegawai bisa punya jadwal beda-beda
      - **Jenis Gaji Pokok**: Harian (otomatis dihitung dari jumlah hari absen masuk di periode slip), Mingguan, atau Bulanan (nominal tetap)
      - **Tunjangan** (opsional, bisa tambah beberapa) — misal Tunjangan Makan, Tunjangan Transport, atau nama bebas. Tiap tunjangan sekarang punya **pilihan sendiri**: **"Harian"** (dikali jumlah hari masuk — kalau pegawai tidak masuk, tunjangan hari itu juga tidak dibayar, selain kena potongan alpa) atau **"Flat"** (nominal tetap per periode slip, tidak terpengaruh jumlah hari masuk) — bisa beda-beda per tunjangan, tidak harus ikut jenis Gaji Pokok
      - **Potongan Keterlambatan** — atur "setiap berapa menit terlambat, potongan berapa rupiah"
      - **Potongan Tanpa Izin (Alpa)** — atur nominal potongan per hari kerja yang **sama sekali tidak ada absen masuk** (bukan hari libur, bukan hari yang belum terjadi) — dihitung otomatis dari jadwal kerja & data Absensi pegawai itu
    - Radius lokasi absen (meter) tetap diatur per **cabang** (Atur → Cabang, karena terkait lokasi fisik cabang), tapi jam kerja/hari libur/gaji sekarang murni per **pegawai**

    > Catatan migrasi: kalau sebelumnya sudah pernah atur Jam Kerja/Hari Libur di level Cabang, itu **tidak otomatis pindah** ke pengaturan per pegawai yang baru ini — tolong buka "Kelola Pegawai" untuk tiap pegawai dan atur ulang jam kerja & hari liburnya (default sementara: masuk 08:00, pulang 17:00, libur Minggu, sampai diatur ulang).

9g. **Pengajuan Izin (supaya izin resmi tidak kena potongan alpa)**:
    - **Pegawai**: di menu Absensi, ada bagian **"Ajukan Izin"** — isi tanggal (bisa lebih dari 1 hari) dan alasan, lalu kirim. Status pengajuan (Menunggu/Disetujui/Ditolak) bisa dipantau di riwayat pengajuan sendiri
    - **Owner**: muncul bagian **"Pengajuan Izin Pegawai"** di menu Absensi (bagian bawah) — tombol **Setujui** atau **Tolak** untuk tiap pengajuan yang masuk
    - Begitu izin **disetujui**, tanggal itu otomatis **dikecualikan dari Potongan Tanpa Izin (Alpa)** saat slip gaji dibuat — muncul di slip sebagai "Izin Disetujui (Tidak Dipotong)", bukan potongan. Izin yang masih menunggu atau ditolak tetap dihitung sebagai alpa kalau tidak ada absen masuk di hari itu
    - **Buat Slip Gaji** (Owner, di menu Absensi bagian bawah): pilih pegawai (yang sudah dikelola) → pakai periode yang sama dengan filter rekap absensi di atasnya → klik "Buat Slip Gaji" → sistem otomatis menghitung semuanya (gaji pokok + tunjangan − potongan telat − potongan alpa) berdasarkan data Absensi periode itu
    - Slip yang sudah dibuat **tersimpan permanen** dan bisa dilihat lagi kapan saja — **baik oleh Owner (semua pegawai) maupun pegawai yang bersangkutan (cuma miliknya sendiri)**, lewat menu Absensi masing-masing. Tiap slip ada tombol **Cetak/Simpan PDF**
    - **Terhubung otomatis ke Laporan Keuangan**: di detail slip gaji, ada bagian **"Status Pembayaran"** — isi tanggal dibayarkan lalu klik **"Tandai Sudah Dibayar"** → otomatis tercatat sebagai transaksi **Kas Keluar (Beban Gaji)** di tanggal itu, langsung masuk hitungan Laba Rugi. Sebelum ditandai, slip gaji **belum** mempengaruhi laporan keuangan sama sekali (supaya tidak dobel-hitung sebelum benar-benar dibayar). Hapus slip yang sudah dibayar akan otomatis ikut menghapus transaksi terkait

9h. **Modul Persediaan (dengan Stock Opname, metode periodik)**:
    - **Catat pembelian persediaan**: di form Kas Keluar, pilih kategori **"Beli Persediaan (Stok)"** → muncul rincian: Jenis Persediaan (Bahan Cuci/Kemasan/Perlengkapan Lain), Nama Barang (ketik baru atau pilih yang sudah pernah dicatat), Jumlah, Satuan. Harga satuan otomatis dihitung dari Jumlah (Rp) transaksi ÷ jumlah barang. Setiap barang otomatis dapat **ID unik** dan dikelompokkan per jenisnya — kalau nama & jenis sama dengan yang sudah ada, jumlah & nilainya digabung (bukan dobel-catat barang baru)
    - **Lihat di Laporan → tab "Persediaan"**: daftar semua barang per jenis, lengkap jumlah, harga rata-rata, dan total nilai
    - **Stock Opname**: tombol **"Mulai Stock Opname"** — tampil semua barang dengan jumlah "menurut sistem" (hasil catatan pembelian), lalu isi **jumlah fisik sebenarnya** yang dihitung langsung di gudang/toko (bisa dilakukan Owner maupun Pegawai). Bisa disimpan sebagai **Draft** dulu (belum mempengaruhi laporan) atau langsung **"Selesaikan Opname"** — begitu diselesaikan, nilai persediaan sistem otomatis disesuaikan mengikuti hasil hitungan fisik itu, dan tidak bisa diubah lagi setelahnya. Disarankan dilakukan tiap akhir bulan, tapi bisa dilakukan tanggal berapa saja
    - **Otomatis masuk ke laporan keuangan** — pakai metode pencatatan persediaan **periodik**, sesuai standar akuntansi:
      - **Neraca**: nilai Persediaan = hasil Stock Opname terakhir (digulirkan maju dengan pembelian sesudahnya kalau ada), bukan lagi angka statis dari Saldo Awal
      - **Laba Rugi**: muncul baris **"Beban Persediaan (Pemakaian Stok)"** otomatis, dihitung dari rumus **Persediaan Awal + Pembelian dalam periode − Persediaan Akhir** — inilah nilai barang yang terpakai/habis selama periode itu, dianggap sebagai beban
    - Kalau belum pernah Stock Opname sama sekali, nilai persediaan sistem murni dari akumulasi pembelian (asumsi belum ada yang terpakai) — begitu Stock Opname pertama dilakukan, baru laporan mulai akurat mencerminkan pemakaian yang sebenarnya
    - **Unduh laporan**: baik Aset Tetap maupun Persediaan sekarang punya tombol **"Cetak/Simpan PDF"** dan **"Unduh Excel"** — formatnya mengikuti **Kartu Inventaris Barang (KIB)** ala Pemda: ID unik, jenis, nama, tanggal perolehan, nilai perolehan, umur ekonomis, penyusutan, akumulasi, dan nilai buku (untuk Aset Tetap); ID, jenis, nama, jumlah, harga per unit, dan total (untuk Persediaan). Kop laporannya sama dengan Laba Rugi/Neraca (nama usaha + cabang + alamat)
    - **Tabelnya tetap tampil langsung di aplikasi** (bisa dilihat sebelum download), dengan **pagination** persis seperti tab Cucian — pilih 10/25/50/100 baris per halaman, navigasi Sebelumnya/Selanjutnya. Baris "TOTAL" di tabel selalu menjumlahkan **SEMUA data** (bukan cuma yang tampil di halaman itu), dan tombol Unduh Excel/PDF juga selalu mengambil **seluruh data**, tidak terpengaruh halaman yang sedang dilihat

9i. **Trial 14 Hari & Kelola Langganan (untuk model jual-ke-banyak-usaha)**:
    - Setiap usaha baru yang mendaftar otomatis mulai masa **trial 14 hari**, terhitung sejak tanggal daftar
    - Begitu trial habis, akses ke aplikasi **otomatis terkunci** untuk SEMUA akun di usaha itu (Owner maupun Pegawai) — muncul halaman "Masa Trial Berakhir" dengan tombol langsung chat WhatsApp untuk lanjut berlangganan. Data tidak hilang, cuma terkunci sampai diaktifkan lagi
    - **Kelola Langganan** (menu khusus, cuma muncul untuk 1 email admin platform — default `agungnugroho878@gmail.com`, ganti di `isSuperAdmin()` pada Security Rules dan `SUPER_ADMIN_EMAIL` di `js/app.js` kalau email Anda beda): lihat status SEMUA usaha yang terdaftar, lengkap dengan **nama & email Owner, Kode Undangan/ID Bisnis, No. HP, dan Alamat usaha** — supaya gampang dihubungi kalau mau tagih/konfirmasi
    - Begitu klik **"Aktifkan Langganan"**, otomatis tercatat **Tanggal Mulai Langganan** (hari itu) dan **Tanggal Jatuh Tempo** (1 bulan kemudian) — kalau sudah lewat jatuh tempo, muncul peringatan merah "perlu diperpanjang!". Klik **"Perpanjang 1 Bulan"** kapan saja pelanggan bayar lagi — otomatis reset jatuh tempo jadi 1 bulan dari hari itu
    - Tombol **"+7 Hari Trial"** tetap ada untuk perpanjang masa coba kalau perlu
    - Usaha yang sudah ditandai **"Aktif"** tidak akan pernah terkunci otomatis oleh sistem tanggal, berapa pun lama masa aktifnya, sampai Anda ubah manual lagi (tanggal jatuh tempo cuma pengingat visual, bukan pengunci otomatis — supaya Anda yang putuskan kapan benar-benar mengunci akses kalau pelanggan telat bayar)
    - **Hapus usaha** (testing/sampah/duplikat) — tombol merah di tiap kartu, minta ketik ulang nama usaha untuk konfirmasi, lalu menghapus SEMUA data usaha itu secara permanen (transaksi, cucian, member, pegawai, dll)

    > ⚠️ **Usaha lama (dibuat sebelum fitur ini ada, termasuk Wash Space Anda sendiri)** tidak otomatis punya tanggal trial, jadi TIDAK akan ke-lock — tapi supaya rapi, buka **Kelola Langganan** dan klik **"Aktifkan Langganan"** untuk usaha Anda sendiri secara manual sekali saja.

9j. **Paket Langganan Berdasarkan Jumlah Cabang** (semua paket dapat SEMUA fitur yang sama, cuma beda batas cabang):
    | Paket | Batas Cabang | Harga/bulan |
    |---|---|---|
    | Rintisan | 1 cabang | Rp99.000 |
    | Berkembang | 5 cabang | Rp199.000 |
    | Jaringan | Tanpa batas | Rp399.000 |
    - Usaha baru otomatis mulai dari **Paket Rintisan**
    - Begitu usaha coba tambah cabang **melebihi batas paketnya**, muncul popup "Batas Paket Tercapai" dengan tombol langsung chat WhatsApp untuk upgrade — cabang baru **tidak akan tersimpan** sampai paketnya di-upgrade
    - Info paket & sisa kuota cabang juga tampil di **Atur → Cabang** (buat Owner usaha itu sendiri lihat status mereka)
    - **Ganti paket usaha** dari **Kelola Langganan** (admin) — pilih paket baru dari dropdown di tiap kartu usaha, langsung tersimpan
    - Harga di atas cuma **acuan** yang ditampilkan ke Owner usaha — bisa diubah kapan saja lewat variabel `PLAN_CONFIG` di `js/app.js` tanpa perlu ubah struktur data

    > ⚠️ **Usaha lama yang sudah punya beberapa cabang sebelum fitur ini ada** (termasuk kalau Wash Space Anda sudah multi-cabang) otomatis dianggap Paket Rintisan (1 cabang) secara default — cabang yang SUDAH ADA tidak akan dihapus/terganggu, tapi mereka tidak akan bisa **tambah cabang baru** sampai paketnya disesuaikan manual lewat Kelola Langganan.

9l. **Gaji Borongan (per Kg)** — opsi ke-4 di "Jenis Gaji Pokok" (Atur → Anggota Tim → Kelola Pegawai), selain Harian/Mingguan/Bulanan:
    - Owner isi **Tarif per Kg** (misal Rp1.000/kg)
    - Setiap kali pegawai menandai pesanan **Kiloan** jadi "Selesai", sistem otomatis mencatat siapa yang menyelesaikannya
    - Saat generate slip gaji, gaji pokok dihitung otomatis: **total kg Kiloan yang diselesaikan pegawai itu selama periode slip × tarif per kg**
    - Tunjangan & potongan (telat, alpa) tetap bisa dipakai bersamaan seperti metode lain
    - Tetap otomatis masuk ke Laporan Keuangan (Beban Gaji) lewat tombol "Tandai Sudah Dibayar", sama seperti metode Harian/Mingguan/Bulanan

    > ⚠️ **Perlu index Firestore baru** — begitu pertama kali generate slip gaji Borongan, kemungkinan muncul error index di Console (F12). Klik link "Create Index" yang muncul, tunggu "Enabled", lalu coba lagi.

9k. **Piutang, Metode Pembayaran & Arus Kas Harian** (untuk usaha yang membolehkan bayar belakangan):
    - Form Pesanan Baru sekarang punya **Metode Pembayaran** (Tunai/QRIS/Transfer) — wajib dipilih tiap transaksi
    - Kalau isi **"Bayar (Rp)" lebih kecil dari Total**, otomatis muncul peringatan dan pesanan itu tercatat **"Belum Lunas"** — sisanya jadi **piutang**, bukan ikut kehitung sebagai kas masuk (supaya Saldo Kas di Beranda tidak salah lebih besar dari uang fisik yang sebenarnya diterima)
    - Kartu pesanan yang belum lunas dapat badge merah **"Belum Lunas"** di halaman Cucian
    - Di **Detail Pesanan**, ada tombol **"Terima Pelunasan"** — begitu pelanggan bayar sisanya, pilih metode pembayaran lalu klik, otomatis tercatat sebagai transaksi baru dan status berubah jadi Lunas
    - **Neraca**: baris "Piutang Usaha" sekarang otomatis dihitung dari total semua pesanan yang belum lunas (sebelumnya cuma angka manual dari Saldo Awal)
    - **Laporan → tab "Arus Kas Harian"** (baru): pilih 1 tanggal, lihat jumlah transaksi dan **pendapatan dipisah per metode** (Tunai/QRIS/Transfer) — plus kalkulator **"Cek Posisi Kas Tunai Fisik"**: isi modal awal (uang kembalian yang ditaruh pagi hari), sistem otomatis hitung berapa uang tunai yang SEHARUSNYA ada di laci sekarang, tinggal dicocokkan dengan uang fisik saat tutup buku
    - **Struk** (WA, cetak thermal, cetak biasa, gambar) semuanya sekarang menampilkan **Metode Pembayaran** dan status **LUNAS / BELUM LUNAS** (+ sisa piutang kalau ada)
    - **Halaman Pelacakan Publik** (link yang dibuka pelanggan) juga menampilkan info yang sama

    > ⚠️ **Perlu index Firestore baru** — begitu pertama kali buka tab "Arus Kas Harian" atau ada pesanan berstatus belum lunas, kemungkinan muncul error index di Console (F12) — klik link "Create Index" yang muncul di situ, tunggu status "Enabled", lalu refresh.

10. **Foto barang (opsional, tidak ada batas jumlah)**: saat isi pesanan, ada 2 cara ambil foto:
    - **"Kamera (pilih perangkat)"** — buka preview langsung di layar, ada dropdown untuk memilih kamera mana yang dipakai (kamera bawaan laptop/tablet, atau **webcam eksternal/USB** kalau ada yang tersambung). Bisa jepret beberapa foto berturut-turut sebelum tutup
    - **"Galeri/File"** — cara lama, buka galeri atau file manager biasa

    Total foto otomatis dihitung dan tampil sebagai ringkasan (misal **"Total 15 pcs pakaian difoto"**) — muncul di form saat mengambil foto, kartu pesanan di tab Cucian, dan semua jenis struk (bukan deteksi jenis pakaian otomatis, cuma jumlah keseluruhan)

    Kalau pesanan punya nomor pelacakan, link pantau otomatis **ikut terkirim bersama struk** (baik lewat teks maupun gambar) — tidak perlu kirim terpisah. Pelanggan buka link itu (tanpa perlu login/install apa pun) untuk lihat status pesanan real-time dan foto barangnya

    > Catatan: fitur "Kamera (pilih perangkat)" butuh izin akses kamera dari browser (akan muncul pop-up izin saat pertama kali dipakai). Nama kamera eksternal baru muncul jelas (misal "USB Webcam") setelah izin diberikan — sebelum itu mungkin cuma tertulis "Kamera 1", "Kamera 2".

    > Catatan penyimpanan: foto disimpan di Cloudinary (kuota gratis 25 credit/bulan). Ada fitur **pembersihan otomatis** (lihat bagian "0c. Setup Pembersihan Foto Otomatis") — foto dari pesanan yang sudah Selesai lebih dari 10 hari otomatis dihapus, supaya kuota tidak terus menumpuk seiring usaha berkembang.

10b. **Tambah foto SETELAH pesanan dibuat**: tidak perlu foto semua barang di depan pelanggan sebelum cetak struk (supaya pelanggan tidak menunggu lama) — cukup catat pesanan & cetak struk seperti biasa, lalu **klik kartu pesanan** kapan saja setelahnya (di tab Belum Diproses/Sedang Diproses/Selesai, tidak masalah) untuk buka detail, dan foto barang **satu-satu santai** di situ sambil pakaian disortir/dicuci. Foto yang sudah ada juga bisa dihapus satu-satu dari popup yang sama kalau salah ambil.

> Catatan teknis: untuk pengiriman **struk gambar**, link pantau disertakan sebagai "keterangan/caption" lewat fitur share bawaan HP. Beberapa versi WhatsApp menampilkan caption ini otomatis di bawah gambar, sebagian lain mungkin tidak menampilkannya. Kalau linknya tidak muncul di WA, gunakan opsi **"Kirim sebagai Teks Saja"** sebagai cadangan — di situ link selalu ikut karena bagian dari teks pesan biasa.

11. Tab **Cucian** sekarang punya 3 tab terpisah dengan jumlah pesanan di tiap tab: **Belum Diproses → Sedang Diproses → Selesai**, plus **strip ringkasan** besar di atas menampilkan ketiga angka itu sekilas. Update status dengan tombol "Tandai" di tiap kartu pesanan
    - Untuk tab Belum Diproses & Sedang Diproses, ada **pengurutan**: deadline terdekat/terlama, atau baru/lama dibuat
    - Ada **pencarian** di atas (cari berdasarkan No. Struk, nama pelanggan, atau nomor WA)
    - Tiap pesanan kiloan yang belum selesai punya **indikator sisa waktu** berwarna (hijau = aman, kuning = mendekati deadline, merah = terlambat) berdasarkan estimasi durasi yang di-set di Harga Layanan
    - Tampilan menyesuaikan ukuran layar: 1 kolom di HP, 2 kolom di tablet, 3 kolom di laptop/layar lebar
    - **Klik kartu pesanan** (di tab manapun) untuk lihat detail lengkap + foto pakaian
    - Ada **pagination** (10/25/50/100 per halaman) di semua tab
    - **Tab Selesai otomatis dibatasi 30 hari terakhir** (supaya tetap cepat dibuka meski riwayatnya sudah menumpuk bertahun-tahun) — ada centang **"Tampilkan semua riwayat"** kalau perlu cari pesanan lebih lama dari itu

    > ⚠️ **Penting — index Firestore baru**: fitur pembatasan 30 hari ini butuh Firestore membuat "index" khusus untuk query barunya. **Ini otomatis** — cukup buka aplikasi & coba tab Cucian seperti biasa. Kalau muncul error di Console (F12) bertuliskan *"The query requires an index"* dengan sebuah link, **klik link itu** → akan terbuka Firebase Console dengan index sudah terisi otomatis → klik **"Create Index"** → tunggu 1-2 menit → coba lagi. Ini cuma perlu dilakukan **sekali saja** per jenis query baru (kemungkinan muncul 2-3 kali untuk fitur berbeda: aktif/selesai/terbaru), setelah itu berjalan otomatis selamanya.
12. **Notifikasi siap diambil**: begitu status ditandai **"Selesai"**, langsung muncul pop-up untuk kirim notifikasi WA ke pelanggan (1 tombol, pesan sudah siap dengan nada bersemangat + link pantau)
13. Halaman pantau yang dibuka pelanggan **otomatis memperbarui status setiap 20 detik** — kalau dibiarkan terbuka, pelanggan langsung melihat perubahan status tanpa perlu refresh manual
14. **Beranda** sekarang punya kartu **"Analisis Pendapatan Layanan"** — filter waktu (Hari Ini/7 Hari/Bulan Ini/Tahun Ini), rincian omzet & jumlah transaksi per jenis (Kiloan/Satuan/Self-Service) plus Total Omzet, dan grafik tren 6 bulan terakhir untuk melihat jenis layanan mana yang tumbuh paling baik
15. **Klaim Promo**: di tab **Member**, kalau pelanggan sudah mencapai target (akumulasi kg kiloan atau kunjungan self-service, sesuai yang diatur di Atur → Promo Kiloan/Promo Self-Service), muncul tombol **"Klaim"** — dipencet saat pelanggan datang mau ambil gratisannya, progress otomatis mulai lagi dari 0 setelah diklaim (tidak perlu bikin transaksi baru untuk ini). Tombol ini kelihatan oleh Owner maupun Pegawai, tapi tetap perlu cari member-nya dulu di daftar (ada badge "🎉 Siap klaim" biar gampang kelihatan)
16. **Progress Promo otomatis lewat WA**: setiap kali transaksi Kiloan atau Self-Service disimpan (dengan No. WA pelanggan terisi), pesan WA/struk yang dikirim ke pelanggan **otomatis menyertakan progress promo terkini** — misal "Cuci Setrika: sudah 12/20 kg — kurang 8 kg lagi buat dapat promo!", atau kalau sudah penuh: "🎉 Yeay, promo sudah siap diklaim di kunjungan berikutnya!". Ini tersinkron otomatis dengan pengaturan Promo Kiloan/Self-Service — kalau promo untuk jenis itu belum diaktifkan, baris progressnya otomatis tidak ikut muncul. Berlaku baik untuk kirim struk Gambar maupun Teks
17. **Pengingat jeda kirim WA** (supaya akun WhatsApp Business tidak dianggap spam otomatis oleh sistem WhatsApp): aplikasi diam-diam mencatat setiap kali tombol kirim WA dipencet (kirim struk, kirim link pantau, dll). Kalau sudah **lebih dari 5x dalam 10 menit terakhir**, muncul catatan kecil (toast merah) mengingatkan untuk beri jeda sebentar. Ini cuma pengingat — tidak memblokir pengiriman, cuma bantu jaga kebiasaan pemakaian yang lebih aman. Catatan ini tersimpan lokal di browser masing-masing perangkat (tidak sinkron ke server), otomatis "lupa" sendiri setelah 10 menit tidak ada aktivitas kirim WA baru.
16. **Cara tercepat catat aset tetap**: cukup lewat **Beranda/Transaksi → Catat Kas Keluar**, pilih kategori **"Beli Peralatan/Aset Tetap"** — form rincian aset (jenis, merk, umur manfaat, nilai residu) otomatis muncul di bawahnya, jadi 1x isi langsung tercatat sebagai **transaksi kas** sekaligus **aset tetap** dengan jadwal penyusutan. Untuk aset yang tidak perlu transaksi baru (misal peralatan lama sebelum pakai aplikasi ini), tetap bisa didaftarkan langsung lewat **Laporan → Aset Tetap → Tambah Aset Tetap**
17. **Owner**: buka menu **Laporan → Aset Tetap** untuk melihat daftar & rincian aset tetap. Sistem otomatis menghitung **penyusutan per bulan** (metode garis lurus), **akumulasi penyusutan**, dan **nilai buku**, yang otomatis muncul sebagai **Beban Penyusutan** di Laba Rugi dan **Akumulasi Penyusutan** (pengurang nilai aset) di Neraca setiap bulan — tidak perlu input manual tiap bulan

    > Catatan: estimasi umur manfaat (default 5 tahun untuk mesin, 4 tahun untuk peralatan lain) adalah perkiraan umum praktik akuntansi, bukan patokan pajak resmi — untuk pelaporan pajak, sebaiknya dikonsultasikan ke akuntan/konsultan pajak.
17. **Owner**: buka menu **Laporan** untuk melihat Laba Rugi (per periode, otomatis terpisah per jenis layanan: Kiloan, Satuan, Self-Service) dan Neraca (per tanggal), lalu bisa **Cetak/Simpan PDF** atau **Unduh CSV** (sudah termasuk kolom Jenis Layanan, Sub-Layanan, Berat, dan Pelanggan untuk analisis lebih dalam di Excel/Sheets)

### Catatan soal indikator waktu di tab Cucian
Indikator "sisa waktu"/"terlambat" dihitung saat halaman Cucian dibuka/di-refresh (bukan berjalan otomatis tiap detik seperti jam) — cukup akurat untuk penggunaan sehari-hari, cukup buka ulang tab Cucian sesekali untuk lihat update terbaru.

### Cetak struk via printer thermal Bluetooth
- Atur lebar kertas dulu di **Atur → Pengaturan Printer** (58mm atau 80mm, sesuaikan dengan printer Anda)
- Saat cetak, browser akan minta pilih perangkat Bluetooth — pilih printer Anda (pastikan printer sudah menyala dan dalam jangkauan; tidak perlu di-pairing manual dulu lewat Settings HP, cukup dari sini)
- **Batasan penting**: fitur cetak Bluetooth ini **hanya berjalan di Chrome (Android atau Desktop)** — Safari/iPhone **tidak didukung sama sekali** (ini keterbatasan dari Apple, browser lain seperti Chrome/Firefox di iPhone juga terpengaruh karena semuanya memakai mesin Safari di iOS). Untuk perangkat iPhone, gunakan opsi **"Cetak (Dialog Print/PDF)"** sebagai gantinya
- Tidak semua model printer Bluetooth kompatibel — fitur ini memakai protokol umum yang dipakai kebanyakan printer thermal generik/OEM (merek seperti GOOJPRT, MUNBYN, EPPOS, dan sejenisnya biasanya kompatibel). Kalau printer Anda tidak terdeteksi/tidak mau connect, gunakan jalur "Dialog Print/PDF" sebagai alternatif

### Catatan soal kirim struk/gambar ke WhatsApp
WhatsApp tidak menyediakan cara untuk melampirkan gambar secara otomatis dari sebuah link (beda dengan teks yang bisa auto-terisi). Jadi struk digambar sebagai file PNG, lalu sistem memakai fitur **share bawaan HP** (Web Share API) — pegawai tinggal 1x ketuk "Bagikan", pilih WhatsApp, gambar otomatis terlampir, tinggal pilih kontak pelanggan. Di beberapa browser desktop yang tidak mendukung fitur share gambar, sistem otomatis mengunduh gambarnya untuk dilampirkan manual.

### Fitur yang masih tertunda (butuh keputusan Anda)
**Foto pakaian per item + link pantau untuk pelanggan** — fitur ini butuh Firebase Storage, yang sejak akhir 2024 mewajibkan upgrade project ke paket **Blaze** (pay-as-you-go, perlu kartu kredit terdaftar meski pemakaian kecil tetap gratis). Fitur ini belum dibangun sampai ada konfirmasi dari Anda soal upgrade paket ini.

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
