import React from 'react'
import { motion } from 'framer-motion'
import { FiAward, FiTarget, FiHeart, FiCode } from 'react-icons/fi'
import { FaGraduationCap, FaBriefcase, FaReact, FaBook, FaCube, FaLaptopCode, FaCodeBranch } from 'react-icons/fa'
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiThreedotjs } from 'react-icons/si'
import profileImg from '../images/rabot.png'

const About = () => {
  const achievements = [
    { icon: FiCode, label: 'Projects Completed', value: '20+' },
    { icon: FiTarget, label: 'Client Satisfaction', value: '100%' },
    { icon: FiAward, label: 'Years Experience', value: '2+' },
    { icon: FiHeart, label: 'Happy Clients', value: '30+' }
  ]

  const highlights = [
    'Expert in React and modern JavaScript frameworks',
    'Specialized in creating immersive 3D web experiences',
    'Proficient in full-stack development with Node.js and databases',
    'Strong focus on performance optimization and accessibility',
    'Experienced in UI/UX design and responsive web development',
    'Passionate about clean code and best practices'
  ]

  const education = [
    { icon: FaGraduationCap, title: "Bachelor's Degree", description: 'Computer Science' },
    { icon: FaReact, title: 'React Certification', description: 'Advanced React Patterns' },
    { icon: FaLaptopCode, title: 'Web Development', description: 'Full-Stack Specialization' },
    { icon: FaCube, title: '3D Graphics', description: 'WebGL & Three.js Mastery' }
  ]

  const experience = [
    { icon: FaBriefcase, title: 'Senior Frontend Developer', description: 'Tech Company (2021-Present)' },
    { icon: FaLaptopCode, title: 'Frontend Developer', description: 'Digital Agency (2019-2021)' },
    { icon: FaCodeBranch, title: 'Junior Developer', description: 'Startup (2018-2019)' }
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section with Split Layout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-2 min-h-[80vh] mb-32 gap-12"
        >
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <img 
              src={profileImg} 
              alt="Developer Profile" 
              className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
              style={{ objectPosition: '50% 20%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center px-8 md:px-16 py-16 relative overflow-hidden rounded-2xl"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 right-10 w-32 h-32 border border-cyan-400/20 rounded-full"></div>
              <div className="absolute bottom-20 right-20 w-20 h-20 border border-purple-400/20 rounded-full"></div>
              <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-cyan-400 rounded-full"></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <div className="mb-6">
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mb-6"></div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  About
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
                </h1>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-lg">
                Passionate frontend developer with 2+ years of experience creating exceptional digital experiences. 
                Specialized in React ecosystem, 3D web development, and modern UI/UX design principles.
              </p>
              
              <div className="flex gap-4">
                <a
                  href="#/projects"
                  className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-black font-semibold rounded hover:shadow-lg hover:shadow-cyan-400/25 transition-all"
                >
                  Explore Work
                </a>
                <a
                  href="#/projects"
                  className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded hover:bg-cyan-400 hover:text-black transition-all flex items-center gap-2"
                >
                  <span className="w-4 h-4 bg-cyan-400 rounded-full flex items-center justify-center">
                    <span className="w-0 h-0 border-l-2 border-l-black border-y-transparent border-y-2 ml-0.5"></span>
                  </span>
                  View Projects
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6 text-center"
            >
              <achievement.icon size={32} className="text-cyan-400 mx-auto mb-3" />
              <p className="text-gray-400 text-sm mb-2">{achievement.label}</p>
              <p className="text-3xl font-bold text-white">{achievement.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">My Journey</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm a dedicated frontend developer with a passion for creating 
              beautiful, functional, and user-friendly web applications. My journey 
              began with curiosity about how websites work and has evolved into 
              expertise in cutting-edge technologies like React, Three.js, and modern CSS frameworks.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              I specialize in building responsive, accessible, and performant web applications 
              that provide exceptional user experiences. My expertise spans from traditional 
              web development to immersive 3D experiences using WebGL and Three.js.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Always staying updated with the latest technologies and best practices, 
              I'm committed to writing clean, maintainable code and following industry 
              standards for optimal performance and accessibility.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Profile Image */}
            <div className="glass rounded-2xl p-6 mb-6">
              <div className="relative w-full h-64 rounded-xl overflow-hidden bg-gray-800">
                <img 
                  src={profileImg} 
                  alt="Developer Profile" 
                  className="w-full h-full object-contain"
                  style={{ imageRendering: 'crisp-edges' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-bold text-lg">Frontend Developer</p>
                  <p className="text-sm text-gray-300">React & 3D Specialist</p>
                </div>
              </div>
            </div>
            
            {/* Tech Stack Visual */}
            <div className="glass rounded-xl p-4">
              <h4 className="text-white font-semibold mb-3 text-center">Tech Stack</h4>
              <div className="flex justify-center items-center gap-4 flex-wrap">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <SiHtml5 className="text-white text-2xl" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <SiCss3 className="text-white text-2xl" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
                  <SiJavascript className="text-black text-2xl" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <SiReact className="text-white text-2xl" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-800 rounded-lg flex items-center justify-center">
                  <SiThreedotjs className="text-white text-2xl" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            What Makes Me <span className="text-cyan-400">Different</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl p-4 flex items-start gap-3 hover:border-cyan-400/30 transition-all"
              >
                <div className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                </div>
                <p className="text-gray-300">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            My <span className="text-purple-400">Workspace</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Coding Setup */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass rounded-xl p-6 text-center"
            >
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop" 
                alt="Development Setup" 
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="text-cyan-400 font-semibold mb-2">Development Setup</h4>
              <p className="text-gray-400 text-sm">Modern tools & clean workspace</p>
            </motion.div>

            {/* Design Process */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass rounded-xl p-6 text-center"
            >
              <img 
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop" 
                alt="Design Process" 
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="text-purple-400 font-semibold mb-2">Design Process</h4>
              <p className="text-gray-400 text-sm">UI/UX focused development</p>
            </motion.div>

            {/* 3D Development */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass rounded-xl p-6 text-center"
            >
              <img 
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop" 
                alt="3D Development" 
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="text-cyan-400 font-semibold mb-2">3D Web Experiences</h4>
              <p className="text-gray-400 text-sm">Three.js & WebGL expertise</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            My <span className="text-cyan-400">Philosophy</span>
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I believe in creating web experiences that are not just visually stunning, but also 
            highly functional, accessible, and performant. Every project is an opportunity to solve 
            real problems and make a positive impact. I'm committed to continuous learning, 
            collaboration, and delivering excellence in every aspect of my work.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
