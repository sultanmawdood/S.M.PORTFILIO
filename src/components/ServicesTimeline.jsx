import React from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiSmartphone, FiGlobe, FiZap, FiLayers, FiSettings } from 'react-icons/fi'

const ServicesTimeline = () => {
  const services = [
    { icon: FiCode, title: 'Frontend Development', description: 'Custom React & Vue.js applications with modern JavaScript frameworks' },
    { icon: FiGlobe, title: '3D Web Experiences', description: 'Immersive Three.js and WebGL interactive experiences' },
    { icon: FiSmartphone, title: 'Responsive Design', description: 'Mobile-first responsive designs for all devices' },
    { icon: FiLayers, title: 'UI/UX Design', description: 'User-centered design with modern principles' },
    { icon: FiZap, title: 'Performance Optimization', description: 'Speed optimization and advanced techniques' },
    { icon: FiSettings, title: 'Maintenance & Support', description: 'Ongoing support and technical maintenance' }
  ]

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-6xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          Services
        </motion.h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-400"></div>
          
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative flex items-start mb-12 last:mb-0"
            >
              <div className="absolute left-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900"></div>
              <div className="ml-20 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <service.icon size={28} className="text-cyan-400 mr-4" />
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesTimeline