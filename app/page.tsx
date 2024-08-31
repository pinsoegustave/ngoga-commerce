"use client"
import About from '@/components/About';
import Blog from '@/components/Blog';
import Books from '@/components/Books';
import Hero from '@/components/Hero';
import MobileNav from '@/components/MobileNav';
import Navbar from '@/components/Navbar'
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';
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
          <Books />
          <Testimonials />
          <Blog />
        </div>
      </div>
    </div>
  )
}

export default Page;