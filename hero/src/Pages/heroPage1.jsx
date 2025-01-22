import React from 'react'

import Navbar from '../Components/Navbar/navbar'
import Hero from '../Components/Hero/hero'
import Gallery from '../Components/Gallery/gallery'
import Appointment from '../Components/Appointment/appointment'

const heroPage1 = () => {
  return (
    <section>
        <Navbar />
        <Hero />
        <Gallery />
        <Appointment />
    </section>
  )
}

export default heroPage1
