import Link from 'next/link'
import React from 'react'

const NavItem = ({href, content, onMouseEnter, onMouseLeave}) => {
  return (
    <Link
      href={href}
      className='font-secondary text-base text-text-light capitalize font-medium md:px-[14px] py-4 md:py-6 md:gap-x-3 border-b-4 border-solid border-transparent hover:border-primaryColor'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {content}
    </Link>
  )
}

export default NavItem