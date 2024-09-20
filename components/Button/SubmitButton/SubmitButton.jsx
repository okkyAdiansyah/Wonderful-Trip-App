import React from 'react'

const SubmitButton = ({content}) => {
  return (
    <button className='flex items-center justify-center px-7 md:px-8 py-2 bg-accentColor font-secondary font-semibold text-sm md:text-base text-text-light rounded-full'
        type='submit'
    >
        {content}
    </button>
  )
}

export default SubmitButton