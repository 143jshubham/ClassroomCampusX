import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Header = ({ months, onMonthClick }) => {
  return (
    <div className="row mb-3 dashhead" style={{ marginTop: 80 }}>
      <div className="col-md-6">
        <h1>Dashboard</h1>
      </div>
      <div className="col-md-6">
        <div className="dropdown" style={{ float: `right` }}>
          <button
            className="btn btn-secondary btn-sm btn-danger"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Select Month{" "}
            <span style={{ marginLeft: `2px` }}>
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {months.map((monthYear) => {
              return (
                <a
                  key={monthYear}
                  className="dropdown-item"
                  onClick={() => {
                    onMonthClick(monthYear);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {monthYear}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
