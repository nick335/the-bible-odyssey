import React, { useEffect } from 'react'
import { HiMiniXMark } from "react-icons/hi2";
import MenuLi from './MenuLi';
import SocialMedia from '@/src/components/utility/socialmedia/SocialMedia';
import ResponsiveImage from '../../utility/image/ResponsiveImage';
import Logo from '@/public/logo.svg'
import { useWindowSize } from '@/src/lib/hooks/useWindowSIze';


interface MobileMenuProps {
  isOpen: boolean
  closeMenu: () => void
}

const MobileMenu = ({ isOpen, closeMenu }: MobileMenuProps) => {
  const { width } = useWindowSize();

  useEffect(() => {
    if (isOpen && width && width <= 768) {
      // Disable body scrolling for mobile
      document.body.style.overflow = 'hidden';
    } else {
      // Enable body scrolling for other cases
      document.body.style.overflow = '';
    }

    // Cleanup
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, width]);
  return (
    <div className={`absolute top-0 left-0 w-screen h-screen z-30 bg-opacity-75 overflow-hidden ${ isOpen ? 'block' : 'hidden'} md:bg-transparent md:bg-opacity-100 lg:hidden`} >
      <div className={`lg:hidden bg-[#FAFCFF] lg:static absolute w-screen h-screen lg:-left-70 top-0 z-[50] overflow-hidden ${ isOpen ? 'animate-[comeout_0.3s_ease-in-out_0.1s_both]' : 'animate-[goout_0.5s_ease-in-out_both]'} px-4 pt-6`}>
        <div className='flex justify-between items-center w-full'>
          <div className='relative w-[6.5625rem]'>
            <ResponsiveImage 
              src={Logo}
              alt='Logo'
              placeholder='empty'
              width={105}
              height={67}
            />
          </div>
          <HiMiniXMark className='text-black text-2xl' onClick={closeMenu} />
        </div>
        <ul className='mt-24 grid grid-cols-1 gap-6'>
          <MenuLi closeMenu={closeMenu} name='About Us' id='about' />
          <MenuLi closeMenu={closeMenu} name='Contact Us' id='footer' />
          <MenuLi closeMenu={closeMenu} name='Join Our Newsletter' id='newsletter' />
          <SocialMedia />
        </ul>
      </div>
    </div>
    
  )
}

export default MobileMenu
