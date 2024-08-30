"use client"
import About from '@/components/About';
import Hero from '@/components/Hero';
import MobileNav from '@/components/MobileNav';
import Navbar from '@/components/Navbar'
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import React, { useState } from 'react'

const page = () => {
  const [ setNav, useSetNav ] = useState(false);
  const openNav = () => useSetNav(true);
  const closeNav = () => useSetNav(false);
  return (
    <div className='overflow-x-hidden'>
      <div>
        {/* Navbar */}
        <MobileNav setNav={setNav} closeNav={closeNav} /> 
        <Navbar openNav={openNav} />
        {/* Hero Section */}
        <Hero />
        <div className='relative z-[30]'>
          <About />
          <Services />
          <Skills />
        </div>
      </div>
    </div>
  )
}

export default page