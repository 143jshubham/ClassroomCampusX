import React, { Component } from "react";
import http from "../../services/httpService";
import { apiEndPoint } from "../../config.json";
import LoadingDots from "../common/loadingDots";
import { toast } from "react-toastify";
import CourseCard from "./courseCard";

class MyCourses extends Component {
  state = {
    courses: null,
  };
  componentDidMount = async () => {
    const batchId = localStorage.getItem("batch_id");
    const params = { data: { batch_id: batchId } };
    const { data } = await http.post(apiEndPoint + "/courses", params);
    if (data.message) {
      toast.success(data.message);
    } else {
      const { courses } = data;
      this.setState({ courses });
    }
  };
  render() {
    const { courses } = this.state;
    if (courses) {
      return (
        <div className="container-fluid " style={{ marginTop: 80 }}>
          <div className="coursemenu">
            <div className="row" style={{ marginTop: 20 }}>
              {courses.map((course) => {
                return <CourseCard course={course} />;
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

export default MyCourses;
