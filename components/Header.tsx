'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + window.innerHeight / 3

      let currentSection = ''
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute('id') || ''

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = '#' + sectionId
        }
      })

      if (currentSection !== activeSection) {
        setActiveSection(currentSection)
        // Update URL hash without scrolling
        if (currentSection) {
          window.history.replaceState(null, '', currentSection)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection])

  const navItems = [
    { name: 'About', href: '#about', component: 'about' },
    { name: 'Experience', href: '#experience', component: 'experience' },
    { name: 'Skills', href: '#skills', component: 'skills' },
    { name: 'Projects', href: '#projects', component: 'projects' },
    { name: 'Contact', href: '#contact', component: 'contact' }
  ]

  const scrollToSection = (sectionId: string) => {
    // Close mobile menu first
    setIsOpen(false)
    
    // Small delay to allow menu closing animation
    setTimeout(() => {
      const element = document.querySelector(sectionId)
      if (element) {
        const headerHeight = 80 // Height of fixed header
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerHeight

        // Smooth scroll to section
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })

        // Update active section
        setActiveSection(sectionId)
      }
    }, 100) // 100ms delay
  }

  // Handle initial hash in URL
  useEffect(() => {
    const hash = window.location.hash
    if (hash && navItems.some(item => item.href === hash)) {
      // Wait for components to mount
      setTimeout(() => {
        scrollToSection(hash)
      }, 500)
    }
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-lg shadow-lg shadow-black/10' 
          : 'bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm'
      } pt-2`}
    >
      <nav className="max-w-l mx-auto px-4 md:px-8 py-6 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl md:text-md font-bold text-white relative"
            >
              <span className="relative z-10">EZINNE CHIJIOKE</span>
              <motion.span
                className="absolute inset-0 bg-white/10 rounded-lg -z-10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`relative px-5 py-3 text-base font-medium transition-all duration-300 rounded-lg group ${
                  activeSection === item.href 
                    ? 'text-white bg-white/10' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <motion.span
                  className="absolute inset-0 bg-white/5 rounded-lg -z-10"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 rounded-lg text-white overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: 1, 
                height: 'auto',
                transition: {
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
              exit={{ 
                opacity: 0, 
                height: 0,
                transition: {
                  duration: 0.2,
                  ease: "easeIn"
                }
              }}
              className="md:hidden overflow-hidden"
            >
              <motion.div 
                className="py-4 px-2 space-y-1 backdrop-blur-lg bg-black/80 mt-4 rounded-2xl border border-white/10"
                variants={{
                  open: {
                    opacity: 1,
                    y: 0,
                    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
                  },
                  closed: {
                    opacity: 0,
                    y: -10,
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
              >
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      // Explicitly close menu and scroll
                      setIsOpen(false);
                      scrollToSection(item.href);
                    }}
                    className={`block w-full text-left px-5 py-4 rounded-lg transition-all duration-300 relative group text-base ${
                      activeSection === item.href 
                        ? 'text-white bg-white/10' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                    variants={{
                      open: { x: 0, opacity: 1 },
                      closed: { x: -20, opacity: 0 }
                    }}
                  >
                    <span className="relative z-10 font-medium">{item.name}</span>
                    <motion.span
                      className="absolute inset-0 bg-white/5 rounded-lg -z-10"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header