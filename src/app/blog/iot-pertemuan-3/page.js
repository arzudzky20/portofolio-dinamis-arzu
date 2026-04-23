import Navbar from "../../../components/Navbar";
import Link from "next/link";

export default function IOTPertemuan3() {
  return (
    <main className="min-h-screen bg-white text-black font-sans antialiased">
      <Navbar />

      <section className="pt-24 md:pt-32 px-4 md:px-6 max-w-3xl mx-auto pb-16 md:pb-24">
        
        {/* Tombol Navigasi Kembali */}
        <Link href="/blog" className="text-gray-500 hover:text-black transition-colors mb-6 md:mb-10 inline-flex items-center gap-2 font-medium text-sm md:text-base">
          <span>&larr;</span> Kembali ke Blog Akademik
        </Link>

        {/* Judul Artikel */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 tracking-tight leading-tight">
            RANGKUMAN MATERI PERTEMUAN 3 MATA KULIAH INTERNET OF THINGS : “EVOLUSI PARADIGMA KOMUNIKASI & DAMPAK MAKROEKONOMI EKOSISTEM IOT”
        </h1>

        {/* Kotak Identitas Mahasiswa */}
        <div className="bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-100 mb-8 md:mb-12 shadow-sm">
          <h2 className="text-base md:text-lg font-semibold mb-3 md:mb-4 border-b border-gray-200 pb-2 text-black">Identitas Mahasiswa</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-gray-600 text-xs md:text-sm">
            <li><span className="font-medium text-gray-900 inline-block w-20">Nama</span> : Arzu Dzaky Pratama</li>
            <li><span className="font-medium text-gray-900 inline-block w-20">NIM</span> : 17230190</li>
            <li><span className="font-medium text-gray-900 inline-block w-20">Kelas</span> : 17.6A.01</li>
            <li><span className="font-medium text-gray-900 inline-block w-20">Jurusan</span> : Teknologi Informasi</li>
            <li><span className="font-medium text-gray-900 inline-block w-20">Fakultas</span> : Teknik dan Informatika</li>
          </ul>
        </div>

        {/* Tombol Unduh File Asli */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 md:mb-12 p-4 md:p-6 bg-blue-50 rounded-xl border border-blue-100 text-center sm:text-left">
          <div className="flex-grow">
            <h3 className="text-blue-900 font-semibold mb-1 text-sm md:text-base">Unduh Dokumen</h3>
            <p className="text-xs md:text-sm text-blue-700 hidden sm:block">Format .docx (Microsoft Word)</p>
          </div>
          <a 
            href="/rangkuman-iot-pertemuan-3.docx" 
            download="Rangkuman_IoT_Pertemuan3_ArzuDPratama.docx"
            className="flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95 w-full sm:w-auto justify-center text-sm md:text-base"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Download Dokumen
          </a>
        </div>

        {/* Isi Rangkuman Materi */}
        <article className="prose prose-base md:prose-lg prose-gray max-w-none text-gray-700 text-base md:text-lg">
          
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4 md:mb-6 mt-6 md:mt-8">
            I. PENDAHULUAN
            </h2>
          <p className="mb-4 md:mb-6 leading-relaxed">
            Internet of Things (IoT) adalah suatu perubahan besar dalam komunikasi di abad ke-21 yang menghubungkan berbagai alat fisik ke internet, dari peralatan rumah hingga mesin besar di pabrik. Peralihan ke koneksi digital yang sangat luas ini berfungsi sebagai pendorong utama dalam perubahan ekonomi secara global. Menurut penelitian dari lembaga McKinsey, ekosistem IoT diperkirakan akan menciptakan dampak ekonomi yang sangat besar, antara $3.9 triliun hingga $11.1 triliun setiap tahun menjelang tahun 2025. Peningkatan ekonomi ini secara langsung terjadi karena kemampuan struktur IoT yang dapat membuat kegiatan bisnis menjadi lebih efisien, terukur, dan jelas lewat pengelolaan aset yang lebih baik serta otomatisasi dalam pengolahan data operasional menjadi informasi strategis.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-black mb-4 md:mb-6 mt-8 md:mt-10">
            II. RUANG LINGKUP DAN DIMENSI BARU KONEKTIVITAS : MENUJU ERA KOMUNIKASI MENYELURUH
          </h2>
          <p className="mb-4 md:mb-6 leading-relaxed">Badan standar telekomunikasi dunia, ITU-T, telah merilis dokumen Rekomendasi Y.2060 untuk memberikan definisi yang jelas dan kerangka kerja yang serupa untuk IoT di seluruh dunia. Secara historis, model konektivitas tradisional hanya bergantung pada dua sumbu utama, yaitu waktu yang fleksibel (Koneksi Kapan Saja) dan interaksi di ruang fisik (Koneksi Di Mana Saja). Konsep IoT dengan revolusioner mengubah batasan ini dengan menambahkan dimensi ketiga yang memungkinkan komunikasi dengan berbagai objek (Komunikasi Apa Saja). Ide ini memungkinkan komunikasi langsung antara manusia dan mesin (Manusia ke Objek) serta interaksi antara benda secara mandiri (Objek ke Objek) tanpa memerlukan campur tangan manusia.</p>
          
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4 md:mb-6 mt-8 md:mt-10">
            III. PRINSIP DESAIN FUNDAMENTAL & ELEMEN PEMBENTUK EKOSISTEM IOT
          </h2>
          <p className="mb-4 md:mb-6 leading-relaxed">Arsitektur sistem IoT yang lengkap dibangun berdasarkan ide dasar yang sederhana: Objek Fisik digabungkan dengan Pengendali, Sensor, dan Aktuator, yang semuanya terhubung terus-menerus ke Internet. Struktur ini didukung oleh beberapa elemen penting yang saling bekerja sama. Pertama, adanya Kecerdasan Buatan (AI) yang mengubah alat-alat mekanik biasa menjadi alat analitik yang pintar, seperti kulkas yang dapat memesan bahan makanan secara otomatis. Kedua, konektivitas yang fleksibel memungkinkan terciptanya jaringan kecil lokal (peer-to-peer) tanpa perlu terus-menerus bergantung pada layanan telekomunikasi nasional. Selain itu, fungsi sensor sangat penting untuk terus memantau perubahan di dunia nyata seperti gerakan, tekanan, dan suhu. Semua ini menghasilkan keterlibatan aktif di mana mesin mampu memenuhi kebutuhan pengguna secara proaktif dengan menggunakan perangkat mikro yang memiliki kemampuan pemrosesan yang sangat baik.</p>

          <h2 className="text-xl md:text-2xl font-bold text-black mb-4 md:mb-6 mt-8 md:mt-10">
            IV. ARSITEKTUR & MODEL REFERENSI IOT : STANDAR GLOBAL ITU-T Y.2060
          </h2>
          <p className="mb-4 md:mb-6 leading-relaxed">Untuk mengelola tumpukan miliaran perangkat cerdas heterogen di lapangan, kerangka model referensi ITU-T Y.2060 menyusun arsitektur sistem secara sistematis ke dalam empat lapisan hierarkis utama.</p>
          <h3 className="text-lg md:text-xl font-bold text-black mb-3 md:mb-4 mt-6">1. Application Layer (Lapisan Aplikasi IoT): Ini merupakan lapisan interaksi teratas yang berfungsi sebagai jembatan antarmuka pengguna, mengeksekusi visualisasi, pelaporan, dan kontrol sistem (seperti dashboard e-health atau transportasi cerdas).</h3>
          <h3 className="text-lg md:text-xl font-bold text-black mb-3 md:mb-4 mt-6">2. Service Support and Application Support Layer: Lapisan penyokong beban komputasi inti di bawah antarmuka pengguna yang menyediakan kemampuan komputasi pemrosesan data umum (generik) maupun sekumpulan kemampuan khusus untuk industri tertentu (spesifik).</h3>
          <h3 className="text-lg md:text-xl font-bold text-black mb-3 md:mb-4 mt-6">3. Network Layer (Lapisan Jaringan): Infrastruktur mutlak penyedia jembatan komunikasi fisik dan nirkabel untuk pergerakan paket data, yang di dalamnya termasuk eksekusi manajemen keamanan fundamental (Otentikasi, Otorisasi, Akuntansi).</h3>
          <h3 className="text-lg md:text-xl font-bold text-black mb-3 md:mb-4 mt-6">4. Device Layer (Lapisan Perangkat Keras): Terletak pada tingkat paling dasar yang berinteraksi langsung dengan lingkungan untuk mengubah objek konvensional menjadi "Benda Virtual" melalui instrumen pemindai aktif/pasif seperti sensor, barcode, dan cip RFID.</h3>
          <p className="mb-4 md:mb-6 leading-relaxed">Dalam mengorkestrasi lapisan-lapisan ini, perangkat Gateway memegang kedudukan sangat penting di ranah pinggiran karena bertugas penuh sebagai penerjemah dari berbagai jenis protokol komunikasi yang heterogen sekaligus mengeksekusi penyaringan keamanan lokal (firewall) guna membentengi sistem dari serangan luar.</p>

          <h2 className="text-xl md:text-2xl font-bold text-black mb-4 md:mb-6 mt-8 md:mt-10">
            V. TRANSFORMASI BISNIS MELALUI MODEL REFERENSI LOGIS CISCO : HIERARKI 7 LAPISAN IOT
          </h2>
          <p className="mb-4 md:mb-6 leading-relaxed">Selain kerangka ITU-T, dunia bisnis yang kini ada juga mengacu pada Model Referensi Arsitektur 7 Lapisan yang dibuat oleh perusahaan jaringan besar, Cisco. Dalam pandangan filosofis, Cisco membagi operasi infrasturktur menjadi dua bagian fungsional: Domain Teknologi Operasional (OT) di Tingkat 1-3 yang mengelola data dinamis yang perlu direspon dengan cepat dalam waktu nyata, dan Domain Teknologi Informasi (IT) di Tingkat 4-7 yang berada di pusat digital untuk menganalisis data yang sudah disimpan dan tidak memerlukan respons instan.</p>
          <p className="mb-4 md:mb-6 leading-relaxed">Struktur dari tujuh tingkat ini berasal dari keberadaan pemindai fisik lingkungan (Tingkat 1), jembatan untuk pengiriman data jaringan (Tingkat 2), dan pengolahan unit komputer di batas lokal (Tingkat 3). Setelah melewati batas komputasi lokal, aliran beralih ke penyimpanan cloud pusat yang bersifat permanen (Tingkat 4), dan kemudian dilanjutkan dengan pengumpulan struktur format metadata (Tingkat 5). Di puncak tertinggi, lapisan yang menyediakan perangkat lunak untuk laporan analitik (Tingkat 6) ditawarkan agar pengguna manusia bisa membuat keputusan operasional dan merencanakan kolaborasi bisnis yang berskala besar (Tingkat 7).</p>

          <h2 className="text-xl md:text-2xl font-bold text-black mb-4 md:mb-6 mt-8 md:mt-10">
            VI. PERGESERAN PARADIGMA METODOLOGI PEMROSESAN DATA KINETIK : KOMPUTASI EDGE (FOG) VS CLOUD
          </h2>
          <p className="mb-4 md:mb-6 leading-relaxed">Dalam praktiknya, merancang arsitektur pengolahan data yang hanya terpusat di cloud menyebabkan masalah kemacetan bandwidth yang serius ketika harus mentransfer jumlah data yang sangat besar dari miliaran sensor. Contohnya adalah rekaman dari komponen pesawat komersial yang dapat mencapai 1 Terabyte per jam. Untuk menghadapi kemungkinan macet lalu lintas ini, muncul konsep Komputasi Tepi, yaitu metode pengolahan komputasi yang inovatif dan ditempatkan sedekat mungkin dengan lokasi perangkat sensor luar. Tujuan utama dari Edge Computing adalah untuk mengurangi dan mengubah aliran data mentah yang cepat menjadi paket ringkasan intelijen yang padat sebelum dikirim ke pusat komputasi cloud.</p>
          
          <div className="overflow-x-auto mb-8 rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-[600px] lg:min-w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-gray-50 text-gray-900">
                  <th className="py-3 px-4 md:py-4 md:px-6 border-b border-gray-200 font-semibold text-xs md:text-sm w-1/4">Parameter Komparasi</th>
                  <th className="py-3 px-4 md:py-4 md:px-6 border-b border-gray-200 font-semibold text-xs md:text-sm w-3/8">Paradigma Sistem Ekosistem Awan (Cloud)</th>
                  <th className="py-3 px-4 md:py-4 md:px-6 border-b border-gray-200 font-semibold text-xs md:text-sm w-3/8">Paradigma Infrastruktur Lokal Fog/Edge (Kabut/Tepi)</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-xs md:text-sm">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 md:py-4 md:px-6 border-b border-gray-100 font-medium text-gray-900">Lokasi Pusat Fasilitas</td>
                  <td className="py-3 px-4 md:py-4 md:px-6 border-b border-gray-100">Memusatkan fasilitas infrastruktur server berukuran raksasa pada instalasi titik simpul strategis berposisi sentralistik jaringan arsitektur global.</td>
                  <td className="py-3 px-4 md:py-4 md:px-6 border-b border-gray-100">Menyebarluaskan kekuatan mesin analitik ukuran sirkuit lokal fungsionalitasnya persis menempel pada area perbatasan tepi lokasi operasi benda objek luar jaringan pinggiran.</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 md:py-4 md:px-6 border-b border-gray-100 font-medium text-gray-900">Ambang Keterlambatan Tunda Transmisi (Latensi)</td>
                  <td className="py-3 px-4 md:py-4 md:px-6 border-b border-gray-100">Toleransi ketidakpastian tinggi akibat transmisi jauh lintas benua yang merentang di zona kelambatan sangat parah.</td>
                  <td className="py-3 px-4 md:py-4 md:px-6 border-b border-gray-100">Kecepatan aksi respons deterministik instan yang dipukul konstan amat sangat rendah sekali (milidetik).</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 md:py-4 md:px-6 border-b border-gray-100 font-medium text-gray-900">Dukungan Mobilitas Pergerakan Perangkat</td>
                  <td className="py-3 px-4 md:py-4 md:px-6 border-b border-gray-100">Secara arsitektur tidak diaplikasikan karena letak komputasi jauh serta terikat topologi fisik pelayan statis.</td>
                  <td className="py-3 px-4 md:py-4 md:px-6 border-b border-gray-100">Sangat adaptif dan melayani dinamika perpindahan aset benda aktif yang berpindah titik operasi area dinamis.</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 md:py-4 md:px-6 border-b border-gray-100 font-medium text-gray-900">Spesialisasi Fungsi dan Pengolahan Logikal</td>
                  <td className="py-3 px-4 md:py-4 md:px-6 border-b border-gray-100">Superior dalam manajemen rekaman historis analitis panjang dan penguasaan pergerakan model AI kelas berat yang mutlak menjamin koneksi kualitas tinggi konstan.</td>
                  <td className="py-3 px-4 md:py-4 md:px-6 border-b border-gray-100">Lincah dan gesit menanggapi impuls sinyal elektronik reaktif seketika murni dalam hitungan milidetik sehingga mesin dapat mengeksekusi pemutusan sirkuit instan.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-black mb-4 md:mb-6 mt-8 md:mt-10">
            VII. ANALISIS LANJUTAN : IMPLIKASI ARSITEKTURAL EKOSISTEM JARINGAN PADA EFEKTIVITAS FORMASI PROSES INDUSTRI STRATEGIS OPERASIONAL BERPADU
          </h2>
          <p className="mb-4 md:mb-6 leading-relaxed">Penerapan tingkat kompleksitas ini dirancang dengan logika bukan hanya untuk memenuhi imajinasi tentang "pabrik pintar" dalam siber, tetapi sebagai langkah responsif peradaban untuk mengatasi keterbatasan dari pemantauan visual manusia yang biasa di fasilitas besar. Keberadaan ekosistem komputasi IoT yang menyeluruh menciptakan hubungan yang kuat antara sektor operasional (OT) yang bekerja sama dengan sistem manajemen logika Teknologi Informasi (IT) dalam pengambilan keputusan.</p>
          <p className="mb-4 md:mb-6 leading-relaxed">Dalam praktiknya, mesin mandiri di tepi jaringan (fog) dapat mengirimkan sinyal digital ke server saat mendeteksi getaran yang tidak biasa, melindungi aset dari kemungkinan ledakan dan menghilangkan kebutuhan untuk patroli pemeriksaan visual yang melelahkan oleh manusia. Lebih lanjut dalam pengembangan logistik rantai pasok global, sistem pelacakan pasif (RFID) memungkinkan laporan tentang jutaan kontainer yang melintasi benua secara presisi dalam sekejab tanpa petugas pemeriksa, serta segera mengaktifkan mesin pendingin bila suhu mengubah stabilitas wadah kargo vaksin medis. Perubahan operasional yang benar-benar berdasarkan pengalaman ini yang menjelaskan angka valuasi kapitalistik dari lembaga McKinsey yang mencapai nilai ekonomi yang luar biasa.</p>

          <h2 className="text-xl md:text-2xl font-bold text-black mb-4 md:mb-6 mt-8 md:mt-10">
            VIII. KESIMPULAN
          </h2>
          <p className="mb-4 md:mb-6 leading-relaxed">Pada waktu ini, ekosistem presisi Internet of Things telah bergerak dari sekadar perbincangan teori di laboratorium kepada asas nyata bagi operasi infrastruktur komersial yang menghubungkan entiti tradisional dengan makhluk maya yang berfungsi secara mandiri dalam dimensi Bila-bila Masa, Di Mana Saja, dan Apa Saja. Dasar untuk pengadaptasian ini berdasarkan pada pemikiran kognitif yang memperkirakan melalui mesin analitik buatan (AI) yang bersatu dengan pemindahan gelombang mikro yang fleksibel.</p>
          <p className="mb-4 md:mb-6 leading-relaxed">Yang paling penting, inovasi besar dalam bentuk peralihan struktur dengan memindahkan beban pusat laporan dari server tradisional ke kuasa fungsional di pinggir sistem komputasi (Komputasi Edge/Fog), menunjukkan keberanian teknikal dalam menyelesaikan masalah kesesakan data dan masalah kelewatan yang sering menyerang struktur lama. Pendekatan ini berjaya membuktikan potensi nilai triliunan dolar komersial dengan mengatasi kerugian dalam kelajuan operasi, di mana banyak manfaat di masa depan masih belum diterokai sepenuhnya dan menunggu untuk diproses secara besar-besaran dalam ramalan pergerakan perniagaan dekad yang akan datang.</p>

          {/* BAGIAN DAFTAR PUSTAKA */}
          <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-gray-200">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4 md:mb-6">IX. Daftar Pustaka</h2>
            <ul className="list-decimal pl-5 space-y-2 md:space-y-3 text-gray-600 text-xs md:text-sm leading-relaxed break-words">
              <li>Slide Materi IoT Pertemuan 3 – Evolusi Paradigma Komunikasi & Dampak Makroekonomi Ekosistem IoT, 0246-P03.pdf</li>
              <li>
                <a href="https://www.itu.int/ITU-T/recommendations/rec.aspx?rec=y.2060" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                  Recommendation ITU-T Y.2060
                </a>, diakses 10 April 2026.
              </li>
              <li>
                <a href="https://www.itu.int/rec/dologin_pub.asp?lang=e&id=T-REC-Y.2060-201206-I!!PDF-E&type=items" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                  ITU-T Rec. Y.2060 (06/2012) Overview of the Internet of things
                </a>, diakses 10 April 2026.
              </li>
              <li>
                <a href="https://dig.watch/resource/recommendation-itu-t-y2060-overview-internet-thingS" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                  Overview of the internet of things (Recommendation no.Y.2060) | Digital Watch Observatory
                </a>, diakses 10 April 2026.
              </li>
              <li>
                <a href="https://www.researchgate.net/figure/TU-T-IoT-reference-model-The-Application-Layer-is-the-simplest-layer-to-explain-This_fig1_344501334" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                  ITU-T IoT reference model The Application Layer is the simplest layer... - ResearchGate
                </a>, diakses 10 April 2026.
              </li>
              <li>
                <a href="https://store.outrightcrm.com/blog/layers-of-iot-architecture/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                  7 Layers Architecture of loT: A Comprehensive Guide - OutRight Store
                </a>, diakses 10 April 2026.
              </li>
              <li>
                <a href="https://www.itu.int/en/publications/Documents/tsb/2016-InternetOfThings/files/basic-html/page27.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                  Page 27 - Unleashing the potential of the Internet of Things - ITU
                </a>, diakses 10 April 2026.
              </li>
            </ul>
          </div>

        </article>
      </section>
    </main>
  );
}