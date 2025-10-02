'use client'

import Link from 'next/link'
import { Mail, Linkedin, Instagram } from 'lucide-react'

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="bg-[#000000] text-white pt-16 pb-8 sm:pt-24 sm:pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 md:px-8 relative overflow-hidden"
    >
      {/* Base black background */}
      <div className="absolute inset-0 bg-[#000000]" />
      
      {/* Grid pattern with controlled opacity */}
      <div 
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] opacity-[0.04]" 
      />
      
      {/* Rich gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#0A1A4D]/20 via-transparent to-[#4A1A8B]/20" 
      />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Contact Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-white text-black px-6 py-2 rounded-full text-sm font-semibold tracking-wider mb-8">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-blue-400">
            Let's Connect
          </h2>
        </div>

        {/* Contact Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {/* Email */}
          <a
            href="mailto:ezinnenwanedo@gmail.com"
            className="group flex flex-col items-center p-6 sm:p-8 backdrop-blur-lg bg-[#0A1A4D]/10 rounded-2xl border border-[#0A1A4D]/20 hover:border-[#4A88FA]/30 hover:bg-[#0A1A4D]/20 transition-all duration-300 hover:scale-[1.01] hover:-translate-y-[2px]"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 sm:mb-6 relative flex items-center justify-center">
              <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-[#4A88FA] group-hover:text-[#6A9FFF] transition-colors" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">Email</h3>
            <p className="text-sm sm:text-base text-gray-400 group-hover:text-[#6A9FFF] transition-colors duration-300">Drop me a message</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/chijiokefaith"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-6 sm:p-8 backdrop-blur-lg bg-[#0A1A4D]/10 rounded-2xl border border-[#0A1A4D]/20 hover:border-[#4A88FA]/30 hover:bg-[#0A1A4D]/20 transition-all duration-300 hover:scale-[1.01] hover:-translate-y-[2px]"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 sm:mb-6 relative flex items-center justify-center">
              <Linkedin className="w-8 h-8 sm:w-10 sm:h-10 text-[#4A88FA] group-hover:text-[#6A9FFF] transition-colors" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">LinkedIn</h3>
            <p className="text-sm sm:text-base text-gray-400 group-hover:text-[#6A9FFF] transition-colors duration-300">Connect with me</p>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/ezinnejioke"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-6 sm:p-8 backdrop-blur-lg bg-[#0A1A4D]/10 rounded-2xl border border-[#0A1A4D]/20 hover:border-[#4A88FA]/30 hover:bg-[#0A1A4D]/20 transition-all duration-300 hover:scale-[1.01] hover:-translate-y-[2px]"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 sm:mb-6 relative flex items-center justify-center">
              <Instagram className="w-8 h-8 sm:w-10 sm:h-10 text-[#4A88FA] group-hover:text-[#6A9FFF] transition-colors" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">Instagram</h3>
            <p className="text-sm sm:text-base text-gray-400 group-hover:text-[#6A9FFF] transition-colors duration-300">Follow my journey</p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact