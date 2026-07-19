# LaundryKu Finance

Aplikasi laporan keuangan untuk UMKM laundry — kini **online** (Firebase) dan **multi-usaha**: satu instalasi aplikasi ini bisa dipakai banyak laundry berbeda sekaligus, masing-masing dengan data yang sepenuhnya terpisah (transaksi, member, harga, pengaturan — semua terisolasi per usaha).

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
    function sameBusiness(bizId) { return isSignedIn() && myBusinessId() == bizId; }

    match /users/{uid} {
      allow read: if isSignedIn() && (request.auth.uid == uid || sameBusiness(resource.data.businessId));
      allow create: if isSignedIn() && request.auth.uid == uid;
      allow update, delete: if isOwner() && sameBusiness(resource.data.businessId);
    }

    match /businesses/{bizId} {
      allow get: if isSignedIn();
      allow list: if false;
      allow create: if isSignedIn();
      allow update, delete: if isOwner() && sameBusiness(bizId);
    }

    match /businessSettings/{bizId} {
      allow get: if true;
      allow list: if false;
      allow write: if sameBusiness(bizId);
    }

    match /transactions/{id} {
      allow read: if resource == null || sameBusiness(resource.data.businessId);
      allow create: if isSignedIn() && sameBusiness(request.resource.data.businessId);
      allow update, delete: if isOwner() && sameBusiness(resource.data.businessId);
    }

    match /categories/{id} {
      allow read: if resource == null || sameBusiness(resource.data.businessId);
      allow create, update: if isSignedIn() && sameBusiness(request.resource.data.businessId);
      allow delete: if isSignedIn() && sameBusiness(resource.data.businessId);
    }

    match /members/{id} {
      allow read: if resource == null || sameBusiness(resource.data.businessId);
      allow create, update: if isSignedIn() && sameBusiness(request.resource.data.businessId);
      allow delete: if isSignedIn() && sameBusiness(resource.data.businessId);
    }

    match /orders/{id} {
      allow get: if true;
      allow list: if sameBusiness(resource.data.businessId);
      allow create, update: if isSignedIn() && sameBusiness(request.resource.data.businessId);
      allow delete: if isOwner() && sameBusiness(resource.data.businessId);
    }

    match /assets/{id} {
      allow read: if resource == null || sameBusiness(resource.data.businessId);
      allow create, update: if isOwner() && sameBusiness(request.resource.data.businessId);
      allow delete: if isOwner() && sameBusiness(resource.data.businessId);
    }
  }
}
```

> Catatan keamanan: `businessSettings` (nama usaha, harga, promo) sengaja bisa dibaca publik (`allow get: if true`) supaya halaman pantau pelanggan (`track.html`) bisa menampilkan nama usaha tanpa login. Konsekuensinya: siapa pun yang tahu Business ID sebuah usaha (dari kode undangan atau link pantau) bisa melihat daftar harganya. Ini risiko rendah (harga laundry umumnya memang informasi terbuka), tapi kalau ke depan Anda mau data harga/promo benar-benar privat, kabari saya untuk dipisah lagi.

4. **Daftar akun Owner pertama**: buka aplikasi → klik "Daftar" → pilih **"Buat Usaha Baru"** → isi nama usaha, nama Anda, email, password → daftar. Akun ini otomatis jadi **Owner** untuk usaha baru tersebut (tidak perlu naik level manual lagi seperti versi sebelumnya)

Untuk pegawai: Owner buka **Atur → Pegawai**, salin **Kode Undangan Usaha**, bagikan ke pegawai. Pegawai buka aplikasi → **Daftar** → pilih **"Gabung sebagai Pegawai"** → masukkan kode itu → otomatis bergabung ke usaha yang sama (bukan usaha lain).

**Boleh lebih dari 1 Owner untuk usaha yang sama** (misalnya Anda & pasangan, masing-masing pantau dengan email sendiri): orang kedua daftar dulu lewat "Gabung sebagai Pegawai" pakai kode undangan di atas (otomatis jadi Pegawai) → Owner pertama buka **Atur → Anggota Tim** → klik **"Jadikan Owner"** di baris akun tersebut. Selesai, akses penuh untuk keduanya.

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

## 1. Cara pakai cepat

1. Buka aplikasinya → login (atau daftar kalau belum punya akun)
2. **Owner**: buka menu **Atur → Profil Usaha** dan isi nama, tagline, **No. WhatsApp usaha**, **Instagram usaha**, **alamat**, dan **logo** (opsional, semuanya otomatis muncul di struk — logo muncul di struk gambar & cetak, teks WA/IG pakai ikon 📱📷)
3. **Owner**: di menu **Atur → Harga Layanan**, klik tombol **"Setting Harga"** — popup ini menangani 3 hal sekaligus:
   - **Kiloan**: untuk tiap jenis (Cuci Kering Lipat, Cuci Setrika, Setrika Saja), bisa tambah **beberapa opsi harga & durasi berbeda** (misal "3 hari — Rp6.000/kg" dan "1 hari — Rp8.000/kg" untuk jenis yang sama) — cocok kalau Anda punya tarif reguler vs kilat/express. Tiap opsi langsung muncul di daftar rekap setelah disimpan
   - **Self-Service**: isi harga Cuci Saja/Kering Saja/Cuci+Kering
   - **Cuci Satuan**: kelola daftar barang (Jas, Gaun, Sprei, PDL, dll) beserta harganya
4. **Owner**: buka menu **Atur → Promo Kiloan** untuk mengaktifkan promo akumulasi berat cucian — tentukan target kg, dan bentuk promonya (potongan harga Rp, atau gratis sejumlah kg)
5. **Owner**: buka menu **Atur → Saldo Awal Pembukuan** dan isi saldo kas/aset/utang saat ini (boleh dikosongkan/0 kalau baru mulai dari nol)
6. **Member bisa ditambah manual** di tab **Member → "+ Tambah Member"** (No. HP jadi ID unik member, plus nama & alamat), atau otomatis muncul saat nomor WA diisi di transaksi cucian
7. **Cari pelanggan lama saat catat pesanan**: di form Pesanan Cucian Baru, klik **"Cari Pelanggan Terdaftar"** untuk cari berdasarkan nama/No. WA — pilih, nama & nomor otomatis terisi, tidak perlu ketik ulang. Kalau ketik nomor yang sudah terdaftar secara manual, nama pelanggan **otomatis terisi & terkunci** sesuai data terdaftar (mencegah 1 nomor WA punya beberapa nama berbeda) — kalau perlu koreksi nama, ubah lewat tab Member
7. Untuk pendapatan cucian (Kiloan, Satuan, maupun Self-Service), gunakan menu **Cucian → "+ Pesanan Cucian Baru"**:
   - **Kiloan**: sekarang seperti keranjang — pilih jenis (Cuci Kering Lipat/Cuci Setrika/Setrika Saja), lalu pilih **opsi durasi & harga** yang tersedia untuk jenis itu (kalau Anda sudah setting beberapa opsi, misal reguler vs express), isi berat, klik "+". Bisa tambah beberapa baris berbeda dalam 1 pesanan
   - **Satuan**: pilih barang + jumlah, bisa banyak jenis barang
   - **Self-Service**: pilih 1 jenis
   - Isi **Bayar** (uang yang diterima dari pelanggan) — **Kembalian** otomatis terhitung
   - Kalau nomor WA pelanggan diisi: kiloan otomatis terakumulasi ke saldo kg member (promo otomatis diterapkan kalau target tercapai), self-service kunjungan ke-10 otomatis gratis
8. Setiap pesanan otomatis dapat **kode struk unik** berdasarkan jenis layanan + tanggal, contoh: `KL-160726-001` (Kiloan), `ST-160726-001` (Satuan), `SS-160726-001` (Self-Service) — nomor urut di belakang reset tiap hari per jenis layanan, jadi gampang dikenali sekilas. Total pesanan otomatis terhitung dari harga & berat/jenis layanan (bisa diubah manual), langsung tercatat sebagai pendapatan
9. Setelah pesanan tersimpan, muncul pilihan **kirim atau cetak struk**: kirim gambar/teks via WhatsApp, cetak lewat **printer thermal Bluetooth**, atau cetak lewat **dialog print/PDF biasa** — semua format strukturnya sama persis (nama usaha, tagline, No. WA & Instagram usaha, tanggal, no. struk, pelanggan, rincian tiap item, **estimasi tanggal & jam selesai** untuk pesanan kiloan, subtotal, diskon, total, bayar, kembalian). Estimasi selesai ini juga muncul di halaman pantau online yang dikirim ke pelanggan
10. **Foto barang (opsional, maksimal 20 foto per pesanan)**: saat isi pesanan, ada 2 cara ambil foto:
    - **"Kamera (pilih perangkat)"** — buka preview langsung di layar, ada dropdown untuk memilih kamera mana yang dipakai (kamera bawaan laptop/tablet, atau **webcam eksternal/USB** kalau ada yang tersambung). Bisa jepret beberapa foto berturut-turut sebelum tutup
    - **"Galeri/File"** — cara lama, buka galeri atau file manager biasa

    Total foto otomatis dihitung dan tampil sebagai ringkasan (misal **"Total 15 pcs pakaian difoto"**) — muncul di form saat mengambil foto, kartu pesanan di tab Cucian, dan semua jenis struk (bukan deteksi jenis pakaian otomatis, cuma jumlah keseluruhan)

    Kalau pesanan punya nomor pelacakan, link pantau otomatis **ikut terkirim bersama struk** (baik lewat teks maupun gambar) — tidak perlu kirim terpisah. Pelanggan buka link itu (tanpa perlu login/install apa pun) untuk lihat status pesanan real-time dan foto barangnya

    > Catatan: fitur "Kamera (pilih perangkat)" butuh izin akses kamera dari browser (akan muncul pop-up izin saat pertama kali dipakai). Nama kamera eksternal baru muncul jelas (misal "USB Webcam") setelah izin diberikan — sebelum itu mungkin cuma tertulis "Kamera 1", "Kamera 2".

    > Catatan penyimpanan: foto disimpan di Cloudinary (kuota gratis 25 credit/bulan). Ada fitur **pembersihan otomatis** (lihat bagian "0c. Setup Pembersihan Foto Otomatis") — foto dari pesanan yang sudah Selesai lebih dari 10 hari otomatis dihapus, supaya kuota tidak terus menumpuk seiring usaha berkembang.

> Catatan teknis: untuk pengiriman **struk gambar**, link pantau disertakan sebagai "keterangan/caption" lewat fitur share bawaan HP. Beberapa versi WhatsApp menampilkan caption ini otomatis di bawah gambar, sebagian lain mungkin tidak menampilkannya. Kalau linknya tidak muncul di WA, gunakan opsi **"Kirim sebagai Teks Saja"** sebagai cadangan — di situ link selalu ikut karena bagian dari teks pesan biasa.

11. Tab **Cucian** sekarang punya 3 tab terpisah dengan jumlah pesanan di tiap tab: **Belum Diproses → Sedang Diproses → Selesai**. Update status dengan tombol "Tandai" di tiap kartu pesanan
    - Untuk tab Belum Diproses & Sedang Diproses, ada **pengurutan**: deadline terdekat/terlama, atau baru/lama dibuat
    - Ada **pencarian** di atas (cari berdasarkan No. Struk, nama pelanggan, atau nomor WA)
    - Tiap pesanan kiloan yang belum selesai punya **indikator sisa waktu** berwarna (hijau = aman, kuning = mendekati deadline, merah = terlambat) berdasarkan estimasi durasi yang di-set di Harga Layanan
    - Tampilan menyesuaikan ukuran layar: 1 kolom di HP, 2 kolom di tablet, 3 kolom di laptop/layar lebar
12. **Notifikasi siap diambil**: begitu status ditandai **"Selesai"**, langsung muncul pop-up untuk kirim notifikasi WA ke pelanggan (1 tombol, pesan sudah siap dengan nada bersemangat + link pantau)
13. Halaman pantau yang dibuka pelanggan **otomatis memperbarui status setiap 20 detik** — kalau dibiarkan terbuka, pelanggan langsung melihat perubahan status tanpa perlu refresh manual
14. **Beranda** sekarang punya kartu **"Analisis Pendapatan Layanan"** — filter waktu (Hari Ini/7 Hari/Bulan Ini/Tahun Ini), rincian omzet & jumlah transaksi per jenis (Kiloan/Satuan/Self-Service) plus Total Omzet, dan grafik tren 6 bulan terakhir untuk melihat jenis layanan mana yang tumbuh paling baik
15. **Klaim Promo**: di tab **Member**, kalau pelanggan sudah mencapai target (akumulasi kg kiloan atau 10x kunjungan self-service), muncul tombol **"Klaim"** — dipencet saat pelanggan datang mau ambil gratisannya, progress otomatis mulai lagi dari 0 setelah diklaim (tidak perlu bikin transaksi baru untuk ini)
16. **Owner**: buka menu **Laporan → Aset Tetap** untuk mendaftarkan mesin cuci, dryer, dan peralatan lain. Isi jenis, merk, harga perolehan, tanggal beli, dan umur manfaat (otomatis terisi estimasi umum per jenis, bisa disesuaikan) — sistem otomatis menghitung **penyusutan per bulan** (metode garis lurus), **akumulasi penyusutan**, dan **nilai buku**, yang otomatis muncul sebagai **Beban Penyusutan** di Laba Rugi dan **Akumulasi Penyusutan** (pengurang nilai aset) di Neraca setiap bulan — tidak perlu input manual tiap bulan

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
