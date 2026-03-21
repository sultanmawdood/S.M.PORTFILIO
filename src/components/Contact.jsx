import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiCheck } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'sultanmawdoodfawzi@gmail.com' },
    { icon: FiPhone, label: 'Phone', value: '+250738339250' },
    { icon: FiMapPin, label: 'Location', value: 'NIZA PLAZA, KN 2 Ave, Kigali' }
  ]

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/sultanmawdood', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/sultanmawdood-fawzi', label: 'LinkedIn' },
  ]

  const responseTime = [
    { label: 'Response Time', value: '24 hours' },
    { label: 'Project Timeline', value: '2-4 weeks' },
    { label: 'Availability', value: 'Immediate' },
    { label: 'Rate', value: 'Competitive' }
  ]

  const services = [
    { title: 'Web Development', description: 'Full-stack web applications with React, Node.js, and modern frameworks' },
    { title: '3D Web Design', description: 'Interactive 3D experiences using Three.js and WebGL' },
    { title: 'UI/UX Design', description: 'Beautiful, responsive interfaces with Tailwind CSS and Framer Motion' },
    { title: 'Performance Optimization', description: 'Fast, efficient applications optimized for speed and user experience' }
  ]

  const whyHireMe = [
    'Expert in React, Three.js, and modern web technologies',
    'Proven track record with 50+ successful projects',
    '5+ years of professional development experience',
    'Fast turnaround time and responsive communication',
    'Dedicated to delivering high-quality, scalable solutions',
    'Continuous learning and staying updated with latest trends'
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-cyan-400">Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on your next project? I'm available for freelance work, 
            full-time opportunities, and exciting collaborations. Let's discuss how we can 
            bring your vision to life with cutting-edge web technologies.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {responseTime.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-lg p-4"
              >
                <p className="text-cyan-400 text-sm font-semibold">{item.label}</p>
                <p className="text-white text-lg font-bold mt-2">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Services I <span className="text-cyan-400">Offer</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <FiCheck size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{service.title}</h4>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Hire Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 glass rounded-2xl p-8 border border-cyan-400/20"
        >
          <h3 className="text-3xl font-bold mb-8 text-white">
            Why <span className="text-cyan-400">Hire Me?</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {whyHireMe.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <FiCheck size={16} className="text-cyan-400" />
                </div>
                <p className="text-gray-300">{reason}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 glass rounded-xl p-4"
                  >
                    <info.icon size={24} className="text-cyan-400" />
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 glass rounded-full flex items-center justify-center text-cyan-400 hover:text-white transition-colors"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-6 border border-cyan-400/20"
            >h
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
