import React from 'react'
import Particle from './Particle'
import TextEffect from './TextEffect'
import Image from 'next/image'
import { EnvelopeIcon } from '@heroicons/react/16/solid'

const Hero = () => {
  return (
    <div className='h-[90vh] bg-black/40 mt-[10vh] bg-cover bg-center'>
        <Particle />
        <div className='relative w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
            <div>
                <h1 className='text-[35px] md:text-[50px] text-black font-bold'>
                    Hi, I&apos;m <span className='text-yellow-400'>NGOGA</span>
                </h1>
                <TextEffect />
                <p className='mt-[2rem] text-[18px] text-[#ffffff92]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis vero odio minima laboriosam, explicabo nam sapiente.</p>
                <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                    <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
                        <p>Get Into Touch With Me</p>
                        <EnvelopeIcon className='w-[1.6rem] h-[1.7rem] text-black' />
                    </button>
                </div>
            </div>
            <div className='w-[400px] hidden bg-[white] relative lg:flex items-center rounded-full h-[400px]'>
                <Image 
                    src={'/suitman.webp'}
                    alt='user'
                    layout='fill'
                    className='object-cover rounded-full'
                />
            </div>
        </div>
    </div>
  )
}

export default Hero