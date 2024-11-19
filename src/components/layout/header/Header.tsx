'use client'
import React from 'react'
import { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import MobileMenu from './MobileMenu';
import MenuLi from './MenuLi';


const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const hide = () => {
    setShowMenu(false)
  } 
  const show = () => {
    setShowMenu(true)
  }
  return (
    <header className='marginLayout pt-4 lg:pt-10'>
      <nav aria-label='Main Navigation' className='bg-navBg bg-[length:100%_100%] bg-right bg-no-repeat flex flex-row justify-between items-center w-full py-2 pb-2.5 px-3 lg:px-5 '>
        <h3 className={`max-w-[4.9375rem] font-bubblegum font-semibold text-base text-center text-transparent bg-gradient-to-t  from-primaryGradient-light to-primaryGradient-dark bg-clip-text text-stroke`}>The Bible Odyssey</h3>
        <ul className='hidden lg:flex items-center gap-x-10 '>
          <MenuLi id='about' closeMenu={hide} className='cursor-pointer !font-bubblegum !text-xl text-white text-stroke' name='About Us' />
          <MenuLi closeMenu={hide} className='cursor-pointer !font-bubblegum !text-xl text-white text-stroke' name='Join Us' id='newsletter' />
        </ul>
        <FiMenu className='text-white text-2xl lg:hidden' onClick={show} />     
      </nav>
      <MobileMenu isOpen={showMenu} closeMenu={hide} />
    </header>
  )
}



export default Header
