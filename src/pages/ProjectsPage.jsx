import React from 'react'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

function ProjectsPage() {
  return (
    <div className="relative">
      <Navbar />
      <div className="pt-20">
        <Projects />
      </div>
      <Footer />
    </div>
  )
}

export default ProjectsPage
