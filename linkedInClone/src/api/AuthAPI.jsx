
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
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

