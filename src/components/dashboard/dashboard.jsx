import React, { Component } from "react";
import Header from "./header";
import Card from "./card";
import TaskTables from "./taskTables";
import Leaderboard from "./leaderboard";
import StudentPerformanceGraph from "./studentPerforanceGraph";
import http from "../../services/httpService";
import { apiEndPoint } from "../../config.json";
import LoadingDots from "../common/loadingDots";

class Dashboard extends Component {
  state = {};
  componentDidMount = async () => {
    const params = {
      data: {
        user_id: localStorage.getItem("user_id"),
        batch_id: localStorage.getItem("batch_id"),
        access: localStorage.getItem("access"),
        fname: localStorage.getItem("fname"),
      },
    };
    const { data } = await http.post(apiEndPoint, params);
    console.log(data);
    this.setState({ data });
  };
  handleMonthClick = async (monthYear) => {
    const params = {
      data: {
        user_id: localStorage.getItem("user_id"),
        batch_id: localStorage.getItem("batch_id"),
        access: localStorage.getItem("access"),
        fname: localStorage.getItem("fname"),
        month_year: monthYear,
      },
    };
    const { data } = await http.post(apiEndPoint, params);
    console.log(data);
    this.setState({ data });
  };
  render() {
    const { data } = this.state;
    if (data) {
      return (
        <div className="container">
          <Header months={data.months} onMonthClick={this.handleMonthClick} />
          <div className="row">
            <Card title="Total Score" value={data.total_score} />
            <Card title="Class Rank" value={data.rank} />
            <Card title="Late Submissions" value={data.late_sub} />
            <Card title="Tasks Won" value={data.task_wins} />
          </div>
          <TaskTables
            pendingTasks={data.pending_tasks}
            submittedTasks={data.submitted_tasks}
            evaluatedTasks={data.evaluated_tasks}
          />
          <div className="row mt-3">
            <div className="col-md-5 col-12">
              <Leaderboard leaderBoardList={data.leader_board_list} />
            </div>
            <div className="col-md-7 col-12">
              <StudentPerformanceGraph
                studentPerformance={data["student_perf"]}
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

export default Dashboard;
