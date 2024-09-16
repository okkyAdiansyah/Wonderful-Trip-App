import Link from 'next/link'
import React from 'react'

const DropdownLinkItem = ({theme, content, href}) => {
  return (
    <Link
        href={href}
        className={`w-40 px-2 py-4 font-secondary font-medium text-sm ${theme === 'dark' ? 
            'bg-secondaryColor text-text-light hover:bg-secondary-75' :
            'bg-primaryColor text-text-dark hover:bg-tertierColor'
        }`}
    >
        {content}
    </Link>
  )
}

export default DropdownLinkItem