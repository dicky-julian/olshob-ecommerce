import React from 'react';
import { Button } from '../../Components';
import { brand } from '../../Assets/Images';
import './index.scss';

const Navbar = () => {
    return (
        <nav>
            <img src={brand} alt='brand_logo' className='brand__image' />
            <Button
                title='Install Olshop'
                styles='primary'
                size='medium'
            />
        </nav>
    )
}

export default Navbar;