import React, {  useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider
    const [theme, setTheme] = useState("light");


    const signUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email , password)
    }

    const signInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const signOutUser = ()=>{
        return signOut(auth)
    }

    const updateUser = (name, photo)=>{
        return updateProfile(auth.currentUser, {displayName : name, photoURL : photo})
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
        signOutUser,
        signInUser,
        updateUser,
        googleLogin,
        theme,
        setTheme
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;