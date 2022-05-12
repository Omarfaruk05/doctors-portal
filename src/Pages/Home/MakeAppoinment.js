import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';


const MakeAppoinment = () => {
    return (
        <section style={
            {background: `url(${appointment})`}
        } className='flex items-center justify-center p-4'>
            <div className='flex-1 hidden md:block'>
                <img className='mt-[-170px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary text-bold'>Appointment</h3>
                <h2 className='text-3xl text-white mb-8'>Make an Appointment Today</h2>
                <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae quod maiores iste sunt velit nesciunt libero dicta distinctio aut, vero voluptatum dolores delectus impedit quo magni saepe cumque, mollitia nihil.</p>
                <PrimaryButton>Get Starts</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppoinment;