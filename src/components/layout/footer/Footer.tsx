import React from 'react'
import SocialMedia from '../../utility/socialmedia/SocialMedia'
import ContactUs from './ContactUs';

const Footer = () => {
  return (
    <footer className='bg-[#141414] mt-10 lg:mt-28'>
      <div className='marginLayout pt-4 pb-6 px-4 lg:px-0 text-white font-raleway lg:pt-10'>
        <div className='lg:grid lg:grid-cols-3'>
          <ContactUs containerStyle='hidden lg:block' />
          <div className='grid grid-cols-1 gap-12 justify-center items-center mt-14 lg:mt-0'>

            <div className='max-w-[220px] mx-auto'>
              <h3 className={`font-bubblegum font-semibold text-5xl text-center text-transparent !leading-[3rem] bg-gradient-to-t  from-primaryGradient-light  to-primaryGradient-dark bg-clip-text text-stroke `}>The Bible Odyssey</h3>
            </div>         
          </div>
          <ContactUs containerStyle='!mt-12 lg:!mt-0 lg:hidden' />
          <SocialMedia 
            iconStyle='!text-white'
            containerStyle='!flex-row-reverse !justify-center lg:!items-start lg:!justify-start mt-12 lg:mt-0'
          />
        </div>      

        <p className='text-center text-xs mt-16 lg:mt-24'>The Bible 
        Odyssey © 2023 All rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
