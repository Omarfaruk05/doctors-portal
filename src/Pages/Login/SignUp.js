import React from 'react';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const [token] = useToken(emailUser || googleUser);

      const navigate = useNavigate();
      let signInError;

      if(googleLoading  || emailLoading || updating){
        return <Loading></Loading>
    }

    if(googleError || emailError || updateError){
      signInError = <p className='text-red-500 mb-1'><small>{googleError?.message || emailError?.message || updateError?.message}</small></p>
    }
  
    if(googleUser || emailUser){
        console.log(googleUser || emailUser);
    }
    
    if(token) {
        navigate('/appointment')
    }


    const onSubmit = async(data) =>{
        const name = data.name;
        const email = data.email;
        const password = data.password;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }
    return (
        <div className='flex justify-center items-center h-screen'>
           <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>
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
                                <span className="label-text">Passowrd</span>
                            </label>
                            <input type="Password" placeholder="Your Password" className="input input-bordered w-full max-w-xs" {...register("password",{
                                required: {
                                    value: true,
                                    message: 'Passowrd is Requirted'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })} />
                            <label className="label">
                                {errors.password?.type === "required" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === "minLength" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                
                            </label>
                        </div> 
                        {signInError}                       
                        <input type="submit" value="Sign Up" className='btn w-full max-w-xs' />
                    </form>
                    <p><small>Already have an account ? <Link className='text-primary' to={"login"}>Please Login</Link></small></p>
                    <div className="divider">OR</div>
                    <button 
                    onClick={() => signInWithGoogle()} className="btn btn-outline"
                    >Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;