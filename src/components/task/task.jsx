import React, { Component } from "react";
import http from "../../services/httpService";
import { apiEndPoint } from "../../config.json";
import LoadingDots from "../common/loadingDots";
import TaskHeader from "./taskHeader";
import VideoComponent from "./videoComponent";
import SubmitTaskForm from "./submitTaskForm";
import TaskLeaderboard from "./taskLeaderboard";

class Task extends Component {
  state = {
    taskInfo: null,
  };

  async componentDidMount() {
    const { taskId } = this.props.match.params;
    const params = {
      data: {
        user_id: localStorage.getItem("user_id"),
        batch_id: localStorage.getItem("batch_id"),
        task_id: taskId,
      },
    };
    const { data } = await http.post(apiEndPoint + "/task_details", params);
    console.log(data);
    this.setState({ taskInfo: data });
  }

  render() {
    const { taskInfo } = this.state;
    const { taskId } = this.props.match.params;
    if (taskInfo) {
      const { task_details: taskDetails } = taskInfo;
      return (
        <div className="container-fluid " style={{ marginTop: 80 }}>
          <div className="row">
            <div className="col-md-9 col-sm-12 col-xs-12 mt-3">
              <div className="card shadow-lg" style={{ height: `100%` }}>
                <div className="card-header bg-primary-3">
                  <h4 className="text-md-center text-light">
                    {taskDetails[0]}
                  </h4>
                </div>
                <div className="card-body">
                  <TaskHeader
                    marks={taskDetails[3]}
                    deadline={taskDetails[7]}
                    qualities={taskDetails[2]}
                    taskDesc={taskDetails[1]}
                  />
                  <div class="row">
                    <div class="col-md-12 col-12 col-xs-12 mt-1">
                      <div class="accordion" id="accordionExample">
                        <VideoComponent
                          videoType="Description"
                          videoUrl={taskDetails[6]}
                        />
                        <VideoComponent
                          videoType="Hint"
                          videoUrl={taskDetails[5]}
                        />
                        <VideoComponent
                          videoType="Solution"
                          videoUrl={taskDetails[4]}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-12 col-xs-12">
              <a href={taskDetails[8]} target="_blank">
                <button
                  class="btn btn-lg btn-block my-3 text-light bg-primary-3"
                  style={{ height: 35, lineHeight: 0, marginTop: 40 }}
                >
                  Go to Task
                </button>
              </a>
              <SubmitTaskForm taskId={taskId} />
              <TaskLeaderboard
                marksBatchmates={taskInfo["marks_batchmates"]}
                show={taskInfo["marks_batchmates"]}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="jumbotron d-flex align-items-center min-vh-100">
          <div className="container">
            <LoadingDots />
          </div>
        </div>
      );
    }
  }
}

export default Task;
