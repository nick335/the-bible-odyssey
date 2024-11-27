'use client'
import React from 'react'
import ResponsiveImage from '../utility/image/ResponsiveImage'
import hero from '@/public/herophone.png'
import button from "@/public/herobutton.svg"
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import heroHeader from '@/public/heroHeader.svg'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin)


const HeroSection = () => {
  const heroImageRef = useRef<HTMLDivElement>(null)
  const heroInputDiv = useRef<HTMLDivElement>(null)
  const heroComingSoon = useRef<HTMLDivElement>(null)
  const aboutTextRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const aboutText = aboutTextRef.current
    if(heroImageRef.current){
      gsap.fromTo(
        heroImageRef.current,
        {opacity:0, y:100},
        {
          opacity:1,
          y:0,
          duration:1.2,
          ease: 'power1.inOut',
          scrollTrigge: {
            trigger: heroImageRef.current,
            start: 'top 80%',
            end: 'top 30%',
          }
        }
      )
    }
    if(heroInputDiv.current){
      gsap.fromTo(
        heroInputDiv.current,
        {opacity:0, y:100},
        {
          opacity:1,
          y:0,
          duration:1.2,
          ease: 'power1.inOut',
          scrollTrigge: {
            trigger: heroInputDiv.current,
            start: 'top 80%',
            end: 'top 30%',
          }
        }
      )
    }
    if(heroComingSoon.current){
      gsap.fromTo(
        heroComingSoon.current,
        {opacity:0, y:-100},
        {
          opacity:1,
          y:0,
          duration:1.2,
          ease: 'power1.inOut',
          scrollTrigge: {
            trigger: heroComingSoon.current,
            start: 'top 80%',
            end: 'top 30%',
          }
        }
      )
    }
    if(aboutText){
      gsap.fromTo(
        aboutText,
        {text: "", opacity: 0},
        {
          text: "This game is more than just a fun way to spend your time It's an opportunity to learn about the Bible and grow in your faith.",
          opacity: 1,
          duration: 2,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: aboutText,
            start: 'top 80%',
            once: true,
          }
        }
      )
    }
  }, )

  return (
    <section className='lg:flex lg:items-start lg:pb-20 lg:pt-10 lg:gap-4 marginLayout pt-8'>
      <div className='lg:w-2/4'>
        <div className='relative w-[220px] mx-auto lg:mx-0 lg:w-[377px]'>
          <ResponsiveImage 
            src={heroHeader}
            alt='hero header'
            width={377}
            height={279}
            placeholder='empty'
          />
          <div className='w-[43px] h-[17px] rounded-sm bg-gradient-to-t from-primaryGradient-light to-primaryGradient-dark flex justify-center items-center absolute top-2 -right-[43px] lg:w-[91px] lg:h-[35px] lg:rounded-md lg:top-5 lg:-right-[91px]' ref={heroComingSoon}>
            <p className='text-center text-white text-[6px] font-raleway font-bold lg:text-xs'>coming soon</p>
          </div>
        </div>
        <p className='font-raleway text-base text-primaryText text-center lg:text-left lg:text-xl pt-3 lg:max-w-[560px]lg:pt-4' ref={aboutTextRef}>
          
        </p>
        <div className='mt-5 lg:max-w-[31.0125rem]  lg:mt-8 lg:relative lg:mx-0' ref={heroInputDiv}>
          <label className='font-raleway text-sm font-bold '>Email Address</label>
          <div className='p-[1px] rounded-md bg-gradient-to-r from-primaryGradient-light to-primaryGradient-dark shadow-[0px_4px_10px_3px_#0000001C] mt-2'>
            <input type='email' placeholder='Enter email address to get updates ' className='w-full pl-3 pr-1 py-4 font-raleway text-sm border-none outline-none lg:text-base rounded-md' />
          </div>
          <div className='mt-2 flex justify-center items-center lg:justify-start' >
            <ResponsiveImage  
              src={button}
              alt='hero'
              width={202}
              height={94}
              placeholder={'empty'}
              layout='fixed'
              className='cursor-pointer'
            />
           </div>
        </div>
      </div>
      <div className='hidden lg:block relative w-2/4'  ref={heroImageRef}>
        <ResponsiveImage 
          src={hero}
          alt='hero'
          width={569}
          height={679}
        />
      </div>
    </section>
  )
}

export default HeroSection
