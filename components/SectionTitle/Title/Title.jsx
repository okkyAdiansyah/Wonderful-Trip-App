import React from 'react';

const Title = ({title}) => {
  return (
    <h3 className='font-primary font-semibold text-[20px] md:text-[32px] text-left text-text-dark'>
      {title}
    </h3>
  )
}

export default Title