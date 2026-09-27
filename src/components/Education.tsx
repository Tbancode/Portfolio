// 'use client'

// import { motion } from 'framer-motion'
// import { FiBook, FiAward } from 'react-icons/fi'

// const Education = () => {
//   const educationItems = [
//     {
//       icon: <FiBook />,
//       title: 'Bachelor of Science in Systems Engineering',
//       institution: 'University of Lagos, Lagos, Nigeria',
//     },
//     {
//       icon: <FiAward />,
//       title: 'Udemy Angela Yue Fullstack Web Development Course',
//       institution: 'Udemy',
//     },
//     {
//       icon: <FiAward />,
//       title: 'Udemy Andre Neagoie Python Course',
//       institution: 'Udemy',
//     },
//     {
//       icon: <FiAward />,
//       title: 'React Native for Mobile Development',
//       institution: 'Self-paced Learning',
//     },
//     {
//       icon: <FiAward />,
//       title: 'Cinematography Certificate',
//       institution: 'Praxis Studio Academy',
//     },
//   ]

//   return (
//     <section id="education" className="py-20">
//       <div className="container mx-auto px-6">
//         <h2 className="section-title">Education & Certifications</h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {educationItems.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="terminal-border p-6 bg-gray-900/50 card-hover"
//             >
//               <div className="flex items-start space-x-4">
//                 <div className="text-2xl text-primary-green">
//                   {item.icon}
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-white mb-2">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-400">{item.institution}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Education

'use client'

import { motion } from 'framer-motion'
import { FiBook, FiAward, FiCalendar } from 'react-icons/fi'

const Education = () => {
  const educationItems = [
    {
      icon: <FiBook />,
      title: 'Bachelor of Science in Systems Engineering',
      institution: 'University of Lagos, Lagos, Nigeria',
    },
    {
      icon: <FiAward />,
      title: 'Udemy Angela Yue Fullstack Web Development Course',
      institution: 'Udemy',
    },
    {
      icon: <FiAward />,
      title: 'Udemy Andre Neagoie Python Course',
      institution: 'Udemy',
    },
    {
      icon: <FiAward />,
      title: 'React Native for Mobile Development',
      institution: 'Self-paced Learning',
    },
    {
      icon: <FiAward />,
      title: 'Cinematography Certificate',
      institution: 'Praxis Studio Academy',
    },
    {
      icon: <FiBook />,
      title: 'Secondary School Certificate (SSCE)',
      institution: 'Ota Total Academy',
      date: '2012 – 2018',
      credits: '9 credits including Mathematics (A1), Physics (A1)',
    },
  ]

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="terminal-border p-6 bg-gray-900/50 card-hover"
            >
              <div className="flex items-start space-x-4">
                <div className="text-2xl text-primary-green">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.institution}</p>
                  {item.date && (
                    <p className="text-gray-400 text-sm mt-1 flex items-center gap-1">
                      <FiCalendar className="inline" size={14} /> {item.date}
                    </p>
                  )}
                  {item.credits && (
                    <p className="text-gray-400 text-sm mt-1">
                      📚 {item.credits}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education