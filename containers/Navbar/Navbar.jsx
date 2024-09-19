'use client';

import React from 'react';
import Logo from '@/public/wt_logo.png';
import Image from 'next/image';
import MobileNavContainer from '@/containers/Mobile/MobileNavContainer/MobileNavContainer';
import { Button } from '@/components/Button';
import { NavComponent } from '@/components/Nav';
import Link from 'next/link';
import useResponsive from '@/hooks/useResponsive';

const Navbar = () => {
  const { screen } = useResponsive();

  return (
    <nav className='w-full flex px-3 md:px-[42px] py-4 md:py-0 items-center justify-between bg-secondaryColor'>
      <div className='w-auto flex md:flex-row-reverse items-center gap-x-[6px] md:gap-x-3'>
        {screen === 'mobile' ?        
          <MobileNavContainer /> : 
          <NavComponent.DesktopNav />
        }
        <Link href={'/'}>        
          <Image 
            src={Logo}
            width={100}
            height={42}
            alt='logo'
          />
        </Link>
      </div>
      <div className='w-auto flex items-center justify-end gap-x-[10px] md:gap-x-5'>
        <Button.CTA 
          content={'Login'}
          href={'/auth/login'}
        />
        <Button.WithIcon
          href={'/search'}
        >
          {screen === 'mobile' ?
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_162_126)">
              <rect width="24" height="24" transform="translate(0 0.5)" fill="#10111C"/>
              <path d="M19.6 21.5L13.3 15.2C12.8 15.6 12.225 15.9167 11.575 16.15C10.925 16.3833 10.2333 16.5 9.5 16.5C7.68333 16.5 6.146 15.8707 4.888 14.612C3.63 13.3533 3.00067 11.816 3 10C2.99933 8.184 3.62867 6.64667 4.888 5.388C6.14733 4.12933 7.68467 3.5 9.5 3.5C11.3153 3.5 12.853 4.12933 14.113 5.388C15.373 6.64667 16.002 8.184 16 10C16 10.7333 15.8833 11.425 15.65 12.075C15.4167 12.725 15.1 13.3 14.7 13.8L21 20.1L19.6 21.5ZM9.5 14.5C10.75 14.5 11.8127 14.0627 12.688 13.188C13.5633 12.3133 14.0007 11.2507 14 10C13.9993 8.74933 13.562 7.687 12.688 6.813C11.814 5.939 10.7513 5.50133 9.5 5.5C8.24867 5.49867 7.18633 5.93633 6.313 6.813C5.43967 7.68967 5.002 8.752 5 10C4.998 11.248 5.43567 12.3107 6.313 13.188C7.19033 14.0653 8.25267 14.5027 9.5 14.5Z" fill="#E8E9F5"/>
              </g>
              <defs>
              <clipPath id="clip0_162_126">
              <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
              </clipPath>
              </defs>
            </svg> :
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.1333 28L17.7333 19.6C17.0667 20.1333 16.3 20.5556 15.4333 20.8667C14.5667 21.1778 13.6444 21.3333 12.6667 21.3333C10.2444 21.3333 8.19467 20.4942 6.51733 18.816C4.84 17.1378 4.00089 15.088 4 12.6667C3.99911 10.2453 4.83822 8.19556 6.51733 6.51733C8.19645 4.83911 10.2462 4 12.6667 4C15.0871 4 17.1373 4.83911 18.8173 6.51733C20.4973 8.19556 21.336 10.2453 21.3333 12.6667C21.3333 13.6444 21.1778 14.5667 20.8667 15.4333C20.5556 16.3 20.1333 17.0667 19.6 17.7333L28 26.1333L26.1333 28ZM12.6667 18.6667C14.3333 18.6667 15.7502 18.0836 16.9173 16.9173C18.0844 15.7511 18.6676 14.3342 18.6667 12.6667C18.6658 10.9991 18.0827 9.58267 16.9173 8.41733C15.752 7.252 14.3351 6.66844 12.6667 6.66667C10.9982 6.66489 9.58178 7.24844 8.41733 8.41733C7.25289 9.58622 6.66933 11.0027 6.66667 12.6667C6.664 14.3307 7.24756 15.7476 8.41733 16.9173C9.58711 18.0871 11.0036 18.6702 12.6667 18.6667Z" fill="#E8E9F5"/>
            </svg>            
          }
        </Button.WithIcon>
      </div>
    </nav>
  )
}

export default Navbar