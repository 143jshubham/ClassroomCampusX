import React, { Component } from "react";
import CourseVideo from "./courseVideo";
import ContentList from "./contentList";
import http from "../../services/httpService";
import { apiEndPoint } from "../../config.json";
import LoadingDots from "../common/loadingDots";
import { toast } from "react-toastify";

class Course extends Component {
  state = {
    content: null,
    video: null,
  };
  componentDidMount = async () => {
    const { courseId } = this.props.match.params;
    const batchId = localStorage.getItem("batch_id");
    const params = { data: { course_id: courseId, batch_id: batchId } };
    const { data } = await http.post(apiEndPoint + "/course_content", params);
    const { content_details } = data;
    this.setState({ content: content_details, video: content_details[0][2] });
  };
  handleContentClick = (contentItem) => {
    if (contentItem[0] === "Video") {
      console.log(contentItem[2]);
      this.setState({ video: contentItem[2] });
    }
  };
  render() {
    const { content, video } = this.state;

    if (content) {
      return (
        <div className="container-fluid">
          <div className="row" style={{ marginTop: 100 }}>
            <div className="col-md-8">
              <CourseVideo video={video} />
            </div>
            <div className="col-md-4">
              <ContentList
                content={content}
                onContentClick={this.handleContentClick}
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

export default Course;
