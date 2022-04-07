import { Box, Button, Stack, TextField } from "@mui/material";
import React, { FormEvent, useState } from "react";

interface Props {
  onSubmit: (value: FormDataEntryValue) => void;
  onCancel: () => void;
}

const Header: React.VFC<Props> = ({ onSubmit, onCancel }) => {
  const [isValidInputs, setIsValidInputs] = useState<Boolean | null>(null);

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

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        height: "3rem",
        width: "auto",
        px: 4,
        bgcolor: "#8bc34a",
      }}
      component="form"
      onSubmit={handleSubmit}
    >
      <Stack direction="row" spacing={2}>
        <TextField
          id="chartName"
          name="chartName"
          label="chart name"
          variant="standard"
          size="small"
        />
        {isValidInputs === false && (
          <p style={{ color: "red" }}>check inputs</p>
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
