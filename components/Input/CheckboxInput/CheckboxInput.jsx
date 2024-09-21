import React from 'react'

const CheckboxInput = ({onChange, children, name, isChecked}) => {
  return (
    <div className='flex gap-x-[10px] px-[6px] relative'>
      <div className='flex relative items-start md:items-center'>
        <input className='text-base md:text-lg rounded-md cursor-pointer'
          type="checkbox" 
          name={name} 
          id={name}
          checked={isChecked}
          onChange={onChange}
        />
      </div>
      <label htmlFor={name} className='font-secondary font-normal text-sm md:text-base text-text-light cursor-pointer'>{children}</label>
    </div>
  )
}

export default CheckboxInput