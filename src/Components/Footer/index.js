import React from 'react';
import { Button } from '../../Components';
import { brand } from '../../Assets/Images';

const Footer = () => {
    return (
        <footer>
            <img src={brand} alt='olshob brand' />
            <div>
                <h4>Shoopwi</h4>
                <h6 className='font-thin'>
                    Shoopwi is growing as one of the best fashion
                    design centers for the world and committed
                    to providing the best for you
                </h6>
                <Button title='Download Shoopwi' size='medium' styles='primary' />
            </div>
        </footer>
    )
}

export default Footer;