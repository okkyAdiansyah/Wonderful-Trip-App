import React from 'react';
import NavItem from '../NavItem/NavItem';
import DropdownNav from '@/components/Dropdown/DropdownNav';

const DesktopNav = () => {
  return (
    <div className='flex items-center'>
        <DropdownNav />
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

export default DesktopNav