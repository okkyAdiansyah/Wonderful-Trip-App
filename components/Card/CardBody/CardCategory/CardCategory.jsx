import React from 'react';
import Link from 'next/link';

const CardCategory = ({cat}) => {
  return (
    <Link
        href={'/'}
        className='font-primary font-medium text-xs/normal md:text-sm/normal text-secondary-45'
    >
        {cat}
    </Link>
  )
}

export default CardCategory