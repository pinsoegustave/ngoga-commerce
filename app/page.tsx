"use client"
import About from '@/components/About';
import Hero from '@/components/Hero';
import MobileNav from '@/components/MobileNav';
import Navbar from '@/components/Navbar'
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import React, { useState } from 'react'

const Page = () => {
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
          <Services />
          <Skills />
        </div>
      </div>
    </div>
  )
}

export default Page;