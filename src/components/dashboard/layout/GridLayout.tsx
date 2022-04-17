import { useState, FC } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import _ from "lodash";
import "./gridlayout.css";
import generateLayout from "utils/dashboard/generateLayout";

const ResponsiveGridLayout = WidthProvider(Responsive);

const GridLayout: FC = ({ children }) => {
  const [layouts] = useState({ lg: generateLayout(1) });

  const generateDOM = () => {
    return _.map(layouts.lg, function (l, i) {
      return (
        <div key={i}>
          <span className="text">{children}</span>
        </div>
      );
    });
  };

  return (
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
  );
};

export default GridLayout;
