

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiSend, FiHome } from 'react-icons/fi'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxCWNhHUE2C8fx_rLAY22fMROurVSZ1nJl4v66-UWomLr6KhjztWWjbEcD38UjNLTUs_w/exec"
      
      // Create FormData object (required by Google Apps Script)
      const formDataToSend = new FormData()
      formDataToSend.append('Name', formData.name)
      formDataToSend.append('Email', formData.email)
      formDataToSend.append('Message', formData.message)
      formDataToSend.append('Timestamp', new Date().toISOString())
      formDataToSend.append('Source', 'Portfolio Website')

      console.log('Sending form data:', {
        Name: formData.name,
        Email: formData.email,
        Message: formData.message
      })

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formDataToSend, // Use FormData instead of JSON
        mode: 'no-cors' // Important for Google Apps Script
      })

      // Note: With 'no-cors' mode, we can't read the response
      // But the data should still be sent to Google Sheets
      console.log('Form submitted successfully to Google Sheets')
      
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
      
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
      setErrorMessage('Failed to send message. Please try again or email me directly.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span 
            className="bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-transparent"
            style={{
              background: 'linear-gradient(to right, #00FF00, #33FF33)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Get In Touch
          </span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">
              Let&apos;s Work Together
            </h3>
            
            <p className="text-gray-400 leading-relaxed">
              I&apos;m always open to discussing new opportunities and interesting projects. 
              Feel free to reach out if you want to collaborate or just say hello!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <FiPhone className="text-green-500" />
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="text-white font-medium">+2347061846206</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <FiMail className="text-green-500" />
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-white font-medium">horlaryinka0@gmail.com</p>
                </div>
              </div>

                <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <FiHome className="text-green-500" />
                </div>
                <div>
                  <p className="text-gray-400">Address</p>
                  <p className="text-white font-medium">25 Dawud Oluwole Street, Aparadija, Ado-Odo Ota, Ogun State, Nigeria</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 border-2 border-green-500 rounded-lg bg-gray-900/50">
              <h4 className="text-lg font-bold text-green-500 mb-2">
                Quick Learner
              </h4>
              <p className="text-gray-300">
               I&apos;m naturally curious about technology and enjoy exploring new tools, frameworks, and ideas by building with them. I like understanding why things work, not just how, and I&apos;m always refining my skills through hands-on projects.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="border-2 border-green-500 rounded-lg p-8 bg-gray-900/50">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 text-white"
                    placeholder="Your name"
                    disabled={status === 'loading'}
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 text-white"
                    placeholder="Your email"
                    disabled={status === 'loading'}
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 text-white resize-none"
                    placeholder="Your message"
                    disabled={status === 'loading'}
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: status === 'loading' ? 1 : 1.05 }}
                  whileTap={{ scale: status === 'loading' ? 1 : 0.95 }}
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    status === 'loading'
                      ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      : 'bg-green-500 text-black hover:bg-green-600'
                  }`}
                >
                  {status === 'loading' ? (
                    <span className="flex items-center justify-center">
                      <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-3"></span>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <FiSend className="mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
                
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500 rounded-lg"
                  >
                    <p className="text-green-500 text-center">
                      Message sent successfully! I&apos;ll get back to you soon.
                    </p>
                  </motion.div>
                )}
                
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500 rounded-lg"
                  >
                    <p className="text-red-400 text-center">
                      {errorMessage}
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      You can also email me directly at: horlaryinka0@gmail.com
                    </p>
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm