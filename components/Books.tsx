import Image from 'next/image'
import React from 'react'

const Books = () => {
  return (
    <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
        <h1 className='heading'>MY BO
            <span className='text-yellow-400'>OKS</span>
        </h1>
        <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
            <div data-aos="fade-up">
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all druration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image 
                    src={'/book2.webp'}
                    alt='book1'
                    layout='fill'
                    className='object-contain'
                    />
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all druration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image 
                    src={'/book4.jfif'}
                    alt='book2'
                    layout='fill'
                    className='object-contain'
                    />
                </div>
            </div>
            <div data-aos="fade-right" data-aos-delay="600">
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all druration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image 
                    src={'/book3.jfif'}
                    alt='book3'
                    layout='fill'
                    className='object-contain'
                    />
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="900">
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all druration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image 
                    src={'/book4.webp'}
                    alt='book4'
                    layout='fill'
                    className='object-contain'
                    />
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="1200">
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all druration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image 
                    src={'/book5.webp'}
                    alt='book5'
                    layout='fill'
                    className='object-contain'
                    />
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="1500">
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all druration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image 
                    src={'/book2.jpg'}
                    alt='book5'
                    layout='fill'
                    className='object-contain'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Books