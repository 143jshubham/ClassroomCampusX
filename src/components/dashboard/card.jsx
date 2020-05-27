import React from "react";

const Card = ({ title, value }) => {
  return (
    <div className="col-md-3 col-xs-4">
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">
            <u>{title}</u>
          </h5>
          <p
            className="float-right display-3 text-primary"
            style={{ marginBottom: -20 }}
          >
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
