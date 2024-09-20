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
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isFailed, setIsFailed] = useState(false);

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

    const handleCloseModal = () => {
        setIsLoading(!isLoading);
        setIsFailed(!isFailed);
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(!isLoading);

        let res = await fetch('/api/v1/auth/login', {
            method: 'post',
            body: JSON.stringify(formData)
        })

        if(res.status === 200){
            setIsLoading(false)
        } else {
            setIsFailed(!isFailed)
        }
    }

  return (
    <>
        {isLoading &&
            <div className='w-full h-full absolute z-10 flex items-center justify-center backdrop-blur-md bg-primaryColor/30'>
                <div className='w-fit md:w-1/2 md:h-1/2 absolute flex flex-col gap-y-8 items-center justify-center p-6 bg-secondaryColor rounded-lg z-10 mt-[104px]'>
                    {isFailed ?
                        <>        
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M25.188 46.5159L25.164 46.5199L25.022 46.5899L24.982 46.5979L24.954 46.5899L24.812 46.5179C24.7906 46.5125 24.7746 46.5165 24.764 46.5299L24.756 46.5499L24.722 47.4059L24.732 47.4459L24.752 47.4719L24.96 47.6199L24.99 47.6279L25.014 47.6199L25.222 47.4719L25.246 47.4399L25.254 47.4059L25.22 46.5519C25.2146 46.5305 25.204 46.5185 25.188 46.5159ZM25.716 46.2899L25.688 46.2939L25.32 46.4799L25.3 46.4999L25.294 46.5219L25.33 47.3819L25.34 47.4059L25.356 47.4219L25.758 47.6059C25.7833 47.6125 25.8026 47.6072 25.816 47.5899L25.824 47.5619L25.756 46.3339C25.7493 46.3085 25.736 46.2939 25.716 46.2899ZM24.286 46.2939C24.2772 46.2885 24.2666 46.2868 24.2566 46.289C24.2465 46.2913 24.2377 46.2973 24.232 46.3059L24.22 46.3339L24.152 47.5619C24.1533 47.5859 24.1646 47.6019 24.186 47.6099L24.216 47.6059L24.618 47.4199L24.638 47.4039L24.644 47.3819L24.68 46.5219L24.674 46.4979L24.654 46.4779L24.286 46.2939Z" fill="#950000"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M22 4C19.3478 4 16.8043 5.05357 14.9289 6.92893C13.0536 8.8043 12 11.3478 12 14C12 16.6522 13.0536 19.1957 14.9289 21.0711C16.8043 22.9464 19.3478 24 22 24C24.6522 24 27.1957 22.9464 29.0711 21.0711C30.9464 19.1957 32 16.6522 32 14C32 11.3478 30.9464 8.8043 29.0711 6.92893C27.1957 5.05357 24.6522 4 22 4ZM22 26C17.21 26 12.85 27.388 9.644 29.344C8.044 30.32 6.676 31.472 5.688 32.724C4.716 33.952 4 35.426 4 37C4 38.69 4.822 40.022 6.006 40.972C7.126 41.872 8.604 42.468 10.174 42.884C13.33 43.718 17.542 44 22 44C22.4613 44 22.918 43.9967 23.37 43.99C23.705 43.9854 24.0334 43.8967 24.3252 43.7322C24.6169 43.5676 24.8627 43.3323 25.0399 43.048C25.217 42.7638 25.32 42.4395 25.3392 42.1051C25.3585 41.7707 25.2934 41.4367 25.15 41.134C24.3916 39.5288 23.9988 37.7753 24 36C24 33.496 24.766 31.176 26.074 29.254C26.2684 28.9684 26.3855 28.6373 26.4139 28.2929C26.4423 27.9486 26.381 27.6027 26.236 27.2891C26.091 26.9755 25.8672 26.7049 25.5864 26.5035C25.3057 26.3021 24.9775 26.1769 24.634 26.14C23.7727 26.0467 22.8947 26 22 26ZM33.172 30.344C32.7948 29.9797 32.2896 29.7781 31.7652 29.7827C31.2408 29.7872 30.7392 29.9975 30.3684 30.3684C29.9975 30.7392 29.7872 31.2408 29.7827 31.7652C29.7781 32.2896 29.9797 32.7948 30.344 33.172L33.172 36L30.344 38.828C30.153 39.0125 30.0006 39.2332 29.8958 39.4772C29.791 39.7212 29.7358 39.9836 29.7335 40.2492C29.7312 40.5148 29.7818 40.7781 29.8824 41.0239C29.9829 41.2697 30.1314 41.493 30.3192 41.6808C30.507 41.8686 30.7303 42.0171 30.9761 42.1176C31.2219 42.2182 31.4852 42.2688 31.7508 42.2665C32.0164 42.2642 32.2788 42.209 32.5228 42.1042C32.7668 41.9994 32.9875 41.847 33.172 41.656L36 38.828L38.828 41.656C39.0125 41.847 39.2332 41.9994 39.4772 42.1042C39.7212 42.209 39.9836 42.2642 40.2492 42.2665C40.5148 42.2688 40.7781 42.2182 41.0239 42.1176C41.2697 42.0171 41.493 41.8686 41.6808 41.6808C41.8686 41.493 42.0171 41.2697 42.1176 41.0239C42.2182 40.7781 42.2688 40.5148 42.2665 40.2492C42.2642 39.9836 42.209 39.7212 42.1042 39.4772C41.9994 39.2332 41.847 39.0125 41.656 38.828L38.828 36L41.656 33.172C42.0203 32.7948 42.2219 32.2896 42.2173 31.7652C42.2128 31.2408 42.0025 30.7392 41.6316 30.3684C41.2608 29.9975 40.7592 29.7872 40.2348 29.7827C39.7104 29.7781 39.2052 29.9797 38.828 30.344L36 33.172L33.172 30.344Z" fill="#950000"/>
                            </svg>
                            <p className='font-primary font-bold text-2xl text-alert'>Failed to Login</p>
                            <p className='font-primary font-medium text-sm text-text-light'>Username or Password is wrong</p>
                            <Button.AlertButton 
                                command={'Back'}
                                onClick={handleCloseModal} 
                            />
                        </> :
                        <>
                            <span className='loader' />
                            <p className='font-primary font-semibold text-lg text-text-light'>Authenticating...</p>

                        </>
                    }
                </div>
            </div>         
        }
        <form className='w-full md:w-1/2 flex flex-col px-5 md:px-8 py-8 gap-y-6 md:gap-y-8 bg-secondaryColor rounded-xl'
            method='post'
            onSubmit={handleFormSubmit}
        >
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
    </>
  )
}

export default LoginFormControl