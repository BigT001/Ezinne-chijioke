'use client'

import { motion } from 'framer-motion'

const skills = [
  'Research',
  'Wireframe',
  'Prototyping',
  'UX Design',
  'Figma',
  'Team Collaboration',
  'Attention to Details',
  'User Centered Design',
  'HTML Basics',
  'GitHub',
  'Leadership',
  'Google Workspace',
  'Usability Testing',
  'Creativity',
  'Mobile Design',
  'Effective Communication',
  'Time Management',
  'Interaction Design',
  'Web Design',
  'Project Management & Execution',
  'Team Work'
]

const Skills = () => {
  return (
    <section id="skills" className="bg-[#010208] text-white py-16 sm:py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] opacity-[0.03]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#010208_80%)]" />
      
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_800px_at_100%_200px,#ffffff,transparent)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_800px_at_0%_300px,#ffffff,transparent)]" />
      </div>
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-white/[0.02] to-transparent rounded-full blur-[120px] rotate-[5deg]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-t from-white/[0.02] to-transparent rounded-full blur-[100px] -rotate-[5deg]" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col items-center">
          {/* Expertise Label */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="mb-16 text-center"
          >
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-gradient-to-r from-white to-gray-300 px-6 py-2 rounded-full text-sm font-semibold tracking-wider text-black shadow-lg"
            >
              EXPERTISE
            </motion.span>
          </motion.div>

          {/* Heading and Subtext */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
            className="mb-24 text-center"
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
              Skills
            </h2>
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Technical and soft skills I&apos;ve developed throughout my career.
            </p>
          </motion.div>

          {/* Skills Cloud */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            className="w-full flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto px-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: false }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                className="relative px-6 py-3 rounded-full text-base md:text-lg font-medium text-white/90 hover:text-white transition-all duration-300 backdrop-blur-sm group border border-white/10 hover:border-white/30"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative z-10">{skill}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills