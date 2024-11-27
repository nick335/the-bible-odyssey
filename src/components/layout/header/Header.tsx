'use client'
import React from 'react'
import { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import MobileMenu from './MobileMenu';
import Logo from '@/public/Logo.png'
import ResponsiveImage from '../../utility/image/ResponsiveImage';
import { gsap } from 'gsap'
import { useRef, useEffect } from 'react'
import AnimateMenuLi from './AnimateMenuLi';



const Header = () => {
  const LogoDiv = useRef<HTMLDivElement>(null)
  const [showMenu, setShowMenu] = useState(false)
  const hide = () => {
    setShowMenu(false)
  } 
  const show = () => {
    setShowMenu(true)
  }

  useEffect(() => {
    const logo = LogoDiv.current
    if(logo){
      gsap.fromTo(
        logo,
        {opacity: 0, scale: 0},
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power2.inOut',
        }
      )
    }
  }, [])

  return (
    <header className='marginLayout pt-4 lg:pt-10'>
      <nav aria-label='Main Navigation' className='bg-navBg bg-[length:100%_100%] bg-right bg-no-repeat flex flex-row justify-between items-center w-full py-2 pb-2.5 px-3 lg:px-5 '>
        <div className='relative w-[4.9375rem] lg:w-[6.3125rem] cursor-pointer' ref={LogoDiv}>
          <ResponsiveImage 
            src={Logo}
            alt='Logo'
            width={101}
            height={64}
          />
        </div>
        <ul className='hidden lg:flex items-center gap-x-10 '>
          <AnimateMenuLi id='about' closeMenu={hide} className='cursor-pointer !font-bubblegum !text-xl text-transparent bg-gradient-to-t  from-primaryGradient-light  to-primaryGradient-dark bg-clip-text text-stroke' name='About Us' />
          <AnimateMenuLi closeMenu={hide} className='cursor-pointer !font-bubblegum !text-xl text-transparent bg-gradient-to-t  from-primaryGradient-light  to-primaryGradient-dark bg-clip-text text-stroke' name='Join Us' id='newsletter' />
        </ul>
        <FiMenu className='text-white text-2xl lg:hidden' onClick={show} />     
      </nav>
      <MobileMenu isOpen={showMenu} closeMenu={hide} />
    </header>
  )
}



export default Header
