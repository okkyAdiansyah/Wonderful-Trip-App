'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useResponsive from '@/hooks/useResponsive';

const AttractionSliderCard = ({src, alt, href, content}) => {
  const { screen } = useResponsive();

  return (
    <li className='list-none'
    >
      <div className='w-40 h-20 md:w-[320px] md:h-[120px] flex-shrink-0 relative flex items-center rounded-[10px] overflow-hidden select-none'
      >
          <Image className='w-full h-full object-cover' 
              src={src} 
              alt={alt}
              width={screen === 'mobile' ? 160 : 320}
              height={screen === 'mobile' ? 80 : 120}
              loading='lazy'
          />
          <div className='w-full h-full absolute bg-secondary-45 flex flex-col items-center justify-center px-4 py-[10px] select-none'
          >
              <Link className='font-primary text-sm md:text-xl font-normal text-text-light text-center'
                href={href}
              >
                {content}
              </Link>
          </div>
      </div>
    </li>
  )
}

export default AttractionSliderCard