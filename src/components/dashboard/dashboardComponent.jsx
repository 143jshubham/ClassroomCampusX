import React, { Component } from "react";
import Header from "./header";
import Card from "./card";
import TaskTables from "./taskTables";
import Leaderboard from "./leaderboard";
import StudentPerformanceGraph from "./studentPerforanceGraph";

class DashboardComponent extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <Card title="Total Score" value="51.25" />
          <Card title="Class Rank" value="51.25" />
          <Card title="Late Submissions" value="51.25" />
          <Card title="Tasks Won" value="51.25" />
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
    );
  }
}

export default DashboardComponent;
