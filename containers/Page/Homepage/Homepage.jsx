"use client";

import React, { useState, useEffect } from 'react';
import Slider from '@/modules/Slider/Slider';

const Homepage = () => {
  const [screen, setScreen] = useState(500);
  
  useEffect(() => {
    let screenSize = window.innerWidth;
    setScreen(screenSize);

  }, [screen]);
  return (
    <>
      <Slider 
        screen={screen}
      />
    </>
  )
}

export default Homepage