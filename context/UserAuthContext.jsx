import { createContext, useContext, useEffect, useState } from 'react';
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider, 
    signInWithPopup,
    sendPasswordResetEmail,
    sendEmailVerification
} from 'firebase/auth';
import { auth } from '../firebase/firebaseApp'
import { app, database } from '../firebase/firebaseApp'

const userAuthContext = createContext({});

export function UserAuthContextProvider({children}) {
 const [user, setUser] = useState({})

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        return signOut(auth);
    }

    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider)
    }

    function forgotPassword(email) {
        return sendPasswordResetEmail(auth, email );
    }

    function verifyEmail() {
        return sendEmailVerification(auth.currentUser);
    }

  
useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser); 
      
    });
    return () => {
        unsubscribe();
    }
}, []);

    return (
        <userAuthContext.Provider value={{ user, signUp, logIn, logOut, googleSignIn, forgotPassword, verifyEmail }}>
            {children}
            </userAuthContext.Provider> )
}


export function useUserAuth() {
    return useContext(userAuthContext);
}