import React from "react";
import Chart from "react-google-charts";

const Bar = ({ data, title }) => {
  return (
    <Chart
      chartType="BarChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        title: title,
        chartArea: { width: "50%" },
        hAxis: {
          title: "Number",
          minValue: 0,
        },
        vAxis: {
          title: "College",
        },
      }}
      rootProps={{ "data-testid": "2" }}
    />
  );
};

export default Bar;
