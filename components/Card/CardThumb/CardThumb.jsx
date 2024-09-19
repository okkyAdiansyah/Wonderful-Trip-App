import React from 'react';
import Image from 'next/image';

const CardThumb = ({src, alt}) => {
  return (
    <div className='w-full h-[150px] md:h-[300px] rounded-md md:rounded-lg overflow-hidden'>
      <Image 
        src={src}
        alt={alt}
        className='w-full h-full object-cover'
      />
    </div>
  )
}

export default CardThumb