'use client'
import React, { useState } from 'react'
import ResponsiveImage from '../utility/image/ResponsiveImage'
import mobileSubscribe from '@/public/mobileSubscribeButton.png'
import desktopSubscribe from '@/public/desktopSubscribebutton.png'
import useSuccessStore from '@/src/store/newslettterStore'
import ThankYou from '../utility/ThankYou'
import { useMutation } from '@tanstack/react-query'
import { subscribeTonewsLetter } from '@/src/api/subscribeTonewsLetter'
import { isValidEmail } from '@/src/lib/utilsFunction/isValidEmail'
import { toast } from 'react-toastify'
import { Icon } from '@iconify/react'
const Newsletter = () => {
  const { isSuccess, setSuccess} = useSuccessStore()
   const [email, setEmail] = useState('')
  
   const toggleSuccess = () => {
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
    },  6000)
  }
    const mutatation = useMutation({
      mutationFn: subscribeTonewsLetter,
      onSuccess: () => {
        toggleSuccess()
      }
    })
  
    const subscribe = async () => {
      if (!email || !isValidEmail(email)) {
        toast.error("Please provide a valid email address.");
        return;
      }
    
      if (!mutatation.isPending) {
        try {
          await mutatation.mutateAsync(email);
        } catch (error) {
          console.error("Error during subscription:", error);
        }
      }
    };
  return (
    <section id='newsletter' className='bg-gradient-to-t from-primaryGradient-light to-primaryGradient-dark  py-14 px-4 lg:px-0 marginLayout mt-9 lg:mt-28 rounded-md lg:first-letter lg:py-32'>
      <h3 className='text-center font-bubblegum text-4xl leading-[3.125rem] text-stroke text-white tracking-[1px] lg:text-5xl'>Join our 
      newsletter</h3>
      <p className='font-raleway text-base text-center mt-3.5 text-white lg:text-lg lg:mt-6'>Receive The Bible 
      Odyssey updates in your inbox.</p>
      {
        !isSuccess ? 
        <div className='mt-6 lg:max-w-[45.3125rem] lg:mx-auto lg:mt-16 lg:relative'>
          <div className='p-[1px] rounded-md bg-gradient-to-r from-primaryGradient-light to-primaryGradient-dark shadow-[0px_4px_10px_3px_#0000001C] relative'>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email address to get updates ' className='w-full pl-3 pr-1 py-[1.425rem] font-raleway text-sm border-none outline-none lg:text-base rounded-md' />
            {mutatation.isPending && <Icon icon="line-md:loading-loop" className='text-3xl text-primaryGradient-light absolute top-1/2 -translate-y-1/2 right-4 lg:right-10'  />}
          </div>
          <div className='mt-6 flex justify-center items-center lg:absolute lg:w-fit lg:h-fit lg:top-0 lg:mt-0 lg:right-4 ' onClick={subscribe} >
            <ResponsiveImage 
              alt='subscribe'
              width={225}
              height={94}
              src={mobileSubscribe}
              layout='fixed'
              className='cursor-pointer lg:hidden'
            />
            <ResponsiveImage 
              alt='subscribe_desktop'
              width={104}
              height={32}
              src={desktopSubscribe}
              layout='fixed'
              className='cursor-pointer hidden lg:block'
            />
        </div>
      </div> : <ThankYou className='mt-4 lg:mt-6 text-center lg:max-w-[45.3125rem] lg:mx-auto ' />
      }
      
    </section>
  )
}

export default Newsletter


