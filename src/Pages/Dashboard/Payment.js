import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L12UiHFIwWC2zHBjIcdLiM7GaRQ1kH49MNeTR7AbrUbE4Us0cCN6iPUFUI4ZEFbqge2PmfljKxbcapmBWyzqspd00y4A66Q5F');

const Payment = () => {
    const {id} = useParams();
    const url = `https://evening-stream-52693.herokuapp.com/booking/${id}`;

    const {data: appointment, isLoading} = useQuery(['booking',id ], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
                <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                    <div class="card-body">
                        <p className='text-success'>Hello, {appointment.patientName}</p>
                        <h2 class="card-title">Please Pay for {appointment.treatment}</h2>
                        <p>Your Appoinment: <span className='text-orange-700'> {appointment.date} </span> or {appointment.slot}</p>
                        <p>Please pay: ${appointment.price}</p>
                    </div>
                    </div>
                    <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div>
                            <Elements stripe={stripePromise}>
                                <CheckoutForm appointment={appointment}></CheckoutForm>
                            </Elements>
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default Payment;