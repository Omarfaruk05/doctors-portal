import React from 'react';
import chair from '../../assets/images/chair.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero my-20">
            <div className=" flex items-center justify-between flex-col lg:flex-row-reverse lg:mx-8">
                <img src={chair} className="max-w-sm md:max-w-2xl rounded-lg sm:shadow-2xl" alt=''/>
                <div>
                   <div className='lg:w-100 w-10/12 mx-auto lg:mx-0 sm:mt-16'>
                   <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;