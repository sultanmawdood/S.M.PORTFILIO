import React from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiSmartphone, FiGlobe, FiZap, FiLayers, FiSettings } from 'react-icons/fi'

const ServicesCards = () => {
  const services = [
    { icon: FiCode, title: 'Frontend Development', description: 'Modern React & Vue.js applications', color: 'from-blue-500 to-cyan-500' },
    { icon: FiGlobe, title: '3D Web Experiences', description: 'Three.js & WebGL development', color: 'from-purple-500 to-pink-500' },
    { icon: FiSmartphone, title: 'Responsive Design', description: 'Mobile-first responsive layouts', color: 'from-green-500 to-teal-500' },
    { icon: FiLayers, title: 'UI/UX Design', description: 'User-centered design solutions', color: 'from-orange-500 to-red-500' },
    { icon: FiZap, title: 'Performance Optimization', description: 'Lightning-fast web applications', color: 'from-yellow-500 to-orange-500' },
    { icon: FiSettings, title: 'Maintenance & Support', description: 'Ongoing technical support', color: 'from-indigo-500 to-purple-500' }
  ]

  return (
    <section id="services" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">My Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              <div className="relative bg-gray-800 rounded-2xl p-8 border border-gray-700 group-hover:border-transparent transition-all duration-300">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-6`}>
                  <service.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesCards