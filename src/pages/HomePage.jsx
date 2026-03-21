import React from 'react'
import Navbar from '../components/Navbar'
import Hero3D from '../components/Hero3D'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div className="relative">
      <Navbar />
      <Hero3D />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage
