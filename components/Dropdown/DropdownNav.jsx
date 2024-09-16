import React, { useState } from 'react'
import { NavComponent } from '../Nav'
import DropdownContainer from './DropdownContainer/DropdownContainer'
import DropdownLinkItem from './DropdownLinkItem/DropdownLinkItem'

const DropdownNav = () => {
    const [isActive, setIsActive] = useState(false);

    const handleActiveDropdown = () => {
        setIsActive(true);
    }

    const handleDeactiveDropdown = () => {
        setIsActive(false);
    }

  return (
    <>    
        <div className='flex items-center'>
            <NavComponent.NavItem 
                href={'/discover'} 
                content={'Discover'}
                onMouseEnter={handleActiveDropdown}
                onMouseLeave={handleDeactiveDropdown}
            />
            <DropdownContainer
                isActive={isActive}
                onMouseEnter={handleActiveDropdown}
                onMouseLeave={handleDeactiveDropdown}
            >
                <DropdownLinkItem 
                    theme={'dark'}
                    content={'Provinces'}
                    href={'/discover/provinces'}
                />
                <DropdownLinkItem 
                    theme={'dark'}
                    content={'Attractions'}
                    href={'/discover/attractions'}
                />
            </DropdownContainer>
        </div>
    </>
  )
}

export default DropdownNav