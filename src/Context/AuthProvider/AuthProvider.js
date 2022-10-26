import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    //    Google login
    const googleLogin = (Provider) => {
        return signInWithPopup(auth, Provider);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    // Github login
    const githubLogin = (Provider) => {
        return signInWithPopup(auth, Provider);
    };

    // User create
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // Login
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    //log out
    const logOut = () => {
        return signOut(auth);
    };

    const authInfo = { user, googleLogin, githubLogin, logOut, createUser, signIn }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;