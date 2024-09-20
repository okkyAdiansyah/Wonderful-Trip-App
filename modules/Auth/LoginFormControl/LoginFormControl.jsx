'use client';

import React, { useState } from 'react';
import { Input } from '@/components/Input/index';
import { Button } from '@/components/Button';
import useResponsive from '@/hooks/useResponsive';
import Link from 'next/link';

const LoginFormControl = () => {
    const [formData, setFormData] = useState({
        username : '',
        password : '',
        rememberMe : false
    })
    const { screen } = useResponsive();

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        setFormData(prevState => ({...prevState, [name] : value}))
    }

    const handleCheckbocChange = (e) => {
        const { checked, name } = e.target;
        setFormData(prevState => ({...prevState, [name] : checked}))
    }

    const handleReset = () => {
        setFormData(prevState => ({...prevState, username : '', password : ''}))
    }

  return (
    <form className='w-full md:w-1/2 flex flex-col px-5 md:px-8 py-8 gap-y-6 md:gap-y-8 bg-secondaryColor rounded-xl'>
        <Input.TextInput 
            screen={screen}
            name='username'
            label='Username or Email :'
            placeholder='Username or Email'
            theme='dark'
            onChange={handleInputChange}
            required={true}
        />
        <Input.PasswordInput
            screen={screen}
            name='password'
            label='Password :'
            placeholder='Password'
            theme='dark'
            onChange={handleInputChange}
            required={true}
        />
        <Input.CheckboxInput 
            onChange={handleCheckbocChange}
            name='rememberMe'
            isChecked={formData.rememberMe}
        >
            Remember Me
        </Input.CheckboxInput>
        <div className='w-full flex flex-col items-center gap-y-5 md:gap-y-6'>
            <Button.SubmitButton 
                content={'Sign In'}
            />
            <Button.ResetButton 
                content={'Cancel'}
                onClick={handleReset}
            />
        </div>
        <p className='font-secondary text-xs md:text-base text-text-light text-center'>
            Doesn't have an acoount yet ? <Link className='text-link' href={'/auth/sign-up'}>Register Here</Link>
        </p>
    </form>
  )
}

export default LoginFormControl