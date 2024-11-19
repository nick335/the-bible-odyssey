import React from 'react'
import ResponsiveImage from '../utility/image/ResponsiveImage'
import Phone from '@/public/aboutPhone.png'


const Aboutus = () => {
  return (
    <section id='about' className='flex flex-col-reverse gap-10 py-6 lg:flex-row items-center lg:mr-[5%]'>
      <div className='relative w-full aspect-[1105/488]'>
        <ResponsiveImage 
          src={Phone}
          alt='phone'
          width={1105}
          height={488}
        />
      </div>
      <div className='mx-4 lg:mx-0 lg:max-w-[700px]'>
        <h2 className='font-bubblegum font-semibold text-5xl leading-[3.7rem] text-center text-transparent bg-gradient-to-t  from-primaryGradient-light to-primaryGradient-dark bg-clip-text text-stroke lg:text-left'>What&apos;s  the bible Odyssey?</h2>
        <p className='font-raleway text-base font-medium text-primaryText leading-8 mt-4 lg:text-xl lg:!leading-9 '>The Bible Odyssey is a mobile Christian game that takes players on a journey through the Bible. The game is designed to be fun and engaging, while also providing players with a deeper understanding of the Bible&apos;s stories. The game features a variety of different game modes, Which includes a Story Mode that Players follow the Bible&apos;s stories in a linear fashion, learning about the characters and events that shaped the world.</p>
      </div>
    </section>
  )
}

export default Aboutus
