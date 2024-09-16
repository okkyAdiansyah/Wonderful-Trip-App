import React from 'react'

const NavToggle = ({onClick, isActive}) => {
  return (
    <button 
      type='button'
      onClick={onClick}
      className='h-auto flex items-center'
    >
      {isActive ?
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1.74695" y="19.2175" width="24" height="5" rx="2.5" transform="rotate(-45 1.74695 19.2175)" fill="#E8E9F5"/>
          <rect x="5.28247" y="2.24697" width="24" height="5" rx="2.5" transform="rotate(45 5.28247 2.24697)" fill="#E8E9F5"/>
        </svg> : 
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="3" width="20" height="5" rx="2.5" fill="#E8E9F5"/>
          <rect y="10" width="24" height="5" rx="2.5" fill="#E8E9F5"/>
          <rect x="2" y="17" width="20" height="5" rx="2.5" fill="#E8E9F5"/>
        </svg>
      }
    </button>
  )
}

export default NavToggle