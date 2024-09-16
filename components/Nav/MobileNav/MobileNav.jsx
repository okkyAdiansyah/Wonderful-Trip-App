import React from 'react';
import NavItem from '../NavItem/NavItem';


const MobileNav = ({isActive}) => {
  return (
    <div className={`w-[145px] fixed z-50 top-mobileNav left-0 flex flex-col px-3 bg-secondaryColor ${isActive ? 'translate-x-0' : '-translate-x-full'} transition-transform ease-in-out duration-300`}>
      <NavItem 
        href={'/discover'} 
        content={'Discover'}
      />
      <NavItem 
        href={'/events'} 
        content={'Event'}
      />
      <NavItem 
        href={'/rulebook'} 
        content={'Rule Book'}
      />
    </div>
  )
}

export default MobileNav