import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Web Portfolio Arzu D. Pratama",
  description: "Portofolio web pribadi Arzu Dzaky Pratama.",
};

export default function RootLayout({ children }) {
  return (
    // Menambahkan class scroll-smooth di sini untuk animasi scroll navbar
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="bg-white text-[#1a1a1a] min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}