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
      className="bg-[#000000] text-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 relative overflow-hidden min-h-screen"
    >
      {/* Base black background */}
      <div className="absolute inset-0 bg-[#000000]" />
      
      {/* Grid pattern with controlled opacity */}
      <motion.div 
        style={{ opacity: useTransform(scrollYProgress, [0, 1], [0.05, 0.03]) }}
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]" 
      />
      
      {/* Rich gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#0A1A4D]/20 via-transparent to-[#4A1A8B]/20" 
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
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
                duration: 0.3,
                ease: "easeOut"
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px" }}
        >
          {/* Email */}
          <motion.a
            href="mailto:ezinnenwanedo@gmail.com"
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
            }}
            className="group flex flex-col items-center p-6 sm:p-8 backdrop-blur-lg bg-[#0A1A4D]/10 rounded-2xl border border-[#0A1A4D]/20 hover:border-[#4A88FA]/30 hover:bg-[#0A1A4D]/20 transition-all duration-300"
            whileHover={{ scale: 1.01, y: -2 }}
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 sm:mb-6 relative flex items-center justify-center">
              <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-[#4A88FA] group-hover:text-[#6A9FFF] transition-colors" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">Email</h3>
            <p className="text-sm sm:text-base text-gray-400 group-hover:text-[#6A9FFF] transition-colors duration-300">Drop me a message</p>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/chijiokefaith"
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
            }}
            className="group flex flex-col items-center p-6 sm:p-8 backdrop-blur-lg bg-[#0A1A4D]/10 rounded-2xl border border-[#0A1A4D]/20 hover:border-[#4A88FA]/30 hover:bg-[#0A1A4D]/20 transition-all duration-300"
            whileHover={{ scale: 1.01, y: -2 }}
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 sm:mb-6 relative flex items-center justify-center">
              <Linkedin className="w-8 h-8 sm:w-10 sm:h-10 text-[#4A88FA] group-hover:text-[#6A9FFF] transition-colors" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">LinkedIn</h3>
            <p className="text-sm sm:text-base text-gray-400 group-hover:text-[#6A9FFF] transition-colors duration-300">Connect with me</p>
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/ezinnejioke"
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, x: 20 },
              show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
            }}
            className="group flex flex-col items-center p-6 sm:p-8 backdrop-blur-lg bg-[#0A1A4D]/10 rounded-2xl border border-[#0A1A4D]/20 hover:border-[#4A88FA]/30 hover:bg-[#0A1A4D]/20 transition-all duration-300"
            whileHover={{ scale: 1.01, y: -2 }}
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 sm:mb-6 relative flex items-center justify-center">
              <Instagram className="w-8 h-8 sm:w-10 sm:h-10 text-[#4A88FA] group-hover:text-[#6A9FFF] transition-colors" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">Instagram</h3>
            <p className="text-sm sm:text-base text-gray-400 group-hover:text-[#6A9FFF] transition-colors duration-300">Follow my journey</p>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Contact