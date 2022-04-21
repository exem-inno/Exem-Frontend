import { Box } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { Graph2d } from "vis-timeline/standalone";

// request data
const requestData = {
  options: {
    start: "2022-04-01 3:11:22",
    end: "2022-04-10 00:11:22",
  },
  items: [
    { x: "2022-04-01 03:11:25", y: 10 },
    { x: "2022-04-02 03:11:25", y: 25 },
    { x: "2022-04-03 03:11:25", y: 30 },
    { x: "2022-04-09 03:11:25", y: 10 },
    { x: "2022-04-09 06:11:22", y: 15 },
    { x: "2022-04-10 00:11:22", y: 30 },
  ],
};

// error data
const errorData = {
  options: {
    start: "2022-04-01 3:11:22",
    end: "2022-04-10 00:11:22",
  },
  items: [
    { x: "2022-04-01 03:11:25", y: 0 },
    { x: "2022-04-02 03:11:25", y: 5 },
    { x: "2022-04-03 03:11:25", y: 0 },
    { x: "2022-04-09 03:11:25", y: 1 },
    { x: "2022-04-09 06:11:22", y: 2 },
    { x: "2022-04-10 00:11:22", y: 3 },
  ],
};

// letency data
const letencyData = {
  options: {
    start: "2022-04-01 3:11:22",
    end: "2022-04-10 00:11:22",
  },
  items: [
    { x: "2022-04-01 03:11:25", y: 100 },
    { x: "2022-04-02 03:11:25", y: 250 },
    { x: "2022-04-03 03:11:25", y: 301 },
    { x: "2022-04-09 03:11:25", y: 120 },
    { x: "2022-04-09 06:11:22", y: 153 },
    { x: "2022-04-10 00:11:22", y: 340 },
  ],
};

interface Props {
  chartCategory: string;
}
const CustomChart: React.VFC<Props> = ({ chartCategory }) => {
  const chartRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (chartCategory === "Request") {
      if (chartRef.current) {
        chartRef.current.firstElementChild?.remove();
        new Graph2d(chartRef.current, requestData.items, requestData.options);
      }
    } else if (chartCategory === "Error") {
      if (chartRef.current) {
        chartRef.current.firstElementChild?.remove();
        new Graph2d(chartRef.current, errorData.items, errorData.options);
      }
    } else if (chartCategory === "Latency") {
      if (chartRef.current) {
        chartRef.current.firstElementChild?.remove();
        new Graph2d(chartRef.current, letencyData.items, letencyData.options);
      }
    } else if (chartCategory === "Select") {
      if (chartRef.current) {
        chartRef.current.firstElementChild?.remove();
      }
    }
  }, [chartCategory]);

  return (
    <React.Fragment>
      <h3>{chartCategory}</h3>
      <Box
        sx={{
          bgcolor: "gray",
          overflow: "auto",
          flexWrap: "wrap",
        }}
        ref={chartRef}
      />
    </React.Fragment>
  );
};

export default CustomChart;
