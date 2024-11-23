'use client'
import { useWindowSize } from '@/src/lib/hooks/useWindowSIze'
import { scrollToSection } from '@/src/lib/utilsFunction/scrollToSection'
import React from 'react'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'

interface MenuLiProps {
  closeMenu: () => void
  name: string
  className?: string
  id?: string
}

const AnimateMenuLi = ({ closeMenu, name, className, id }: MenuLiProps) => {
  const Liref = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const li = Liref.current
    if(li){
      gsap.fromTo(
        li,
        {opacity: 0, scale: 0,},
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power2.inOut',
        }
      )
    }
  })
  const {width } = useWindowSize()
  const handleClick = () => {
    if (width && width < 1024) {
      closeMenu()
      if(id) {scrollToSection(id)}
    }else {
      if(id) {scrollToSection(id)}
    }
  }
  return (
    <li className={`font-raleway text-2xl text-primaryText font-bold ${className}`} ref={Liref} onClick={handleClick}>{name}</li>
  )
}

export default AnimateMenuLi
