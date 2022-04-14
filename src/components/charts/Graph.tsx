import { Box, Typography } from "@mui/material";
import { useState, useEffect, useRef, VFC } from "react";
import { IGraphData } from "types/graph";
import { DataSet, Network } from "vis-network/standalone";

interface Props {
  title: string;
  data: IGraphData;
  options: any;
}

const Graph: VFC<Props> = ({ title, data, options }) => {
  const [nodes] = useState(new DataSet(data.nodes));
  const [edges] = useState(new DataSet(data.edges));
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
    <>
      <Typography
        sx={{ position: "absolute", top: "10px", left: "20px" }}
        variant="subtitle1"
      >
        {title}
      </Typography>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          padding: "10px",
        }}
        ref={visJsRef}
      ></Box>
    </>
  );
};

export default Graph;
