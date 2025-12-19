'use client'

import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  const projects = [
    {
      title: 'Syndicate Nine',
      description: 'A full-stack web application showcasing modern development practices',
      link: 'https://syndicate-nine.vercel.app/',
      tags: ['Next.js', 'React', 'Tailwind'],
    },
    {
      title: 'Strategic Events',
      description: 'Event management platform with detailed event listings',
      link: 'https://strategic-riu9.vercel.app/events/event-details/global-entrepreneurship-festival',
      tags: ['React', 'Styled-component', 'JavaScript'],
    },
    {
      title: 'Greamco Test',
      description: 'Test project demonstrating development capabilities',
      link: 'https://greamco-test.vercel.app/',
      tags: ['Next.js', 'Styled-component', 'Responsive'],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="terminal-border overflow-hidden bg-gray-900/50 card-hover"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary-black text-primary-green text-sm rounded-full border border-primary-green/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-green hover:text-primary-green-light transition-colors font-medium"
                >
                  View Project
                  <FiExternalLink className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects