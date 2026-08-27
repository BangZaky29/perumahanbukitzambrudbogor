import type { Article } from "../types/article.types";

/**
 * Article data — static for now, designed to be easily swapped with CMS API later.
 * Replace this file's export with fetch calls when migrating to headless CMS.
 *
 * Content uses a lightweight markup format:
 * - ## Heading 2
 * - ### Heading 3
 * - - Unordered list item
 * - 1. Ordered list item
 * - > Blockquote
 * - **bold text**
 * - Empty line = paragraph separator
 */
export const articles: Article[] = [
  {
    id: "1",
    slug: "tips-lolos-kpr-subsidi-karyawan-baru",
    title: "Panduan Lengkap Membeli Rumah Subsidi dengan KPR: Syarat, Proses, dan Tips Anti Gagal",
    excerpt:
      "Punya rumah sendiri masih jadi impian banyak keluarga muda. Simak panduan lengkap KPR subsidi, dari syarat hingga tips agar pengajuanmu lolos.",
    coverImage: "/images/articles/tips-kpr.jpg",
    category: "tips-kpr",
    author: "Tim Bukit Zamrud",
    publishedAt: "2026-08-01",
    readingTimeMinutes: 7,
    content: `Punya rumah sendiri masih jadi impian banyak keluarga muda di Indonesia, apalagi di tengah harga properti yang terus naik setiap tahun. Untungnya, pemerintah menghadirkan solusi lewat program **rumah subsidi**, yaitu hunian yang harganya disubsidi negara agar lebih terjangkau bagi masyarakat berpenghasilan rendah (MBR).

Salah satu jalur pembiayaan paling populer untuk memiliki rumah subsidi adalah **KPR (Kredit Pemilikan Rumah) bersubsidi**, khususnya skema KPR FLPP (Fasilitas Likuiditas Pembiayaan Perumahan).

Kalau kamu sedang mempertimbangkan untuk mengajukan KPR subsidi, artikel ini akan membahas tuntas apa itu rumah subsidi, siapa saja yang berhak, syarat pengajuan, hingga tips agar pengajuanmu lolos dengan lancar.

## Apa Itu Rumah Subsidi?

Rumah subsidi adalah program perumahan yang dibangun khusus untuk masyarakat berpenghasilan rendah, dengan harga jual dan suku bunga KPR yang diatur langsung oleh pemerintah melalui Kementerian PUPR. Karena disubsidi, harga rumah jenis ini jauh lebih murah dibanding rumah komersial di lokasi yang sama, dengan cicilan yang jauh lebih ringan dan tetap (fixed) selama masa tenor.

## Keuntungan Membeli Rumah Subsidi lewat KPR

- **Uang muka ringan**, bahkan ada skema yang memungkinkan DP mulai dari 1%.
- **Suku bunga tetap dan rendah**, umumnya sekitar 5% per tahun sepanjang tenor kredit, jauh di bawah bunga KPR komersial.
- **Tenor panjang**, bisa mencapai 20 tahun, sehingga cicilan bulanan lebih terjangkau.
- **Bebas PPN** untuk rumah dengan harga di bawah batas yang ditentukan pemerintah.
- **Proses lebih terstruktur** karena mengikuti regulasi resmi dari PUPR dan bank penyalur.

## Siapa yang Berhak Mengajukan KPR Subsidi?

Tidak semua orang bisa mengajukan KPR subsidi. Berikut syarat umum yang perlu dipenuhi:

1. **WNI** dan sudah berusia minimal 21 tahun atau sudah menikah.
2. **Belum pernah memiliki rumah** dan belum pernah menerima subsidi perumahan dari pemerintah sebelumnya.
3. **Penghasilan maksimal** sesuai ketentuan yang berlaku (batas penghasilan diperbarui berkala oleh PUPR, jadi pastikan cek info terbaru sebelum mengajukan).
4. **Memiliki NPWP** dan melaporkan SPT Tahunan PPh bagi yang sudah wajib pajak.
5. **Masa kerja/usaha minimal 1 tahun**, sebagai bukti penghasilan yang stabil.

## Dokumen yang Perlu Disiapkan

- Fotokopi KTP, KK, dan surat nikah (bagi yang sudah menikah)
- Slip gaji atau surat keterangan penghasilan
- NPWP dan bukti lapor SPT
- Fotokopi rekening koran/tabungan 3 bulan terakhir
- Surat pernyataan belum memiliki rumah

## Tips Agar Pengajuan KPR Subsidi Lolos

1. **Jaga rekam jejak keuangan (BI Checking) tetap bersih.** Hindari tunggakan cicilan atau kartu kredit yang macet.
2. **Siapkan dana darurat untuk biaya-biaya di luar DP**, seperti biaya notaris, provisi bank, dan asuransi.
3. **Pilih pengembang (developer) yang sudah bekerja sama resmi dengan bank penyalur KPR FLPP**, agar proses lebih cepat dan minim kendala administrasi.
4. **Pastikan penghasilan tercatat rapi**, terutama bagi pekerja lepas atau wiraswasta — gunakan rekening khusus untuk mencatat pemasukan usaha.
5. **Konsultasikan simulasi cicilan** dengan pihak marketing sebelum tanda tangan, agar tidak salah hitung soal kemampuan bayar bulanan.

## Kenapa Lokasi Juga Penting?

Selain soal harga dan skema pembiayaan, lokasi hunian subsidi juga sangat menentukan kenyamanan jangka panjang. Idealnya, pilih perumahan subsidi yang aksesnya mudah dijangkau dari pusat kota atau jalur utama, dekat fasilitas umum seperti pasar, sekolah, dan layanan kesehatan, tapi tetap menawarkan suasana yang tenang untuk keluarga.

**Bukit Zamrud**, perumahan subsidi yang berlokasi di Tegal Waru, Ciampea, Bogor, hadir sebagai salah satu pilihan hunian subsidi yang mengusung konsep nyaman untuk keluarga muda dengan akses yang strategis dari area Bogor. Bagi kamu yang sedang mencari rumah pertama dengan skema KPR subsidi, Bukit Zamrud bisa jadi salah satu opsi yang layak dipertimbangkan.

> Ingin tahu lebih lanjut soal unit, harga, dan simulasi cicilan di Bukit Zamrud? Hubungi tim pemasaran kami untuk konsultasi lebih lanjut.`,
  },
  {
    id: "2",
    slug: "flpp-vs-kpr-non-subsidi",
    title: "FLPP vs KPR Non-Subsidi: Mana yang Cocok untuk Rumah Pertamamu?",
    excerpt:
      "Pahami perbedaan KPR FLPP dan KPR komersial agar kamu bisa memilih skema pembiayaan yang tepat untuk rumah pertama.",
    coverImage: "/images/articles/flpp-vs-nonsubsidi.jpg",
    category: "panduan-subsidi",
    author: "Tim Bukit Zamrud",
    publishedAt: "2026-08-05",
    readingTimeMinutes: 7,
    content: `Saat memutuskan untuk membeli rumah pertama, salah satu keputusan paling krusial adalah memilih skema pembiayaan yang tepat. Dua opsi paling umum di Indonesia adalah **KPR FLPP (Fasilitas Likuiditas Pembiayaan Perumahan)** dan **KPR Non-Subsidi (Komersial)**. Keduanya punya kelebihan dan keterbatasan masing-masing, tergantung profil keuangan dan kebutuhan kamu.

Artikel ini akan mengupas tuntas perbedaan keduanya agar kamu bisa mengambil keputusan yang tepat.

## Apa Itu KPR FLPP?

KPR FLPP adalah program kredit pemilikan rumah yang mendapat dukungan dari pemerintah melalui Kementerian PUPR. Tujuannya adalah membantu **Masyarakat Berpenghasilan Rendah (MBR)** agar bisa memiliki rumah layak huni dengan cicilan yang terjangkau.

### Ciri-Ciri KPR FLPP

- Suku bunga **tetap (fixed)** sepanjang tenor, umumnya sekitar **5% per tahun**
- Tenor kredit hingga **20 tahun**
- Uang muka (DP) mulai dari **1%** dari harga rumah
- **Bebas PPN** untuk rumah di bawah batas harga tertentu
- Harga rumah dibatasi oleh plafon yang ditetapkan pemerintah
- Hanya untuk **rumah pertama** — belum pernah memiliki rumah sebelumnya

## Apa Itu KPR Non-Subsidi (Komersial)?

KPR Non-Subsidi adalah kredit pemilikan rumah yang sepenuhnya dikelola oleh bank komersial tanpa dukungan subsidi pemerintah. Skema ini lebih fleksibel dalam hal pilihan properti, tapi biaya keseluruhannya cenderung lebih tinggi.

### Ciri-Ciri KPR Non-Subsidi

- Suku bunga **bisa floating** (mengikuti pasar) setelah periode fix awal
- DP umumnya **10–20%** dari harga rumah
- Tidak ada batasan harga rumah — bisa untuk properti apapun
- Tenor bervariasi, umumnya **5–25 tahun**
- PPN dan biaya lainnya ditanggung pembeli
- Bisa untuk rumah **kedua, ketiga**, atau investasi

## Perbandingan Langsung: FLPP vs Non-Subsidi

Berikut ringkasan perbedaan utama antara kedua skema:

- **Suku Bunga**: FLPP tetap ~5%/tahun vs Non-Subsidi bisa 7-12%/tahun (floating)
- **DP Minimal**: FLPP mulai dari 1% vs Non-Subsidi 10-20%
- **Tenor**: FLPP hingga 20 tahun vs Non-Subsidi 5-25 tahun
- **Plafon Harga**: FLPP dibatasi pemerintah vs Non-Subsidi tidak ada batasan
- **PPN**: FLPP bebas PPN vs Non-Subsidi dikenakan PPN
- **Syarat Kepemilikan**: FLPP hanya rumah pertama vs Non-Subsidi bisa rumah ke-2, ke-3
- **Target Pengguna**: FLPP untuk MBR vs Non-Subsidi untuk semua kalangan

## Kapan Sebaiknya Pilih KPR FLPP?

KPR FLPP cocok untukmu jika:

1. **Penghasilan di bawah batas MBR** yang ditetapkan pemerintah
2. **Belum pernah memiliki rumah** dan ini adalah pembelian pertama
3. **Ingin cicilan tetap dan ringan** selama masa kredit
4. **Budget terbatas untuk DP** — skema 1% sangat membantu
5. **Mencari rumah di kawasan berkembang** seperti pinggiran kota besar

## Kapan Sebaiknya Pilih KPR Non-Subsidi?

KPR Non-Subsidi lebih cocok jika:

1. **Penghasilan sudah melebihi batas MBR** sehingga tidak memenuhi syarat FLPP
2. **Ingin membeli rumah dengan harga di atas plafon subsidi**
3. **Mencari rumah di lokasi premium** atau tipe rumah yang lebih besar
4. **Sudah memiliki rumah** dan ingin membeli properti tambahan
5. **Memiliki DP yang cukup besar** untuk mendapatkan rate yang lebih baik

## Tips Memilih Skema yang Tepat

1. **Hitung kemampuan finansial terlebih dahulu** — gunakan kalkulator KPR untuk simulasi cicilan bulanan
2. **Cek apakah kamu memenuhi syarat FLPP** — jika ya, manfaatkan kesempatan ini karena subsidinya sangat menguntungkan
3. **Bandingkan total biaya selama tenor**, bukan hanya cicilan bulanan — suku bunga tetap FLPP bisa menghemat puluhan juta rupiah dibanding bunga floating
4. **Pertimbangkan lokasi dan nilai investasi** — rumah subsidi di kawasan berkembang punya potensi kenaikan nilai yang signifikan
5. **Konsultasikan dengan tim marketing perumahan** yang bisa membantu simulasi kedua skema

## Kesimpulan

Jika kamu adalah pekerja muda atau keluarga baru dengan penghasilan di kisaran UMR dan belum memiliki rumah, **KPR FLPP adalah pilihan terbaik** karena menawarkan suku bunga paling rendah dan stabil dengan DP yang sangat ringan. Jangan tunda terlalu lama karena kuota FLPP setiap tahun terbatas.

**Bukit Zamrud** di Tegal Waru, Ciampea, Bogor, menyediakan unit rumah subsidi yang bisa diakses melalui skema KPR FLPP dengan proses yang sudah terstruktur bersama bank penyalur resmi.

> Masih bingung pilih skema yang mana? Konsultasikan langsung dengan tim pemasaran Bukit Zamrud — kami bantu simulasikan kedua opsi sesuai kondisi finansialmu.`,
  },
  {
    id: "3",
    slug: "panduan-dokumen-kpr-subsidi-2026",
    title: "Cara Mengecek Legalitas Perumahan Sebelum Membeli: Panduan Aman Anti Tertipu",
    excerpt:
      "Membeli rumah bukan cuma soal harga dan lokasi, tapi juga soal legalitas. Pahami dokumen yang wajib dicek agar terhindar dari penipuan.",
    coverImage: "/images/articles/dokumen-kpr.jpg",
    category: "panduan-subsidi",
    author: "Tim Bukit Zamrud",
    publishedAt: "2026-08-10",
    readingTimeMinutes: 6,
    content: `Membeli rumah bukan cuma soal harga dan lokasi yang pas, tapi juga soal **legalitas**. Sayangnya, masih banyak kasus konsumen yang tertipu karena membeli rumah dari pengembang bodong atau tanah yang statusnya bermasalah. Supaya kamu nggak jadi korban berikutnya, yuk pahami dulu apa saja dokumen legalitas yang wajib dicek sebelum tanda tangan akad.

## Kenapa Legalitas Itu Penting?

Rumah dengan legalitas yang jelas melindungi kamu dari risiko sengketa lahan, penipuan, hingga kesulitan saat mengajukan KPR. Bank pun hanya akan mencairkan kredit untuk properti yang dokumennya lengkap dan sah secara hukum. Jadi, legalitas bukan cuma soal "aman", tapi juga syarat mutlak agar proses KPR-mu berjalan lancar.

## Dokumen yang Wajib Dicek

1. **Sertifikat Hak Milik (SHM) atau Hak Guna Bangunan (HGB)** — Pastikan lahan sudah bersertifikat dan atas nama pengembang yang sah, bukan masih girik atau tanah adat yang belum bersertifikat.

2. **Izin Mendirikan Bangunan (IMB) / Persetujuan Bangunan Gedung (PBG)** — Sejak aturan terbaru, IMB sudah digantikan PBG. Pastikan pengembang sudah mengurus izin ini sebelum membangun, bukan setelah rumah jadi.

3. **Site Plan yang Disahkan Pemerintah Daerah** — Site plan menunjukkan tata letak resmi perumahan, termasuk fasilitas umum seperti jalan, drainase, dan ruang terbuka hijau, yang sudah disetujui pemda setempat.

4. **Izin Lokasi dan Peruntukan Lahan** — Cek apakah lahan tersebut memang diperuntukkan sebagai kawasan perumahan sesuai Rencana Tata Ruang Wilayah (RTRW), bukan kawasan hijau atau lahan pertanian yang belum dialihfungsikan secara resmi.

5. **Sertifikat Laik Fungsi (SLF)** — Khusus untuk bangunan yang sudah jadi, SLF menandakan bangunan sudah memenuhi standar keselamatan dan layak dihuni.

## Tips Praktis Sebelum Membeli

- **Datangi langsung lokasi** dan pastikan progres pembangunan sesuai dengan yang dijanjikan di brosur.
- **Cek rekam jejak pengembang**, apakah sudah pernah menyelesaikan proyek sebelumnya dengan baik.
- **Minta salinan dokumen legal** dan jika perlu, verifikasi ke kantor pertanahan (BPN) setempat.
- **Gunakan jasa notaris/PPAT terpercaya** saat proses akad jual beli, jangan hanya mengandalkan pihak marketing.
- **Waspada harga yang terlalu murah** dari pasaran tanpa alasan yang jelas — sering jadi indikasi masalah legalitas.

## Legalitas Jadi Prioritas Utama

Membeli rumah adalah investasi jangka panjang, jadi jangan sampai tergiur promo atau harga murah tanpa memastikan legalitasnya terlebih dahulu. Rumah dengan dokumen lengkap memberi ketenangan bagi kamu dan keluarga, sekaligus memudahkan proses KPR di bank.

**Bukit Zamrud** di Tegal Waru, Ciampea, Bogor, dikembangkan dengan memperhatikan kelengkapan legalitas, mulai dari sertifikat lahan hingga perizinan bangunan, agar calon penghuni bisa membeli rumah dengan tenang dan sesuai prosedur resmi KPR subsidi.

> Ingin tahu status legalitas unit di Bukit Zamrud? Hubungi tim pemasaran kami untuk informasi lebih lengkap.`,
  },
  {
    id: "4",
    slug: "kenapa-ciampea-bogor-rumah-pertama",
    title: "Kenapa Ciampea, Bogor Jadi Kawasan Potensial untuk Investasi Properti?",
    excerpt:
      "Lokasi strategis dekat IPB, akses mudah ke pusat kota Bogor, dan harga masih terjangkau. Cari tahu alasan Ciampea jadi incaran.",
    coverImage: "/images/articles/ciampea-bogor.jpg",
    category: "gaya-hidup",
    author: "Tim Bukit Zamrud",
    publishedAt: "2026-08-15",
    readingTimeMinutes: 5,
    content: `Saat memilih rumah, banyak orang fokus pada harga dan desain, padahal **lokasi** adalah salah satu faktor paling menentukan nilai investasi properti di masa depan. Salah satu kawasan yang mulai dilirik para pencari hunian dan investor properti adalah Ciampea, Bogor — termasuk area Tegal Waru yang terus berkembang.

## Bogor: Kawasan Penyangga yang Terus Bertumbuh

Sebagai bagian dari kawasan Jabodetabek, Bogor punya peran penting sebagai kota penyangga Jakarta yang terus mengalami pertumbuhan penduduk dan pembangunan infrastruktur. Banyak keluarga muda dan pekerja yang mulai melirik Bogor sebagai alternatif tempat tinggal karena harga properti yang lebih terjangkau dibanding Jakarta, namun tetap dengan akses yang memadai.

## Kenapa Ciampea Menarik untuk Hunian dan Investasi?

1. **Harga Tanah yang Masih Kompetitif** — Dibanding kawasan Bogor kota atau area yang sudah lebih dulu berkembang, harga tanah dan properti di Ciampea relatif masih lebih terjangkau — potensi kenaikan nilainya pun cenderung lebih besar seiring perkembangan wilayah.

2. **Akses ke Kawasan Pendidikan dan Ekonomi** — Ciampea berada tidak jauh dari kawasan kampus dan pusat aktivitas ekonomi di Bogor, menjadikannya lokasi yang strategis bagi keluarga muda maupun mahasiswa yang membutuhkan hunian terjangkau.

3. **Suasana yang Masih Asri** — Berbeda dengan hunian di tengah kota yang padat, Ciampea masih menawarkan suasana yang lebih tenang dan asri — cocok untuk keluarga yang mencari kualitas hidup lebih baik tanpa meninggalkan akses ke fasilitas umum.

4. **Potensi Pengembangan Infrastruktur** — Perkembangan kawasan penyangga umumnya diikuti oleh peningkatan infrastruktur jalan dan fasilitas publik dari waktu ke waktu, yang secara langsung berdampak positif pada nilai properti di sekitarnya.

## Properti sebagai Investasi Jangka Panjang

Berbeda dengan aset lain yang nilainya bisa fluktuatif, properti dikenal sebagai instrumen investasi yang cenderung stabil dan terus meningkat nilainya dalam jangka panjang, apalagi jika dibeli di kawasan yang masih dalam tahap berkembang. Membeli rumah subsidi di kawasan seperti Ciampea bisa jadi langkah awal yang tepat, baik untuk kebutuhan tempat tinggal maupun sebagai aset masa depan.

## Timing adalah Kunci

Dalam dunia properti, ada istilah "membeli lebih awal di kawasan berkembang" sebagai salah satu strategi investasi yang cukup umum digunakan. Semakin awal kamu memiliki properti di kawasan yang sedang berkembang, semakin besar potensi selisih nilai yang bisa kamu nikmati di masa depan — baik untuk ditinggali sendiri maupun sebagai aset investasi.

**Bukit Zamrud** hadir di Tegal Waru, Ciampea, Bogor — kawasan yang menawarkan kombinasi antara harga terjangkau, suasana asri, dan potensi pertumbuhan nilai properti jangka panjang. Momen ini bisa jadi waktu yang tepat untuk mulai memiliki hunian sekaligus aset masa depan.

> Konsultasikan potensi lokasi dan unit yang tersedia di Bukit Zamrud bersama tim pemasaran kami.`,
  },
  {
    id: "5",
    slug: "cara-hitung-kemampuan-cicilan-kpr",
    title: "Gaji UMR Bisa Beli Rumah? Ini Simulasi & Tips Nabung DP untuk Milenial",
    excerpt:
      "Gaji segini, kapan bisa punya rumah sendiri? Dengan skema KPR subsidi dan strategi finansial yang tepat, rumah pertama bukan lagi mimpi.",
    coverImage: "/images/articles/hitung-cicilan.jpg",
    category: "tips-kpr",
    author: "Tim Bukit Zamrud",
    publishedAt: "2026-08-20",
    readingTimeMinutes: 6,
    content: `"Gaji segini, kapan bisa punya rumah sendiri?" — pertanyaan ini mungkin sering terlintas di kepala kamu, terutama kalau penghasilan masih di kisaran UMR. Kabar baiknya, dengan skema KPR subsidi dan strategi finansial yang tepat, memiliki rumah pertama bukan lagi mimpi yang jauh.

## Kenapa Milenial Perlu Mikir Rumah Lebih Awal?

Harga properti cenderung naik setiap tahun, sementara skema KPR subsidi punya batas plafon penghasilan tertentu. Artinya, semakin cepat kamu mengambil keputusan, semakin besar peluang mendapatkan rumah dengan cicilan yang jauh lebih ringan dibanding menunggu harga makin tinggi.

## Simulasi Sederhana: Gaji UMR vs Cicilan KPR Subsidi

Sebagai gambaran umum (angka bisa berbeda tergantung kebijakan bank dan lokasi):

- Cicilan KPR subsidi biasanya dirancang agar tidak lebih dari **30% dari penghasilan bulanan**.
- Dengan suku bunga tetap sekitar **5% per tahun** dan tenor hingga **20 tahun**, cicilan bulanan rumah subsidi umumnya jauh lebih terjangkau dibanding kontrak rumah/apartemen di kota besar.
- Semakin panjang tenor yang dipilih, semakin kecil cicilan bulanan, meski total bunga yang dibayar akan lebih besar.

> Untuk simulasi yang akurat sesuai penghasilanmu, sebaiknya konsultasikan langsung dengan bank penyalur atau tim marketing perumahan, karena setiap kasus punya perhitungan berbeda.

## Strategi Nabung DP ala Milenial

1. **Terapkan metode 50-30-20** — Alokasikan 50% penghasilan untuk kebutuhan pokok, 30% untuk keinginan, dan 20% untuk tabungan/investasi — termasuk dana DP rumah.

2. **Buka rekening terpisah khusus DP rumah** — Memisahkan rekening membantu kamu menghindari godaan memakai uang tabungan untuk kebutuhan lain.

3. **Manfaatkan autodebet tabungan** — Setting otomatis di awal bulan begitu gajian, supaya menabung jadi prioritas, bukan sisa dari pengeluaran.

4. **Kurangi cicilan konsumtif** — Cicilan gadget, paylater, atau kartu kredit yang menumpuk bisa menurunkan skor kredit dan mempersulit pengajuan KPR.

5. **Cari sumber penghasilan tambahan** — Freelance, jualan online, atau side hustle bisa mempercepat proses menabung untuk uang muka.

## Manfaatkan Skema DP Ringan

Beberapa program rumah subsidi menawarkan skema DP yang sangat ringan, bahkan mulai dari **1% dari harga rumah**. Ini jadi angin segar bagi milenial yang baru mulai bekerja dan belum punya tabungan besar, karena beban di awal jauh lebih kecil dibanding skema KPR komersial pada umumnya.

## Rumah Pertama, Investasi Jangka Panjang

Memiliki rumah sendiri di usia muda bukan cuma soal gengsi, tapi juga strategi finansial jangka panjang. Cicilan tetap setiap bulan jauh lebih terprediksi dibanding harga sewa yang terus naik, dan di akhir tenor, rumah tersebut sepenuhnya jadi aset milikmu.

Dengan skema KPR subsidi dan DP ringan, **Bukit Zamrud** di Tegal Waru, Ciampea, Bogor, dirancang untuk membantu para pekerja muda dan milenial mewujudkan rumah pertama tanpa perlu menunggu penghasilan besar.

> Yuk simulasikan kemampuan cicilanmu bersama tim pemasaran Bukit Zamrud.`,
  },
  {
    id: "6",
    slug: "checklist-serah-terima-kunci-rumah-subsidi",
    title: "Dekorasi Rumah Subsidi Biar Terasa Premium, Modal Kreatif Bukan Mahal",
    excerpt:
      "Siapa bilang rumah subsidi nggak bisa tampil estetik? Dengan sentuhan tepat, rumah mungil pun bisa terasa hangat dan berkelas.",
    coverImage: "/images/articles/serah-terima.jpg",
    category: "berita-properti",
    author: "Tim Bukit Zamrud",
    publishedAt: "2026-08-25",
    readingTimeMinutes: 6,
    content: `Siapa bilang rumah subsidi nggak bisa tampil estetik dan nyaman? Dengan sentuhan yang tepat, rumah tipe mungil pun bisa terasa hangat, rapi, bahkan berkelas — tanpa perlu merogoh kocek dalam-dalam. Kuncinya ada di pemilihan warna, tata ruang, dan detail kecil yang bikin beda.

## Mainkan Warna Netral dan Earthy Tone

Warna dinding jadi fondasi utama suasana rumah. Pilih warna-warna netral seperti putih gading, abu muda, atau earthy tone seperti terracotta dan sage green untuk kesan hangat dan minimalis modern. Warna netral juga membuat ruangan terasa lebih luas — trik penting untuk rumah dengan luas terbatas.

## Manfaatkan Furnitur Multifungsi

Untuk rumah tipe 30/36, furnitur multifungsi adalah kunci efisiensi ruang. Beberapa ide yang bisa dicoba:

- Tempat tidur dengan laci penyimpanan di bawahnya
- Meja lipat yang bisa dilipat saat tidak digunakan
- Rak dinding sebagai pengganti lemari besar
- Sofa bed untuk ruang tamu sekaligus ruang tidur tamu

## Maksimalkan Cahaya Alami

Buka tirai di siang hari dan gunakan gorden bahan tipis agar cahaya matahari tetap masuk. Cahaya alami membuat ruangan terasa lebih segar, hemat listrik, dan memberi kesan "mahal" tanpa biaya tambahan.

## Tambahkan Elemen Hijau

Tanaman hias kecil seperti monstera mini, lidah mertua, atau sirih gading bisa jadi aksen premium yang murah meriah. Selain mempercantik ruangan, tanaman juga membantu menjaga kualitas udara di dalam rumah.

## Detail Kecil yang Bikin Beda

- Ganti gagang pintu dan lampu dengan model minimalis modern
- Gunakan karpet kecil untuk mempertegas area duduk
- Tambahkan cermin besar untuk memberi ilusi ruang lebih luas
- Rapikan kabel-kabel elektronik agar ruangan terlihat lebih bersih

## Gaya Hidup Produktif di Rumah Sendiri

Rumah bukan cuma tempat istirahat, tapi juga ruang untuk membangun rutinitas yang lebih baik. Sudut kecil di rumah bisa disulap jadi meja kerja mini untuk WFH, area olahraga ringan, atau pojok baca yang nyaman — semua bisa dilakukan bertahap sesuai budget, tanpa harus renovasi besar-besaran di awal.

## Rumah Sederhana, Kualitas Hidup Tidak Sederhana

Rumah subsidi memang punya keterbatasan luas, tapi bukan berarti kualitas hidup di dalamnya ikut terbatas. Dengan sedikit kreativitas dan perencanaan, rumah mungil bisa terasa nyaman, estetik, dan mencerminkan gaya hidup penghuninya.

Unit-unit di **Bukit Zamrud**, Tegal Waru, Ciampea, Bogor, dirancang dengan tata ruang yang efisien sehingga mudah dikembangkan sesuai gaya dan kebutuhan penghuni — cocok untuk kamu yang ingin memulai rumah pertama dengan sentuhan personal.

> Lihat contoh unit dan denah rumah di Bukit Zamrud bersama tim pemasaran kami.`,
  },
];

/**
 * Get all articles, optionally filtered by category.
 */
export function getArticles(category?: string): Article[] {
  if (!category || category === "semua") {
    return articles;
  }
  return articles.filter((a) => a.category === category);
}

/**
 * Get a single article by slug.
 */
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
