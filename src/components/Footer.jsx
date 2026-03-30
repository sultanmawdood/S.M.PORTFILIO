import React from 'react'
import { motion } from 'framer-motion'
import { FiHeart, FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import logo from '../images/Logo.png.png'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#/' },
    { name: 'About', href: '#/about' },
    { name: 'Skills', href: '#/skills' },
    { name: 'Projects', href: '#/projects' },
    { name: 'Services', href: '#/services' },
    { name: 'Contact', href: '#/contact' }
  ]

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/sultanmawdood', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/sultanmawdood-fawzi', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:sultanmawdoodfawzi@gmail.com', label: 'Email' }
  ]

  return (
    <footer className="py-16 px-4 bg-black/60">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <img 
              src={logo} 
              alt="Sultan Logo" 
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Passionate about creating exceptional digital experiences through innovative 
              web technologies. Specializing in React, Three.js, and modern frontend development.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-cyan-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <p className="text-gray-400 text-sm">
                <span className="text-cyan-400">Email:</span><br />
                sultanmawdoodfawzi@gmail.com
              </p>
              <p className="text-gray-400 text-sm">
                <span className="text-cyan-400">Location:</span><br />
                Available Worldwide (Remote)
              </p>
              <p className="text-gray-400 text-sm">
                <span className="text-cyan-400">Status:</span><br />
                Available for new projects
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-300">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FiHeart className="text-red-500" />
              </motion.div>
              <span>and lots of coffee</span>
            </div>
            
            <p className="text-gray-400 text-sm">
              © 2026 Frontend Developer Portfolio. All rights reserved.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-4"
          >
            <p className="text-xs text-gray-500">
              Built with React, Three.js, Tailwind CSS, Framer Motion & WebGL
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer