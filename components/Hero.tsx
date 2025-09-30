'use client'

import Link from 'next/link'
import { useRef, useEffect, useState, RefObject } from 'react'

const useScrollAnimation = <T extends Element>(ref: RefObject<T | null>) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility based on intersection status
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: "0px"
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return isVisible;
};

const Hero = () => {
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const descriptionVisible = useScrollAnimation(descriptionRef)
  const titleVisible = useScrollAnimation(titleRef)
  
  return (
    <section 
      ref={sectionRef}
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-[#000000] text-white relative py-16 md:py-20"
    >
      {/* Solid Background */}
      <div className="absolute inset-0 bg-[#000000]" />
      
      <div className="relative w-full flex flex-col items-center justify-center">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col items-center justify-center gap-8 md:gap-10">
            {/* Description */}
            <p 
              ref={descriptionRef}
              className={`text-lg sm:text-xl md:text-2xl text-center max-w-3xl mx-auto leading-relaxed text-white font-light transform transition-transform duration-500 ease-out ${
                descriptionVisible ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'
              }`}
              style={{
                transitionProperty: 'transform, opacity',
                willChange: 'transform, opacity'
              }}
            >
              If you&apos;ve ever thought of giving your users a beautiful experience using your 
              product, then you should know that I am the perfect designer for the job. I focus 
              on crafting seamless user experiences that aligns with business goals.
            </p>

            {/* Title Section */}
            <div 
              ref={titleRef}
              className={`text-center space-y-6 transform transition-transform duration-500 ease-out ${
                titleVisible ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'
              }`}
              style={{
                transitionProperty: 'transform, opacity',
                willChange: 'transform, opacity'
              }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
                Hi, I&apos;m{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">
                    Ezinne Chijioke,
                  </span>
                </span>
              </h1>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
                a Product Designer
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row items-center gap-6 mt-8">
              <Link 
                href="#contact"
                className="bg-[#14213D] hover:bg-[#1C2B4A] text-white px-8 py-3 rounded-lg text-lg shadow-lg transition-colors duration-200"
              >
                Hire Me
              </Link>
              
              <a 
                href="/CV/Ezinne.pdf"
                className="bg-white hover:bg-gray-50 text-[#14213D] px-8 py-3 rounded-lg text-lg shadow-lg transition-colors duration-200"
                download
              >
                Download My CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero