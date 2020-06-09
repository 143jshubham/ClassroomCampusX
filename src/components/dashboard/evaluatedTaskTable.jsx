import React from "react";
import { Link } from "react-router-dom";

const EvaluatedTaskTable = ({ evaluatedTasks }) => {
  return (
    <div className="card">
      <div className="table-wrapper-scroll-y my-custom-scrollbar">
        <table className="table table-bordered table-striped mb-0">
          <thead>
            <tr>
              <th>SNo</th>
              <th>Type</th>
              <th>Name</th>
              <th>Evaluated On</th>
              <th>Late Sub</th>
              <th>Score</th>
              <th>Winner</th>
            </tr>
          </thead>
          <tbody>
            {typeof evaluatedTasks === "undefined" ? (
              <h6 className="align-center m-3">Loading...</h6>
            ) : (
              evaluatedTasks.map((task) => {
                return (
                  <tr key={task[0]}>
                    <td>{task[0]}</td>
                    <td>{task[1]}</td>
                    <td style={{ textAlign: "left" }}>
                      <Link to={`/task/${task[7]}`}>
                        <strong>{task[2]}</strong>
                      </Link>
                      <br />
                      <small>
                        <em>{task[8]}</em>
                      </small>
                    </td>
                    <td>{task[3]}</td>
                    <td>{task[4]}</td>
                    <td>{task[5]}</td>
                    <td>{task[6]}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EvaluatedTaskTable;
