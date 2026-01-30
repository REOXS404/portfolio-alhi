'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: "Freelance Web Project",
    category: "Full Stack Development",
    desc: "High-performance web architecture built with Next.js and SEO optimization.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    image: null, 
    link: "#",
    isAR: false
  },
  
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 ">
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">Selected <span className="text-purple-500">Works</span>.</h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden p-6"
          >
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="text-neutral-400 text-sm mt-2">{project.desc}</p>
             {/* Logic gambar/QR disini sesuai kode sebelumnya */}
          </motion.div>
        ))}
      </div>
    </section>
  )
}