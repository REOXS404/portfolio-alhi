'use client' // <--- 1. WAJIB ADA INI BIAR TOMBOL BISA DIKLIK

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { FaBars, FaXmark } from 'react-icons/fa6' // Pastikan install react-icons

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    // Z-INDEX 50: Biar dia selalu di atas Hero & Ring Partikel lu
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="#" className="text-2xl font-bold text-white tracking-tighter">
            Alhi<span className="text-purple-500">Dev.</span>
          </Link>

          {/* Desktop Menu (Hidden di HP) */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Button (Muncul cuma di HP) */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white p-2 focus:outline-none"
          >
            {isOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Dropdown (Animasi) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#121212] border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)} // Tutup menu pas link diklik
                  className="text-lg font-medium text-neutral-300 hover:text-purple-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}