import React, { createContext, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContrxt = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {

    const [user, setUser] = useState({displayName: 'Arifuzzaman Jhinuk'});

    const authinfo = {user:user}

    return (
        <AuthContrxt.Provider value={authinfo}>
            {children}
        </AuthContrxt.Provider>
    );
};

export default UserContext;