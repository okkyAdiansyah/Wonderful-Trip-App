"use client";
import React, { useEffect, useState } from 'react';

const useResponsive = () => {
    const [screen, setScreen] = useState('');
    const [screenSize, setScreenSize] = useState();

    const handleResize = () => {
        setScreenSize(window.innerWidth);
        if(screenSize < 768){
            setScreen('mobile')
        }else{
            setScreen('desktop')
        }
    }

    useEffect(() => {
        if(!screenSize){
            setScreenSize(window.innerWidth);
        }

        if(screenSize < 768){
            setScreen('mobile')
        }else{
            setScreen('desktop')
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [screenSize])

    return { screen }
}

export default useResponsive