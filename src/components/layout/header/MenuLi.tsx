'use client'
import { useWindowSize } from '@/src/lib/hooks/useWindowSIze'
import { scrollToSection } from '@/src/lib/utilsFunction/scrollToSection'
import React from 'react'

interface MenuLiProps {
  closeMenu: () => void
  name: string
  className?: string
  id?: string
}

const MenuLi = ({ closeMenu, name, className, id }: MenuLiProps) => {
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
    <li className={`font-raleway text-2xl text-primaryText font-bold ${className}`} onClick={handleClick}>{name}</li>
  )
}

export default MenuLi
