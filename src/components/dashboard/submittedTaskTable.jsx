import React from "react";
import { Link } from "react-router-dom";

function convert(str) {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [day, mnth, date.getFullYear()].join("-");
}

const SubmittedTaskTable = ({ submittedTasks }) => {
  return (
    <div className="card">
      <div className="table-wrapper-scroll-y my-custom-scrollbar">
        <table className="table table-bordered table-striped mb-0">
          <thead>
            <tr className="first">
              <th>Task Name</th>
              <th>Submission Date</th>
            </tr>
          </thead>
          <tbody>
            {submittedTasks.map((task) => {
              return (
                <tr key={task[0]}>
                  <td className="last" style={{ textAlign: "left" }}>
                    <Link to={`/task/${task[0]}`}>
                      <strong>{task[1]}</strong>
                    </Link>
                  </td>
                  <td>
                    <a>{convert(task[2])}</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubmittedTaskTable;
