import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Login = () => {

    const {signIn, signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result =>{
            const user = result.user;
            form.reset();
            navigate('/home');
        })
        .catch( error =>{
            console.error(error)
        })

    }

    const googleLoginHandler =() => {
        signInWithGoogle()
        .then(result =>{
            const user = result.user;
            navigate('/');
        })
        .catch(error => console.error(error));
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center mb-3">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>

                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="flex flex-row justify-center h-100 card bg-base-300 rounded-box place-items-center ">
                            <button className="btn btn-circle">f</button>
                            <button onClick={googleLoginHandler} className="btn btn-circle">G</button>
                            <button className="btn btn-circle">Git</button>
                        </div>
                        <div className="divider">OR</div>
                            <div className="grid h-100 card bg-base-300 rounded-box place-items-center">
                                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                            <label className="label">
                                                <Link to="/forget-password" className="label-text-alt link link-hover">Forgot password?</Link>
                                            </label>
                                        </div>
                                        <div className="form-control mt-6">
                                            <button className="btn btn-primary">Login</button>
                                        </div>
                                    </form>    
                                </div>
                            </div>
                        </div>
                    </div>


                    
                </div>
            </div>            
        </div>
    );
};

export default Login;