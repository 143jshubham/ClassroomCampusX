import React from "react";
import LoginForm from "./loginForm";

const Login = ({ onLogin }) => {
  return (
    <div className="bg" style={{ height: "100%" }}>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-4 col-sm-12 col-xs-12">
          <LoginForm onLogin={onLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
