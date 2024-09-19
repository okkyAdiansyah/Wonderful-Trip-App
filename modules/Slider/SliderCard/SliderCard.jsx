import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SliderCard = ({src, alt, icon, content}) => {
  return (
    <div className='h-[80px] md:h-[100px] relative flex items-center rounded-[10px] overflow-hidden'>
        <Image 
            className='w-full h-full object-cover' 
            src={src} 
            alt={alt}
        />
        <Link 
            className='w-full h-full absolute bg-secondary-45 flex flex-col items-center justify-center gap-y-2 px-4 py-[10px]' 
            href={'/'}
        >
            {icon}
            <p className='font-primary text-[12px] md:text-xl font-normal text-text-light text-center'>
              {content}
            </p>
        </Link>
    </div>
  )
}

export default SliderCard