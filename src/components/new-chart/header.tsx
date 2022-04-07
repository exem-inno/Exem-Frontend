import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { FormEvent, useState } from "react";

interface Props {
  onSubmit: (value: FormDataEntryValue) => void;
  onCancel: () => void;
}

type ChartCategory = "Select" | "Topology" | "Span";

const isChartCategory = (value: string): value is ChartCategory => {
  switch (value) {
    case "Select":
    case "Topology":
    case "Span":
      return true;
    default:
      return false;
  }
};

const Header: React.VFC<Props> = ({ onSubmit, onCancel }) => {
  const [isValidInputs, setIsValidInputs] = useState<Boolean | null>(null);
  const [chartCategory, setChartCategory] = useState<ChartCategory>("Select");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsValidInputs(true);
    const data = new FormData(event.currentTarget);
    const chartName = data.get("chartName");
    if (chartName) {
      onSubmit(chartName);
    } else {
      setIsValidInputs(false);
    }
  };

  const handleCancel = (event: React.MouseEvent) => {
    event.preventDefault();
    onCancel();
  };

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
        px: 4,
        bgcolor: "#8bc34a",
        justifyContent: "space-between",
      }}
      component="form"
      onSubmit={handleSubmit}
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
            <MenuItem value="Span">Span</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
        {isValidInputs === false && (
          <Typography variant="caption" color="red">
            check inputs
          </Typography>
        )}
        <Button size="small" type="submit" variant="contained">
          save
        </Button>
        <Button size="small" variant="outlined" onClick={handleCancel}>
          cancel
        </Button>
      </Stack>
    </Box>
  );
};

export default Header;
