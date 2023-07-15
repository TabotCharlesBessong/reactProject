
import React from "react";
import { LoginComponent } from "../components";
import { useEffect } from "react";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth,(res) => {
      if(res?.accessToken){
        navigate('/home')
      }
    })
  },[])
  return <div>
    <LoginComponent/>
  </div>;
};

export default Login;
