import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiFilter, FiCalendar, FiUsers, FiTrendingUp, FiAward, FiStar } from 'react-icons/fi'
import { FaReact, FaVuejs, FaNode } from 'react-icons/fa'
import { SiThreedotjs, SiTypescript, SiTailwindcss, SiMongodb, SiFirebase } from 'react-icons/si'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: 'Interactive 3D Portfolio',
      description: 'A cutting-edge portfolio website featuring immersive 3D elements, smooth animations, and responsive design. Built with React Three Fiber and advanced WebGL techniques.',
      longDescription: 'This project showcases advanced 3D graphics capabilities with interactive elements that respond to user input. Features include real-time 3D rendering, particle systems, smooth transitions, and physics-based animations. The portfolio adapts to user interactions and provides an engaging experience across all devices.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop',
      tech: ['React', 'Three.js', 'WebGL', 'Framer Motion', 'Tailwind CSS'],
      category: '3d',
      github: 'https://github.com/yourusername/3d-portfolio',
      live: 'https://your-portfolio.com',
      stats: { views: '15K+', likes: '500+', downloads: '200+' },
      duration: '3 months',
      team: 'Solo Project',
      client: 'Personal',
      year: '2024',
      challenges: ['Complex 3D animations', 'Performance optimization', 'Cross-browser compatibility'],
      solutions: ['Implemented LOD system', 'Used Web Workers', 'Progressive enhancement'],
      testimonial: {
        text: "The 3D portfolio completely transformed my online presence. The interactive elements are stunning!",
        author: "Sarah Johnson",
        role: "Design Director"
      }
    },
    {
      title: 'E-Commerce Platform',
      description: 'Modern, fully responsive e-commerce platform with advanced filtering, shopping cart functionality, payment integration, and admin dashboard. Optimized for performance and SEO.',
      longDescription: 'Complete e-commerce solution with product management, inventory tracking, order processing, and customer analytics. Integrated with Stripe for secure payments, features real-time inventory updates, advanced search and filtering, customer reviews, and comprehensive admin dashboard with sales analytics.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Tailwind CSS'],
      category: 'fullstack',
      github: 'https://github.com/sultanmawdood/ecommerce-platform',
      live: 'https://your-ecommerce.com',
      stats: { views: '25K+', likes: '800+', downloads: '400+' },
      duration: '4 months',
      team: '3 developers',
      client: 'TechStore Inc.',
      year: '2024',
      challenges: ['Scalable architecture', 'Payment security', 'Real-time updates'],
      solutions: ['Microservices architecture', 'PCI compliance', 'WebSocket integration'],
      testimonial: {
        text: "Our sales increased by 150% after launching this platform. The user experience is exceptional!",
        author: "Mike Chen",
        role: "CEO, TechStore Inc."
      }
    },
    {
      title: 'Task Management Dashboard',
      description: 'Collaborative project management tool with real-time updates, drag-and-drop functionality, team collaboration features, and comprehensive analytics dashboard.',
      longDescription: 'Real-time collaboration platform with WebSocket integration, allowing teams to work together seamlessly. Includes task tracking, progress visualization, team communication, time tracking, file sharing, and advanced reporting with customizable dashboards.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      tech: ['React', 'TypeScript', 'Socket.io', 'Chart.js', 'Material-UI'],
      category: 'web',
      github: 'https://github.com/yourusername/task-manager',
      live: 'https://your-taskmanager.com',
      stats: { views: '18K+', likes: '600+', downloads: '300+' },
      duration: '5 months',
      team: '4 developers',
      client: 'ProductiveCorp',
      year: '2023',
      challenges: ['Real-time synchronization', 'Complex state management', 'Performance with large datasets'],
      solutions: ['Optimistic updates', 'Redux Toolkit', 'Virtual scrolling'],
      testimonial: {
        text: "This dashboard revolutionized how our team collaborates. Productivity increased by 40%!",
        author: "Lisa Rodriguez",
        role: "Project Manager"
      }
    },
    {
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, detailed weather analytics, and personalized weather alerts system.',
      longDescription: 'Progressive Web App with offline functionality, real-time weather data, interactive maps, AI-powered weather predictions, severe weather alerts, and personalized recommendations based on user preferences and location history.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      tech: ['React', 'OpenWeather API', 'Mapbox', 'PWA', 'CSS Modules'],
      category: 'web',
      github: 'https://github.com/yourusername/weather-app',
      live: 'https://your-weather-app.com',
      stats: { views: '12K+', likes: '400+', downloads: '150+' },
      duration: '2 months',
      team: 'Solo Project',
      client: 'Personal',
      year: '2023',
      challenges: ['Offline functionality', 'Location accuracy', 'Data visualization'],
      solutions: ['Service Workers', 'Geolocation API', 'D3.js charts'],
      testimonial: {
        text: "The most accurate and beautiful weather app I've ever used. Love the offline features!",
        author: "David Kim",
        role: "Beta Tester"
      }
    },
    {
      title: 'Social Media Dashboard',
      description: 'Comprehensive social media analytics dashboard with real-time data visualization, engagement metrics, content scheduling, and multi-platform integration.',
      longDescription: 'Advanced analytics platform with D3.js visualizations, real-time data updates, predictive analytics for social media performance, automated reporting, content scheduling, and integration with major social media platforms.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      tech: ['React', 'D3.js', 'REST APIs', 'Redux', 'Styled Components'],
      category: 'fullstack',
      github: 'https://github.com/yourusername/social-dashboard',
      live: 'https://your-social-dashboard.com',
      stats: { views: '20K+', likes: '700+', downloads: '350+' },
      duration: '6 months',
      team: '5 developers',
      client: 'SocialBoost Agency',
      year: '2023',
      challenges: ['Multiple API integrations', 'Data processing', 'Real-time updates'],
      solutions: ['API gateway', 'Background jobs', 'WebSocket connections'],
      testimonial: {
        text: "This dashboard gives us insights we never had before. Our client retention improved significantly!",
        author: "Emma Thompson",
        role: "Marketing Director"
      }
    },
    {
      title: 'Learning Management System',
      description: 'Educational platform with course management, progress tracking, interactive quizzes, video streaming, and student-teacher communication features.',
      longDescription: 'Complete LMS with video hosting, interactive content, progress tracking, certification system, discussion forums, assignment management, grade book, and advanced analytics for educators and administrators.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=300&fit=crop',
      tech: ['React', 'Firebase', 'Video.js', 'Chakra UI', 'Progressive Web App'],
      category: 'web',
      github: 'https://github.com/yourusername/lms-platform',
      live: 'https://your-lms.com',
      stats: { views: '22K+', likes: '750+', downloads: '380+' },
      duration: '8 months',
      team: '6 developers',
      client: 'EduTech Solutions',
      year: '2022',
      challenges: ['Video streaming', 'User management', 'Content delivery'],
      solutions: ['CDN integration', 'Role-based access', 'Adaptive streaming'],
      testimonial: {
        text: "Our students love the platform! Engagement rates increased by 200% since launch.",
        author: "Dr. James Wilson",
        role: "Academic Director"
      }
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: '3d', label: '3D Projects', count: projects.filter(p => p.category === '3d').length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  const achievements = [
    { icon: FiAward, label: 'Awards Won', value: '12+' },
    { icon: FiUsers, label: 'Happy Clients', value: '30+' },
    { icon: FiTrendingUp, label: 'Success Rate', value: '98%' },
    { icon: FiStar, label: 'Average Rating', value: '4.9/5' }
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-cyan-400">Projects</span> & <span className="text-purple-400">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A curated selection of my recent work showcasing expertise in modern web development, 
            3D graphics, and user experience design. Each project demonstrates different aspects 
            of my technical skills and creative problem-solving abilities.
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl p-6 text-center"
            >
              <achievement.icon size={32} className="text-cyan-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{achievement.value}</div>
              <div className="text-gray-400 text-sm">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'glass text-gray-300 hover:text-white'
              }`}
            >
              {category.id === 'all' && <FiFilter size={18} />}
              {category.label}
              <span className="bg-white/20 px-2 py-1 rounded-full text-xs">{category.count}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                rotateX: 5, 
                rotateY: 5, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="glass rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-cyan-400 text-xs font-semibold">{project.year}</span>
                </div>
                
                {/* Stats Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center gap-6 bg-black/60 backdrop-blur-sm"
                >
                  <div className="text-center">
                    <p className="text-cyan-400 font-bold text-lg">{project.stats.views}</p>
                    <p className="text-gray-300 text-xs">Views</p>
                  </div>
                  <div className="text-center">
                    <p className="text-purple-400 font-bold text-lg">{project.stats.likes}</p>
                    <p className="text-gray-300 text-xs">Likes</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <FiCalendar size={12} />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiUsers size={12} />
                    <span>{project.team}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-gray-500/20 text-gray-400 rounded-full text-xs">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <FiGithub size={18} />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <FiExternalLink size={18} />
                      <span className="text-sm">Live</span>
                    </motion.a>
                  </div>
                  
                  <motion.button
                    onClick={() => setSelectedProject(project)}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 rounded-lg text-xs font-semibold hover:from-cyan-500/30 hover:to-purple-500/30 transition-all"
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-white">Client </span>
            <span className="text-cyan-400">Testimonials</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{project.testimonial.text}"</p>
                <div>
                  <p className="text-white font-semibold">{project.testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{project.testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center glass rounded-2xl p-8 border border-cyan-400/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to start your <span className="text-cyan-400">next project</span>?
          </h3>
          <p className="text-gray-300 mb-6">
            Let's discuss your ideas and create something amazing together. I'm always excited to work on new challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="#/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Start a Project
            </motion.a>
            <motion.a
              href="https://github.com/yourusername"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 border border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              <FiGithub size={20} />
              View All Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects