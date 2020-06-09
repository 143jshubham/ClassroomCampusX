import React from "react";
import boyerror from "../../static/img/boyerror.png";

const WorkInProgress = () => {
  const today = new Date();
  const nextWeek = new Date(today.getTime() + 3 * 23 * 60 * 60 * 1000);
  const distance = nextWeek - today;
  const progress =
    Math.round(distance % (1000 * 60 * 60 * 24)) / (1000 * 40 * 40);
  return (
    <div className="row bg-primary-3">
      <div className="container workIn">
        <hgroup>
          <h1>Work in progress</h1>
        </hgroup>

        <div className="work-progress">
          <div className="work-complete" style={{ width: `${progress}%` }}>
            <div className="fill-liquid"></div>
          </div>
        </div>
      </div>
      <div
        id="boy"
        style={{
          backgroundImage: `url(${boyerror})`,
          width: `300px`,
          height: `400px`,
          backgroundSize: `cover`,
          marginTop: 90,
          marginLeft: 200,
        }}
      ></div>
    </div>
  );
};

export default WorkInProgress;
