import Navbar from "../../../components/Navbar";
import Link from "next/link";

export default function IOTPertemuan4() {
  return (
    <main className="min-h-screen bg-white text-black font-sans antialiased">
      <Navbar />

      <section className="pt-32 px-4 max-w-3xl mx-auto pb-24">
        {/* Tombol Navigasi Kembali */}
        <Link
          href="/blog"
          className="text-gray-500 hover:text-black transition-colors mb-10 inline-flex items-center gap-2 font-medium"
        >
          <span>&larr;</span> Kembali ke Blog Akademik
        </Link>

        {/* Judul Artikel (Sesuai Judul PDF) */}
        <h1 className="text-2xl md:text-4xl font-bold mb-8 tracking-tight leading-tight">
          RANGKUMAN MATERI PERTEMUAN 4 MATA KULIAH INTERNET OF THINGS :
          “PERANGKAT KERAS, REFERENSI MODEL, DAN PROSES BISNIS INTERNET OF
          THINGS (IOT)”
        </h1>

        {/* Kotak Identitas Mahasiswa (Memenuhi Syarat Tugas) */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-12 shadow-sm">
          <h2 className="text-lg font-semibold mb-4 border-b border-gray-200 pb-2 text-black">
            Identitas Mahasiswa
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-gray-600 text-sm">
            <li>
              <span className="font-medium text-gray-900 inline-block w-20">
                Nama
              </span>{" "}
              : Arzu Dzaky Pratama
            </li>
            <li>
              <span className="font-medium text-gray-900 inline-block w-20">
                NIM
              </span>{" "}
              : 17230190
            </li>
            <li>
              <span className="font-medium text-gray-900 inline-block w-20">
                Kelas
              </span>{" "}
              : 17.6A.01
            </li>
            <li>
              <span className="font-medium text-gray-900 inline-block w-20">
                Jurusan
              </span>{" "}
              : Teknologi Informasi
            </li>
            <li>
              <span className="font-medium text-gray-900 inline-block w-20">
                Fakultas
              </span>{" "}
              : Teknik dan Informatika
            </li>
          </ul>
        </div>

        {/* Tombol Unduh File Asli */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
          <div className="flex-grow">
            <h3 className="text-blue-900 font-semibold mb-1">Unduh Dokumen</h3>
          </div>
          <a
            href="/rangkuman-iot-pertemuan-4.docx"
            download="Rangkuman_IoT_Pertemuan4_ArzuDPratama.docx"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95 w-full sm:w-auto justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Dokumen
          </a>
        </div>

        {/* Isi Rangkuman Materi */}
        <article className="prose prose-lg prose-gray max-w-none text-gray-700">

          <h2 className="text-2xl font-bold text-black mb-6 mt-8">
            1. PENDAHULUAN DAN LATAR BELAKANG EVOLUSI IOT
          </h2>

          <p className="mb-6 leading-relaxed">
            Dalam dinamika perkembangan teknologi informasi dan komunikasi kontemporer, kehadiran Internet of Things (IoT) telah memicu pergeseran paradigma yang sangat fundamental terkait bagaimana interaksi antara mesin, data, dan manusia dilangsungkan. Berdasarkan materi yang dikaji pada pertemuan ini, perkembangan pasar dan produk hasil ekosistem IoT telah mencapai titik akselerasi yang signifikan, khususnya sejak tahun 2019, di mana teknologi ini mulai mendisrupsi berbagai sektor konvensional.1 Secara esensial, kemunculan IoT difungsikan untuk mampu menjembatani mesin-mesin fisik di lapangan yang secara terus-menerus memproduksi data, dengan memanfaatkan teknologi sensor yang tertanam di dalamnya, lalu menghubungkannya dengan perangkat ponsel maupun perangkat pintar lainnya guna mengumpulkan informasi operasional secara terintegrasi dan real-time.
          </p>
          <p className="mb-6 leading-relaxed">
            Implementasi IoT tidak hanya berhenti pada kapabilitas pengumpulan atau pemantauan data semata. Esensi dari arsitektur ini bermuara pada pemanfaatan analitik tingkat lanjut; seluruh kumpulan data masif yang telah berhasil terhimpun melalui jaringan pada akhirnya akan dianalisa secara komprehensif dan dipakai secara strategis oleh sistem maupun manajemen manusia untuk membuat berbagai keputusan yang krusial.1 Lebih dari itu, wawasan yang dihasilkan dari analisis ini menjadi fondasi utama bagi perusahaan dan pengembang dalam upaya mengembangkan inovasi layanan terbaru atau mendesain produk-produk komersial yang jauh lebih relevan dengan kondisi serta kebutuhan spesifik yang ada di pasar.1 Oleh karena itu, pemahaman yang mendalam mengenai anatomi perangkat keras penyusunnya, model transmisi data yang menjadi referensinya, hingga struktur proses bisnis yang menopangnya menjadi sangat esensial bagi pengembangan sistem berbasis IoT di masa depan.
          </p>

          <h2 className="text-2xl font-bold text-black mb-6 mt-8">
            2. Sembilan Komponen Dasar Ekosistem Internet of Things
          </h2>

          <p className="mb-6 leading-relaxed">
            Untuk memahami bagaimana sistem IoT dapat beroperasi dan berkembang dengan pesat, kita harus menelaah elemen-elemen fundamental yang membangunnya. Dalam ekosistem arsitektur IoT modern, terdapat sembilan komponen dasar fungsional yang saling berkaitan erat dan sangat mempengaruhi tingkat perkembangan serta keandalan teknologi tersebut.1 Setiap komponen memiliki peran yang spesifik, mulai dari pengumpulan sinyal analog di lingkungan fisik hingga pada pemrosesan algoritma kecerdasan buatan di lapisan komputasi awan. Berikut adalah analisis mendetail mengenai kesembilan komponen tersebut:
          </p>
          <h3 className="text-xl text-black mb-4 mt-6">
            2.1. Perangkat Fisik dan Aktuator (Things)
          </h3>
          <p className="mb-6 leading-relaxed">
            Komponen pertama dan yang paling bersentuhan langsung dengan dunia nyata adalah Things atau benda-benda fisik. Benda-benda ini merupakan objek berwujud yang telah dilengkapi dengan modul sensor khusus yang bertugas mengumpulkan data lingkungan secara terus-menerus, yang mana data tersebut kemudian akan ditransfer melewati saluran jaringan komunikasi.1 Selain sensor sebagai elemen pengumpul informasi (input), komponen Things ini juga dilengkapi dengan unit aktuator (output). Aktuator inilah yang memberikan kemampuan atau memungkinkan sesuatu untuk dapat bertindak secara fisik di dunia nyata.
          </p>
          <p className="mb-6 leading-relaxed">
            Fungsi dan peran aktuator ini sangat luas dan bervariasi bergantung pada ruang lingkup implementasinya. Sebagai contoh praktis, aktuator dapat diperintahkan untuk menghidupkan atau mematikan lampu secara otomatis, membuka atau menutup sistem penguncian pintu, hingga melakukan penyesuaian teknis tingkat tinggi seperti menambah atau mengurangi kecepatan putaran mesin mekanik dalam sebuah lini produksi industri.1 Objek fisik yang dapat diklasifikasikan ke dalam komponen ini mencakup spektrum yang tidak terbatas pada peralatan elektronik canggih saja. Konsep ini merangkum benda sehari-hari seperti lemari es, infrastruktur publik seperti lampu jalan dan fasilitas bangunan gedung, sarana mobilitas seperti kendaraan bermotor, berbagai mesin produksi pabrik, instrumen peralatan rehabilitasi medis, dan segala sesuatu yang dapat dibayangkan untuk saling terhubung.
          </p>
          <p className="mb-6 leading-relaxed">
            Satu wawasan teknis yang sangat penting untuk digaris bawahi terkait komponen ini adalah bahwa penempatan modul sensor dalam semua kasus tidak selalu harus melekat secara fisik pada benda-benda yang bersangkutan. Dalam berbagai skenario, sensor mungkin hanya perlu difungsikan untuk memantau keadaan atau aktivitas apa yang sedang terjadi di area lingkungan terdekat dengan suatu benda pengamatan. Hal ini memberikan fleksibilitas rancang bangun yang luar biasa dalam mendesain sistem pemantauan tanpa harus membongkar struktur benda yang sedang diobservasi.
          </p>

          <h3 className="text-xl text-black mb-4 mt-6">
            2.2. Gerbang Konektivitas Lapangan (Gateways)
          </h3>
          <p className="mb-6 leading-relaxed">
            Data yang dihasilkan oleh sensor di lapangan (Things) biasanya berskala sangat masif, sering kali repetitif, dan membutuhkan rute untuk mencapai sistem pusat. Di sinilah komponen Gateways atau gerbang konektivitas mengambil peran sentral. Gateways adalah sarana krusial yang berfungsi untuk menyediakan konektivitas langsung antara benda-benda fisik di lokasi dengan bagian cloud (komputasi awan) dari sebuah solusi IoT.
          </p>
          <p className="mb-6 leading-relaxed">
            Namun, fungsi gateways jauh lebih kompleks dari sekadar router jaringan konvensional. Modul ini diaktifkan untuk memungkinkan dilakukannya tahapan prapemrosesan (preprocessing) dan pemfilteran data tingkat awal tepat sebelum data tersebut dijadwalkan untuk dipindahkan melintasi jaringan menuju ke lingkungan cloud. Tahapan penyaringan di tepi jaringan ini memiliki tujuan strategis untuk secara signifikan mengurangi volume data yang tidak relevan atau redundan, yang pada gilirannya akan sangat menghemat beban biaya untuk pemrosesan lebih lanjut dan kapasitas penyimpanan terperinci di server pusat. Selain menangani aliran data yang mengarah ke atas (uplink), gateways juga bertanggung jawab penuh dalam mentransmisikan instruksi atau perintah kontrol yang turun dari server cloud menuju ke berbagai benda di lapangan. Setelah perintah diterima dari gateways, hal-hal atau benda tersebut kemudian akan mengeksekusi instruksi fisik dengan menggunakan tenaga aktuatornya masing-masing.
          </p>

          <h3 className="text-xl text-black mb-4 mt-6">
            2.3. Gerbang Komputasi Awan (Cloud Gateway)
          </h3>
          <p className="mb-6 leading-relaxed">
            Setelah data mentah dipilah oleh gateways di tingkat lapangan, data tersebut harus masuk ke dalam infrastruktur pusat secara aman dan efisien. Cloud gateway adalah komponen yang memfasilitasi terjadinya kompresi data lebih lanjut serta menjamin terciptanya sebuah jalur transmisi data yang aman (secure transmission) antara gateway di bidang lapangan dan server cloud IoT.
          </p>
          <p className="mb-6 leading-relaxed">
            Mengingat ekosistem IoT sering kali terbangun dari berbagai perangkat keras dari vendor yang beraneka ragam, persoalan standarisasi komunikasi menjadi tantangan utama. Oleh sebab itu, komponen Cloud gateway juga memiliki kewajiban untuk memastikan terjadinya kompatibilitas yang mulus dengan berbagai ragam protokol komunikasi. Komponen antarmuka awan ini dirancang untuk dapat berkomunikasi secara adaptif dengan puluhan atau ratusan gateway lapangan yang tersebar, dengan secara cerdas menggunakan protokol-protokol yang berbeda, sangat bergantung pada jenis protokol spesifik apa yang mampu didukung oleh masing-masing gateway di lapangan tersebut. Hal ini menjadikan arsitektur cloud gateway sebagai pilar penjaga inklusivitas perangkat keras dalam sebuah sistem IoT komprehensif.
          </p>

          <h3 className="text-xl text-black mb-4 mt-6">
            2.4. Prosesor Aliran Data (Streaming Data Processor)
          </h3>
          <p className="mb-6 leading-relaxed">
            Arus data dalam jaringan IoT tidak selalu datang secara statis, melainkan mengalir bagaikan aliran sungai informasi yang terus bergerak tiada henti dalam satuan waktu real-time. Komponen Streaming data processor berfungsi untuk menengahi dan memastikan agar transisi input data yang masuk secara bergelombang ini dapat didistribusikan secara efektif menuju ke tempat penampungan akhir, yaitu danau data (data lake), maupun didistribusikan secara paralel menuju ke antarmuka aplikasi kontrol yang membutuhkan respon seketika.
          </p>
          <p className="mb-6 leading-relaxed">
            Kriteria keberhasilan utama dari implementasi prosesor aliran data ini terletak pada aspek integritas dan reliabilitas paket informasi. Komponen ini memiliki tugas absolut untuk menjamin bahwa tidak boleh ada satupun paket data penting yang meskipun sesekali dapat hilang (packet loss) atau mengalami kerusakan struktur (data corruption) selama proses transit dari ujung jaringan menuju sistem cloud.
          </p>

          <h3 className="text-xl text-black mb-4 mt-6">
            2.5. Danau Data (Data Lake)
          </h3>





<p className="mb-6 leading-relaxed"></p>
<h3 className="text-xl text-black mb-4 mt-6"></h3>
<h2 className="text-2xl font-bold text-black mb-6 mt-8"></h2>



          {/* CATATAN UNTUK ARZU: 
              Silakan copy-paste sisa teks dari PDF-mu ke dalam tag <p className="mb-6 leading-relaxed"> </p> 
              seperti contoh di atas jika kamu ingin menampilkan seluruh halamannya! 
          */}
        </article>
      </section>
    </main>
  );
}
