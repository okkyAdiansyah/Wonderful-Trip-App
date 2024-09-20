import React, { useState } from 'react';
import { Toggle } from '@/components/Toggle';

const PasswordInput = ({screen, name, placeholder, label, required, onChange, theme, isError, errorMsg}) => {
  const [isShow, setIsShow] = useState(false);

  const handlePassToggle = () => {
    setIsShow(!isShow);
  }

  return (
    <div className='w-full flex flex-col gap-y-2 md:gap-y-4 items-start'>
      <label htmlFor={name} className={`font-secondary font-normal text-sm md:text-base ${theme === 'dark' ? 'text-text-light' : 'text-text-dark'}`} >{label}</label>
      <div className={`w-full flex items-center px-3 md:px-4 py-[8px] md:py-3 gap-x-[10px] bg-inputBg border-solid border-2 ${isError ? 'border-r-alert' : 'border-transparent'} rounded-full`}>
        {screen === 'mobile' ?
          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.4999 5.16671H9.91658V4.00004C9.91658 2.39004 8.60992 1.08337 6.99992 1.08337C5.38992 1.08337 4.08325 2.39004 4.08325 4.00004V5.16671H3.49992C2.85825 5.16671 2.33325 5.69171 2.33325 6.33337V12.1667C2.33325 12.8084 2.85825 13.3334 3.49992 13.3334H10.4999C11.1416 13.3334 11.6666 12.8084 11.6666 12.1667V6.33337C11.6666 5.69171 11.1416 5.16671 10.4999 5.16671ZM6.99992 10.4167C6.35825 10.4167 5.83325 9.89171 5.83325 9.25004C5.83325 8.60837 6.35825 8.08337 6.99992 8.08337C7.64159 8.08337 8.16658 8.60837 8.16658 9.25004C8.16658 9.89171 7.64159 10.4167 6.99992 10.4167ZM8.80825 5.16671H5.19159V4.00004C5.19159 3.00254 6.00242 2.19171 6.99992 2.19171C7.99742 2.19171 8.80825 3.00254 8.80825 4.00004V5.16671Z" fill="#555555"/>
          </svg> :
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0001 5.83329H11.3334V4.49996C11.3334 2.65996 9.84008 1.16663 8.00008 1.16663C6.16008 1.16663 4.66675 2.65996 4.66675 4.49996V5.83329H4.00008C3.26675 5.83329 2.66675 6.43329 2.66675 7.16663V13.8333C2.66675 14.5666 3.26675 15.1666 4.00008 15.1666H12.0001C12.7334 15.1666 13.3334 14.5666 13.3334 13.8333V7.16663C13.3334 6.43329 12.7334 5.83329 12.0001 5.83329ZM8.00008 11.8333C7.26675 11.8333 6.66675 11.2333 6.66675 10.5C6.66675 9.76663 7.26675 9.16663 8.00008 9.16663C8.73341 9.16663 9.33341 9.76663 9.33341 10.5C9.33341 11.2333 8.73341 11.8333 8.00008 11.8333ZM10.0667 5.83329H5.93341V4.49996C5.93341 3.35996 6.86008 2.43329 8.00008 2.43329C9.14008 2.43329 10.0667 3.35996 10.0667 4.49996V5.83329Z" fill="#555555"/>
          </svg>
        }
        <input 
          type={isShow ? "text" : "password"} 
          name={name}
          id={name}
          placeholder={placeholder} 
          required={required}
          className='font-secondary font-medium text-sm/normal md:text-base/normal text-text-dark placeholder:font-semibold placeholder:text-text-placeholder bg-transparent border-none outline-none'
          onChange={onChange}
        />
        <Toggle.PassToggle
          screen={screen}
          onMouseDown={handlePassToggle}
          onMouseUp={handlePassToggle}
        />
      </div>
      {isError && 
        <p className='font-secondary font-medium text-xtext-alert ml-3'>
          * {errorMsg}
        </p>
      }
    </div>
  )
}

export default PasswordInput