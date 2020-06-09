import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import http from "../../services/httpService";
import { apiEndPoint } from "../../config.json";
import { toast } from "react-toastify";

class GyanForm extends Form {
  state = {
    data: {
      message: "",
      link: "",
      category: "",
    },
    errors: {},
  };
  schema = {
    message: Joi.string().required(),
    link: Joi.string().uri().required(),
    category: Joi.string().required(),
  };
  doSubmit = async () => {
    const access = localStorage.getItem("access");
    const userId = localStorage.getItem("user_id");
    const params = {
      data: {
        message: this.state.data.message,
        link: this.state.data.link,
        category: this.state.data.category,
        access: access,
        user_id: userId,
      },
    };
    console.log(params);
    const { data } = await http.post(apiEndPoint + "/addfeed", params);
    console.log(data.message);
    toast.info(data.message);
    this.props.onRefresh();
  };
  render() {
    const { categories } = this.props;
    if (categories !== null) {
      return (
        <div class="card-body p-0">
          <form onSubmit={this.handleSubmit} style={{ textAlign: "left" }}>
            <div class="form-group">
              {this.renderTextArea("message", "", 3, "Write something here...")}
              {this.renderInput("link", "Link")}
              {this.renderSelect("category", "Category", categories)}
              {this.renderButton("Submit")}
            </div>
          </form>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default GyanForm;
