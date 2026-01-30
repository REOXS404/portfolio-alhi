'use client'
import { motion } from 'framer-motion'

const skills = [
  { category: "Core", items: ["Next.js 14", "React", "TypeScript", "Tailwind CSS"] },
  { category: "Creative", items: ["Blender 3D", "Framer Motion", "UI/UX Design", "MyWebAR"] },
  { category: "Backend & Tools", items: ["Node.js", "Git", "Vercel", "Postman"] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20  relative overflow-hidden">
      
      {/* Background Decoration (Sesuai Referensi Ungu) */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-900/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Judul Section */}
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-12"
        >
          Technical <span className="text-purple-500">Skills</span>.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-2xl hover:border-purple-500/50 transition-colors group"
            >
              <h3 className="text-xl font-bold text-purple-400 mb-6 border-b border-neutral-800 pb-2">
                {group.category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-4 py-2 bg-neutral-800 rounded-lg text-neutral-300 text-sm font-medium border border-transparent group-hover:border-purple-500/30 group-hover:text-white transition-all"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}