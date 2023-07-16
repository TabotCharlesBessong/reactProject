
import React from "react";
import { Loader, LoginComponent } from "../components";
import { useEffect } from "react";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Login = () => {
  const [laoding, setLaoding] = useState(true)
  const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth,(res) => {
      if(res?.accessToken){
        navigate('/home')
      }else{
        setLaoding(false)
      }
    })
  },[])
  return <div>
    {
      laoding ? <Loader/> : <LoginComponent/>
    }
  </div>;
};

export default Login;
