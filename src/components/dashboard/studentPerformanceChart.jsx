import React from "react";
import { Chart } from "react-google-charts";

const StudentPerformanceChart = ({ studentPerformance }) => {
  return (
    <Chart
    
      height={"350px"}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={studentPerformance}
      options={{
        title: "Student Performance",
        curveType: "function",
        legend: { position: "top" },
        hAxis: {
          title: "Evaluation Date",
          textStyle: {
            color: "black",
          },
          titleTextStyle: {
            color: "black",
            fontName: "sans-serif",
            fontSize: 11,
            bold: true,
            italic: false,
          },
        },
        vAxis: {
          title: "Performance( in %)",
          titleTextStyle: {
            fontColor: "red",
            fontName: "sans-serif",
            fontSize: 11,
            bold: true,
            italic: false,
          },
        },
        annotations: {
          alwaysOutside: true,
          textStyle: {
            fontSize: 14,
            auraColor: "none",
          },
        },
      }}
      rootProps={{ "data-testid": "2" }}
    />
  );
};

export default StudentPerformanceChart;
