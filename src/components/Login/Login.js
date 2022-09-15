import React from 'react';
import "./Login.css";
import { auth, provider } from "../../firebase";

const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(provider)
            .catch(error => alert(error.message));
    }
  return (
      <div className="login">
        <div className="login-container">
                <h1 className="login-title">it's <b>Shopping</b> Time !</h1>
                <button className="btn-login" onClick={signIn}>Sign In</button>
        </div>
      </div>
  )
}

export default Login