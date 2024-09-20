import React from 'react'

const ResetButton = ({content, onClick}) => {
  return (
    <button className='flex items-center justify-center px-3 md:px-4 py-2 bg-trasparent font-secondary font-semibold text-sm md:text-base text-text-light border-solid border-primaryColor border-b-2'
        type='reset'
        onClick={onClick}
    >
        {content}
    </button>
  )
}

export default ResetButton