import Graph from "components/charts/Graph";
import { useState, VFC } from "react";
import data from "datas/graph.json";
import NodesTable from "components/tables/Nodes";
import _ from "lodash";
import GridLayout from "components/dashboard/layout/GridLayout";
import NamespacesTable from "components/tables/Namespaces";
import { ILayout } from "types/layout";

const ClusterPage: VFC = () => {
  const [layouts] = useState<{ lg: ILayout[] }>({
    lg: [
      { i: "0", x: 0, y: 0, w: 12, h: 12 },
      { i: "1", x: 0, y: 0, w: 6, h: 12 },
      { i: "2", x: 6, y: 0, w: 6, h: 12 },
    ],
  });

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
        <div key={i} style={{ overflow: "scroll" }}>
          {i === 0 && (
            <Graph title="Service Graph" data={data} options={options} />
          )}
          {i === 1 && <NodesTable />}
          {i === 2 && <NamespacesTable />}
        </div>
      );
    });
  };

  return <GridLayout layouts={layouts}>{generateDOM()}</GridLayout>;
};

export default ClusterPage;
