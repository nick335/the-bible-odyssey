import React from 'react'



interface ContactUsProps {
  containerStyle?: string
}

const ContactUs = ({ containerStyle }: ContactUsProps) => {
  return (
    <div className={`font-raleway text-center lg:text-left text-sm ${containerStyle} uppercase `}>
      <h3 className='font-medium text-white/60 uppercase'>Contact Us</h3>
      <p className='font-bold text-white mt-2 '>socials@thebibleodyssey.com</p>
    </div>
  )
}

export default ContactUs
