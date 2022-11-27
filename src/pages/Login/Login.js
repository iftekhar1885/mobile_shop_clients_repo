import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate  } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
// import { AuthContext } from '../../../Context/AuthProvider';
import useToken from '../../../src/hooks/UseToken';

const Login = () => {

    

    const { register, handleSubmit, formState: {errors} } = useForm();
    const {logIn, signInWithGoogle} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
     const [loginUserEmail, setLoginEmail] = useState('');
     const [token] = useToken(loginUserEmail);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (token){
        navigate(from, {replace: true});
    }

    const handleLogin = data =>{
        console.log(data);
        setLoginError('');
        logIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user)
           
            setLoginEmail(data.email);
            
        })
        .catch(error => {
            console.log(error.message)
            setLoginError(error.message);
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
                    <h2 className='text-xl text-center'>Login</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>
    
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input 
                            type="text" 
                            {...register("email", {
                                required: "Email is required"
                                })}
                                 className="input input-bordered w-full max-w-xs"/>          
                                 {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}  
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type="password"
                             {...register("password", {
                                required: "password is required",
                                // minLength: {value: 6, message: 'password must be 6 characters or longer'},
                                })} 
                                className="input input-bordered w-full max-w-xs"/>     
                                  {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}        
                            <label className="label"><span className="label-text">Forget Password</span></label>
                        </div>
                        <input className='btn btn-accent w-full' value='login' type="submit" />
                        <div>
                            { loginError && <p className='text-red-600'>{loginError}</p>}
                        </div>
                    </form>
    
                    <p>New to Doctors Portal? <Link to='/signin' className='text-secondary mt-3'>Please Create New Account</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'><FaGoogle></FaGoogle>   CONTINUE WITH GOOGLE</button>
                </div>
            </div>
    );
};
export default Login;