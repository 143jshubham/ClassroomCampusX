import React from "react";
import LoginForm from "./loginForm";

const Login = ({ onLogin }) => {
  return (
    <div className="bg" style={{ height: "100vh" }}>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-4 col-sm-12 col-xs-12 mt-100">
          <LoginForm onLogin={onLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
