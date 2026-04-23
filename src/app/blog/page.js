import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function BlogAkademik() {
  return (
    <main className="min-h-screen bg-white text-black font-sans antialiased">
      <Navbar />

      {/* Menyesuaikan padding atas (pt) dan bawah (pb) untuk HP dan layar besar */}
      <section className="pt-24 md:pt-32 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto pb-16 md:pb-24">
        
        {/* Header Halaman */}
        <div className="mb-10 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 tracking-tight">Blog Akademik</h1>
          <p className="text-gray-600 text-base md:text-lg">
            Kumpulan tugas, paper, dan eksplorasi materi perkuliahan.
          </p>
        </div>

        {/* Kategori: Mata Kuliah Internet of Things */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 border-b border-gray-200 pb-2">
            Mata Kuliah: Internet of Things (IoT)
          </h2>
          
          {/* Grid disesuaikan: 1 kolom di HP, 2 kolom di tablet (md), dan 3 kolom di desktop (lg) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card Tugas 1 - Pertemuan 1 */}
            <Link href="/blog/iot-pertemuan-1" className="block group h-full">
              <div className="p-5 md:p-6 bg-gray-50 border border-gray-100 rounded-xl transition-all group-hover:border-black group-hover:shadow-md flex flex-col h-full">
                <div className="text-xs md:text-sm text-gray-500 mb-2">Tugas 1 • Internet of Things</div>
                <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:underline flex-grow">
                  RANGKUMAN MATERI PERTEMUAN 1 MATA KULIAH INTERNET OF THINGS : “EKOSISTEM TERHUBUNG : RANGKUMAN ANALISIS EVOLUSI KOMUNIKASI MACHINE-TO-MACHINE MENUJU INTERNET OF THINGS”
                </h3>
                <p className="text-gray-600 text-sm mt-auto">
                  Paper rangkuman materi dari pertemuan 1 mata kuliah IoT, beserta sumber referensinya.
                </p>
              </div>
            </Link>

            {/* Card Tugas 1 - Pertemuan 2 */}
            <Link href="/blog/iot-pertemuan-2" className="block group h-full">
              <div className="p-5 md:p-6 bg-gray-50 border border-gray-100 rounded-xl transition-all group-hover:border-black group-hover:shadow-md flex flex-col h-full">
                <div className="text-xs md:text-sm text-gray-500 mb-2">Tugas 1 • Internet of Things</div>
                <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:underline flex-grow">
                  RANGKUMAN MATERI PERTEMUAN 2 MATA KULIAH INTERNET OF THINGS : “PERSPEKTIF, RANTAI NILAI, DAN STRUKTUR INTERNET OF THINGS”
                </h3>
                <p className="text-gray-600 text-sm mt-auto">
                  Paper rangkuman materi dari pertemuan 2 mata kuliah IoT, beserta sumber referensinya.
                </p>
              </div>
            </Link>

            {/* Card Tugas 1 - Pertemuan 3 */}
            <Link href="/blog/iot-pertemuan-3" className="block group h-full">
              <div className="p-5 md:p-6 bg-gray-50 border border-gray-100 rounded-xl transition-all group-hover:border-black group-hover:shadow-md flex flex-col h-full">
                <div className="text-xs md:text-sm text-gray-500 mb-2">Tugas 1 • Internet of Things</div>
                <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:underline flex-grow">
                  RANGKUMAN MATERI PERTEMUAN 3 MATA KULIAH INTERNET OF THINGS : “EVOLUSI PARADIGMA KOMUNIKASI & DAMPAK MAKROEKONOMI EKOSISTEM IOT”
                </h3>
                <p className="text-gray-600 text-sm mt-auto">
                  Paper rangkuman materi dari pertemuan 3 mata kuliah IoT, beserta sumber referensinya.
                </p>
              </div>
            </Link>

            {/* Card Tugas 2 - Pertemuan 4 */}
            <Link href="/blog/iot-pertemuan-4" className="block group h-full">
              <div className="p-5 md:p-6 bg-gray-50 border border-gray-100 rounded-xl transition-all group-hover:border-black group-hover:shadow-md flex flex-col h-full">
                <div className="text-xs md:text-sm text-gray-500 mb-2">Tugas 2 • Internet of Things</div>
                <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:underline flex-grow">
                  RANGKUMAN MATERI PERTEMUAN 4 MATA KULIAH INTERNET OF THINGS : "PERANGKAT KERAS, REFERENSI MODEL DAN PROSES BISNIS INTERNET OF THINGS (IOT)"
                </h3>
                <p className="text-gray-600 text-sm mt-auto">
                  Paper rangkuman materi dari pertemuan 4 mata kuliah IoT, beserta sumber referensinya.
                </p>
              </div>
            </Link>

            {/* Card Tugas 2 - Pertemuan 5 */}
            <Link href="/blog/iot-pertemuan-5" className="block group h-full">
              <div className="p-5 md:p-6 bg-gray-50 border border-gray-100 rounded-xl transition-all group-hover:border-black group-hover:shadow-md flex flex-col h-full">
                <div className="text-xs md:text-sm text-gray-500 mb-2">Tugas 2 • Internet of Things</div>
                <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:underline flex-grow">
                  RANGKUMAN MATERI PERTEMUAN 5 MATA KULIAH INTERNET OF THINGS : "EKSPLORASI BLOK SEKTOR DAN ARSITEKTUR INTERNET OF THINGS (ETSI, ITU-T, IWF, IETF)"
                </h3>
                <p className="text-gray-600 text-sm mt-auto">
                  Paper rangkuman materi dari pertemuan 5 mata kuliah IoT, beserta sumber referensinya.
                </p>
              </div>
            </Link>

            {/* Card Tugas 2 - Pertemuan 6 */}
            <Link href="/blog/iot-pertemuan-6" className="block group h-full">
              <div className="p-5 md:p-6 bg-gray-50 border border-gray-100 rounded-xl transition-all group-hover:border-black group-hover:shadow-md flex flex-col h-full">
                <div className="text-xs md:text-sm text-gray-500 mb-2">Tugas 2 • Internet of Things</div>
                <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:underline flex-grow">
                  RANGKUMAN MATERI PERTEMUAN 6 MATA KULIAH INTERNET OF THINGS : "ARSITEKTUR DAN ENAM MODEL UTAMA INTERNET OF THINGS (IOT) DALAM EKOSISTEM INDUSTRI 4.0"
                </h3>
                <p className="text-gray-600 text-sm mt-auto">
                  Paper rangkuman materi dari pertemuan 6 mata kuliah IoT, beserta sumber referensinya.
                </p>
              </div>
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
}