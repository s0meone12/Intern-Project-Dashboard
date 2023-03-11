import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
import Header from "../Header";

const Chart = () => {
  const chartDataPoints = [
    { label: "1 Mar", maxValue: 2 },
    { label: "2 Mar", maxValue: 3 },
    { label: "3 Mar", maxValue: 4 },
    { label: "4 Mar", maxValue: 5 },
    { label: "5 Mar", maxValue: 6 },
    { label: "6 Mar", maxValue: 9 },
    { label: "7 Mar", maxValue: 7 },
    { label: "8 Mar", maxValue: 6 },
    { label: "9 Mar", maxValue: 9 },
    { label: "10 Mar", maxValue: 4 },
    { label: "11 Mar", maxValue: 9 },
    { label: "12 Mar", maxValue: 7 },
    { label: "13 Mar", maxValue: 3 },
    { label: "14 Mar", maxValue: 6 },
  ];

  const dataPointValues = chartDataPoints.map(
    (dataPoint) => dataPoint.maxValue
  );
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div>
      <Header />

      <div className="chart">
        {chartDataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.maxValue}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Chart;
