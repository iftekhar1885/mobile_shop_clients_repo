import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthProvider';
import { FaGoogle } from 'react-icons/fa';

import toast from 'react-hot-toast';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../Context/AuthProvider';
// import useToken from '../../hooks/useToken';

const SignIn = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const {newUser, updateUser, signInWithGoogle} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('')

    const navigate = useNavigate();

    const handleSIgnIn = (data) =>{
        console.log(data);
        setSignUpError('')
        newUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast('Create User Successfully')
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
             .then( () => {
                navigate('/');
             })
             .catch(error => console.log(error));
        })
        .catch(error =>{
            console.log(error)
            setSignUpError(error.message)
        });
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then( result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error));
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSIgnIn)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input
                            type="text"
                            {...register("name")}
                            className="input input-bordered w-full max-w-xs" />
                        {/* {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>} */}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "Email is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-300' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Must be required password",
                                minLength: { value: 6, message: 'password must be 6 characters or longer' },
                               
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-300' role="alert">{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forget Password</span></label>
                    </div>
                    <input className='btn btn-accent w-full' value='signup' type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>

                <p>Already Have An Account? <Link to='/login' className='text-secondary mt-3'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'><FaGoogle></FaGoogle>  CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignIn;