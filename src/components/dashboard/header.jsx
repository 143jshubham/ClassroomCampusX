import React from "react";

const Header = () => {
  return (
    <div className="row mb-3" style={{ marginTop: 80 }}>
      <div className="col-md-6">
        <h1>Dashboard</h1>
      </div>
      <div className="col-md-6">
          <div class="dropdown" style={{float:`right`}}>
            <button class="btn btn-secondary btn-sm btn-danger" type="button" 
            id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
             aria-expanded="false"
             >
              Select Month <span style={{marginLeft:`2px`}}><i class="fa fa-angle-down" aria-hidden="true"></i></span>
            </button>
           <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
