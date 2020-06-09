import { React, Component } from "react";

class GuestLogin extends Component {
  componentDidMount() {
    localStorage.setItem("user_id", "78");
    localStorage.setItem("batch_id", "3");
    localStorage.setItem("fname", "Balaka");
    localStorage.setItem("access", "0");
    window.location = "/";
  }

  render() {
    return null;
  }
}

export default GuestLogin;
