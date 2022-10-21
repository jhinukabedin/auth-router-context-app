import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);


const UserContext = ({children}) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //Sign with Google
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUSer =>{
            setUser(currentUSer);
            setLoading(false);
            console.log('auth state change', currentUSer);
        })
        return () =>{
            unsubscribe();
        }
    }, [])

    const authinfo = {user, loading, createUser, signIn, logOut, signInWithGoogle}

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;