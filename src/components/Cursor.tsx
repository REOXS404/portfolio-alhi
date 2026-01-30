'use client'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Cursor() {
  // State buat deteksi mobile (biar ga muncul di HP)
  const [isMobile, setIsMobile] = useState(true);

  const cursorX = useMotionValue(-500) // Mulai jauh di luar layar
  const cursorY = useMotionValue(-500)

  // KITA UBAH PHYSICS-NYA DI SINI
  // stiffness lebih rendah = geraknya lebih males/lambat ketinggalan
  // damping lebih tinggi = lebih smooth, gak terlalu membal
  const springConfig = { damping: 50, stiffness: 300 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Cek ukuran layar
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Cek pas awal load
    window.addEventListener('resize', checkMobile); // Cek pas resize

    const moveCursor = (e: MouseEvent) => {
      if (isMobile) return;
      // UKURAN GLOW KITA ADALAH 500px (w-[500px])
      // Jadi kita harus kurangi 250px (setengahnya) biar pas di tengah mouse
      cursorX.set(e.clientX - 250)
      cursorY.set(e.clientY - 250)
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('resize', checkMobile)
    }
  }, [cursorX, cursorY, isMobile])

  // Kalau mobile, jangan render apa-apa
  if (isMobile) return null;

  return (
    <motion.div
      // --- BAGIAN PENTING STYLING ---
      className="fixed top-0 left-0 pointer-events-none z-0 animate-pulse-slow"
      // z-0: Biar dia ada di belakang teks (asumsi section lain z-10 ke atas)
      // Kalau masih nutupin teks, ganti z-0 jadi z-[-1]
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        width: '500px', // Ukuran diameter cahaya
        height: '500px',
        borderRadius: '50%', // Biar bulet
        // Warna Ungu Transparan (Ganti RGB-nya kalau mau warna lain)
        backgroundColor: 'rgba(147, 51, 234, 0.15)', 
        // Blur tingkat dewa biar jadi "shadow glow" halus
        filter: 'blur(150px)', 
      }}
    />
  )
}