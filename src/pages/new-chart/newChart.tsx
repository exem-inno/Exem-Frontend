import { Box, Container } from "@mui/material";
import React from "react";
import Header from "../../components/new-chart/header";

// TODO: choose a type - Page or Modal
const NewChartPage: React.VFC = () => {
  const onSubmit = (value: FormDataEntryValue) => {
    console.log("handleSubmit");
    console.log(value);
  };

  const onCancel = () => {
    // TODO: call onClose props
    console.log("handleCancel");
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
        {/* header */}
        <Header onCancel={onCancel} onSubmit={onSubmit} />
      </Box>
    </Container>
  );
};

export default NewChartPage;
