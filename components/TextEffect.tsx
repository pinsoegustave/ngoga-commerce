import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'an Engineer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Architect',
        1000,
        'Song writer',
        1000,
        'Rapper',
        1000,
        'Author',
        1000
      ]}
      wrapper="span"
      speed={50}
      className='text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase'
      repeat={Infinity}
    />
  );
};

export default TextEffect;