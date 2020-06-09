import React, { Component } from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import { apiEndPoint } from "../../config.json";
import http from "../../services/httpService";
import { toast } from "react-toastify";

class SubmitTaskForm extends Form {
  state = {
    data: {
      taskSubUrl: "",
    },
    errors: {},
  };
  schema = {
    taskSubUrl: Joi.string().uri().required(),
  };
  doSubmit = async () => {
    const { taskId } = this.props;
    const access = localStorage.getItem("access");
    const batchId = localStorage.getItem("batch_id");
    const userId = localStorage.getItem("user_id");
    const params = {
      data: {
        task_sub_url: this.state.data.taskSubUrl,
        access: access,
        batch_id: batchId,
        user_id: userId,
        task_id: taskId,
      },
    };
    console.log(params);
    const { data } = await http.post(
      apiEndPoint + "/submission_insert",
      params
    );
    console.log(data.message);
    toast.info(data.message);
  };
  render() {
    return (
      <div class="card mt-2 mb-2" style={{ boxShadow: `0px 0px 4px #ddd` }}>
        <div class="card-body">
          <form onSubmit={this.handleSubmit}>
            <div class="form-group">
              {this.renderInput("taskSubUrl", "Task Submission URL")}
              {this.renderButton("Submit")}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SubmitTaskForm;
