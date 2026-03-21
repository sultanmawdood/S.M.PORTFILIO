import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { FiHome, FiUser, FiCode, FiBriefcase, FiFolder, FiMail } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState('Home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    // Set active item based on current route
    const currentPath = window.location.hash
    if (currentPath === '#/' || currentPath === '') {
      setActiveItem('Home')
    } else if (currentPath === '#/about') {
      setActiveItem('About')
    } else if (currentPath === '#/skills') {
      setActiveItem('Skills')
    } else if (currentPath === '#/services') {
      setActiveItem('Services')
    } else if (currentPath === '#/projects') {
      setActiveItem('Projects')
    } else if (currentPath === '#/contact') {
      setActiveItem('Contact')
    }
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('hashchange', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('hashchange', handleScroll)
    }
  }, [])

  const navItems = [
    { name: 'Home', href: '#/', icon: FiHome },
    { name: 'About', href: '#/about', icon: FiUser },
    { name: 'Skills', href: '#/skills', icon: FiCode },
    { name: 'Services', href: '#/services', icon: FiBriefcase },
    { name: 'Projects', href: '#/projects', icon: FiFolder },
    { name: 'Contact', href: '#/contact', icon: FiMail }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-lg shadow-cyan-400/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-black animate-pulse"></div>
            </div>
            <div className="ml-3">
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Sultan
              </span>
              <p className="text-xs text-gray-400 -mt-1">Developer</p>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveItem(item.name)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl transition-all duration-300 cursor-pointer font-medium group ${
                    activeItem === item.name
                      ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-400 border border-cyan-400/50 shadow-lg shadow-cyan-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/10 hover:border hover:border-gray-600'
                  }`}
                >
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                  <span>{item.name}</span>
                </motion.a>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.a
              href="#/contact"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 border border-transparent hover:border-cyan-400/50"
            >
              Let's Talk
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className="relative p-3 text-white text-2xl hover:text-cyan-400 transition-colors rounded-xl hover:bg-white/5"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <HiX /> : <HiMenu />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden bg-black/95 backdrop-blur-xl rounded-2xl p-6 mt-4 border border-cyan-400/20 shadow-2xl shadow-cyan-400/10"
          >
            <div className="space-y-2">
              {navItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      setIsOpen(false)
                      setActiveItem(item.name)
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center space-x-3 w-full py-3 px-4 rounded-xl transition-all cursor-pointer font-medium ${
                      activeItem === item.name
                        ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-400 border border-cyan-400/50 shadow-lg shadow-cyan-500/20'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.name}</span>
                  </motion.a>
                )
              })}
            </div>
            
            <motion.a
              href="#/contact"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="block w-full mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-white font-semibold transition-all duration-300 text-center hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Let's Talk
            </motion.a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar