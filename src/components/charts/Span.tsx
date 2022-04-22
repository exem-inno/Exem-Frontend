import Box from "@mui/material/Box";
import { VFC } from "react";
import Chart from "./Chart";
import ReactECharts from "echarts-for-react";
import data from "datas/span.json";

const SpanChart: VFC = () => {
  const option = {
    title: {
      // text: "Waterfall Chart",
      // subtext: "Living Expenses in Shenzhen",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      formatter: function (params: any) {
        var tar = params[1];
        return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    yAxis: {
      type: "category",
      splitLine: { show: false },
      data: data.yAxisData,
    },
    xAxis: {
      type: "value",
      min: Math.min(...data.startTime),
      max: Math.max(...data.endTime),
    },
    series: [
      {
        name: "Placeholder",
        type: "bar",
        stack: "Total",
        itemStyle: {
          borderColor: "transparent",
          color: "transparent",
        },
        emphasis: {
          itemStyle: {
            borderColor: "transparent",
            color: "transparent",
          },
        },
        data: data.startTime,
      },
      {
        name: "duration",
        type: "bar",
        stack: "Total",
        label: {
          show: false,
          position: "inside",
        },
        data: data.duration,
      },
    ],
  };

  return (
    <Chart title="Span Data">
      <Box
        sx={{
          height: "100%",
          width: "100%",
          padding: "10px",
        }}
      >
        <ReactECharts option={option} />
      </Box>
    </Chart>
  );
};

export default SpanChart;
