import React from "react";
import { Link } from "react-router-dom";

const TaskEvaluation = ({ activity }) => {
  return (
    <div className="card m-1 border border-success border-3">
      <div className="card-body">
        <h6 className="card-text float-right">{activity[4]}</h6>
        <br />
        <h6
          className="card-text"
          dangerouslySetInnerHTML={{ __html: activity[1] }}
        ></h6>
        <Link to={`/task/${activity[2]}`} className="btn btn-success">
          Go to task
        </Link>
      </div>
    </div>
  );
};

export default TaskEvaluation;
