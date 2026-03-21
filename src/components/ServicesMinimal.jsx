import React from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiSmartphone, FiGlobe, FiZap, FiLayers, FiSettings } from 'react-icons/fi'

const ServicesMinimal = () => {
  const services = [
    { icon: FiCode, title: 'Frontend Development', description: 'React, Vue.js, TypeScript applications' },
    { icon: FiGlobe, title: '3D Web Experiences', description: 'Three.js, WebGL interactive experiences' },
    { icon: FiSmartphone, title: 'Responsive Design', description: 'Mobile-first, cross-device optimization' },
    { icon: FiLayers, title: 'UI/UX Design', description: 'User-centered design and prototyping' },
    { icon: FiZap, title: 'Performance Optimization', description: 'Speed optimization and code splitting' },
    { icon: FiSettings, title: 'Maintenance & Support', description: 'Ongoing support and updates' }
  ]

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold text-center mb-16 text-cyan-400"
        >
          Services
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-4 p-6 rounded-lg border border-gray-800 hover:border-cyan-400/50 transition-colors"
            >
              <service.icon size={32} className="text-cyan-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesMinimal