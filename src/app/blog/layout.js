import ScrollToTop from "@/components/ScrollToTop";

export default function BlogLayout({ children }) {
  return (
    <>
      {/* Konten utama halaman blog (seperti daftar artikel atau isi rangkuman) akan dirender di dalam {children} */}
      {children}
      
      {/* Tombol kembali ke atas yang akan melayang di sudut layar */}
      <ScrollToTop />
    </>
  );
}