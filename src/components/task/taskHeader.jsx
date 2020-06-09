import React from "react";

const TaskHeader = ({ marks, deadline, qualities, taskDesc }) => {
  return (
    <div>
      <h6 className="card-title">
        <strong>Marks: {marks} </strong>
        <span className="float-right">
          <p>
            <strong>Deadline: {deadline} </strong>
          </p>
        </span>
      </h6>
      <h6 className="card-title">
        <strong>Qualities: </strong>
        {qualities.map((quality) => {
          return <span className="badge badge-primary p-2 m-1">{quality}</span>;
        })}
      </h6>
      <h6 className="card-title">
        <strong>Task Description</strong>
      </h6>
      <p
        className="card-text"
        dangerouslySetInnerHTML={{ __html: taskDesc }}
      ></p>
    </div>
  );
};

export default TaskHeader;
