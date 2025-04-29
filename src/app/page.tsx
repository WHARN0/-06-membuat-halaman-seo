import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Saya",
  description: "Halaman tentang saya.",
  openGraph: {
    title: "Tentang Saya",
    description: "Halaman tentang saya.",
  },
};

export default function Home() {
  return (
    <main className="mt-16 px-8">
      <div className="max-w-3xl mx-auto text-center">
        {/* Foto Profil */}
        <div className="w-32 h-32 mx-auto mb-6 relative rounded-full overflow-hidden">
          <Image
            src="/images/profile.png" 
            alt="Profil"
            fill
            className="object-cover"
          />
        </div>

        {/* Nama & Bio */}
        <h1 className="font-bold text-3xl text-zinc-800">Bagus Arnovario Wibowo</h1>
        <p className="mt-4 text-zinc-600 text-base leading-relaxed">
          Saya adalah seorang mahasiswa yang memiliki minat di bidang teknologi, khususnya pengembangan web dan aplikasi. Saya juga suka menulis esai, mengeksplorasi desain, dan berkontribusi pada proyek open-source.
        </p>

        {/* Link Sosial Media */}
        <div className="mt-6 flex justify-center gap-4">
          <a href="https://github.com/WHARN0" className="text-sm text-blue-600 hover:underline">
            GitHub
          </a>
          <a href="https://linkedin.com/in/bagus-arnovario/" className="text-sm text-blue-600 hover:underline">
            LinkedIn
          </a>
          <a href="2241720225@student.polinema.ac.id" className="text-sm text-blue-600 hover:underline">
            Email
          </a>
        </div>
      </div>
    </main>
  );
}
