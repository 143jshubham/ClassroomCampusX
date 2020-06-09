import React from "react";
import { Link } from "react-router-dom";

function convert(str) {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [day, mnth, date.getFullYear()].join("-");
}

const PendingTaskTable = ({ pendingTasks }) => {
  return (
    <div className="table-wrapper-scroll-y my-custom-scrollbar">
      <table
        className="table table-bordered table-striped mb-0"
        style={{ alignItems: "left" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {pendingTasks.map((task) => {
            return (
              <tr key={task[0]}>
                <td style={{ textAlign: "left" }}>
                  <Link to={`/task/${task[0]}`}>
                    <strong>{task[1]}</strong>
                  </Link>
                </td>
                <td>{convert(task[2])}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PendingTaskTable;
