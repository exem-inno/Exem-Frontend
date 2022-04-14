import { useState, VFC } from "react";
import Box from "@mui/material/Box";
import { Responsive, WidthProvider } from "react-grid-layout";
import Toolbar from "@mui/material/Toolbar";
import _ from "lodash";
import "./dashboard.css";
import Graph from "components/charts/Graph";
import graph from "datas/graph.json";

const ResponsiveGridLayout = WidthProvider(Responsive);

function generateLayout() {
  return _.map(_.range(0, 1), function (item, i) {
    // var y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: 0,
      y: 0,
      w: 12,
      h: 10,
      i: i.toString(),
    };
  });
}

const Dashboard: VFC = () => {
  const [layouts] = useState({ lg: generateLayout() });
  const options = {
    nodes: {
      shape: "dot",
    },
    edges: {
      arrows: "to",
    },
  };

  const generateDOM = () => {
    return _.map(layouts.lg, function (l, i) {
      return (
        <div key={i}>
          <Graph title="Service Graph" data={graph} options={options} />
        </div>
      );
    });
  };

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Toolbar />
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={30}
        width={1200}
      >
        {generateDOM()}
      </ResponsiveGridLayout>
    </Box>
  );
};

export default Dashboard;
