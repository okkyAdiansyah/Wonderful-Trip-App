import Image from 'next/image'
import React from 'react'

const MainCardThumb = ({src, alt}) => {
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

export default MainCardThumb