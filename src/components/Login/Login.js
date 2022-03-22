import React from 'react';
import logo from '../../image/blue-logo.png'
import facebook from "../../image/facebook.png";
import google from "../../image/google.png";
const Login = () => {
    return (
      <div className="bg-white login_full-page rounded">
        <div className="d-flex justify-content-center align-items-center text-center">
          <div className="login_page py-5">
            <img className="login_logo" src={logo} alt="logo" />
            <p>Explore The Best Tours... Hurry up!!</p>
            <input
              className="mt-2 login_input"
              type="email"
              name=""
              placeholder="Email Address"
              id=""
            />
            <br />
            <input
              className="mt-2 login_input mt-3"
              type="password"
              name=""
              placeholder="Password"
              id=""
            />
            <p className="forgot_password">Forgot Password?</p>
            <button className="login_btn">LOG IN</button>
            <div className="login-or1">
              <h6 className="my-4 login-or">OR</h6>
            </div>
            <div className="my-3">
              <img className="login_img me-4" src={facebook} alt="facebook" />
              <img className="login_img" src={google} alt="google" />
            </div>
            <p>
              Don't have an account? <span className="sign-up">Sign Up</span>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Login;