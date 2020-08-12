import React from 'react';
import { bgHeader, benefits1, benefits2, benefits3, started, nums1, nums2, nums3, pageIllustration } from '../../Assets/Images';
import { Button } from '../../Components';
import './style.scss';
import './responsive.scss';

const Home = () => {
    return (
        <div className='home__container'>
            <div className='header'>
                <div className='header__content'>
                    <h1>Find Your Fashion</h1>
                    <h5 className='font-thin'>
                        <span className='font__bold font__primary'>Shoopwi </span>
                        whenever wherever make your style number one
                    </h5>
                    <Button title='Get Started' size='medium' styles='primary' />
                </div>
                <div className='header__image'>
                    <img src={bgHeader} alt='header' />
                </div>
            </div>
            <div className='benefits'>
                <div>
                    <div>
                        <img src={benefits1} alt='benefits 1' />
                        <h5 className='font__bold'>Shoping Anywhere Anytime</h5>
                        <h6 className='font-thin'>Easy way to get what you want anytime anywhere.</h6>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={benefits2} alt='benefits 2' />
                        <h5 className='font__bold'>Find the Newest and Most Complete</h5>
                        <h6 className='font-thin'>Find the latest and most complete product</h6>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={benefits3} alt='benefits 3' />
                        <h5 className='font__bold'>Fast and Safe Delivery Guarantee</h5>
                        <h6 className='font-thin'>The fastest and safest delivery guarantee to ensure your goods.</h6>
                    </div>
                </div>
            </div>
            <div className='started'>
                <h2 className='font-center'>Get Started Quickly</h2>
                <h5 className='font-thin font-center'>just small step to make you have amazing works in shoopwi .</h5>
                <div className='started__container'>
                    <div className='started__content'>
                        <div>
                            <img src={nums1} alt='num 1' />
                            <h5>
                                Download and Install
                                <span className='font-thin'>
                                    Get the Shoopwi application the easy way, download it on Google Playstore.
                                </span>
                            </h5>
                        </div>
                        <div>
                            <img src={nums2} alt='num 2' />
                            <h5>
                                Register as a Member
                                <span className='font-thin'>
                                    Be a part of shoopwi and get various benefits with us.
                                </span>
                            </h5>
                        </div>
                        <div>
                            <img src={nums3} alt='num 3' />
                            <h5>
                                Let's go Shoping
                                <span className='font-thin'>
                                    What to wait for? Let's have fun with Shoopwe ...
                                </span>
                            </h5>
                        </div>
                    </div>
                    <div className='started__image'>
                        <img src={started} alt='started' />
                    </div>
                </div>
            </div>
            <div className='promotion'>
                <div>
                    <img src={pageIllustration} alt='page illustration' />
                    <div>
                        <h3>What’s next? Let’s go Shopping with Shoopwi</h3>
                        <Button title='Download Shoopwi' size='medium' styles='primary' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;