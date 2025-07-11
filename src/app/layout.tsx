import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Next.js Tugas Firla",
  description: "Tugas Fundamental Next.js Pertemuan 2",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black text-gray-900 dark:text-white font-sans">
        <header className="sticky top-0 z-10 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-gray-200 dark:border-gray-700 shadow-sm">
          <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
            <h1 className="text-2xl font-bold text-blue-600 dark:text-purple-400">Firla.dev</h1>
            <div className="flex gap-8 text-base font-medium">
              <Link href="/" className="hover:text-blue-600 transition">Home</Link>
              <Link href="/about" className="hover:text-blue-600 transition">About</Link>
              <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
              <Link href="/products/1" className="hover:text-blue-600 transition">Produk</Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
