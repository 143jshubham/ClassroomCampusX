import React from "react";
import StudentPerformanceChart from "./studentPerformanceChart";

const StudentPerformanceGraph = ({ studentPerformance }) => {
  console.log(studentPerformance);
  return (
    <div className="studentGraph">
    <div className="card bg-primary text-white">
      <div className="card-body">
        <h5 className="card-title">Student Performance</h5>
        {studentPerformance.length == 1 ? (
          <h6>Not enough data yet</h6>
        ) : (
          <StudentPerformanceChart studentPerformance={studentPerformance} />
        )}
      </div>
    </div>
    </div>
  );
};

export default StudentPerformanceGraph;
