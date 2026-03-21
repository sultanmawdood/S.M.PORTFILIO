import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function ContactPage() {
  return (
    <div className="relative">
      <Navbar />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage
