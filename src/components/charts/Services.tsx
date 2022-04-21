import Graph from "./Graph";
import data from "datas/graph.json";
import { VFC } from "react";

const ServicesGraph: VFC = () => {
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

export default ServicesGraph;
