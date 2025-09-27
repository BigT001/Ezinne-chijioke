'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Mail, Linkedin, Instagram } from 'lucide-react'
import { useRef } from 'react'

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, 50])
  return (
    <motion.section 
      ref={containerRef}
      id="contact" 
      style={{ opacity }}
      className="bg-black text-white py-6 sm:py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div 
        style={{ opacity: useTransform(scrollYProgress, [0, 1], [0.03, 0.01]) }}
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]" 
      />
      
      <motion.div 
        style={{ scale: useTransform(scrollYProgress, [0, 1], [1, 1.1]) }}
        className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" 
      />
      
      <motion.div 
        style={{ y }}
        className="max-w-6xl mx-auto relative">
        {/* Contact Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-white text-black px-6 py-2 rounded-full text-sm font-semibold tracking-wider mb-8">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-blue-400">
            Let's Connect
          </h2>
        </motion.div>

        {/* Contact Links */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
                duration: 0.4,
                ease: "easeOut"
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Email */}
          <motion.a
            href="mailto:ezinnenwanedo@gmail.com"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="group flex flex-col items-center p-8 backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10 hover:border-blue-400/50 hover:bg-blue-900/10 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="w-16 h-16 mb-6 relative flex items-center justify-center">
              <Mail className="w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-colors" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Email</h3>
            <p className="text-gray-400 group-hover:text-blue-300 transition-colors duration-300">Drop me a message</p>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/chijiokefaith"
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
            className="group flex flex-col items-center p-8 backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10 hover:border-blue-400/50 hover:bg-blue-900/10 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="w-16 h-16 mb-6 relative flex items-center justify-center">
              <Linkedin className="w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-colors" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">LinkedIn</h3>
            <p className="text-gray-400 group-hover:text-blue-300 transition-colors duration-300">Connect with me</p>
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/ezinnejioke"
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
            className="group flex flex-col items-center p-8 backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10 hover:border-blue-400/50 hover:bg-blue-900/10 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="w-16 h-16 mb-6 relative flex items-center justify-center">
              <Instagram className="w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-colors" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Instagram</h3>
            <p className="text-gray-400 group-hover:text-blue-300 transition-colors duration-300">Follow my journey</p>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Contact