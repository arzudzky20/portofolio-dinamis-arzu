import Navbar from "../components/Navbar";
import { client } from "../sanity/lib/client"; // Alamat jembatan Sanity yang sudah diperbaiki

// Mengubah menjadi async function agar bisa mengambil data dari database
export default async function Home() {
  
  // Mengambil data proyek dari Sanity menggunakan bahasa query GROQ
  const projects = await client.fetch(`*[_type == "project"]{
    _id,
    title,
    description,
    "imageUrl": mainImage.asset->url,
    githubLink,
    demoLink
  }`);

  return (
    <main className="min-h-screen bg-gray-900 text-white scroll-smooth">
      <Navbar />

      {/* TAHAP 1: Home / Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center min-h-screen pt-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 mb-4">
            Halo, Saya Arzu!
          </h1>
          <p className="text-gray-400 text-lg">Frontend Developer | Computer Vision Enthusiast</p>
        </div>
      </section>

      {/* TAHAP 1: Tentang & Experience Section */}
      <section id="about" className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gray-800/50">
        <h2 className="text-3xl font-bold mb-8 text-teal-400">Tentang Saya</h2>
        <div className="max-w-3xl text-center text-gray-300 space-y-8">
          <p className="leading-relaxed">
            Saya adalah seorang pengembang yang memiliki ketertarikan mendalam pada eksplorasi antarmuka web modern dan pemrosesan citra.
          </p>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Keahlian (Skills)</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['HTML', 'CSS', 'JavaScript', 'Next.js', 'Tailwind CSS', 'OpenCV'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-gray-700 rounded-full text-sm hover:bg-teal-500 hover:text-white transition cursor-default border border-gray-600">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TAHAP 1: Proyek Section (Sekarang Terhubung dengan Database!) */}
      <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-teal-400">Karya Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
          
          {/* Mapping data asli dari Sanity */}
          {projects.map((project) => (
            <div key={project._id} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-teal-400 transition group cursor-pointer flex flex-col">
              
              {/* Menampilkan gambar asli jika ada, jika tidak tampilkan kotak kosong */}
              {project.imageUrl ? (
                <img src={project.imageUrl} alt={project.title} className="h-40 w-full object-cover rounded-lg mb-4 group-hover:opacity-80 transition" />
              ) : (
                <div className="h-40 bg-gray-700 rounded-lg mb-4 group-hover:bg-gray-600 transition flex items-center justify-center text-gray-500">
                  Tanpa Gambar
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>
              <div className="text-teal-400 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">
                Lihat Detail &rarr;
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* TAHAP 1: Kontak Section */}
      <section id="contact" className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-20 bg-gray-800/50">
        <h2 className="text-3xl font-bold mb-6 text-teal-400">Mari Berkolaborasi</h2>
        <p className="text-gray-400 mb-8 text-center max-w-md">
          Tertarik untuk mendiskusikan pengembangan web atau eksplorasi teknologi visual? Jangan ragu untuk menyapa.
        </p>
        <a href="mailto:email@domain.com" className="px-8 py-3 bg-teal-500 hover:bg-teal-400 text-gray-900 font-bold rounded-lg transition shadow-[0_0_15px_rgba(45,212,191,0.4)]">
          Kirim Email
        </a>
      </section>
    </main>
  );
}