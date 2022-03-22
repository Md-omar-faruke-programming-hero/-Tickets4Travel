import React from "react";
import Login from "./Login.js";
import loginBg from "../../image/login-bg.png";
const LoginBg = () => {
  return (
    <div className="login_bg">
      <div className="d-flex ">
        <div className="login_bg1 py-5">
          <img className="login_img-man" src={loginBg} alt="loginBg" />
        </div>
        <div className="login_bg2 bg-white"></div>
      </div>
      <div className="login_main">
        <Login />
      </div>
    </div>
  );
};

export default LoginBg;
