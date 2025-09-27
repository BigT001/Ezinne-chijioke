'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import ProjectDetails from './ProjectDetails'

const projects = [
  {
    title: "Beautécrate",
    tags: ["UX/UI DESIGN", "E-COMMERCE", "MOBILE-FIRST"],
    description: "A responsive e-commerce platform delivering personalized beauty subscription services for Nigerian users, making skincare routines accessible and consistent.",
    longDescription: "Beautècrate is a responsive e-commerce platform designed to offer personalized, affordable, and convenient beauty subscription services for Nigerian users. It solves the common issue of inconsistent skincare routines by delivering essential and customized products right to customers' doorsteps. The platform is tailored to be flexible, intuitive, and accessible across mobile, tablet, and desktop devices.",
    image: "/images/2.png",
    tech: ["Figma"],
    // liveUrl: "https://beaute-crate.com",
    // githubUrl: "https://github.com/ezinne/beaute-crate",
    role: "Lead UI/UX Designer & Researcher",
    researchMethods: [
      "Conducted in-depth user interviews with 10 diverse participants",
      "Analyzed 50+ survey responses for user preferences and pain points",
      "Performed competitive analysis of local and global beauty subscription services",
      "Created user personas and journey maps based on research findings",
      "Conducted usability testing with prototype iterations"
    ],
    keyFindings: [
      "85% of users preferred mobile shopping experience",
      "Major concern was product authenticity and reliable delivery",
      "Price sensitivity and flexible subscription options were crucial",
      "Users wanted detailed product information and ingredient transparency",
      "Local payment methods and delivery tracking were essential features"
    ],
    features: [
      "Personalized skincare quiz with product matching algorithm",
      "Flexible subscription management system",
      "Mobile-responsive interface with intuitive navigation",
      "Secure payment integration with local Nigerian payment gateways",
      "Real-time delivery tracking system",
      "Product authenticity verification feature",
      "Ingredient transparency and product education section"
    ],
    challenges: [
      "Designing an inclusive platform that caters to diverse skin types and concerns",
      "Creating a seamless mobile-first experience while maintaining feature parity across devices",
      "Implementing a flexible subscription system that adapts to user preferences",
      "Developing trust through transparent product information and authentication",
      "Optimizing the platform for various network conditions and devices"
    ],
    solutions: [
      "Implemented a comprehensive skincare quiz with dynamic product recommendations",
      "Designed an intuitive mobile interface with easy subscription management",
      "Integrated local payment solutions and delivery tracking",
      "Created detailed product pages with ingredient breakdowns and authenticity certificates",
      "Optimized image loading and implemented progressive web app features",
      "Developed an offline-first approach for unstable network conditions"
    ]
  },
  {
    title: "Web3 Hub",
    tags: ["UX/UI DESIGN", "PORTFOLIO"],
    description: "A comprehensive platform for Web3 developers and enthusiasts to learn, collaborate, and build decentralized applications.",
    longDescription: "Web3 Hub serves as a central platform for blockchain developers, providing resources, tools, and a community space for building the future of decentralized applications.",
    image: "/images/11.png",
    tech: ["React", "Solidity", "Web3.js", "Tailwind CSS"],
    liveUrl: "https://web3-hub.dev",
    githubUrl: "https://github.com/ezinne/web3-hub",
    features: [
      "Interactive blockchain tutorials",
      "Smart contract templates",
      "Developer community forum",
      "Real-time gas fee tracker",
      "Project showcase platform"
    ],
    role: "Full Stack Developer & Designer",
    challenges: [
      "Creating an intuitive interface for complex blockchain concepts",
      "Implementing real-time blockchain data integration",
      "Optimizing for Web3 wallet interactions"
    ]
  },
  {
    title: "Writer's Conference",
    tags: ["UX/UI DESIGN", "WEB DESIGN"],
    description: "A digital platform for connecting writers, publishers, and literary agents through virtual conferences and workshops.",
    longDescription: "The Writer's Conference platform revolutionizes how literary professionals connect and collaborate, offering virtual spaces for workshops, pitch sessions, and networking events.",
    image: "/images/writerconference.png",
    tech: ["Next.js", "Node.js", "WebRTC", "Tailwind CSS"],
    liveUrl: "https://writers-conference.com",
    githubUrl: "https://github.com/ezinne/writers-conference",
    features: [
      "Virtual conference rooms",
      "Real-time workshop collaboration",
      "Manuscript review system",
      "Agent-author matching",
      "Event scheduling and management"
    ],
    role: "Lead Frontend Developer",
    challenges: [
      "Building a stable virtual conferencing system",
      "Creating an intuitive manuscript sharing workflow",
      "Implementing secure payment processing for events"
    ]
  }
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <section id="projects" className="min-h-screen bg-[#010208] text-white py-16 sm:py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] opacity-[0.03]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#010208] to-black/90" />
      
      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-500/5 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-tl from-indigo-500/10 via-transparent to-transparent" />
      
      {/* Multiple Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px] animate-pulse duration-10000" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Header Section - Centered */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          {/* MY WORK Label */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-white text-black px-6 py-2 rounded-full text-sm font-semibold tracking-wider shadow-xl"
            >
              MY WORK
            </motion.span>
          </motion.div>

          {/* Heading and Subtext */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Projects
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mx-auto leading-relaxed">
              A collection of work that showcases my approach to solving design challenges.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: false }}
              className="relative group cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              {/* Enhanced Glowing border effects */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-indigo-500/50 rounded-[24px] opacity-40 group-hover:opacity-80 transition-opacity duration-1000 animate-pulse"></div>
              <div className="absolute -inset-[1px] bg-gradient-to-br from-white/50 via-blue-300/30 to-transparent rounded-[24px] opacity-30 group-hover:opacity-70 blur-[3px] transition-all duration-500 animate-shine"></div>
              <div className="absolute -inset-[3px] bg-gradient-to-tl from-indigo-500/30 via-purple-500/20 to-transparent rounded-[24px] opacity-20 group-hover:opacity-60 blur-[4px] transition-all duration-700"></div>
              
              <div className="relative bg-[#0A0A0A]/90 rounded-3xl overflow-hidden p-6 backdrop-blur-xl border border-white/10 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                <div className="flex flex-col md:flex-row gap-6 h-[380px]">
                  <motion.div 
                    className="w-full md:w-1/2 space-y-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                  >
                    {/* CASE STUDY Label */}
                    <div className="mb-3">
                      <span className="text-base text-blue-300 font-medium tracking-wider">
                        CASE STUDY
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-4">
                      {project.title}
                    </h3>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span 
                          key={tagIndex}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full text-base font-medium border border-white/10 shadow-lg backdrop-blur-sm"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                      {project.description}
                    </p>

                    <motion.button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProjectClick(project);
                      }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors gap-2 text-base font-medium"
                    >
                      View Project
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </motion.button>
                  </motion.div>

                  <motion.div 
                    className="w-full md:w-1/2 h-full"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                  >
                    <div className="relative overflow-hidden rounded-xl h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <ProjectDetails
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            project={selectedProject}
          />
        )}
      </div>
    </section>
  )
}

export default Projects