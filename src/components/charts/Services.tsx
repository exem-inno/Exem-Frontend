import Graph from "./Graph";
import { useEffect, useState, VFC } from "react";
import { useQuery } from "react-query";
import { fetchJson } from "lib/api";
import { IEdge, INode } from "types/graph";
import Typography from "@mui/material/Typography";

const ServicesGraph: VFC = () => {
  const [nodes, setNodes] = useState<INode[]>([]);
  const [edges, setEdges] = useState<IEdge[]>([]);
  const options = {
    nodes: {
      shape: "dot",
    },
    edges: {
      arrows: "to",
    },
  };

  const { data } = useQuery("service-graph-data", async () => {
    try {
      return await fetchJson("/api/fromTo");
    } catch (err) {
      return undefined;
    }
  });
  useEffect(() => {
    console.log("data updated!", data);
    if (data) {
      const services = new Set<string>();
      setEdges(
        data.map(
          (v: { from: string; to: string; count: number }, i: number) => {
            services.add(v.from);
            services.add(v.to);
            return {
              id: i,
              from: v.from,
              to: v.to,
            };
          }
        )
      );
      if (services) {
        setNodes(
          Array.from(services).map((service: string) => ({
            id: service,
            label: service,
          }))
        );
      }
    }
  }, [data]);
  return (
    <>
      {data ? (
        <Graph
          title="Service Graph"
          nodes={nodes}
          edges={edges}
          options={options}
        />
      ) : (
        <Typography
          sx={{
            position: "absolute",
            top: "10px",
            left: "20px",
            fontWeight: 600,
          }}
          variant="subtitle1"
        >
          Loading...
        </Typography>
      )}
    </>
  );
};

export default ServicesGraph;
