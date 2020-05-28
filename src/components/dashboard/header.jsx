import React from "react";

const Header = () => {
  return (
    <div className="row mb-3" style={{ marginTop: 80 }}>
      <div className="col-md-6">
        <h1>Dashboard</h1>
      </div>
      <div className="col-md-6">
        <div className="dropdown float-right">
          <button
            className="btn btn-danger btn-sm dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Select Month
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown" href="#">
              Something else here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
