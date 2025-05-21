import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email , password)
    }

    const signOutUser = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const authData = {
        user,
        setUser,
        loading,
        signUpUser,
        signOutUser
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;