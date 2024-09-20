import React from 'react'

const AlertButton = ({command, onClick}) => {
  return (
    <button className='flex items-center justify-center px-7 md:px-8 py-2 border-solid border-2 border-alert font-secondary font-semibold text-sm md:text-base text-text-light rounded-full'
        type='button'
        onClick={onClick}
    >
        {command}
    </button>
  )
}

export default AlertButton