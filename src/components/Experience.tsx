'use client'

import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar } from 'react-icons/fi'

const Experience = () => {
  const experiences = [
    {
      title: 'Web Developer',
      company: 'Jaytech Design Studios',
      period: 'October 2023 - Present',
      description: [
        'Developed and maintained responsive websites using modern technologies',
        'Collaborated with cross-functional teams to implement new features',
      ],
    },
    {
      title: 'Project Manager',
      company: 'NPA (Internship)',
      period: 'April 2024 - September 2024',
      description: [
        'Managed mobile app development project',
        'Coordinated between development teams and stakeholders',
      ],
    },
    {
      title: 'Web Developer',
      company: 'Personal Projects',
      period: 'Ongoing',
      description: [
        'Built responsive websites using HTML, CSS, and ReactJS',
        'Implemented troubleshooting and debugging processes',
        'Contributed to planning and execution of web projects',
      ],
    },
        {
      title: 'Financial Systems analyst',
      company: 'Rainbow Hide & Skin',
      period: 'Ongoing',
      description: [
       'Analyzing financial and business processes',
       'Reviewing and testing financial systems, documenting functional and technical requirements', 
       'Working with cross-functional teams to integrate technology to improve the efficiency of operations and reporting financial data',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="terminal-border p-8 bg-gray-900/50 card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-primary-green text-lg">{exp.company}</p>
                </div>
                <div className="flex items-center mt-2 md:mt-0">
                  <FiCalendar className="text-primary-green mr-2" />
                  <span className="text-gray-400">{exp.period}</span>
                </div>
              </div>
              
              <ul className="space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary-green mr-2">▸</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience