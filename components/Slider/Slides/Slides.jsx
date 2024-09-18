import React from 'react';
import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';

const Slides = ({children}) => {
  return (
    <SwiperSlide>
        <Image 
            className='w-full h-full object-cover' 
            src={src} 
            alt={alt} 
        />
        <Link 
            className='w-full h-full absolute bg-secondary-45 flex flex-col items-center justify-center gap-y-2 px-4 py-[10px]' 
            href={href}
        >
            {icon}
            <p className='font-primary text-[20px] font-normal text-text-light text-center'>
                {content}
            </p>
        </Link>
    </SwiperSlide>
    
  )
}

export default Slides