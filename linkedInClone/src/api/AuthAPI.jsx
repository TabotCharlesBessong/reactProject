
import {GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { auth } from '../firebaseConfig'


export const LoginAPI = (email,password) => {
  try {
    const response = signInWithEmailAndPassword(auth,email,password)    
    return response
  } catch (error) {
    // return error
    console.log(error.message)
  }
}


export const RegisterAPI = (email,password) => {
  try {
    const response = createUserWithEmailAndPassword(auth,email,password)    
    return response
  } catch (error) {
    // return error
    console.log(error.message) 
  }
}

export const GoogleSignInAPI = () => {
  try {
    const googleProvider = new GoogleAuthProvider();
    const res = signInWithPopup(auth, googleProvider);
    return res;
  } catch (err) {
    return err;
  }
};

export const onLogout = () => {
  try {
    signOut(auth);
  } catch (err) {
    return err;
  }
};