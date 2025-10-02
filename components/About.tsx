'use client'

import Image from 'next/image'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const About = () => {
  const { ref: sectionRef, isInView: sectionInView } = useScrollAnimation<HTMLElement>()
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation<HTMLDivElement>()
  const { ref: imageRef, isInView: imageInView } = useScrollAnimation<HTMLDivElement>()

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className={`text-white relative py-16 sm:py-20 px-0 sm:px-6 md:px-8 bg-black transform transition-all duration-1000 ${
        sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-black" />
      
      <div className="container mx-auto px-0 sm:px-4">
        <div className="relative backdrop-blur-lg bg-blue-900/30 rounded-none sm:rounded-3xl overflow-hidden border-0 sm:border sm:border-blue-400/10 shadow-2xl">
          <div className="flex flex-col-reverse md:flex-row min-h-[600px]">
            {/* Content Section */}
            <div 
              ref={contentRef}
              className={`w-full md:w-1/2 p-4 sm:p-8 md:p-12 lg:p-16 space-y-6 relative transform transition-all duration-1000 delay-300 ${
                contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Decorative element */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              
              <div className="relative">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10">
                  A little about me
                </h2>
                
                <div className="space-y-8">
                  <p className="text-lg md:text-xl leading-relaxed text-gray-100">
                    I am a Product Designer with over 2 years of experience crafting 
                    user-friendly digital products. With a B.Sc. in Sociology & 
                    Anthropology, I leverage my deep understanding of human behaviour to 
                    create impactful designs. I am passionate about making human knowledge 
                    accessible creativity with problem-solving ability.
                  </p>
                  
                  <p className="text-lg md:text-xl leading-relaxed text-gray-100">
                    My role involves understanding users' needs and behaviors, researching 
                    market trends and competition, and working closely with engineers and 
                    other stakeholders to design and develop functional, intuitive, and 
                    visually appealing products.
                  </p>
                  
                  <p className="text-lg md:text-xl leading-relaxed text-gray-100">
                    Beyond design, I am passionate about cooking meals, learning new 
                    skills, and building meaningful connections through networking 
                    opportunities.
                  </p>
                  
                  <p className="text-lg md:text-xl leading-relaxed text-gray-100">
                    I believe life is once and you should give it your best shot. I rarely 
                    stop learning and I am always intrigued by new contexts in the tech 
                    space and interpret my insights.
                  </p>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div 
              ref={imageRef}
              className={`w-full md:w-1/2 relative transform transition-all duration-1000 delay-500 ${
                imageInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative h-[600px] md:h-[810px]">
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
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About