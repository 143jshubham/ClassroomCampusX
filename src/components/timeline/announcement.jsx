import React from "react";

const Announcement = ({ activity }) => {
  return (
    <div className="card m-1">
      <div className="card-body border border-secondary border-3">
        <h6 className="card-text float-right">{activity[4]}</h6>
        <br />
        <h6
          className="card-text"
          dangerouslySetInnerHTML={{ __html: activity[1] }}
        ></h6>
      </div>
    </div>
  );
};

export default Announcement;
