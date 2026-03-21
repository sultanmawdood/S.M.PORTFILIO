import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Timeline from '../components/Timeline'
import Footer from '../components/Footer'

function AboutPage() {
  return (
    <div className="relative">
      <Navbar />
      <div className="pt-20">
        <About />
        <Timeline />
      </div>
      <Footer />
    </div>
  )
}

export default AboutPage
