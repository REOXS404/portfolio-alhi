import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      {/* 1. Hero Section (Sesuai Referensi Foto) */}
      <Hero />
      
      {/* 2. Projects Showcase (Termasuk AR QR Code) */}
      <Projects />
      
      {/* 3. Tech Stack (Gaya Grid) */}
      <Skills />
      
      {/* 4. Contact (Penutup) */}
      <Contact />
      
      {/* Footer Simpel */}
      <footer className="py-8 text-center text-neutral-600 text-sm bg-[#0a0a0a]">
        © {new Date().getFullYear()} AlhiDev.
      </footer>
    </main>
  );
}