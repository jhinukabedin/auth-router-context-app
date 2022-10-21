import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
        .then( () => {})
        .catch(error => console.error(error));
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Awesome {user?.displayName} Auth</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {user?.email && <span>Welcome, {user.email}</span>}
                {
                    user?.email? <button onClick={handleLogOut} className="ml-4 btn btn-outline btn-error">Sign out</button> : 
                    <Link to="/login" className="ml-4 btn btn-outline btn-error">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;