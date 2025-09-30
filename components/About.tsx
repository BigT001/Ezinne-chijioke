'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const smoothProgress = useSpring(scrollYProgress, springConfig)
  
  const opacity = useTransform(smoothProgress, [0, 0.2, 1], [0, 1, 1])
  const scale = useTransform(smoothProgress, [0, 0.2, 1], [0.8, 1, 1])
  const y = useTransform(smoothProgress, [0, 1], ["20px", "-20px"])
  return (
    <motion.section 
      ref={containerRef}
      id="about" 
      className="text-white relative py-16 sm:py-20 px-0 sm:px-6 md:px-8 bg-black"
      style={{ opacity }}
    >
      {/* Background gradient effects */}
      <motion.div 
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      <motion.div 
        className="container mx-auto px-0 sm:px-4"
        style={{ scale }}
      >
        <motion.div 
          className="relative backdrop-blur-lg bg-blue-900/30 rounded-none sm:rounded-3xl overflow-hidden border-0 sm:border sm:border-blue-400/10 shadow-2xl"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-col-reverse md:flex-row min-h-[600px]">
            {/* Content Section */}
            <div className="w-full md:w-1/2 p-4 sm:p-8 md:p-12 lg:p-16 space-y-6 relative">
              {/* Decorative element */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              
              <motion.div 
                className="relative"
                style={{ y }}
              >
                <motion.h2 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  A little about me
                </motion.h2>
                
                <div className="space-y-8">
                  <motion.p 
                    className="text-lg md:text-xl leading-relaxed text-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    I am a Product Designer with over 2 years of experience crafting 
                    user-friendly digital products. With a B.Sc. in Sociology & 
                    Anthropology, I leverage my deep understanding of human behaviour to 
                    create impactful designs. I am passionate about making human knowledge 
                    accessible creativity with problem-solving ability.
                  </motion.p>
                  
                  <motion.p 
                    className="text-lg md:text-xl leading-relaxed text-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    My role involves understanding users' needs and behaviors, researching 
                    market trends and competition, and working closely with engineers and 
                    other stakeholders to design and develop functional, intuitive, and 
                    visually appealing products.
                  </motion.p>
                  
                  <motion.p 
                    className="text-lg md:text-xl leading-relaxed text-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Beyond design, I am passionate about cooking meals, learning new 
                    skills, and building meaningful connections through networking 
                    opportunities.
                  </motion.p>
                  
                  <motion.p 
                    className="text-lg md:text-xl leading-relaxed text-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    I believe life is once and you should give it your best shot. I rarely 
                    stop learning and I am always intrigued by new contexts in the tech 
                    space and interpret my insights.
                  </motion.p>
                </div>
              </motion.div>
            </div>

            {/* Image Section */}
            <motion.div 
              className="w-full md:w-1/2 relative"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                className="relative h-[600px] md:h-[810px]"
                style={{
                  y: useTransform(smoothProgress, [0, 1], ["0px", "-40px"])
                }}
              >
                <Image
                  src="/images/ezinne.png"
                  alt="Ezinne Chijioke - Product Designer"
                  width={1200}
                  height={1500}
                  className="w-full h-full object-cover"
                  priority
                  quality={100}
                  style={{
                    objectPosition: '50% 20%' // More focused on face area
                  }}
                />
                {/* Gradient overlays */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-l from-blue-900 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    
    </motion.section>
  )
}



export default About