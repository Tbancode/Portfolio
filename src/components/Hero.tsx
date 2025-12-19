// 'use client'

// import { motion } from 'framer-motion'
// import { FiMail, FiPhone } from 'react-icons/fi'

// const Hero = () => {
//   return (
//     <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-primary-green/5 to-transparent"></div>
      
//       <div className="container mx-auto px-6 py-20 relative z-10">
//         <div className="max-w-4xl">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h1 className="text-5xl md:text-7xl font-bold mb-6">
//               Alawiye Thaoban{' '}
//               <span className="gradient-text">Olayinka</span>
//             </h1>
            
//             <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
//               Full Stack Developer & Project Manager
//             </h2>
            
//             <p className="text-xl text-gray-400 mb-10 max-w-3xl leading-relaxed">
//               Passionate about building exceptional digital experiences. 
//               With a background in cinematography, I bring a unique storytelling 
//               perspective to every tech project.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="flex flex-wrap gap-6 mb-12"
//           >
//             <a href="#contact" className="btn-primary">
//               Get In Touch
//             </a>
//             <a 
//               href="#projects"
//               className="border-2 border-primary-green text-primary-green px-6 py-3 rounded-lg font-semibold hover:bg-primary-green/10 transition-all duration-300"
//             >
//               View Projects
//             </a>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="flex flex-wrap gap-8 text-gray-400"
//           >
//             <div className="flex items-center space-x-3">
//               <FiPhone className="text-primary-green" />
//               <span>+2347061846206</span>
//             </div>
//             <div className="flex items-center space-x-3">
//               <FiMail className="text-primary-green" />
//               <span>horlaryinka0@gmail.com</span>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Animated background elements */}
//       <div className="absolute right-10 top-1/4 w-64 h-64 bg-primary-green/10 rounded-full blur-3xl animate-pulse-glow"></div>
//       <div className="absolute left-10 bottom-1/4 w-96 h-96 bg-primary-green/5 rounded-full blur-3xl animate-float"></div>
//     </section>
//   )
// }

// export default Hero

'use client'

import { motion } from 'framer-motion'
import { FiMail, FiPhone } from 'react-icons/fi'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Full width background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent"></div>
      
      {/* Content with proper margins */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-7xl font-bold mb-6">
                Alawiye Thaoban{' '}
                <span className="bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-transparent">
                  Olayinka
                </span>
              </h1>
              
              <h2 className="text-xl md:text-3xl text-gray-300 mb-8">
                Full Stack Developer & Project Manager
              </h2>
              
              <p className="text-lg text-gray-400 mb-10 max-w-3xl leading-relaxed">
                Passionate about building exceptional digital experiences. 
                With a background in cinematography, I bring a unique storytelling 
                perspective to every tech project.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a href="#contact" className="px-6 py-3 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-600 transition-colors">
                Get In Touch
              </a>
              <a 
                href="#projects"
                className="px-6 py-3 border-2 border-green-500 text-green-500 rounded-lg font-semibold hover:bg-green-500/10 transition-colors"
              >
                View Projects
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 text-gray-400"
            >
              <div className="flex items-center space-x-3">
                <FiPhone className="text-green-500" />
                <span>+2347061846206</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="text-green-500" />
                <span>horlaryinka0@gmail.com</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute right-10 top-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute left-10 bottom-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-float"></div>
    </section>
  )
}

export default Hero