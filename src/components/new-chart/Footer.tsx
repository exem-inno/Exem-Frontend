import { Button, Stack } from "@mui/material";
import React, { FormEvent, useState } from "react";

interface Props {
  onSubmit: (value: FormDataEntryValue) => void;
  onCancel: () => void;
}

const Footer: React.VFC<Props> = ({ onSubmit, onCancel }) => {
  const [isValidInputs, setIsValidInputs] = useState<Boolean | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("handleSubmit");
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
    <Stack
      sx={{ bgcolor: "blue" }}
      component="form"
      onSubmit={handleSubmit}
      direction="row"
      spacing={2}
      justifyContent="flex-end"
    >
      <Button size="small" type="submit" variant="contained">
        Save
      </Button>
      <Button size="small" variant="contained" onClick={handleCancel}>
        Cancel
      </Button>
    </Stack>
  );
};

export default Footer;
