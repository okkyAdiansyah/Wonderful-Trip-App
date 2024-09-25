"use client";
import React, { useEffect, useRef, useState } from 'react';

const useResponsive = () => {
    const [screen, setScreen] = useState('');
    const debounceResize = useRef(null);

    const handleResize = () => {
        if(debounceResize.current) clearTimeout(debounceResize.current);

        debounceResize.current = setTimeout(() => {
            let currentWidth = window.innerWidth;
            setScreen(currentWidth < 768 ? 'mobile' : 'desktop');
        }, 500);
    }

    useEffect(() => {
        let currentWidth = window.innerWidth;
        setScreen(currentWidth < 768 ? 'mobile' : 'desktop');
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if(debounceResize.current) clearTimeout(debounceResize.current)
        }
    }, [])

    return { screen }
}

export default useResponsive