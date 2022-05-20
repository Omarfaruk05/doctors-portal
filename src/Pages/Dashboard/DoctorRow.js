import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({doctor, index, refetch}) => {
    const {name, specilty, img, email} = doctor;

    const handelDelete = email => {
        fetch(`https://evening-stream-52693.herokuapp.com/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
               toast.success(`Doctor: ${name} is Deleted.`);
               refetch();
            }
        })

    }

    return (
        <tr>
            <th>{index + 1}</th>
            <th><div class="avatar">
                    <div class="w-20 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div></th>
            <td>{name}</td>
            <td>{specilty}</td>
            <td><button onClick={() =>handelDelete(email)} className='btn btn-xs btn-error text-white'>Delete</button></td>
        </tr>
    );
};

export default DoctorRow;