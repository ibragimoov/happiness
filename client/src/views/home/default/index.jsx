import React from 'react'


import Hero from '../hero/Hero'
import Navbar from '../navbar/Navbar'
import Pricing from '../pricing/Pricing'
import Footer from '../footer/Footer'

const Home = () => {

  return (
    <div>
        <Navbar />
        <Hero />
        <Pricing />
        <Footer />
    </div>
  )
}

export default Home