import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.scss";

const Chart = (props) => {
  const dataPointValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValue);

  //   console.log(props.dataPoints, totalMaximum);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
