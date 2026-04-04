import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
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

        <div className="flex space-x-6 text-sm text-gray-300">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="#about" className="hover:text-white transition">About Me</Link>
          <Link href="#projects" className="hover:text-white transition">My Project</Link>
          <Link href="#contact" className="hover:text-white transition">Contact Me</Link>
        </div>
      </div>
    </nav>
  );
}