import React from 'react'
import Navbar from './components/Navbar'
import Hero3D from './components/Hero3D'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Portfolio() {
  return (
    <div className="relative">
      <Navbar />
      <Hero3D />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  )
}

export default Portfolio