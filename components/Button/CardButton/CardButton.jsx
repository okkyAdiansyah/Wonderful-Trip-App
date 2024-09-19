import React from 'react';

const CardButton = ({onClick, children, disabled}) => {
  return (
    <button
        type='button'
        onClick={onClick}
        disabled={disabled}
    >
        {children}
    </button>
  )
}

export default CardButton