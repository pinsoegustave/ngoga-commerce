import { BuildingLibraryIcon, BuildingOffice2Icon, CodeBracketSquareIcon, CubeIcon, HomeIcon, HomeModernIcon, PhoneIcon, SparklesIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Services = () => {
  return (
    <div className='bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
        <p className='heading'>
            My <span className='text-yellow-400'>Architecture</span>
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
            <div data-aos="fade-right" data-aos-delay="500">
                <div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
                    <HomeIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5]'>Residential</h1>
                    <p className='text-[13px] text-[#d3d2d2] font-normal'>
                     Home designs prioritize classic elegance and high-end practicality. With an emphasis on elegant details and efficient use of space, every house is painstakingly designed. Our living spaces are designed to perfectly blend functionality and style, superior setting that satisfies the ever-changing demands of contemporary life.
                    </p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
                <div className='bg-blue-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]'>
                    <BuildingLibraryIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5]'>Commercial</h1>
                    <p className='text-[15px] text-[#d3d2d2] font-normal'>
                    For commercial spaces, Ngoga Commerce designs dynamic, inviting, and practical environments. Each project is tailored to meet business goals while delivering an engaging and memorable experience for clients and customers.
                    </p>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-delay="500"> 
                <div className='bg-yellow-500 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
                    <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5]'>Landscape</h1>
                    <p className='text-[15px] text-[#d3d2d2] font-normal'>
                    Ngoga Commerce&apos;s landscape designs highlight natural beauty and sustainability. We craft outdoor areas that promote biodiversity, feature native plantings, and create enjoyable spaces for relaxation, play, and connection with nature.
                    </p>
                </div>
            </div>
            <div>
                <div className='bg-slate-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
                    <CubeIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5]'>Interior Design</h1>
                    <p className='text-[15px] text-[#d3d2d2] font-normal'>
                    Our interior design philosophy combines sophistication with practicality. We create environments that embody our clients’ visions, featuring refined finishes, cohesive layouts, and a timeless aesthetic that enriches every interior space.
                    </p>
                </div>
            </div>
            <div>
                <div className='bg-orange-700 hover:scale-110 transform transition-all duration-300  uppercase font-semibold text-center p-[2rem]'>
                    <HomeModernIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5]'>Urban Design</h1>
                    <p className='text-[15px] text-[#d3d2d2] font-normal'>
                    Ngoga Commerce focuses on creating urban environments that promote connectivity, accessibility, and community involvement. We design flexible public spaces that encourage social interactions, prioritize walkability, and blend harmoniously with the city&apos;s identity.
                    </p>
                </div>
            </div>
            <div>
                <div className='bg-green-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
                    <SparklesIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5]'>Green Design</h1>
                    <p className='text-[15px] text-[#d3d2d2] font-normal'>
                    Our approach to green design prioritizes sustainability through the use of eco-friendly materials and methods. We strive to minimize environmental impact, improve energy efficiency, and create a balance between constructed spaces and their natural settings.
                    </p>
                </div>
            </div>
            <div>
                <div className='bg-purple-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
                    <BuildingOffice2Icon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5]'>Industrial</h1>
                    <p className='text-[15px] text-[#d3d2d2] font-normal'>
                    In the realm of industrial design, Ngoga Commerce merges practicality with innovative style, developing spaces that enhance efficiency and adaptability. Our designs are aimed at optimizing workflows, ensuring longevity, and harmonizing aesthetics with functionality.
                    </p>
                </div>
            </div>
            <div>
                <div className='bg-red-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]'>
                    <PhoneIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5]'>Need any help?</h1>
                    <p className='text-[15px] text-[#d3d2d2] font-normal'>
                        Feel free to reach out.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services