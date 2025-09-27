'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform, useSpring, useAnimate } from 'framer-motion'
import { useRef, useEffect } from 'react'

const Hero = () => {
  const ref = useRef(null)
  const contentRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const [scope, animate] = useAnimate()

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const smoothProgress = useSpring(scrollYProgress, springConfig)

  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0])
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 0.8])
  return (
    <motion.section 
      ref={ref}
      id="hero" 
      className="min-h-screen flex flex-col bg-black text-white relative overflow-hidden pt-16 md:pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Elements */}
      <motion.div 
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center"
        style={{
          opacity: useTransform(smoothProgress, [0, 1], [0.1, 0.05]),
          y: backgroundY
        }}
      />
      <motion.div 
        className="absolute top-0 right-0 w-1/2 md:w-1/3 h-1/3 bg-[#0A1A4D] rounded-full blur-[120px] -translate-y-1/2"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        style={{
          opacity: useTransform(smoothProgress, [0, 0.5], [1, 0.6])
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-1/2 md:w-1/3 h-1/3 bg-[#0A1A4D] rounded-full blur-[120px] translate-y-1/2"
        animate={{ 
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1
        }}
        style={{
          opacity: useTransform(smoothProgress, [0, 0.5], [1, 0.6])
        }}
      />
      
      <div className="flex-1 flex flex-col">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl flex-1 flex flex-col">
          <div className="flex-1 flex flex-col justify-center items-center gap-6 md:gap-8">
            {/* Description - Moved to top */}
            <motion.p
              ref={contentRef}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ opacity, scale }}
              className="text-xl md:text-2xl text-center max-w-[1000px] mx-auto leading-relaxed"
            >
              If you&apos;ve ever thought of giving your users a beautiful experience using your 
              product, then you should know that I am the perfect designer for the job. I focus 
              on crafting seamless user experiences that aligns with business goals.
            </motion.p>

            {/* Title Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ opacity, scale }}
              className="text-center space-y-4"
            >
              <motion.h1 
                className="text-6xl md:text-7xl lg:text-8xl font-bold"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                Hi, I&apos;m{' '}
                <motion.span 
                  className="relative inline-block"
                  animate={{ 
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <span className="relative z-10 text-white">
                    Ezinne Chijioke,
                  </span>
                </motion.span>
              </motion.h1>
              <motion.div 
                className="text-4xl md:text-5xl lg:text-6xl"
                animate={{ 
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                a Product Designer
              </motion.div>
            </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col md:flex-row items-center gap-6 mt-8"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link 
                    href="#contact"
                    className="group relative bg-[#14213D] text-white px-8 py-3 rounded-lg text-lg overflow-hidden"
                  >
                    <motion.span 
                      className="absolute inset-0 bg-[#1C2B4A] transform origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10">Hire Me</span>
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <a 
                    href="/CV/Ezinne.pdf"
                    className="group relative bg-white text-black px-8 py-3 rounded-lg text-lg overflow-hidden inline-block"
                    download
                  >
                    <motion.span 
                      className="absolute inset-0 bg-gray-100 transform origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10">Download My CV</span>
                  </a>
                </motion.div>
              </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero