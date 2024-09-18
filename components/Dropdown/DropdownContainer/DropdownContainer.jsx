import React from 'react';

const DropdownContainer = ({isActive, children, onMouseEnter, onMouseLeave}) => {
  return (
    <div 
      className={`fixed ${isActive ? 'flex' : 'hidden'} top-desktopNav flex-col items-center z-50`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  )
}

export default DropdownContainer