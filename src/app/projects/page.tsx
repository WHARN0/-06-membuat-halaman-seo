import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyek",
  description: "Halaman proyek.",
  openGraph: {
    title: "Proyek",
    description: "Halaman proyek.",
  },
};
type ProjectItemProps = {
  name: string;
  url: string;
  urlDisplay: string;
  imageSrc: string;
};

function ProjectItem({ name, url, urlDisplay, imageSrc }: ProjectItemProps) {
  return (
    <a href={url}>
      <div className="rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
        <div className="relative w-full aspect-[4/3]">
          <Image src={imageSrc} alt={name} fill className="object-cover" />
        </div>
        <div className="px-6 py-4">
          <h3 className="font-bold text-xl mb-2 text-zinc-800">{name}</h3>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{urlDisplay}</span>
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <main className="mt-16 px-8">
      <header className="text-center">
        <h1 className="font-bold text-4xl text-zinc-800">Proyek Saya</h1>
        <p className="text-base mt-6 text-zinc-600">Berikut adalah beberapa proyek yang telah saya kerjakan.</p>
      </header>

      {/* Grid daftar project */}
      <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <ProjectItem name="Aplikasi 1" url="https://example.com" urlDisplay="Crypto" imageSrc="/images/project1.png" />
        <ProjectItem name="Aplikasi 2" url="https://example.com" urlDisplay="Gold" imageSrc="/images/project2.png" />
      </section>
    </main>
  );
}