import { Box, Container } from "@mui/material";
import React from "react";
import Footer from "../../components/new-chart/Footer";
import Header from "../../components/new-chart/Header";
import Preview from "../../components/new-chart/Preview";

interface Props {
  onClose: () => void;
}

const NewChartModal: React.VFC<Props> = ({ onClose }) => {
  const onSubmit = () => {
    console.log("handleSubmit");
    // TODO: call POST new chart API

    onClose();
  };

  const onCancel = () => {
    console.log("handleCancel");
    onClose();
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ bgcolor: "#cfe8fc", px: "1rem" }}>
        {/* header */}
        <Header />
        {/* chart preview */}
        <Preview />
        {/* footer */}
        <Footer onCancel={onCancel} onSubmit={onSubmit} />
      </Box>
    </Container>
  );
};

export default NewChartModal;
