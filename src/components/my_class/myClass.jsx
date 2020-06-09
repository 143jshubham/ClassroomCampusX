import React, { Component } from "react";
import Classmates from "./classmates";
import CreateFeed from "./createFeed";
import Cover from "./cover";
import http from "../../services/httpService";
import { apiEndPoint } from "../../config.json";
import ClassFeed from "./classFeed";
import LoadingDots from "../common/loadingDots";
import ClassStats from "./classStats";

class MyClass extends Component {
  state = {
    classmatesInfo: null,
    posts: null,
    categories: null,
    batchInfo: null,
    stats: null,
  };

  async componentDidMount() {
    const params = {
      data: {
        user_id: localStorage.getItem("user_id"),
        batch_id: localStorage.getItem("batch_id"),
      },
    };
    const { data: classData } = await http.post(
      apiEndPoint + "/my_class",
      params
    );
    const {
      batch_details: classmatesInfo,
      batch_info: batchInfo,
      stats,
    } = classData;
    const { data } = await http.get(apiEndPoint + "/gyan");
    const { post_details, categories } = data;
    this.setState({
      classmatesInfo,
      posts: post_details,
      categories,
      batchInfo,
      stats,
    });
  }

  handleRefresh = async () => {
    const params = {
      data: {
        user_id: localStorage.getItem("user_id"),
        batch_id: localStorage.getItem("batch_id"),
      },
    };
    const { data } = await http.get(apiEndPoint + "/gyan");
    const { post_details } = data;
    this.setState({ posts: post_details });
  };

  render() {
    const { classmatesInfo, posts, categories, batchInfo, stats } = this.state;
    if (classmatesInfo !== null && posts !== null) {
      return (
        <div className="container">
          <Cover batchInfo={batchInfo} />
          <div className="row">
            <div className="col-md-5">
              <div className="row">
                  <div className="col-md-12 col-12 ">
                    <Classmates classmatesInfo={classmatesInfo} />
                  </div>
                  <div className="col-md-12 col-12">
                    <ClassStats stats={stats} />
                  </div>
                </div>  
              </div>
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-12 col-12">
                  <CreateFeed
                    categories={categories}
                    onRefresh={this.handleRefresh}
                  />
                </div>
                <div className="col-md-12">
                  <ClassFeed posts={posts} />
                </div>
              </div>
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

export default MyClass;
