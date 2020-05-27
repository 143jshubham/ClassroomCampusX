import React from "react";

const TaskTables = () => {
  return (
    <div className="col-12">
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Pending Tasks
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Evaluated Tasks
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Submitted Tasks
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default TaskTables;
