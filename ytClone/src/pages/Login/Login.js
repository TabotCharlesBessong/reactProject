
import React from 'react'
import yt from '../../images/yt.png'
import './_login.scss'


const Login = () => {
  return (
    <div className='login' >
       <div className="login__container">
         <img src={yt} alt="" />
         <button> login with google </button>
         <p>This project is made using the youtube Api </p>
       </div>
    </div>
  )
}

export default Login