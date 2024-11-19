import React from 'react'
import { HiMiniXMark } from "react-icons/hi2";
import MenuLi from './MenuLi';
import SocialMedia from '@/src/components/utility/socialmedia/SocialMedia';


interface MobileMenuProps {
  isOpen: boolean
  closeMenu: () => void
}

const MobileMenu = ({ isOpen, closeMenu }: MobileMenuProps) => {
  return (
    <div className={`absolute top-0 left-0 w-screen h-screen z-30 bg-opacity-75 overflow-hidden ${ isOpen ? 'block' : 'hidden'} md:bg-transparent md:bg-opacity-100 lg:hidden`} >
      <div className={`lg:hidden bg-[#FAFCFF] lg:static absolute w-screen h-screen lg:-left-70 top-0 z-[50] overflow-hidden ${ isOpen ? 'animate-[comeout_0.3s_ease-in-out_0.1s_both]' : 'animate-[goout_0.5s_ease-in-out_both]'} px-4 pt-6`}>
        <div className='flex justify-between items-center w-full'>
          <h3 className={`max-w-[4.9375rem] font-bubblegum  text-base text-center text-transparent bg-gradient-to-t  from-primaryGradient-light to-primaryGradient-dark bg-clip-text text-stroke lg:text-xl  `} onClick={closeMenu}>The Bible Odyssey</h3>
          <HiMiniXMark className='text-black text-2xl' onClick={closeMenu} />
        </div>
        <ul className='mt-24 grid grid-cols-1 gap-6'>
          <MenuLi closeMenu={closeMenu} name='About Us' id='about' />
          <MenuLi closeMenu={closeMenu} name='Contact Us' id='footer' />
          <MenuLi closeMenu={closeMenu} name='Join Our Newsletter' id='newsletter' />
          <MenuLi closeMenu={closeMenu} name='Privacy Policy' />
          <MenuLi closeMenu={closeMenu} name='Terms of Use' />
          <SocialMedia />
        </ul>
      </div>
    </div>
    
  )
}

export default MobileMenu
