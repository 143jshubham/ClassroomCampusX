import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import http from "../../services/httpService";
import { apiEndPoint } from "../../config.json";
import { toast } from "react-toastify";

class PostForm extends Form {
  state = {
    data: {
      message: "",
    },
    errors: {},
  };
  schema = {
    message: Joi.string().required(),
  };
  doSubmit = async () => {
    const access = localStorage.getItem("access");
    const userId = localStorage.getItem("user_id");
    const params = {
      data: {
        message: this.state.data.message,
        access: access,
        user_id: userId,
        link: null,
      },
    };
    const { data } = await http.post(apiEndPoint + "/addfeed", params);
    console.log(data.message);
    toast.info(data.message);
    this.props.onRefresh();
  };
  render() {
    return (
      <div class="card-body p-0">
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            {this.renderTextArea("message", "", 3, "Write something here...")}
            {this.renderButton("Submit")}
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
