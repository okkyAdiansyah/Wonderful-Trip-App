import Link from 'next/link'
import React from 'react'

const WithIcon = ({href, children}) => {
  return (
    <Link
        href={href}
        className='flex items-center justify-center'
    >
        {children}
    </Link>
  )
}

export default WithIcon