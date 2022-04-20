import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import React from "react";

interface Props {
  title: string;
  chartCategory: string;
  setChartCategory: (value: string) => void;
}

const Header: React.VFC<Props> = ({
  title,
  chartCategory,
  setChartCategory,
}) => {
  const handleChartCategoryChange = (event: SelectChangeEvent) => {
    const data = event.target.value;
    setChartCategory(data);
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
        <h2>{title}</h2>
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
              <em>Select</em>
            </MenuItem>
            <MenuItem value="Request">Request</MenuItem>
            <MenuItem value="Error">Error</MenuItem>
            <MenuItem value="Latency">Latency</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Box>
  );
};

export default Header;
