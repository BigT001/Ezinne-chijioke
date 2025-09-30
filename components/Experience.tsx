'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])
  
  return (
    <motion.section 
      id="experience"
      ref={containerRef}
      style={{ opacity }}
      className="bg-gradient-to-b from-black via-blue-950/50 to-black text-white py-12 sm:py-16 md:py-24 px-3 sm:px-6 md:px-8 relative overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" 
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-purple-900/20" />
      <motion.div 
        animate={{ 
          y: [-20, 0, -20],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-900/20 rounded-full blur-[120px] -translate-y-1/2"
      />
      <motion.div 
        animate={{ 
          y: [20, 0, 20],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5
        }}
        className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-900/20 rounded-full blur-[120px] translate-y-1/2"
      />
      
      <div className="max-w-6xl mx-auto flex flex-col items-center relative">
      
        
         

        {/* Heading and Subtext */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-24 text-center"
        >
          <motion.div className="text-center">
            <motion.div
              className="inline-block px-4 py-1 mb-4 bg-white text-black rounded-full text-sm font-medium tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              EXPERIENCE
            </motion.div>
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Work Experience
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              A summary of my professional journey as a product designer.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 relative">
          {/* Left Experience */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-left md:text-right pr-0 md:pr-16 group relative pl-16 md:pl-0"
          >
            <motion.div 
              className="space-y-6 backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl hover:shadow-white/5"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <motion.div 
                className="flex flex-col items-end"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <motion.h3 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-white"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  UI/UX Designer
                </motion.h3>
                <motion.p 
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-medium mb-1 sm:mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  TESTIFY
                </motion.p>
                <motion.p 
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-medium tracking-wide"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  JAN 2024 - OCT 2024
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Center Timeline */}
          <div className="absolute md:left-1/2 left-0 md:transform md:-translate-x-1/2 h-full flex flex-col items-center">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-blue-400 p-0.5 sm:p-1 shadow-lg ml-6 md:ml-0"
            >
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-400 animate-pulse"></div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-px bg-blue-400/40 my-2 sm:my-4 ml-6 md:ml-0"
            ></motion.div>
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-blue-400 p-0.5 sm:p-1 shadow-lg ml-6 md:ml-0"
            >
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-400 animate-pulse"></div>
              </div>
            </motion.div>
          </div>

          {/* Right Experience */}
          <motion.div 
            initial={{ opacity: 0, y: 20, x: 0 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.3 }}
            className="col-start-1 md:col-start-2 pl-16 md:pl-16 group"
          >
            <motion.div 
              className="space-y-4 sm:space-y-6 backdrop-blur-lg bg-white/5 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl hover:shadow-white/5"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <motion.div 
                className="flex flex-col items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <motion.h3 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-white"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  Product Designer
                </motion.h3>
                <motion.p 
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-medium mb-1 sm:mb-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  NEXTDAYSITE
                </motion.p>
                <motion.p 
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-medium tracking-wide"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  MAY 2024 - PRESENT
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Experience