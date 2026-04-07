import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function BlogAkademik() {
  return (
    <main className="min-h-screen bg-white text-black font-sans antialiased">
      <Navbar />

      <section className="pt-32 px-4 max-w-4xl mx-auto pb-24">
        {/* Header Halaman */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">Blog Akademik</h1>
          <p className="text-gray-600 text-lg">
            Kumpulan tugas, paper, dan eksplorasi materi perkuliahan.
          </p>
        </div>

        {/* Kategori: Mata Kuliah Internet of Things */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 pb-2">
            Mata Kuliah: Internet of Things (IoT)
          </h2>
          
          <div className="grid gap-6">
            
            {/* Card Tugas 1 - Pertemuan 1 */}
            <Link href="/blog/iot-pertemuan-1" className="block group">
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl transition-all group-hover:border-black group-hover:shadow-md">
                <div className="text-sm text-gray-500 mb-2">Tugas 1 • Pertemuan 1</div>
                <h3 className="text-xl font-bold mb-2 group-hover:underline">
                  Pengantar dan Konsep Dasar Internet of Things
                </h3>
                <p className="text-gray-600 text-sm">
                  Analisa materi pertemuan pertama beserta sumber referensi pendukung.
                </p>
              </div>
            </Link>

            {/* Card Tugas 1 - Pertemuan 2 */}
            <Link href="/blog/iot-pertemuan-2" className="block group">
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl transition-all group-hover:border-black group-hover:shadow-md">
                <div className="text-sm text-gray-500 mb-2">Tugas 1 • Pertemuan 2</div>
                <h3 className="text-xl font-bold mb-2 group-hover:underline">
                  Arsitektur dan Ekosistem IoT
                </h3>
                <p className="text-gray-600 text-sm">
                  Analisa materi pertemuan kedua beserta sumber referensi pendukung.
                </p>
              </div>
            </Link>

            {/* Card Tugas 1 - Pertemuan 3 */}
            <Link href="/blog/iot-pertemuan-3" className="block group">
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl transition-all group-hover:border-black group-hover:shadow-md">
                <div className="text-sm text-gray-500 mb-2">Tugas 1 • Pertemuan 3</div>
                <h3 className="text-xl font-bold mb-2 group-hover:underline">
                  Perangkat Keras dan Sensor pada IoT
                </h3>
                <p className="text-gray-600 text-sm">
                  Analisa materi pertemuan ketiga beserta sumber referensi pendukung.
                </p>
              </div>
            </Link>
            
            {/* Catatan: Kamu bisa melakukan copy-paste blok <Link> di atas untuk Pertemuan 4, 5, dan 6 sesuai Tugas 2 */}

          </div>
        </div>
      </section>
    </main>
  );
}