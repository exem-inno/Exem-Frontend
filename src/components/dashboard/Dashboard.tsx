import { useState, VFC } from "react";
import Box from "@mui/material/Box";
import { Responsive, WidthProvider } from "react-grid-layout";
import Toolbar from "@mui/material/Toolbar";
import _ from "lodash";
import "./dashboard.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

function generateLayout() {
  return _.map(_.range(0, 10), function (item, i) {
    var y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: (_.random(0, 5) * 2) % 12,
      y: Math.floor(i / 6) * y,
      w: 2,
      h: y,
      i: i.toString(),
    };
  });
}

const Dashboard: VFC = () => {
  const [layouts, setLayouts] = useState({ lg: generateLayout() });

  const generateDOM = () => {
    return _.map(layouts.lg, function (l, i) {
      return (
        <div key={i}>
          <span className="text">{i}</span>
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
