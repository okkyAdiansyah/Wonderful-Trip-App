'use client';

import useResponsive from '@/hooks/useResponsive';
import React, { useCallback, useRef, useState } from 'react';


const AttractionShowcase = ({children}) => {
  const [mouseIsDown, setMouseIsDown] = useState(false);
  const [mouseIsMove, setMouseIsMove] = useState(false);
  const sliderScreenRef = useRef();
  const mouseCoords = useRef({
    posX : 0,
    scrollX: 0
  })
  const { screen } = useResponsive();

  const handleDragStart = useCallback((e) => {
    if(!sliderScreenRef) return;

    mouseCoords.current.posX = e.pageX - sliderScreenRef.current.offsetLeft;
    mouseCoords.current.scrollX = sliderScreenRef.current.scrollLeft;
    setMouseIsDown(true);
  }, [mouseCoords.current.posX, mouseCoords.current.scrollX])

  const handleDragEnd = (e) => {
    setMouseIsDown(false);
    setMouseIsMove(false);
  }

  const handleDrag = (e) => {
    if(!mouseIsDown || !sliderScreenRef) return;
    e.preventDefault();
    setMouseIsMove(true);

    let posX = e.pageX - sliderScreenRef.current.offsetLeft;
    let slideX = (posX - mouseCoords.current.posX) * 1.5;
    sliderScreenRef.current.scrollLeft = mouseCoords.current.scrollX - slideX;

    console.log(mouseCoords)
  }

  return (
    <div className='w-full flex items-center px-6 md:px-[104px] overflow-hidden'>
        <div ref={sliderScreenRef} className={`w-full flex items-center gap-x-[10px] md:gap-x-6 ${screen === 'mobile' ? 'overflow-x-auto' : 'overflow-x-hidden'} ${mouseIsMove ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseMove={handleDrag}
        onMouseLeave={handleDragEnd}
        >
            {children}
        </div>
    </div>
  )
}

export default AttractionShowcase