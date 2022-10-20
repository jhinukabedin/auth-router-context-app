import React from 'react';
import { Link } from 'react-router-dom';

const Forget = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        alert(email);
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center mb-3">
                        <h1 className="text-5xl font-bold">Forget your password!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                                    <label className="label">
                                        <Link to="/register" className="label-text-alt link link-hover">New user! Please Signup</Link>
                                    </label>
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Get Password</button>
                                </div>
                            </form>    
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default Forget;