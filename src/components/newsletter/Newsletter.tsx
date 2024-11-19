import React from 'react'
import ResponsiveImage from '../utility/image/ResponsiveImage'
import mobileSubscribe from '@/public/mobileSubscribeButton.png'
import desktopSubscribe from '@/public/desktopSubscribebutton.png'

const Newsletter = () => {
  return (
    <section id='newsletter' className='bg-gradient-to-t from-primaryGradient-light to-primaryGradient-dark  py-14 px-4 lg:px-0 marginLayout mt-9 lg:mt-28 rounded-md lg:first-letter lg:py-32'>
      <h3 className='text-center font-bubblegum text-4xl leading-[3.125rem] text-stroke text-white tracking-[1px] lg:text-5xl'>Join our 
      newsletter</h3>
      <p className='font-raleway text-base text-center mt-3.5 text-white lg:text-lg lg:mt-6'>Receive The Bible 
      Odyssey updates in your inbox.</p>

      <div className='mt-6 lg:max-w-[45.3125rem] lg:mx-auto lg:mt-16 lg:relative'>
        <div className='p-[1px] rounded-md bg-gradient-to-r from-primaryGradient-light to-primaryGradient-dark shadow-[0px_4px_10px_3px_#0000001C]'>
          <input type='email' placeholder='Enter email address to get updates ' className='w-full pl-3 pr-1 py-[1.425rem] font-raleway text-sm border-none outline-none lg:text-base rounded-md' />
        </div>
        <div className='mt-6 flex justify-center items-center lg:absolute lg:w-fit lg:h-fit lg:top-0 lg:mt-0 lg:right-4 ' >
          <ResponsiveImage 
            alt='subscribe'
            width={225}
            height={94}
            src={mobileSubscribe}
            layout='fixed'
            className='cursor-pointer lg:hidden'
          />
          <ResponsiveImage 
            alt='subscribe_desktop'
            width={104}
            height={32}
            src={desktopSubscribe}
            layout='fixed'
            className='cursor-pointer hidden lg:block'
          />
        </div>
      </div>
    </section>
  )
}

export default Newsletter


