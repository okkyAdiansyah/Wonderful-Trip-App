'use client';
import { NavComponent } from '@/components/Nav';
import { Toggle } from '@/components/Toggle';
import React, { useState } from 'react';

const NavContainer = () => {
  const [isActive, setIsActive] = useState(false);
  
  const handleToggleClick = () => {
    setIsActive(!isActive)
  };

  return (
    <>
      <div>
        <Toggle.NavToggle 
          onClick={handleToggleClick} 
          isActive={isActive}
        />
        <NavComponent.MobileNav 
          isActive={isActive}
        />
      </div>
    </>
  )
}

export default NavContainer