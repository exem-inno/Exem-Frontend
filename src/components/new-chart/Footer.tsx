import { Button, Stack } from "@mui/material";
import React from "react";

interface Props {
  onSubmit: () => void;
  onCancel: () => void;
}

const Footer: React.VFC<Props> = ({ onSubmit, onCancel }) => {
  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log("handleSubmit");
    onSubmit();
  };

  const handleCancel = (event: React.MouseEvent) => {
    event.preventDefault();
    onCancel();
  };

  return (
    <Stack
      position="relative"
      sx={{ bgcolor: "blue" }}
      direction="row"
      spacing={2}
      justifyContent="flex-end"
      py={1}
    >
      <Button size="small" variant="contained" onClick={handleSubmit}>
        Save
      </Button>
      <Button size="small" variant="contained" onClick={handleCancel}>
        Cancel
      </Button>
    </Stack>
  );
};

export default Footer;
