import Box from "@mui/material/Box";
import { VFC } from "react";
import Chart from "./Chart";
import ReactECharts from "echarts-for-react";

interface Props {
  title: string;
}

const Span: VFC<Props> = ({ title }) => {
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
      data: ["tpcc-payment", "tpcc-payment", "tpcc-payment", "tpcc-main"],
    },
    xAxis: {
      type: "value",
      min: Math.min(908000, 904000),
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
        data: [910000, 909000, 908000, 904000],
      },
      {
        name: "duration",
        type: "bar",
        stack: "Total",
        label: {
          show: false,
          position: "inside",
        },
        data: [296, 193, 906, 6730],
      },
    ],
  };

  return (
    <Chart title={title}>
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

export default Span;
