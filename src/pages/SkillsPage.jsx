import React from 'react'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'
import Footer from '../components/Footer'

function SkillsPage() {
  return (
    <div className="relative">
      <Navbar />
      <div className="pt-20">
        <Skills />
      </div>
      <Footer />
    </div>
  )
}

export default SkillsPage
