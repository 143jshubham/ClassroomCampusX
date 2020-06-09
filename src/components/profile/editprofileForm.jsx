import React, { Component } from "react";
import Form from "../common/form";
import Modal from "react-bootstrap/Modal";
import Joi from "joi-browser";
import { apiEndPoint } from "../../config.json";
import http from "../../services/httpService";
import { toast } from "react-toastify";

class EditProfileForm extends Form {
  state = {
    data: {
      first_name: "",
      last_name: "",
      college: "",
      branch: "",
      passing_year: "",
      phone: "",
      youtube: "",
      github: "",
      medium: "",
      linkedin: "",
      portfolio: "",
    },
    errors: {},
  };
  componentDidMount() {
    const { profileInfo } = this.props;
    const {
      first_name,
      last_name,
      college,
      phone,
      branch,
      passing_year,
      youtube,
      github,
      medium,
      linkedin,
      portfolio,
    } = profileInfo;
    const data = {
      first_name: first_name,
      last_name: last_name,
      college: college,
      branch: branch,
      passing_year: passing_year,
      youtube: youtube,
      github: github,
      medium: medium,
      linkedin: linkedin,
      portfolio: portfolio,
    };
    this.setState({ data });
  }
  schema = {
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    college: Joi.string().required(),
    branch: Joi.string().required(),
    passing_year: Joi.number(),
    phone: Joi.string().min(10).max(10),
    youtube: Joi.string().uri().allow(""),
    github: Joi.string().uri().allow(""),
    medium: Joi.string().uri().allow(""),
    linkedin: Joi.string().uri().allow(""),
    portfolio: Joi.string().uri().allow(""),
  };
  doSubmit = async () => {
    const userId = localStorage.getItem("user_id");
    const access = localStorage.getItem("access");
    let { data } = this.state;
    data = { ...data, user_id: userId, access: access };
    console.log(data);
    const params = {
      data,
    };
    const { data: result } = await http.post(
      apiEndPoint + "/update_user",
      params
    );
    toast.success(result.message);
    this.props.handleClose();
  };
  render() {
    const { show, handleClose } = this.props;
    const { profileInfo } = this.props;

    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.handleSubmit}>
            <div class="form-group">
              {this.renderInput("first_name", "First Name")}
              {this.renderInput("last_name", "Last Name")}
              {this.renderInput("college", "College")}
              {this.renderSelect("branch", "Branch", profileInfo.branches)}
              {this.renderSelect(
                "passing_year",
                "Passing Year",
                profileInfo.years
              )}
              {this.renderInput("phone", "Phone")}
              {this.renderInput("youtube", "Video Resume")}
              {this.renderInput("github", "Github")}
              {this.renderInput("medium", "Medium")}
              {this.renderInput("linkedin", "Linekdin")}
              {this.renderInput("portfolio", "Portfolio")}
              {this.renderButton("Submit")}
            </div>
          </form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default EditProfileForm;
