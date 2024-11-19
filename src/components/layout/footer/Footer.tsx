import React from 'react'
import SocialMedia from '../../utility/socialmedia/SocialMedia'
import FooterLi from './FooterLi'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Footer = () => {
  return (
    <footer className='bg-[#141414] mt-10 lg:mt-28'>
      <div className='marginLayout pt-4 pb-6 px-4 lg:px-0 text-white font-raleway lg:pt-10'>
        <div className='lg:grid lg:grid-cols-3'>
          <div className='w-[192px] h-[40px] flex items-center justify-between rounded-md bg-white/50 px-3 mx-auto lg:mr-auto lg:ml-0'>
            <h3 className='font-bold font-raleway text-xs text-white text-center uppercase'>Select Language</h3>
            <MdOutlineKeyboardArrowDown className='text-white text-2xl' />
          </div>
          <div className='grid grid-cols-1 gap-12 justify-center items-center mt-20 lg:mt-0'>

            <div className='max-w-[220px] mx-auto'>
              <h3 className={`font-bubblegum font-semibold text-5xl text-center text-transparent !leading-[3rem] bg-gradient-to-t  from-primaryGradient-light  to-primaryGradient-dark bg-clip-text text-stroke `}>The Bible Odyssey</h3>
            </div>
            <ul className='grid grid-cols-1 gap-4 lg:flex lg:gap-3 lg:justify-center lg:mt-10'>
              <FooterLi name='Contact Us' id='footer'/>
              <FooterLi name='Privacy Policy' />
              <FooterLi name='Terms of Use' />
            </ul>
          </div>
          <SocialMedia 
            iconStyle='!text-white'
            containerStyle='!flex-row-reverse !justify-center lg:!items-end lg:!justify-start mt-12 lg:mt-0'
          />
        </div>      

        <p className='text-center text-xs mt-16 lg:mt-24'>The Bible 
        Odyssey © 2023 All rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
