import Link from 'next/link'
import React from 'react'

const CTA = ({content, href}) => {
  return (
    <Link
        className='flex items-center justify-center px-7 md:px-8 py-2 bg-accentColor font-secondary font-semibold text-sm md:text-base text-text-light rounded-full'
        href={href}
    >
        {content}
    </Link>
  )
}

export default CTA