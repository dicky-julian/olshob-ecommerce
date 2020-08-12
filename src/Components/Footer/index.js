import React from 'react';
import { Button } from '../../Components';
import { brand } from '../../Assets/Images';

const Footer = () => {
    return (
        <footer>
            <img src={brand} alt='olshob brand' />
            <div>
                <h4>Olshob</h4>
                <h6 className='font-thin'>
                    Olshob is growing as one of the best fashion
                    design centers for the world and committed
                    to providing the best for you
                </h6>
                <Button title='Download Olshob' size='medium' styles='primary' />
            </div>
        </footer>
    )
}

export default Footer;