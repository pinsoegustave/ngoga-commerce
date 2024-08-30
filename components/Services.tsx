import { BuildingLibraryIcon, BuildingOffice2Icon, CodeBracketSquareIcon, CubeIcon, HomeIcon, HomeModernIcon, PhoneIcon, SparklesIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Services = () => {
  return (
    <div className='bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
        <p className='heading'>
            My <span className='text-yellow-400'>Architecture</span>
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
            <div>
                <div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
                    <HomeIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5]'>Residential</h1>
                    <p className='text-[15px] text-[#d3d2d2] font-normal'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laboriosam quos doloremque, praesentium fugiat repellat temporibus nisi.
                    </p>
                </div>
            </div>
            <div>
                <div className='bg-blue-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]'>
                    <BuildingLibraryIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5]'>Commercial</h1>
                    <p className='text-[15px] text-[#d3d2d2] font-normal'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laboriosam quos doloremque, praesentium fugiat repellat temporibus nisi.
                    </p>
                </div>
            </div>
            <div>
                <div className='bg-yellow-500 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
                    <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5]'>Landscape</h1>
                    <p className='text-[15px] text-[#d3d2d2] font-normal'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laboriosam quos doloremque, praesentium fugiat repellat temporibus nisi.
                    </p>
                </div>
            </div>
            <div>
                <div className='bg-slate-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
                    <CubeIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5]'>Interior Design</h1>
                    <p className='text-[15px] text-[#d3d2d2] font-normal'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laboriosam quos doloremque, praesentium fugiat repellat temporibus nisi.
                    </p>
                </div>
            </div>
            <div>
                <div className='bg-orange-700 hover:scale-110 transform transition-all duration-300  uppercase font-semibold text-center p-[2rem]'>
                    <HomeModernIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5]'>Urban Design</h1>
                    <p className='text-[15px] text-[#d3d2d2] font-normal'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laboriosam quos doloremque, praesentium fugiat repellat temporibus nisi.
                    </p>
                </div>
            </div>
            <div>
                <div className='bg-green-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
                    <SparklesIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5]'>Green Design</h1>
                    <p className='text-[15px] text-[#d3d2d2] font-normal'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laboriosam quos doloremque, praesentium fugiat repellat temporibus nisi.
                    </p>
                </div>
            </div>
            <div>
                <div className='bg-purple-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
                    <BuildingOffice2Icon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5]'>Industrial</h1>
                    <p className='text-[15px] text-[#d3d2d2] font-normal'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laboriosam quos doloremque, praesentium fugiat repellat temporibus nisi.
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