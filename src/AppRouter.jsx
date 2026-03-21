import React, { useState, useEffect } from 'react'
import Portfolio from './Portfolio'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import ServicesPage from './pages/ServicesPage'
import ServicesComparison from './pages/ServicesComparison'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Admin from './pages/Admin'

const AppRouter = () => {
  const [currentRoute, setCurrentRoute] = useState('/')

  useEffect(() => {
    // Simple routing based on URL hash
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || '/'
      setCurrentRoute(hash)
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange() // Set initial route

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const renderRoute = () => {
    switch (currentRoute) {
      case '/admin':
        return <Admin />
      case '/skills':
        return <SkillsPage />
      case '/projects':
        return <ProjectsPage />
      case '/services':
        return <ServicesPage />
      case '/services-comparison':
        return <ServicesComparison />
      case '/about':
        return <AboutPage />
      case '/contact':
        return <ContactPage />
      case '/':
      default:
        return <Portfolio />
    }
  }

  return renderRoute()
}

export default AppRouter
