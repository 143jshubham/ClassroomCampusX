import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";

class LoginForm extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };
  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().label("Password"),
  };
  doSubmit = () => {
    console.log(this.state.data);
    console.log("Submitted");
  };
  render() {
    return (
      <div className="card shadow-lg">
        <div className="card-header bg-royal-blue">
          <h4 className="text-md-center text-light">CampusX</h4>
        </div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("email", "Email")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Sign In")}
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
