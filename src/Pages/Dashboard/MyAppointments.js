import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [user] = useAuthState(auth)
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
       if(user){
        fetch(`https://evening-stream-52693.herokuapp.com/booking?patient=${user.email}`,{
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            console.log(res);
            if(res.status === 401 || res.status === 403){
                signOut(auth);
                localStorage.removeItem('accessToken');
                navigate('/')
            }
            return res.json()})
        .then(data => {
            
            setAppointments(data)})
       }
    },[user])
    return (
        <div>
            <h1>my appointments: {appointments.length}</h1>
            <div class="overflow-x-auto">
                <table class="table">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Treatment</th>
                        <th>Payment</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((appointment, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{appointment.patientName}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.slot}</td>
                                <td>{appointment.treatment}</td>
                                <td>
                                    {(appointment.price && !appointment.paid) && <Link to={`/dashboard/payment/${appointment._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    {(appointment.price && appointment.paid) && <div>
                                        <p className='text-success'>Paid</p>
                                        <p>Transecton id: <span className='text-orange-500'>{appointment.transectionId}</span></p>
                                    </div>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;