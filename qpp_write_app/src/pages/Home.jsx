
import React from 'react'
import { api } from '../api/appwrite'

const Home = () => {
    const loginWithGoogle = async () => {
      try {
        await api.loginWithGoogle()
      } catch (error) {
        console.log(error)  
      }
    }
  return (
    <div>
      <button onClick={() => loginWithGoogle()}>Login with Google</button>
    </div>
  )
}

export default Home
