import React, { Component } from "react";
import Header from "./header";
import Card from "./card";
import TaskTables from "./taskTables";
import Leaderboard from "./leaderboard";
import StudentPerformanceGraph from "./studentPerforanceGraph";
import http from "../../services/httpService";
import { apiEndPoint } from "../../config.json";
import LoadingDots from "../common/loadingDots";
import NavBar from '../navigation/navBar'

class Dashboard extends Component {
  // state = {};
  // async componentDidMount() {
  //   const params = {
  //     data: {
  //       user_id: localStorage.getItem("user_id"),
  //       batch_id: localStorage.getItem("batch_id"),
  //       access: localStorage.getItem("access"),
  //       fname: localStorage.getItem("fname"),
  //     },
  //   };
  //   const { data } = await http.post(apiEndPoint, params);
  //   this.setState({ data });
  // }
  render() {
    // const { data } = this.state;
    // if (data) {
      return (
        <div>
         <NavBar />
        <div className="container">
          <Header />
          <div className="row">
            <Card title="Total Score" value="544" />
            <Card title="Class Rank" value="544"/>
            <Card title="Late Submissions" value="544" />
            <Card title="Tasks Won" value="544" />
          </div>
          <TaskTables />
          <div className="row mt-3">
            <div className="col-md-5">
              <Leaderboard />
            </div>
            <div className="col-md-7">
              <StudentPerformanceGraph />
            </div>
          </div>
        </div>
        </div>
      );
    // } else {
    //   return (
    //     <div className="jumbotron d-flex align-items-center min-vh-100">
    //       <div className="container align-center">
    //         <LoadingDots />
    //       </div>
    //     </div>
    //   );
    
  }
}

export default Dashboard;
