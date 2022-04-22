import { Box } from "@mui/material";
import { useEffect, useRef, VFC } from "react";
import { IEdge, INode } from "types/graph";
import { Network } from "vis-network/standalone";
import Chart from "./Chart";

interface Props {
  title: string;
  nodes: INode[];
  edges: IEdge[];
  options: any;
}

const Graph: VFC<Props> = ({ title, nodes, edges, options }) => {
  const visJsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const network =
      visJsRef.current &&
      new Network(visJsRef.current, { nodes, edges }, options);
    network?.on("selectNode", (event: { nodes: string[] }) => {
      if (event.nodes?.length === 1) {
        console.log(event.nodes[0]);
      }
    });
    network?.on("selectEdge", (event: { edges: string[] }) => {
      if (event.edges?.length === 1) {
        console.log(event.edges[0]);
      }
    });
  }, [edges, nodes, options]);

  return (
    <Chart title={title}>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          padding: "10px",
        }}
        ref={visJsRef}
      ></Box>
    </Chart>
  );
};

export default Graph;
