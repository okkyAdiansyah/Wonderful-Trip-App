'use client';

import React, { useState } from 'react';
import useResponsive from '@/hooks/useResponsive';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import Link from 'next/link';
import { Loading } from '@/components/Loading';
import axios from 'axios';

const SignupFormControl = () => {
    const [isAgreed, setIsAgreed] = useState(false);
    const [isNotIdentic, setIsNotIdentic] = useState(false);
    const [formData, setFormData] = useState({
        username : '',
        email : '',
        password : '',
        policyAgreement : false
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({
        errorState : false,
        errorMsg : ''
    });
    
    const { screen } = useResponsive();

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setFormData(prevState => ({...prevState, [name] : value}));
    }

    const handleCheckboxChecked = (e) => {
        let { name, checked } = e.target
        setIsAgreed(!isAgreed);
        setFormData(prevState => ({...prevState, [name] : checked}))
    }

    const handlePassConfirmation = (e) => {
        let { value } = e.target;
        if(value !== formData.password){
            setIsNotIdentic(true);
        } else {setIsNotIdentic(false)};
    }

    const handleFormReset = () => {
        setFormData(prevState => ({...prevState, username : '', password : '', email : ''}));
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(!isLoading);

        await axios({
            baseURL: process.env.NEXT_PUBLIC_BASE_URL,
            url:'/api/v1/auth/sign-up/user',
            data: formData,
            method: 'post'
        })
        .then(res => {
            setIsLoading(false);
        })
        .catch(error => {
            setError(prevState => ({...prevState, errorState : true, errorMsg: error.response.data.message}));
        })
    }

    const handleLoadingReset = () => {
        setIsLoading(!isLoading);
        setError(prevState => ({...prevState, errorState : false, errorMsg: ''}));
    }


  return (
    <>
        {isLoading &&
            <Loading.AuthLoading 
                message={'Registering...'}
                onClick={handleLoadingReset}
                isFailed={error.errorState}
                errorHeader={'Registration Failed'}
                errorMsg={error.errorMsg}
            />
        }
        <form className='w-full md:w-1/2 flex flex-col px-5 md:px-8 py-8 gap-y-6 md:gap-y-8 bg-secondaryColor rounded-xl'
            method='post'
            onSubmit={handleFormSubmit}
        >
            <Input.TextInput 
                screen={screen}
                name='username'
                label='Username :'
                placeholder='Username'
                theme='dark'
                onChange={handleInputChange}
                required={true}
            />
            <Input.EmailInput 
                screen={screen}
                name='email'
                label='Email :'
                placeholder='Email@mail.com'
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
            <Input.PasswordInput
                screen={screen}
                name='confirm-pass'
                label='Confirm :'
                placeholder='Confirm Password'
                theme='dark'
                isError={isNotIdentic}
                errorMsg={"Password not match"}
                onChange={handlePassConfirmation}
                required={true}
            />
            <Input.CheckboxInput 
                onChange={handleCheckboxChecked}
                name='policyAgreement'
                isChecked={isAgreed}
            >
                I have read and agree to <Link href={'/'} className='text-link'>Privacy and Policy</Link>
            </Input.CheckboxInput>
            <div className='w-full flex flex-col items-center gap-y-5 md:gap-y-6'>
                <Button.SubmitButton 
                    content={'Register'}
                />
                <Button.ResetButton 
                    content={'Cancel'}
                    onClick={handleFormReset}
                />
            </div>
            <p className='font-secondary text-xs md:text-base text-text-light text-center'>
                Already have an acoount ? <Link className='text-link' href={'/auth/login'}>Login now</Link>
            </p>
        </form>
    </>
  )
}

export default SignupFormControl