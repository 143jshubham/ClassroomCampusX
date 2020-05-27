import React from "react";
import LoginForm from "./loginForm";

const LoginComponent = () => {
  return (
    <div className="container bg">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-4 col-sm-12 col-xs-12 mt-100">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
