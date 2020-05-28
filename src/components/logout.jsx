import { React, Component } from "react";
import { Redirect } from "react-router-dom";

class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem("user_id");
    localStorage.removeItem("batch_id");
    localStorage.removeItem("access");
    localStorage.removeItem("fname");
    window.location = "/";
  }

  render() {
    return null;
  }
}

export default Logout;
