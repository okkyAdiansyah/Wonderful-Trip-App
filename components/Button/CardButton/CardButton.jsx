import React from 'react';

const CardButton = ({onClick, children, disabled, content}) => {
  return (
    <button
        type='button'
        onClick={onClick}
        disabled={disabled}
        className='flex gap-x-[2px] md:gap-x-1 items-center p-1 md:p-2'
    >
        {children}
        <p className='font-secondary text-xs/normal md:text-sm/normal font-medium text-secondary-75'>
          {content}
        </p>
    </button>
  )
}

export default CardButton