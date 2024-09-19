import React from 'react'
import MainCardBody from './MainCardBody/MainCardBody'
import MainCardThumb from './MainCardThumb/MainCardThumb'

const MainCard = ({thumbSrc, thumbAlt}) => {
  return (
    <div className='w-full flex flex-col items-start justify-start'>
        <MainCardThumb 
          src={thumbSrc}
          alt={thumbAlt}
        />
        <MainCardBody />
    </div>
  )
}

export default MainCard