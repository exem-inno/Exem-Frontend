import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";

type ChartCategory = "Select" | "Topology" | "Trace";

const isChartCategory = (value: string): value is ChartCategory => {
  switch (value) {
    case "Select":
    case "Topology":
    case "Trace":
      return true;
    default:
      return false;
  }
};

const backendPath =
  "http://ec2-13-209-251-220.ap-northeast-2.compute.amazonaws.com:8080/";
// test url
const FIREBASE_DOMAIN = "https://react-26863-default-rtdb.firebaseio.com";

const Header: React.VFC = () => {
  const titleInputRef = useRef();
  const [chartCategory, setChartCategory] = useState<ChartCategory>("Select");
  // TODO: need to modify useState Type in a better way
  const [clusterSelect, setClusterSelect] = useState<string>("Select");
  const [namespaceSelect, setNamespaceSelect] = useState<string>("Select");
  // cluster
  const {
    data: clusters,
    isLoading: clusterLoading,
    error: clusterError,
  } = useQuery(
    "clusters",
    async () =>
      await fetch(`${FIREBASE_DOMAIN}/quotes.json`).then((res) => {
        if (!res.ok) {
          throw new Error("FUCKING FAILE");
        }
        return res.json();
      })
  );
  // namespace
  const {
    data: namespace,
    isLoading: namespaceLoading,
    error: namespaceError,
  } = useQuery<any, unknown, any, [string, number]>(
    ["namespaces", id],
    async () =>
      await fetch(`/api/clusters/${id}/namespaces`).then((res) => {
        if (!res.ok) {
          throw new Error("FUCKING FAILE");
        }
        return res.json();
      })
  );

  useEffect(() => {
    if (clusterLoading) {
      console.log("cluster is loading...");
    } else if (clusterError) {
      console.log("cluster is error");
    } else {
      console.log("cluster success?!", clusters);
    }
  }, [clusterError, clusterLoading, clusters]);

  const handleChartCategoryChange = (event: SelectChangeEvent) => {
    const data = event.target.value;
    if (isChartCategory(data)) {
      setChartCategory(data);
      console.log("category", data);
    } else {
      throw new Error("miss chart category type");
    }
  };

  const handleClusterSelectChange = (event: SelectChangeEvent) => {
    const data = event.target.value;
    console.log("clusterSelect", data);
    setClusterSelect(data);
  };

  const handleNamespaceSelectChange = (event: SelectChangeEvent) => {
    const data = event.target.value;
    console.log("namespaceSelect", data);
    setNamespaceSelect(data);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        bgcolor: "#8bc34a",
        justifyContent: "space-between",
        py: 1,
      }}
      component="form"
    >
      <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
        <TextField
          id="chartName"
          name="chartName"
          label="chart name"
          variant="standard"
          size="small"
          inputRef={titleInputRef}
        />
        {clusters && (
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="chartCategory">Category</InputLabel>
            <Select
              labelId="chartCategory"
              id="chartCategory"
              value={chartCategory}
              onChange={handleChartCategoryChange}
              label="Category"
            >
              <MenuItem value="Select">
                <em>select</em>
              </MenuItem>
              {/* {clusters.map((cluster: { id: number; name: string }) => (
                <MenuItem key={cluster.id} value={cluster.name}>
                  {cluster.name}
                </MenuItem>
              ))} */}
              <MenuItem value="Topology">Topology</MenuItem>
              <MenuItem value="Trace">Span</MenuItem>
            </Select>
          </FormControl>
        )}
        {chartCategory !== "Select" && (
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="cluster">Cluster</InputLabel>
            <Select
              labelId="cluster"
              id="cluster"
              value={clusterSelect}
              onChange={handleClusterSelectChange}
              label="cluster"
            >
              <MenuItem value="Select">
                <em>select</em>
              </MenuItem>
              <MenuItem value="cluster1">cluster1</MenuItem>
              <MenuItem value="cluster2">cluster2</MenuItem>
            </Select>
          </FormControl>
        )}
        {clusterSelect !== "Select" && (
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="namespace">Namespace</InputLabel>
            <Select
              labelId="namespace"
              id="namespace"
              value={namespaceSelect}
              onChange={handleNamespaceSelectChange}
              label="namespace"
            >
              <MenuItem value="Select">
                <em>select</em>
              </MenuItem>
              <MenuItem value="default">default</MenuItem>
              <MenuItem value="product">product</MenuItem>
            </Select>
          </FormControl>
        )}
      </Stack>
    </Box>
  );
};

export default Header;
