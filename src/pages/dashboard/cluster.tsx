import Graph from "components/charts/Graph";
import { VFC } from "react";
import data from "datas/graph.json";

const ClusterPage: VFC = () => {
  const options = {
    nodes: {
      shape: "dot",
    },
    edges: {
      arrows: "to",
    },
  };

  return <Graph title="Service Graph" data={data} options={options} />;
};

export default ClusterPage;
