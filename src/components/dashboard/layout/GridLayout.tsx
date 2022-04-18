import { FC } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { ILayout } from "types/layout";
import "./gridlayout.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

interface Props {
  layouts: { lg: ILayout[] };
}

const GridLayout: FC<Props> = ({ layouts, children }) => {
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={30}
      width={1200}
    >
      {children}
    </ResponsiveGridLayout>
  );
};

export default GridLayout;
