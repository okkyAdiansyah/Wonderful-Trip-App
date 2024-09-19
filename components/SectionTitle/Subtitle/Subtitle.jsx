import Link from 'next/link';
import React from 'react';

const Subtitle = ({href, subtitle}) => {
  return (
    <Link
      href={href}
      className='font-primary font-medium text-[12px] md:text-[14px] text-left text-secondary-75'
    >
      {subtitle}
    </Link>
  )
}

export default Subtitle