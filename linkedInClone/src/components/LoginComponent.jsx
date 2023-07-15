
import React from "react";
import { LoginAPI,GoogleSignInAPI } from "../api/AuthAPI";
import '../Sass/LoginComponent.scss'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LinkedinLogo from '../assets/images/linkedinLogo.png'
import { toast } from "react-toastify";
import GoogleButton from "react-google-button";

const Login = () => {
  const [credentails, setCredentials] = useState({});
  const navigate = useNavigate()
  const login = async () => {
    try {
      let res = await LoginAPI(credentails.email, credentails.password);
      toast.success("Signed In to Linkedin!");
      localStorage.setItem("userEmail", res.user.email);
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error("Please Check your Credentials");
    }
  };

  const googleSignIn = () => {
    const response = GoogleSignInAPI()
    console.log(response)
  }
  return (
    <div className="login-wrapper">
      <img src={LinkedinLogo} className="linkedinLogo" />

      <div className="login-wrapper-inner">
        <h1 className="heading">Sign in</h1>
        <p className="sub-heading">Stay updated on your professional world</p>

        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or Phone"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password"
          />
        </div>
        <button onClick={login} className="login-btn">
          Sign in
        </button>
      </div>
      <hr className="hr-text" data-content="or" />
      <div className="google-btn-container">
        <GoogleButton className="google-btn" onClick={() => googleSignIn()} />
        <p className="go-to-signup">
          New to LinkedIn?{" "}
          <span className="join-now" onClick={() => navigate("/register")}>
            Join now
          </span>
        </p>
      </div>

    </div>
  );
};

export default Login;
