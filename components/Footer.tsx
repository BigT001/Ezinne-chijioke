'use client'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-black text-white py-8 relative overflow-hidden mt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] opacity-[0.02]" />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Navigation Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex items-center gap-10 flex-wrap justify-center">
            <a href="#home" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">About</a>
            <a href="#experience" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">Experience</a>
            <a href="#skills" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="w-full h-px bg-gray-800 mb-8 origin-left"
        />

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-center md:text-left"
        >
          <p className="text-sm text-gray-400">
            © {currentYear} Ezinne Chijioke. All rights reserved.
          </p>
          <h3 className="text-lg font-medium bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Ezinne Chijioke
          </h3>
        </motion.div>
      </div>
    </footer>
  )
}



export default Footer