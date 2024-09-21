import React from 'react';
import SignupFormControl from '@/modules/Auth/SignupFormControl/SignupFormControl';
import Image from 'next/image';
import BG from '@/public/bg-img.webp';

const SignupPage = () => {
  return (
    <>
        <div className='w-full h-full min-h-[920px] md:min-h-[1140px] relative flex items-center justify-center'>
            <div className='w-full h-full flex items-center justify-center'>
              <Image
                src={BG}
                alt='Backround'
                className='w-full h-full object-cover'
                priority
              />
            </div>
            <div className='absolute flex flex-col items-center justify-center gap-y-5 md:gap-y-8 z-10 top-0 w-full h-full px-8 md:px-[104px] py-6 md:py-8 bg-secondary-45'>
              <h1 className='font-primary font-bold text-4xl/normal md:text-6xl/normal w-full text-center text-text-light'>Register</h1>
              <h2 className='font-primary font-normal text-base/normal md:text-lg/normal w-[90%] md:w-1/2 text-center text-text-light'>Join Us and Start Your Adventure – Unlock Personalized Travel Guides and Unforgettable Experiences!</h2>
              <SignupFormControl />
            </div>
        </div>
    </>
  )
}

export default SignupPage