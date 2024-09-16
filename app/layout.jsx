import React from 'react';
import './globals.css';
import Navbar from '@/containers/Navbar/Navbar';

export const metadata = {
    title: "Wonderful Trip",
    description: "Indonesian traveling guide that you can rely on",
  };
  

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body className='h-screen overflow-y-hidden'>
          <Navbar />
            {children}
        </body>
    </html>
  )
}

export default RootLayout