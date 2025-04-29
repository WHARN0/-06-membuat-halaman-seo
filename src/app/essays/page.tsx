import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Esai",
  description: "Halaman esai.",
  openGraph: {
    title: "Esai",
    description: "Halaman esai.",
  },
};

type EssayItemProps = {
  title: string;
  summary: string;
  link: string;
};

function EssayItem({ title, summary, link }: EssayItemProps) {
  return (
    <a href={link} className="block rounded-lg shadow-md bg-white hover:shadow-xl transition p-6">
      <h3 className="font-bold text-lg text-zinc-800">{title}</h3>
      <p className="mt-2 text-sm text-zinc-600">{summary}</p>
    </a>
  );
}

export default function Essays() {
  const essays: EssayItemProps[] = [
    {
      title: "Belajar Pemrograman Modern",
      summary: "Artikel tentang pentingnya memahami JavaScript, TypeScript, dan React dalam pengembangan web modern.",
      link: "#",
    },
    {
      title: "Peran Desain dalam Aplikasi",
      summary: "Mengulas pentingnya UI/UX dalam keberhasilan aplikasi digital.",
      link: "#",
    },
    {
      title: "Next.js untuk Pemula",
      summary: "Panduan praktis membangun website dengan Next.js dan Tailwind CSS.",
      link: "#",
    },
  ];

  return (
    <main className="mt-16 px-8">
      <header className="text-center">
        <h1 className="font-bold text-4xl text-zinc-800">Esai</h1>
        <p className="text-base mt-6 text-zinc-600">Berikut beberapa artikel yang saya tulis.</p>
      </header>

      <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {essays.map((essay, index) => (
          <EssayItem key={index} {...essay} />
        ))}
      </section>
    </main>
  );
}
