import { useEffect, useState, VFC } from "react";
import GridLayout from "components/dashboard/layout/GridLayout";
import { ILayout } from "types/layout";
import GridItem from "components/dashboard/layout/GridItem";
import _ from "lodash";

const ClusterPage: VFC = () => {
  const [layouts, setLayouts] = useState<{ lg: ILayout[] }>({
    lg: [],
  });

  useEffect(() => {
    setLayouts({
      lg: [
        { i: "service-graph", x: 0, y: 0, w: 12, h: 12 },
        { i: "nodes-table", x: 0, y: 0, w: 6, h: 12 },
        { i: "namespaces-table", x: 6, y: 0, w: 6, h: 12 },
      ],
    });
  }, []);

  const generateDOM = () => {
    return _.map(layouts.lg, function (l) {
      return (
        <div key={l.i} style={{ overflow: "scroll" }}>
          <GridItem key={l.i} type={l.i} />
        </div>
      );
    });
  };

  return <GridLayout layouts={layouts}>{generateDOM()}</GridLayout>;
};

export default ClusterPage;
