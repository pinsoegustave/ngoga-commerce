import React from 'react'

interface Props {
    title: string;
    year: string;
}

const SkillSong = ({ year, title }: Props) => {
  return (
    <div className='mb-[4rem] md:mb-[8rem]'>
        <span className='px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e6a5] '>{year}</span>
        <h1 className='mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[30px] text-white'>{title}</h1>
        <p className='text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80'>My passion for justice fuels my work as a songwriter, turning inspirational tales of resiliency and hope into stirring lyrics. I share my changing path of purpose, inspire change, and connect profoundly with audiences through song. 
        </p>
    </div>
  )
}

export default SkillSong