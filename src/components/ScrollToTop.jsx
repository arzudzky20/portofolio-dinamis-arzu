"use client";

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  // State untuk melacak apakah tombol harus ditampilkan atau disembunyikan
  const [isVisible, setIsVisible] = useState(false);

  // Efek untuk memantau posisi scroll pengguna
  useEffect(() => {
    const toggleVisibility = () => {
      // Jika pengguna sudah menggulir lebih dari 300 piksel ke bawah, tampilkan tombol
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Memasang "sensor" pendeteksi scroll
    window.addEventListener("scroll", toggleVisibility);

    // Membersihkan "sensor" ketika komponen tidak lagi digunakan
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Fungsi untuk mengembalikan layar ke posisi paling atas dengan mulus
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Jika belum digulir cukup jauh (isVisible = false), jangan tampilkan apa-apa
  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:scale-110 transition-all duration-300"
      aria-label="Kembali ke atas"
      title="Kembali ke atas"
    >
      {/* Kamu bisa mengganti ikon panah ini dengan ikon SVG yang lebih menarik jika mau */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={2.5} 
        stroke="currentColor" 
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  );
}