import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import styles from '../utility.module.css'

interface SocialMediaProps {
  iconStyle?: string
  containerStyle?: string
}


const SocialMedia = ({iconStyle, containerStyle}: SocialMediaProps) => {
  return (
    <div className={`flex flex-row gap-4 items-center ${containerStyle} `}>
      <a 
        href="https://x.com/thebibleodyssey" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FaTwitter className={`${styles.socialMediaicons} ${iconStyle}`} />
      </a>
      <a 
        href="https://www.instagram.com/thebibleodyssey/" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram className={`${styles.socialMediaicons} ${iconStyle}`} />
      </a>
      <a 
        href="https://www.facebook.com/profile.php?id=61569455314670" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FaFacebookF className={`${styles.socialMediaicons} ${iconStyle}`} />
      </a>
    </div>
  )
}

export default SocialMedia
