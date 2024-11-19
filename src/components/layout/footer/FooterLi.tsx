'use client'
import { scrollToSection } from '@/src/lib/utilsFunction/scrollToSection'
import React from 'react'


interface FooterLiProps {
  name: string
  id?: string
}

const FooterLi = ({ name, id }: FooterLiProps) => {

  const handleClick = () => {
    if(id) {scrollToSection(id)}
  }
  return (
    <li className='font-bold font-raleway text-base text-white text-center uppercase lg:cursor-pointer' onClick={handleClick}>
      {name}
    </li>
  )
}

export default FooterLi
