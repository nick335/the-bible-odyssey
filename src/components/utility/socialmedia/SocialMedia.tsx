import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import styles from '../utility.module.css'

interface SocialMediaProps {
  iconStyle?: string
  containerStyle?: string
}


const SocialMedia = ({iconStyle, containerStyle}: SocialMediaProps) => {
  return (
    <div className={`flex flex-row gap-4 items-center ${containerStyle} `}>
      <FaTwitter className={`${styles.socialMediaicons} ${iconStyle}`} />
      <FaInstagram className={`${styles.socialMediaicons} ${iconStyle}`} />
      <FaFacebookF className={`${styles.socialMediaicons} ${iconStyle}`} />
      <FaLinkedin className={`${styles.socialMediaicons} ${iconStyle}`} />
    </div>
  )
}

export default SocialMedia
