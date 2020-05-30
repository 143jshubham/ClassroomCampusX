import React from "react";
import Evaluated from './task/evaluated'
import Pending from './task/pending'
import Submitted from './task/submitted'

const TaskTables = () => {
  return (
    <div className="col-12 tasktable">
     <div> <a className="Atitle bg-primary-3" style={{color:`#fff`,textAlign:"center"}}>Task Status</a></div>
     <hr/>
      <div className="card text-center">
        <div className="card-header">
        
          <ul className="nav nav-tabs card-header-tabs id='nav-tab' role='tablist' " style={{backgroundColor:`#eee`,width:`107%`,marginLeft:`-35px`,border:`none`}}>
            <li className="nav-item" style={{marginLeft:40}}>
              <a className="nav-link active"
               id="nav-pending-tab" 
               data-toggle="tab"
                href="#nav-pending" 
                role="tab" 
                aria-controls="nav-pending"
                 aria-selected="true" style={{width:180}}>
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
                 aria-selected="false"style={{width:180}}>
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
                 aria-selected="false" style={{width:180}}>
                Submitted Tasks
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active pending" id="nav-pending" role="tabpanel" aria-labelledby="nav-pending-tab">
              <Pending />
            </div>
            <div class="tab-pane fade evaluated" id="nav-evaluated" role="tabpanel" aria-labelledby="nav-evaluated-tab">
              <Evaluated />
            </div>
            <div class="tab-pane fade submitted" id="nav-submitted" role="tabpanel" aria-labelledby="nav-submitted-tab">
              <Submitted />
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default TaskTables;
