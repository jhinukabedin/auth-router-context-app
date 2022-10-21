import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const PrivateRouter = ({children}) => {

    const {user, loading}= useContext(AuthContext);
    if(loading){
        return (
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                <div className="max-w-md">
                    <button className="btn loading">loading</button>
                </div>
                </div>
            </div>
        )
    }
    if(user && user.uid){
        return children;
    }

    return <Navigate to='/login'></Navigate>;
};

export default PrivateRouter;