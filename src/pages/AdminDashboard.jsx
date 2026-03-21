import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FiUsers, 
  FiMail, 
  FiFileText, 
  FiBarChart2, 
  FiSettings, 
  FiEye,
  FiEdit,
  FiTrash2,
  FiPlus,
  FiDownload,
  FiSearch,
  FiFilter
} from 'react-icons/fi'

const AdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview')
  const [searchTerm, setSearchTerm] = useState('')

  // Mock data
  const stats = [
    { title: 'Total Visitors', value: '12,543', change: '+12%', icon: FiUsers, color: 'from-blue-500 to-cyan-500' },
    { title: 'Messages', value: '89', change: '+5%', icon: FiMail, color: 'from-green-500 to-emerald-500' },
    { title: 'Projects Views', value: '2,341', change: '+18%', icon: FiEye, color: 'from-purple-500 to-pink-500' },
    { title: 'Downloads', value: '456', change: '+8%', icon: FiDownload, color: 'from-orange-500 to-red-500' }
  ]

  const messages = [
    { id: 1, name: 'John Doe', email: 'john@example.com', subject: 'Project Inquiry', date: '2024-01-15', status: 'unread' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', subject: 'Collaboration', date: '2024-01-14', status: 'read' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', subject: 'Freelance Work', date: '2024-01-13', status: 'replied' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', subject: 'Website Design', date: '2024-01-12', status: 'unread' }
  ]

  const projects = [
    { id: 1, title: 'E-Commerce Platform', status: 'completed', views: 234, likes: 45, date: '2024-01-10' },
    { id: 2, title: '3D Portfolio Website', status: 'active', views: 567, likes: 89, date: '2024-01-08' },
    { id: 3, title: 'Task Management App', status: 'active', views: 123, likes: 23, date: '2024-01-05' },
    { id: 4, title: 'Weather App', status: 'draft', views: 45, likes: 12, date: '2024-01-03' }
  ]

  const tabs = [
    { id: 'overview', name: 'Overview', icon: FiBarChart2 },
    { id: 'messages', name: 'Messages', icon: FiMail },
    { id: 'projects', name: 'Projects', icon: FiFileText },
    { id: 'settings', name: 'Settings', icon: FiSettings }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'unread': return 'bg-red-500'
      case 'read': return 'bg-yellow-500'
      case 'replied': return 'bg-green-500'
      case 'completed': return 'bg-green-500'
      case 'active': return 'bg-blue-500'
      case 'draft': return 'bg-gray-500'
      default: return 'bg-gray-500'
    }
  }

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                <stat.icon className="text-white" size={24} />
              </div>
              <span className="text-green-400 text-sm font-medium">{stat.change}</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-gray-400 text-sm">{stat.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-white mb-4">Recent Messages</h3>
          <div className="space-y-3">
            {messages.slice(0, 3).map((message) => (
              <div key={message.id} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                <div className={`w-3 h-3 rounded-full ${getStatusColor(message.status)}`} />
                <div className="flex-1">
                  <p className="text-white font-medium">{message.name}</p>
                  <p className="text-gray-400 text-sm">{message.subject}</p>
                </div>
                <span className="text-gray-500 text-xs">{message.date}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-white mb-4">Top Projects</h3>
          <div className="space-y-3">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                <div className={`w-3 h-3 rounded-full ${getStatusColor(project.status)}`} />
                <div className="flex-1">
                  <p className="text-white font-medium">{project.title}</p>
                  <p className="text-gray-400 text-sm">{project.views} views • {project.likes} likes</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )

  const renderMessages = () => (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search messages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:text-white transition-colors">
          <FiFilter size={16} />
          Filter
        </button>
      </div>

      {/* Messages Table */}
      <div className="glass rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {messages.map((message) => (
                <tr key={message.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(message.status)}`} />
                  </td>
                  <td className="px-6 py-4 text-white font-medium">{message.name}</td>
                  <td className="px-6 py-4 text-gray-300">{message.email}</td>
                  <td className="px-6 py-4 text-gray-300">{message.subject}</td>
                  <td className="px-6 py-4 text-gray-400">{message.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-1 text-cyan-400 hover:text-cyan-300 transition-colors">
                        <FiEye size={16} />
                      </button>
                      <button className="p-1 text-red-400 hover:text-red-300 transition-colors">
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderProjects = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-white">Projects Management</h3>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white hover:shadow-lg transition-all">
          <FiPlus size={16} />
          Add Project
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-xl p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)} text-white`}>
                {project.status}
              </div>
              <div className="flex gap-2">
                <button className="p-1 text-cyan-400 hover:text-cyan-300 transition-colors">
                  <FiEdit size={16} />
                </button>
                <button className="p-1 text-red-400 hover:text-red-300 transition-colors">
                  <FiTrash2 size={16} />
                </button>
              </div>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
            <div className="flex justify-between text-sm text-gray-400 mb-4">
              <span>{project.views} views</span>
              <span>{project.likes} likes</span>
            </div>
            <p className="text-gray-500 text-xs">{project.date}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const renderSettings = () => (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-white">Settings</h3>
      
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Profile Settings */}
        <div className="glass rounded-xl p-6">
          <h4 className="text-lg font-bold text-white mb-4">Profile Settings</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm mb-2">Name</label>
              <input
                type="text"
                defaultValue="Frontend Developer"
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Email</label>
              <input
                type="email"
                defaultValue="your.email@example.com"
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Bio</label>
              <textarea
                rows={3}
                defaultValue="Passionate frontend developer specializing in React and 3D web experiences."
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500 resize-none"
              />
            </div>
          </div>
        </div>

        {/* Site Settings */}
        <div className="glass rounded-xl p-6">
          <h4 className="text-lg font-bold text-white mb-4">Site Settings</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Maintenance Mode</span>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Email Notifications</span>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-cyan-500 transition-colors focus:outline-none">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Analytics Tracking</span>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-cyan-500 transition-colors focus:outline-none">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white hover:shadow-lg transition-all">
          Save Changes
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex justify-between items-center"
        >
          <div>
            <h1 className="text-4xl font-bold mb-2">
              <span className="text-cyan-400">Admin Dashboard</span>
            </h1>
            <p className="text-gray-400">Manage your portfolio and track performance</p>
          </div>
          <button
            onClick={onLogout}
            className="px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 hover:bg-red-500/30 hover:text-red-300 transition-all"
          >
            Logout
          </button>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <tab.icon size={16} />
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'messages' && renderMessages()}
          {activeTab === 'projects' && renderProjects()}
          {activeTab === 'settings' && renderSettings()}
        </motion.div>
      </div>
    </div>
  )
}

export default AdminDashboard