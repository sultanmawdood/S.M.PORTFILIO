import React from 'react'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import ServicesMinimal from '../components/ServicesMinimal'
import ServicesCards from '../components/ServicesCards'
import ServicesTimeline from '../components/ServicesTimeline'

function ServicesComparison() {
  return (
    <div className="relative bg-black min-h-screen">
      <Navbar />
      <div className="pt-20">
        <div className="text-center py-10">
          <h1 className="text-4xl font-bold text-white mb-4">Services Style Comparison</h1>
          <p className="text-gray-400">Scroll down to see different styles</p>
        </div>
        
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-cyan-400 text-center mb-8">Original Style</h2>
          <Services />
        </div>
        
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-cyan-400 text-center mb-8">Minimal Style</h2>
          <ServicesMinimal />
        </div>
        
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-cyan-400 text-center mb-8">Cards Style</h2>
          <ServicesCards />
        </div>
        
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-cyan-400 text-center mb-8">Timeline Style</h2>
          <ServicesTimeline />
        </div>
      </div>
    </div>
  )
}

export default ServicesComparison