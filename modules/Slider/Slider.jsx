"use client";

import React from 'react';
import { Swiper } from 'swiper/react';
import 'swiper/css';

const Slider = ({screen, children}) => {
  return (
    <div className='w-full h-auto px-6 md:px-[104px] flex justify-start'>
      <Swiper
        spaceBetween={
          screen === 'mobile' ? 10 : 24
        }
        slidesPerView={
          screen === 'mobile' ? 2 : 4
        }
      >
        {children}
      </Swiper>
    </div>
  )
}

export default Slider