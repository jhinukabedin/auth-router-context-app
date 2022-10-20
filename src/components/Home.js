import React, { useContext } from 'react';
import { AuthContrxt } from '../contexts/UserContext';

const Home = () => {
    const {user} = useContext(AuthContrxt);
    return (
        <div>
            <h2>This is home for {user?.displayName}</h2>
        </div>
    );
};

export default Home;