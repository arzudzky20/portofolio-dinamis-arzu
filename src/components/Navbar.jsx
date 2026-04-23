"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  // State untuk melacak apakah menu HP sedang terbuka atau tertutup
  const [isOpen, setIsOpen] = useState(false);

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

        {/* Menu Laptop: Tersembunyi di HP (hidden), muncul berjejer di layar menengah ke atas (md:flex) */}
        <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-500">
          <Link href="/" className="hover:text-black transition-colors">Dasbor</Link>
          <Link href="/#about" className="hover:text-black transition-colors">Tentang Saya</Link>
          <Link href="/#projects" className="hover:text-black transition-colors">Proyek Saya</Link>
          <Link href="/blog" className="hover:text-black transition-colors">Blog Akademik</Link>
          <Link href="/#contact" className="hover:text-black transition-colors">Kontak Saya</Link>
        </div>

        {/* Tombol Hamburger HP: Hanya muncul di layar kecil */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 hover:text-black focus:outline-none"
            aria-label="Buka menu"
          >
            {/* Ikon berubah tergantung apakah menu sedang terbuka atau tertutup */}
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu Dropdown HP: Hanya dirender (muncul) jika tombol Hamburger diklik */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col">
            <Link 
              href="/" 
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-black hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)} // Tutup menu otomatis setelah link ditekan
            >
              Dasbor
            </Link>
            <Link 
              href="/#about" 
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-black hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Tentang Saya
            </Link>
            <Link 
              href="/#projects" 
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-black hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Proyek Saya
            </Link>
            <Link 
              href="/blog" 
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-black hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog Akademik
            </Link>
            <Link 
              href="/#contact" 
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-black hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Kontak Saya
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}