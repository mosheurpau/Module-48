import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import google from "../../images/google-icon.png";

const Login = () => {
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form action="">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" required />
          </div>
          <input className="form-submit" type="form-submit" value="Login" />
        </form>
        <p className="form-link-p">
          New to Ema-John?
          <Link className="form-link" to="/signup">
            Create an account
          </Link>
        </p>
        <div className="line-group">
          <div></div>
          <p>Or</p>
          <div></div>
        </div>
        <button className="google-login-btn">
          <img className="google-logo" src={google} alt="" /> Continue with
          Google
        </button>
      </div>
    </div>
  );
};

export default Login;
