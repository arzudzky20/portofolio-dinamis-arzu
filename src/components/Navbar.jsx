import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Bagian Logo yang sudah diubah */}
        <Link href="/" aria-label="Home">
          <Image 
            src="/logo_arzu.svg" 
            alt="Logo Arzu" 
            width={70} 
            height={70} 
            className="cursor-pointer object-contain"
            priority // Ditambahkan untuk optimasi loading karena ini gambar pertama di atas
          />
        </Link>

        <div className="flex space-x-6 text-sm font-medium text-gray-500">
          <Link href="/" className="hover:text-black transition-colors">Dasbor</Link>
          <Link href="/#about" className="hover:text-black transition-colors">Tentang Saya</Link>
          <Link href="/#projects" className="hover:text-black transition-colors">Proyek Saya</Link>
          <Link href="/blog" className="hover:text-black transition-colors">Blog Akademik</Link>
          <Link href="/#contact" className="hover:text-black transition-colors">Kontak Saya</Link>
        </div>
      </div>
    </nav>
  );
}