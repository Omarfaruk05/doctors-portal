import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:mx-8 lg:grid-cols-3 gap-5 px-8 lg:px-0'>
            <InfoCard cardTitle="Opening Hours" bgclassName="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
            <InfoCard cardTitle="Our Locations" bgclassName="bg-accent" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact Us" bgclassName="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;