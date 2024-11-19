import React from 'react'
import ResponsiveImage from '../utility/image/ResponsiveImage'
import hero from '@/public/herophone.png'
import button from "@/public/herobutton.svg"

const HeroSection = () => {
  return (
    <section className='lg:flex lg:items-start lg:pb-20 lg:pt-10 lg:gap-4 marginLayout pt-8'>
      <div className='lg:w-2/4'>
        <div className='relative max-w-[220px] mx-auto lg:mx-0 lg:max-w-[377px]'>
          <h3 className={`font-bubblegum font-semibold text-[43px] text-center text-transparent leading-[3rem] bg-gradient-to-t  from-primaryGradient-light  to-primaryGradient-dark bg-clip-text text-stroke lg:text-[80px] lg:text-left lg:leading-[100px] `}>The Bible Odyssey</h3>
          <div className='w-[43px] h-[17px] rounded-sm bg-gradient-to-t from-primaryGradient-light to-primaryGradient-dark flex justify-center items-center absolute top-2 -right-[43px] lg:w-[91px] lg:h-[35px] lg:rounded-md lg:top-5 lg:-right-[91px]'>
            <p className='text-center text-white text-[6px] font-raleway font-bold lg:text-xs'>coming soon</p>
          </div>
        </div>
        <p className='font-raleway text-base text-primaryText text-center lg:text-left lg:text-xl pt-3 lg:max-w-[560px]lg:pt-4'>
          This game is more than just a fun way to spend your time It&apos;s an opportunity to learn about the Bible and grow in your faith.
        </p>
        <div className='mt-5 lg:max-w-[31.0125rem]  lg:mt-8 lg:relative lg:mx-0'>
          <label className='font-raleway text-sm font-bold '>Email Address</label>
          <div className='p-[1px] rounded-md bg-gradient-to-r from-primaryGradient-light to-primaryGradient-dark shadow-[0px_4px_10px_3px_#0000001C] mt-2'>
            <input type='email' placeholder='Enter email address to get updates ' className='w-full pl-3 pr-1 py-4 font-raleway text-sm border-none outline-none lg:text-base rounded-md' />
          </div>
          <div className='mt-2 flex justify-center items-center lg:justify-start' >
            <ResponsiveImage  
              src={button}
              alt='hero'
              width={202}
              height={94}
              placeholder={'empty'}
              layout='fixed'
              className='cursor-pointer'
            />
           </div>
        </div>
      </div>
      <div className='hidden lg:block relative w-2/4' >
        <ResponsiveImage 
          src={hero}
          alt='hero'
          width={569}
          height={679}
        />
      </div>
    </section>
  )
}

export default HeroSection
