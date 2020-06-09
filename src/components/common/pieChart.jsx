import React from "react";
import Chart from "react-google-charts";

const PieChart = ({ title, data, is3D }) => {
  return (
    <Chart
      
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        title: title,
        is3D: is3D,
      }}
      rootProps={{ "data-testid": "1" }}
    />
  );
};

export default PieChart;
