import React from "react";
import Evaluated from './task/evaluated'
import Pending from './task/pending'
import Submitted from './task/submitted'

const TaskTables = () => {
  return (
    <div className="col-12">
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs id='nav-tab' role='tablist' ">
            <li className="nav-item">
              <a className="nav-link active"
               id="nav-pending-tab" 
               data-toggle="tab"
                href="#nav-pending" 
                role="tab" 
                aria-controls="nav-pending"
                 aria-selected="true">
                Pending Tasks
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" 
              id="nav-evaluated-tab"
               data-toggle="tab" 
               href="#nav-evaluated"
                role="tab" 
                aria-controls="nav-evaluated"
                 aria-selected="false">
                Evaluated Tasks
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" 
              id="nav-submitted-tab"
               data-toggle="tab" 
               href="#nav-submitted" 
               role="tab"
                aria-controls="nav-submitted"
                 aria-selected="false">
                Submitted Tasks
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-pending" role="tabpanel" aria-labelledby="nav-pending-tab">
              <Pending />
            </div>
            <div class="tab-pane fade" id="nav-evaluated" role="tabpanel" aria-labelledby="nav-evaluated-tab">
              <Evaluated />
            </div>
            <div class="tab-pane fade" id="nav-submitted" role="tabpanel" aria-labelledby="nav-submitted-tab">
              <Submitted />
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default TaskTables;
