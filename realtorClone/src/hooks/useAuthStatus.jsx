import { onAuthStateChanged } from 'firebase/auth'
import React from 'react'
import { useState,useEffect } from 'react'
import {auth} from '../firebase'

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setLoggedIn(true)
        // setLoading(false)
      }
      setLoading(false)
    })
  },[])
  return {
    loggedIn,loading
  }
}

// export default useAuthStatus