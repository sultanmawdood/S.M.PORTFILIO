import React from 'react'
import { motion } from 'framer-motion'

const Timeline = () => {
  const timeline = [
    {
      year: '2022',
      title: 'Web Development Foundation',
      description: 'Started my journey with HTML5, CSS3, and JavaScript fundamentals. Built first static websites and learned responsive design principles.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2022',
      title: 'Advanced JavaScript & React',
      description: 'Mastered ES6+ features, DOM manipulation, and React ecosystem. Completed multiple projects including SPAs and component libraries.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2023',
      title: 'ALX Frontend Specialization',
      description: 'Completed intensive frontend development program focusing on modern frameworks, testing, and industry best practices.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      year: '2023',
      title: 'Professional Development',
      description: 'Started freelancing and working on client projects. Gained experience in project management, client communication, and agile methodologies.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      year: '2024',
      title: '3D Web & Advanced Technologies',
      description: 'Specialized in Three.js, WebGL, and immersive web experiences. Expanded skills to include TypeScript, advanced state management, and performance optimization.',
      color: 'from-red-500 to-pink-500'
    },
    {
      year: '2024',
      title: 'Full-Stack Integration',
      description: 'Enhanced backend knowledge with Node.js, databases, and API development. Currently building full-stack applications and exploring cloud technologies.',
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-cyan-400">My Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional development journey from beginner to experienced frontend developer, 
            highlighting key milestones, learning achievements, and career progression.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full" />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-cyan-500 z-10" />

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-bold mb-4`}>
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline