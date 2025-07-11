import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 dark:from-gray-900 dark:to-black px-6">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* TEXT SIDE */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hai, aku <span className="text-blue-600 dark:text-purple-400">Firla</span> 👋
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
            Selamat datang di website Next.js tugas fundamental pertemuan ke-2. Yuk, lihat halaman lainnya!
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/about" className="bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition">
              Tentang
            </Link>
            <Link href="/contact" className="bg-purple-600 text-white px-5 py-3 rounded-lg shadow hover:bg-purple-700 transition">
              Kontak
            </Link>
            <Link href="/products/1" className="border border-gray-400 text-gray-800 dark:text-gray-200 px-5 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              Produk 1
            </Link>
          </div>
        </div>

        {/* IMAGE SIDE */}
        <div className="flex justify-center">
          <Image
            src="/firla.png" // ganti dengan nama file kamu di /public
            alt="Foto Firla"
            width={300}
            height={300}
            className="rounded-2xl shadow-lg object-cover border border-white dark:border-gray-700"
            priority
          />
        </div>
      </div>
    </div>
  );
}
