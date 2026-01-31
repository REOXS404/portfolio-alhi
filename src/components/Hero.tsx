'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaDownload } from 'react-icons/fa6' // Pastikan ini di-import

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-28 md:pt-0 md:px-12 bg-[#121212] overflow-hidden relative">
      
      {/* Container Utama */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        
        {/* KOLOM KIRI: Visual/Avatar dengan Custom Particle Ring System */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center order-2 md:order-1 h-[400px] md:h-[600px]"
        >
          
          {/* --- SYSTEM 5 RING (Sesuai kode lu: Border Dotted Meningkat) --- */}

          {/* RING 5 (TERLUAR): Partikel Halus - Debu Kosmik */}
          <div className="absolute w-[320px] h-[320px] md:w-[500px] md:h-[500px] rounded-full border-[1px] border-dotted border-purple-500/20 animate-[spin_60s_linear_infinite]" />

          {/* RING 4: Partikel Kecil */}
          <div className="absolute w-[310px] h-[310px] md:w-[485px] md:h-[485px] rounded-full border-[2px] border-dotted border-purple-500/30 animate-[spin_45s_linear_infinite_reverse]" />

          {/* RING 3: Partikel Sedang */}
          <div className="absolute w-[300px] h-[300px] md:w-[470px] md:h-[470px] rounded-full border-[2px] border-dotted border-purple-500/40 animate-[spin_35s_linear_infinite]" />

          {/* RING 2 (CORE LAYER): Partikel Besar - Energy Chunks */}
          <div className="absolute w-[290px] h-[290px] md:w-[455px] md:h-[455px] rounded-full border-[2px] border-dotted border-purple-500/60 animate-[spin_25s_linear_infinite_reverse]" />

          {/* RING 1 (TERDALAM): Partikel Sangat Besar - Core Protection */}
          <div className="absolute w-[280px] h-[280px] md:w-[440px] md:h-[440px] rounded-full border-[1px] border-dotted border-purple-500/80 animate-[spin_20s_linear_infinite]" />


          {/* --- WADAH FOTO (Center Core) --- */}
          <div className="w-[260px] h-[260px] md:w-[410px] md:h-[410px] bg-neutral-800 rounded-full flex items-center justify-center relative overflow-hidden shadow-2xl border-2 border-neutral-700 z-10">
             <Image 
                src="/images/profile 2.jpg" // Pastikan nama file benar
                alt="Alhi" 
                fill 
                className="object-cover" 
             />
          </div>

        </motion.div>

        {/* KOLOM KANAN: Copywriting */}
        <div className="text-left space-y-6 order-1 md:order-2">
          <motion.h1 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white text-4xl md:text-6xl font-bold"
          >
            Hi, I'm Alhi.
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 leading-tight"
          >
            Building full-stack web applications.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="text-neutral-400 text-lg md:text-xl italic font-light"
          >
            Crafting logic-driven systems with immersive visuals.
          </motion.p>

          {/* --- TOMBOL DOWNLOAD CV (Sudah disesuaikan) --- */}
          <motion.a 
            href="/CV. ALHI DAYAT PUTRA.pdf"     // Pastikan file ini ada di folder public
            download="CV_Alhi.pdf"  // Nama file pas di-save user
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.8 }}
            className="inline-flex items-center gap-3 mt-4 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-all cursor-pointer group"
          >
            <span>Download CV</span>
            <FaDownload className="group-hover:translate-y-1 transition-transform" />
          </motion.a>
        </div>
      </div>

    </section>
  )
}