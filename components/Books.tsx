import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Books = () => {
  return (
    <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
        <h1 className='heading'>MY BO
            <span className='text-yellow-400'>OKS</span>
        </h1>
        <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>   
            <Link href={'https://drive.google.com/file/d/1j4BGiud9TA0C_Pi9NYVoJTtXDnftbADX/preview'} target='_blank'>
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
            </Link>
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
            <Link href="https://drive.google.com/file/d/1j4BGiud9TA0C_Pi9NYVoJTtXDnftbADX/preview" className='text-white bg-teal-600 m-4 p-4' target='_blank'> Click here to open the book
            </Link>
        </div>
    </div>
  )
}

export default Books