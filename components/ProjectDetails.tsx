'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'

interface ProjectDetailsProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    longDescription?: string
    image: string
    tech: string[]
    liveUrl?: string
    githubUrl?: string
    features?: string[]
    role?: string
    challenges?: string[]
    researchMethods?: string[]
    keyFindings?: string[]
    solutions?: string[]
  }
}

const ProjectDetails = ({ isOpen, onClose, project }: ProjectDetailsProps) => {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 rounded-2xl p-6 z-[101] border border-gray-800 scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-blue-600"
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="fixed right-6 top-6 p-3 rounded-full bg-gray-900/90 text-white border border-gray-700 hover:bg-gray-800 hover:border-gray-600 transition-all duration-200 shadow-lg backdrop-blur-sm z-[102]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X size={20} strokeWidth={2.5} />
            </motion.button>

            {/* Project Content */}
            <div className="space-y-6 pr-2">
              {/* Image */}
              <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold text-white mt-4">{project.title}</h2>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Role */}
              {project.role && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Role</h3>
                  <p className="text-gray-300">{project.role}</p>
                </div>
              )}

              {/* Description */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">About the Project</h3>
                <p className="text-gray-300">{project.longDescription || project.description}</p>
              </div>

              {/* Research Methods */}
              {project.researchMethods && project.researchMethods.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Research & Discovery</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {project.researchMethods.map((method, index) => (
                      <li key={index}>{method}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Findings */}
              {project.keyFindings && project.keyFindings.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Key Research Findings</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {project.keyFindings.map((finding, index) => (
                      <li key={index}>{finding}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Key Features</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges */}
              {project.challenges && project.challenges.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Challenges</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Solutions */}
              {project.solutions && project.solutions.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Solutions & Implementation</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {project.solutions.map((solution, index) => (
                      <li key={index}>{solution}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Links */}
              {/* <div className="flex gap-4 pt-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  >
                    View Live
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors"
                  >
                    View Code
                  </a>
                )}
              </div> */}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ProjectDetails