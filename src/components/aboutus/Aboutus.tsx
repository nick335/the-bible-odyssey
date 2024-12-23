'use client'
import React from 'react'
import ResponsiveImage from '../utility/image/ResponsiveImage'
import Phone from '@/public/aboutPhone.png'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'


gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin)

const Aboutus = () => {

  const aboutImageRef = useRef<HTMLDivElement>(null)
  const aboutHeaderRef = useRef<HTMLHeadingElement>(null)
  const aboutTextRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const aboutImage = aboutImageRef.current
    const aboutText = aboutTextRef.current
    const aboutHeader = aboutHeaderRef.current
    if(aboutImage){
      gsap.fromTo(
        aboutImage,
        {opacity: 0, y:100},
        {
          opacity: 1,
          y:0,
          duration: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: aboutImage,
            start: 'top 80%',
            end: "top 30%",
            once: true,
          }
        }
      )
    }
    if(aboutText){
      gsap.fromTo(
        aboutText,
        {text: "", opacity: 0},
        {
          text: "The Bible Odyssey is a mobile Christian game that takes players on a journey through the Bible. The game is designed to be fun and engaging, while also providing players with a deeper understanding of the Bible's stories. The game features a variety of different game modes, Which includes a Story Mode that Players follow the Bible's stories in a linear fashion, learning about the characters and events that shaped the world.",
          opacity: 1,
          duration: 2,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: aboutText,
            start: 'top 100%',
            once: true,
          }
        }
      )
    }
    if(aboutHeader){
      gsap.fromTo(
        aboutHeader,
        {text: "", opacity: 0, scale:0.8},
        {
          text: "What's The bible Odyssey?",
          opacity: 1,
          scale: 1,
          duration: 2,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: aboutHeader,
            start: 'top 100%',
            once: true,
          },
          onUpdate: () => {
            gsap.to(aboutHeader, {
              scale: 1,
              repeat: 1, // Bounce effect
              yoyo: true,
              duration: 0.2, // Speed of the pulse
              ease: "power1.inOut",
            });
          },
        }
      )
    }
  }, [])
  return (
    <section id='about' className='flex flex-col-reverse gap-10 py-6 lg:flex-row items-center lg:mr-[5%]'>
      <div ref={aboutImageRef}  className='relative w-full aspect-[1105/488]'>
        <ResponsiveImage 
          src={Phone}
          alt='phone'
          width={1105}
          height={488}
        />
      </div>
      <div className='mx-4 lg:mx-0 lg:min-w-[50%] lg:max-w-[700px]'>
        <h2 className='font-bubblegum font-semibold text-5xl leading-[3.7rem] text-center text-transparent bg-gradient-to-t  from-primaryGradient-light to-primaryGradient-dark bg-clip-text text-stroke lg:text-left' ref={aboutHeaderRef}></h2>
        <p className='font-raleway min-h-[320px] text-base font-medium text-primaryText leading-8 mt-4 lg:text-xl lg:!leading-9 ' ref={aboutTextRef}></p>
      </div>
    </section>
  )
}

export default Aboutus
