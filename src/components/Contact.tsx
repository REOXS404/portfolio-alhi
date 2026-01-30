'use client'
import { motion } from 'framer-motion'
import { FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope, FaLink } from 'react-icons/fa6' 

// --- ISI DATA SOSMED LU DI SINI ---
const socialLinks = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="w-8 h-8" />,
    url: "https://www.linkedin.com/in/alhi-dayat-putra-73b006243/", // <--- Ganti URL
    color: "hover:text-blue-500",
    border: "hover:border-blue-500/50",
    desc: "Professional connection"
  },
  {
    name: "Instagram",
    icon: <FaInstagram className="w-8 h-8" />,
    url: "https://www.instagram.com/alhi.putra/", // <--- Ganti URL
    color: "hover:text-pink-500",
    border: "hover:border-pink-500/50",
    desc: "Daily updates & life"
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp className="w-8 h-8" />,
    url: "https://wa.me/6285187696127", // <--- Ganti No HP (pake 62)
    color: "hover:text-green-500",
    border: "hover:border-green-500/50",
    desc: "Quick chat & hire"
  },
  {
    name: "Lynk.id",
    icon: <FaLink className="w-8 h-8" />,
    url: "https://lynk.id/alhiputra?utm_source=ig&utm_medium=social&utm_content=link_in_bio", // <--- Ganti URL
    color: "hover:text-cyan-500",
    border: "hover:border-cyan-500/50",
    desc: "All links in one"
  },
  {
    name: "Email",
    icon: <FaEnvelope className="w-8 h-8" />,
    url: "mailto:alhiputra01@gmail.com", // <--- Ganti Email
    color: "hover:text-purple-500",
    border: "hover:border-purple-500/50",
    desc: "Formal inquiries"
  }
]

export default function Contact() {
  return (
    <section id="contact" className="py-24  relative overflow-hidden">
      
      {/* Background Gradient Halus */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-900/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Get in <span className="text-purple-500">Touch</span>.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-neutral-400 mb-12 max-w-xl mx-auto"
        >
          "Clik Icon Untuk menghubungi"
        </motion.p>

        {/* Grid Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank" // Buka tab baru
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                flex flex-col items-center justify-center p-6 
                bg-neutral-900/50 border border-neutral-800 rounded-2xl 
                transition-all duration-300 group
                ${social.border} hover:bg-neutral-800 hover:-translate-y-2
              `}
            >
              <div className={`text-neutral-400 transition-colors duration-300 ${social.color} mb-3`}>
                {social.icon}
              </div>
              <h3 className="text-white font-bold text-sm">{social.name}</h3>
              <p className="text-neutral-500 text-xs mt-1">{social.desc}</p>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  )
}