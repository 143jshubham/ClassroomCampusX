import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import { apiEndPoint } from "../../config.json";
import http from "../../services/httpService";

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
  doSubmit = async () => {
    const params = { data: this.state.data };
    try {
      const { data } = await http.post(
        apiEndPoint + "/login_validation",
        params
      );
      console.log(data);
      localStorage.setItem("user_id", data.user_id);
      localStorage.setItem("batch_id", data.batch_id);
      localStorage.setItem("fname", data.fname);
      localStorage.setItem("access", data.access);
      this.props.onLogin();
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = error.response.data.message;
        this.setState({ errors });
      }
    }
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
