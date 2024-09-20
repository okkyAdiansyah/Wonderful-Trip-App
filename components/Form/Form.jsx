import React from 'react'

const Form = ({action, method, children}) => {
  return (
    <form 
        method={method} 
        action={action}
        className='w-full flex flex-col px-5 md:px-8 py-8 gap-y-6 md:gap-y-8 bg-secondaryColor'    
    >Form</form>
  )
}

export default Form