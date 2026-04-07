import Navbar from "../components/Navbar";
import { client } from "../sanity/lib/client"; 

export default async function Home() {
  // Mengambil data proyek dari Sanity
  const projects = await client.fetch(`*[_type == "project"]{
    _id,
    title,
    description,
    "imageUrl": mainImage.asset->url,
    githubLink,
    demoLink
  }`);

  return (
    // Mengubah background utama menjadi putih dan teks hitam
    <main className="min-h-screen bg-white text-black scroll-smooth">
      <Navbar />

      {/* TAHAP 1: Home / Hero Section (Desain Baru) */}
      <section id="home" className="relative flex flex-col items-center justify-center min-h-screen pt-20 overflow-hidden">
        
        {/* Teks Sapaan Kecil */}
        <div className="z-10 mb-4 px-4 text-center mt-10 md:mt-0">
          <p className="text-lg md:text-xl font-medium text-gray-500">
            Hallo. Saya Arzu Dzaky Pratama, dan Selamat Datang di Portofolio Saya!
          </p>
        </div>

        {/* Tipografi Raksasa */}
        <div className="z-10 flex flex-col items-center leading-[0.85] mb-20 md:mb-0 w-full px-4">
          {/* Teks Solid */}
          <h1 className="text-[4.5rem] sm:text-[6rem] md:text-[9rem] lg:text-[11rem] font-bold text-black tracking-tighter text-center whitespace-nowrap">
            IT Student
          </h1>
          {/* Teks Outline */}
          <h2 
            className="text-[3.5rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] font-bold text-transparent tracking-tighter text-center whitespace-nowrap"
            style={{ WebkitTextStroke: '2px black' }}
          >
            & Graphics Designer
          </h2>
        </div>

        {/* Foto Arzu (Absolute Position agar menimpa teks) */}
        <div className="absolute bottom-0 z-20 pointer-events-none flex justify-center w-full">
          <img 
            src="/arzu_cutout.png" 
            alt="Arzu Dzaky Pratama" 
            className="h-[45vh] sm:h-[55vh] md:h-[70vh] object-contain drop-shadow-2xl"
          />
        </div>
      </section>

      {/* TAHAP 1: Tentang & Experience Section (Disesuaikan ke Tema Terang) */}
      <section id="about" className="min-h-screen flex flex-col items-center justify-center px-4 py-24 bg-gray-50 relative z-40">
        <h2 className="text-4xl font-bold mb-8 text-black tracking-tight">About Me</h2>
        <div className="max-w-3xl text-center text-gray-600 space-y-8">
          <p className="leading-relaxed text-lg">
            Halo! Saya Arzu Dzaky Pratama, seorang mahasiswa Jurusan Teknologi Informasi yang memiliki hasrat besar dalam dunia Web Development, Visual Technology, Artificial Intelligence, Information Technology dan masih banyak lagi. Dengan pengalaman sebagai Graphics Designer, IT Enthusiast, Photographer, dan Videographer saya telah mengasah keterampilan saya dalam berbagai bidang kreatif dan teknis. Saya selalu bersemangat untuk belajar hal baru dan berkolaborasi dalam proyek-proyek yang menantang.
          </p>
          
          <div className="pt-8">
            <h3 className="text-2xl font-semibold mb-6 text-black tracking-tight">Keahlian (Skills)</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Microsoft Office', 'Figma', 'HTML', 'CSS', 'JavaScript', 'Next.js', 'Tailwind CSS', 'OpenCV', 'Canva Designer', 'Adobe Illustrator', 'Adobe Premiere Pro', 'Adobe Photoshop'].map((skill) => (
                <span key={skill} className="px-5 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-black hover:text-black transition-colors cursor-default shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TAHAP 1: Proyek Section (Disesuaikan ke Tema Terang) */}
      <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-4 py-24 bg-white relative z-40">
        <h2 className="text-4xl font-bold mb-16 text-black tracking-tight">Karya Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          
          {projects.map((project) => (
            <div key={project._id} className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-black transition-all group cursor-pointer flex flex-col hover:shadow-lg">
              
              {project.imageUrl ? (
                <img src={project.imageUrl} alt={project.title} className="h-48 w-full object-cover rounded-lg mb-6 group-hover:opacity-90 transition-opacity" />
              ) : (
                <div className="h-48 bg-gray-200 rounded-lg mb-6 group-hover:bg-gray-300 transition flex items-center justify-center text-gray-500 font-medium">
                  Tanpa Gambar
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-3 text-black">{project.title}</h3>
              <p className="text-gray-600 text-base mb-6 flex-grow leading-relaxed">{project.description}</p>
              <div className="text-black font-semibold group-hover:translate-x-2 transition-transform inline-block w-max">
                Lihat Detail &rarr;
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* TAHAP 1: Kontak Section (Dilengkapi Opsi Sosial Media) */}
      <section id="contact" className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-24 bg-gray-50 relative z-40 border-t border-gray-200">
        <h2 className="text-4xl font-bold mb-6 text-black tracking-tight">Mari Berkolaborasi</h2>
        <p className="text-gray-600 mb-10 text-center max-w-md text-lg">
          Tertarik untuk mendiskusikan pengembangan web atau eksplorasi teknologi visual? Jangan ragu untuk menyapa.
        </p>
        
        {/* Container untuk susunan tombol-tombol CTA */}
        <div className="flex flex-wrap justify-center gap-4 max-w-2xl w-full">
          
          {/* Tombol Email (Utama - Solid Black) */}
          <a href="mailto:arzu.d.pratama@gmail.com" className="flex items-center justify-center gap-2 px-8 py-3 bg-black text-white font-semibold rounded-sm transition-transform hover:-translate-y-1 hover:shadow-lg border border-black w-full sm:w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            Email
          </a>

          {/* Tombol WhatsApp (Outline) */}
          <a href="https://wa.me/6289519640412" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded-sm transition-all hover:-translate-y-1 hover:shadow-md border border-gray-300 hover:border-black w-full sm:w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            WhatsApp
          </a>

          {/* Tombol LinkedIn (Outline) */}
          <a href="https://linkedin.com/in/arzu-d-pratama" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded-sm transition-all hover:-translate-y-1 hover:shadow-md border border-gray-300 hover:border-black w-full sm:w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            LinkedIn
          </a>

          {/* Tombol Instagram (Outline) */}
          <a href="https://instagram.com/port_arzu.d.pratama" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded-sm transition-all hover:-translate-y-1 hover:shadow-md border border-gray-300 hover:border-black w-full sm:w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            Instagram
          </a>

        </div>
      </section>
    </main>
  );
}