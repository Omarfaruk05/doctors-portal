import React from 'react';
import chair from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <div class="hero my-20">
            <div class=" flex items-center justify-between flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-2xl rounded-lg sm:shadow-2xl"/>
                <div>
                   <div className='lg:w-100 w-10/12 mx-auto lg:mx-0 sm:mt-16'>
                   <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button class="btn btn-primary text-white text-upercase font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;