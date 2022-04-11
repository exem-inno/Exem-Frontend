import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";


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

const Header: React.VFC = () => {
  const [chartCategory, setChartCategory] = useState<ChartCategory>("Select");

  const handleChartCategoryChange = (event: SelectChangeEvent) => {
    const data = event.target.value;
    if (isChartCategory(data)) {
      setChartCategory(data);
      console.log("category", data);
    } else {
      throw new Error("miss chart category type");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        height: "3rem",
        width: "auto",
        bgcolor: "#8bc34a",
        justifyContent: "space-between",
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
        />
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
            <MenuItem value="Topology">Topology</MenuItem>
            <MenuItem value="Trace">Span</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Box>
  );
};

export default Header;
