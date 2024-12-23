import React from 'react'

interface ThankYouProps {
  className?: string
}

const ThankYou = ({ className }: ThankYouProps) => {
  return (
    <p className={`text-base text-white ${className}`}>
      Thanks for signing up! You&ldquo;re among the first to know when our Bible mobile game launches. Get ready for an epic adventure!
    </p>
  )
}

export default ThankYou
