import React, { Component } from "react";
import http from "../../services/httpService";
import { apiEndPoint } from "../../config.json";
import LoadingDots from "../common/loadingDots";
import TaskAdded from "./taskAdded";
import CourseAdded from "./courseAdded";
import TaskEvaluation from "./taskEvaluation";
import Gyan from "./gyan";
import YoutubeVideo from "./youtubeVideo";
import Announcement from "./announcement";
import ProfileSection from "../profile/profileSection";

class Timeline extends Component {
  state = {
    timelineInfo: null,
    profileInfo: null,
  };
  componentDidMount = async () => {
    const batchId = localStorage.getItem("batch_id");
    const userId = localStorage.getItem("user_id");
    const params = { data: { batch_id: batchId, user_id: userId } };
    const { data: timelineData } = await http.post(
      apiEndPoint + "/timeline",
      params
    );
    const { data: profileData } = await http.post(
      apiEndPoint + "/profile",
      params
    );
    this.setState({ timelineInfo: timelineData, profileInfo: profileData });
  };
  render() {
    if (this.state.timelineInfo != null || this.state.profileInfo !== null) {
      const { days } = this.state.timelineInfo;
      return (
        <div className="container-fluid" style={{ marginTop: 80 }}>
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ProfileSection profileInfo={this.state.profileInfo} />
            </div>
            <div className="col-md-7 col-sm-12 col-xs-12">
              {days.map((day) => {
                return (
                  <div key={day[0]}>
                    <h4 className="card-title underline mt-3 mb-3 ml-1 mr-1">
                      <u>Day {day[0]}</u>
                    </h4>
                    {day[1].map((activity) => {
                      return (
                        <div key={activity[3]}>
                          {activity[0] === "Task Added" ? (
                            <TaskAdded activity={activity} />
                          ) : activity[0] === "Content Added" ? (
                            <CourseAdded activity={activity} />
                          ) : activity[0] === "Task Evaluation" ? (
                            <TaskEvaluation activity={activity} />
                          ) : activity[0] === "Gyan" ? (
                            <Gyan activity={activity} />
                          ) : activity[0] === "Youtube Video" ? (
                            <YoutubeVideo activity={activity} />
                          ) : (
                            <Announcement activity={activity} />
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
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

export default Timeline;
