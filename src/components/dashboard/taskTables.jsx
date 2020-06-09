import React from "react";
import PendingTaskTable from "./pendingTaskTable";
import EvaluatedTaskTable from "./evaluatedTaskTable";
import SubmittedTaskTable from "./submittedTaskTable";

const TaskTables = ({ pendingTasks, submittedTasks, evaluatedTasks }) => {
  return (
    <div className="col-12">
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs id='nav-tab' role='tablist' ">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="nav-pending-tab"
                data-toggle="tab"
                href="#nav-pending"
                role="tab"
                aria-controls="nav-pending"
                aria-selected="true"
              >
                Pending Tasks
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="nav-evaluated-tab"
                data-toggle="tab"
                href="#nav-evaluated"
                role="tab"
                aria-controls="nav-evaluated"
                aria-selected="false"
              >
                Evaluated Tasks
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="nav-submitted-tab"
                data-toggle="tab"
                href="#nav-submitted"
                role="tab"
                aria-controls="nav-submitted"
                aria-selected="false"
              >
                Submitted Tasks
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-pending"
              role="tabpanel"
              aria-labelledby="nav-pending-tab"
            >
              <PendingTaskTable pendingTasks={pendingTasks} />
            </div>
            <div
              className="tab-pane fade"
              id="nav-evaluated"
              role="tabpanel"
              aria-labelledby="nav-evaluated-tab"
            >
              <EvaluatedTaskTable evaluatedTasks={evaluatedTasks} />
            </div>
            <div
              className="tab-pane fade"
              id="nav-submitted"
              role="tabpanel"
              aria-labelledby="nav-submitted-tab"
            >
              <SubmittedTaskTable submittedTasks={submittedTasks} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskTables;
