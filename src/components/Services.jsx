import React from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiSmartphone, FiGlobe, FiZap, FiLayers, FiSettings, FiCheck, FiArrowRight, FiClock, FiUsers, FiTrendingUp } from 'react-icons/fi'
import { FaReact, FaVuejs, FaNode } from 'react-icons/fa'
import { SiThreedotjs, SiTypescript, SiTailwindcss } from 'react-icons/si'

const Services = () => {
  const services = [
    {
      icon: FiCode,
      title: 'Frontend Development',
      description: 'Custom web applications built with React, Vue.js, and modern JavaScript frameworks. Responsive, fast, and user-friendly interfaces.',
      features: ['React & Vue.js', 'TypeScript', 'State Management', 'Component Libraries'],
      price: 'From $2,500',
      duration: '2-4 weeks'
    },
    {
      icon: FiGlobe,
      title: '3D Web Experiences',
      description: 'Immersive 3D websites and interactive experiences using Three.js, WebGL, and advanced graphics programming.',
      features: ['Three.js', 'WebGL', 'GLSL Shaders', 'Interactive 3D'],
      price: 'From $3,500',
      duration: '3-6 weeks'
    },
    {
      icon: FiSmartphone,
      title: 'Responsive Design',
      description: 'Mobile-first, responsive designs that work perfectly across all devices and screen sizes with optimal performance.',
      features: ['Mobile-First', 'Cross-Browser', 'Performance Optimized', 'Accessibility'],
      price: 'From $1,800',
      duration: '1-3 weeks'
    },
    {
      icon: FiLayers,
      title: 'UI/UX Design',
      description: 'User-centered design approach creating intuitive interfaces with modern design principles and smooth animations.',
      features: ['User Research', 'Prototyping', 'Design Systems', 'Animation'],
      price: 'From $2,000',
      duration: '2-4 weeks'
    },
    {
      icon: FiZap,
      title: 'Performance Optimization',
      description: 'Website speed optimization, code splitting, lazy loading, and advanced techniques for lightning-fast web applications.',
      features: ['Code Splitting', 'Lazy Loading', 'Bundle Optimization', 'Core Web Vitals'],
      price: 'From $1,200',
      duration: '1-2 weeks'
    },
    {
      icon: FiSettings,
      title: 'Maintenance & Support',
      description: 'Ongoing website maintenance, updates, bug fixes, and technical support to keep your web applications running smoothly.',
      features: ['Bug Fixes', 'Updates', 'Monitoring', '24/7 Support'],
      price: 'From $500/month',
      duration: 'Ongoing'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We discuss your project requirements, goals, and timeline to create a detailed project roadmap.',
      icon: FiUsers
    },
    {
      step: '02', 
      title: 'Design & Prototyping',
      description: 'Creating wireframes, mockups, and interactive prototypes to visualize the final product.',
      icon: FiLayers
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building your application with clean, scalable code and modern best practices.',
      icon: FiCode
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Thorough testing across devices and browsers, followed by deployment and launch.',
      icon: FiZap
    }
  ]

  const technologies = [
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Vue.js', icon: FaVuejs, color: '#4FC08D' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Three.js', icon: SiThreedotjs, color: '#000000' },
    { name: 'Node.js', icon: FaNode, color: '#339933' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' }
  ]

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' }
  ]

  return (
    <section id="services" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-cyan-400">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive web development services tailored to your needs. From concept to deployment, 
            I provide end-to-end solutions that drive results and exceed expectations.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="glass rounded-2xl p-8 group cursor-pointer"
            >
              <div className="mb-6">
                <service.icon 
                  size={48} 
                  className="text-cyan-400 group-hover:text-purple-400 transition-colors duration-300"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:bg-purple-400 transition-colors" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-700">
                <div className="text-cyan-400 font-bold text-lg">{service.price}</div>
                <div className="flex items-center text-gray-400 text-sm">
                  <FiClock className="mr-1" />
                  {service.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-white">Technologies I </span>
            <span className="text-cyan-400">Master</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center p-4 glass rounded-xl group cursor-pointer"
              >
                <tech.icon 
                  size={40} 
                  style={{ color: tech.color }}
                  className="mb-3 group-hover:scale-110 transition-transform"
                />
                <span className="text-gray-300 text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-white">My </span>
            <span className="text-cyan-400">Process</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="glass rounded-2xl p-6 mb-4">
                  <div className="text-4xl font-bold text-cyan-400 mb-4">{step.step}</div>
                  <step.icon size={32} className="text-purple-400 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-white mb-3">{step.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <FiArrowRight className="hidden lg:block absolute top-1/2 -right-4 text-cyan-400 transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-white">Why Choose </span>
            <span className="text-cyan-400">Me?</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-8 text-center">
              <FiTrendingUp size={48} className="text-cyan-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-4">Results-Driven</h4>
              <p className="text-gray-300">I focus on delivering measurable results that drive your business forward and exceed expectations.</p>
            </div>
            <div className="glass rounded-2xl p-8 text-center">
              <FiZap size={48} className="text-purple-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-4">Fast Delivery</h4>
              <p className="text-gray-300">Quick turnaround times without compromising on quality. Your project will be delivered on time, every time.</p>
            </div>
            <div className="glass rounded-2xl p-8 text-center">
              <FiUsers size={48} className="text-cyan-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-4">Collaborative</h4>
              <p className="text-gray-300">I work closely with you throughout the entire process, ensuring your vision becomes reality.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-8">
            Ready to start your project? Let's discuss your requirements and create something amazing together.
          </p>
          <motion.a
            href="#/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
          >
            Get Started
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services