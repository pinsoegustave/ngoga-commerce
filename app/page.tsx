"use client"
import About from '@/components/About';
import Hero from '@/components/Hero';
import MobileNav from '@/components/MobileNav';
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'

const page = () => {
  const [ nav, setNav ] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  return (
    <div className='overflow-x-hidden'>
      <div>
        {/* Navbar */}
        <MobileNav nav={nav} closeNav={closeNav} /> 
        <Navbar openNav={openNav} />
        {/* Hero Section */}
        <Hero />
        <div className='relative z-[30]'>
          <About />
        </div>
      </div>
    </div>
  )
}

export default page