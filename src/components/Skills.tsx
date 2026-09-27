'use client'

import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiLayers, FiFilm } from 'react-icons/fi'

const Skills = () => {
  const skillCategories = [
    {
      icon: <FiLayers />,
      category: 'Design',
      skills: ['HTML', 'CSS', 'Styled Components', 'Sass', 'Tailwind'],
    },
    {
      icon: <FiCode />,
      category: 'Programming Languages',
      skills: ['JavaScript', 'Python', 'Motoko'],
    },
    {
      icon: <FiLayers />,
      category: 'Frameworks',
      skills: ['Next.js', 'TypeScript', 'React', 'Django'],
    },
    {
      icon: <FiCode />,
      category: 'Web Development',
      skills: ['Responsive Design', 'Frontend', 'Backend'],
    },
    {
      icon: <FiDatabase />,
      category: 'Database',
      skills: ['Firebase', 'Postgres'],
    },
    {
      icon: <FiCode />,
      category: 'Version Control',
      skills: ['Git'],
    },
    {
      icon: <FiCode />,
      category: 'Problem Solving',
      skills: ['Analytical Thinking', 'Fast Learning'],
    },
    {
      icon: <FiCode />,
      category: 'Communication',
      skills: ['Strong Verbal'],
    },
    {
      icon: <FiFilm />,
      category: 'Media',
      skills: ['Cinematography', 'Video Editing (Premier Pro)'],
    },
        {
      icon: <FiDatabase />,
      category: 'Data Analysis',
      skills: ['Quickbook', 'Excel'],
    }
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="terminal-border p-6 bg-gray-900/50 card-hover"
            >
              <div className="flex items-center mb-4">
                <div className="text-2xl text-primary-green mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-primary-green/10 text-primary-green rounded-full text-sm font-medium border border-primary-green/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills