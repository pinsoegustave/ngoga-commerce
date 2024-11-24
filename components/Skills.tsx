import React from 'react'
import SkillsItem from './SkillsItem'
import SkillsLang from './SkillsLang'
import SkillAuthor from './SkillAuthor'
import SkillSong from './SkillSong'

const Skills = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
      <h1 className='heading'>
        Education & <span className='text-yellow-400'>Skill</span>
      </h1>
      <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
        <div>
          <SkillsItem title="Commercial Architect" year="2023 - 2024" />
          <SkillsItem title="Industrial Engineer" year="2023 - 2024" />
          <SkillsLang skill1="AutoCad" skill2="V-Ray" skill3="Enscape" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]" />
        </div>
        <div>
          <SkillSong title="Songs writer" year="2014 - 2024" />
          <SkillAuthor title="Author" year="2022 - 2024" />
          <SkillsLang skill1="Lumion" skill2="Audiomack" skill3="FL Studio" level1="w-[81%]" level2="w-[78%]" level3="w-[60%]" />
        </div>
      </div>
    </div> 
  )
}

export default Skills