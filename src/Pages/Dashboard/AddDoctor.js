import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const {data: services, isLoading} = useQuery('services', () => fetch('https://evening-stream-52693.herokuapp.com/service').then(res=> res.json()));

    const imgStorageKey = 'd93b2967fa5ed86d686b286dab147db4';

    const onSubmit = async(data) =>{
       const image = data.image[0];
       const formData = new FormData();
       formData.append('image', image);
       const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
       fetch(url, {
           method: 'POST',
           body: formData
       })
       .then(res => res.json())
       .then(result =>{
           if(result.success){
               const img = result.data.url;
               const doctor = {
                   name: data.name,
                   email: data.email,
                   specilty: data.specilty,
                   img: img
               }
               fetch('https://evening-stream-52693.herokuapp.com/doctor',{
                   method: 'POST',
                   headers: {
                       'content-type': 'application/json',
                       authorization: `Bearer ${localStorage.getItem('accessToken')}`
                   },
                   body: JSON.stringify(doctor)
               })
               .then(res => res.json())
               .then(inserted => {
                  if(inserted.insertedId){
                    toast.success('Doctors added Successfully');
                    reset();
                  }
                  else{
                      toast.error('Failed to add the Doctor')
                  }
               })
           }
       } )


    }

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl'>Add a New Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" placeholder="Your Name" className="input input-bordered w-full max-w-xs" {...register("name",{
                                required: {
                                    value: true,
                                    message: 'Name is Requirted'
                                }
                            })} />
                            <label className="label">
                                {errors.name?.type === "required" && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                                            
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" {...register("email",{
                                required: {
                                    value: true,
                                    message: 'Email is Requirted'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valide email'
                                }
                            })} />
                            <label className="label">
                                {errors.email?.type === "required" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === "pattern" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Specialty</span>
                            </label>
                            <select {...register('specilty')} class="select input-bordered w-full max-w-xs">
                               {
                                   services.map(service => <option key={service._id} value={service.name}>{service.name}</option>)
                               }
                            </select>
                        </div> 
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="file" placeholder="Your Photo" className="input input-bordered w-full max-w-xs" {...register("image",{
                                required: {
                                    value: true,
                                    message: 'Image is Requirted'
                                }
                            })} />
                            <label className="label">
                                {errors.name?.type === "required" && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                                            
                            </label>
                        </div>
                        <input type="submit" value="Add" className='btn w-full max-w-xs' />
                    </form>
        </div>
    );
};

export default AddDoctor;