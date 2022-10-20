import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);


const UserContext = ({children}) => {

    const [user, setUser] = useState({displayName: 'Arifuzzaman Jhinuk'});

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    }

    const authinfo = {user, createUser}

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;