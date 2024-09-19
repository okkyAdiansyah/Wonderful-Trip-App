"use client";
import React, { useEffect, useState } from 'react';

const useResponsive = () => {
    const [screen, setScreen] = useState('test');

    useEffect(() => {
        let screenSize = window.innerWidth;
        if(screenSize < 1024){
            setScreen('mobile');
        } else if(screenSize >= 1024){
            setScreen('desktop')
        }

        return () => {}
    }, [])

    return { screen }
}

export default useResponsive