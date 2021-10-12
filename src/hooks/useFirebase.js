import {useEffect, useState} from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut  } from "firebase/auth";
import initializeAuthentication from '../firebase/firebase.init';

initializeAuthentication();

const useFirebase = () =>{
    const [user,setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
        
    }

    const logout = ()=>{
        signOut(auth)
        .then( ()=>{
            setUser({})
        })
    }
    useEffect( ()=>{
        onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        }
        });
    } , [])

    return{
        user,
        signInUsingGoogle,
        logout
    }


}
export default useFirebase;