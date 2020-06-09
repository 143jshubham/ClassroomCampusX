import React from "react";
import bgimg from "../../static/img/class_bg.jpg";

function Cover({ batchInfo }) {
  const convert = (str) => {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [day, mnth, date.getFullYear()].join("-");
  };
  return (
    <div
      className="jumbo jumbotron bg-white text-white"
      style={{
        marginTop: 60,
        backgroundImage: `url(${bgimg})`,
        backgroundSize: `cover`,
      }}
    >
      <h1 className="display-4" style={{ marginTop: 10 }}>
        {batchInfo[0]}
      </h1>
      <p
        className="lead text-white"
        style={{ marginBottom: -20, color: `#fff` }}
      >
        The journey began on : {convert(batchInfo[1])}
      </p>
    </div>
  );
}

export default Cover;
