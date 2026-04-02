import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-teal-400">Arzu.</div>
        <div className="flex space-x-6 text-sm text-gray-300">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="#about" className="hover:text-white transition">Tentang</Link>
          <Link href="#projects" className="hover:text-white transition">Proyek</Link>
          <Link href="#contact" className="hover:text-white transition">Kontak</Link>
        </div>
      </div>
    </nav>
  );
}