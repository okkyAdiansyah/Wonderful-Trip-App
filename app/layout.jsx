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
        <body className='w-full h-screen flex flex-col overflow-hidden'>
          <Navbar />
          <main className='h-full overflow-y-auto'>
            {children}
          </main>
        </body>
    </html>
  )
}

export default RootLayout