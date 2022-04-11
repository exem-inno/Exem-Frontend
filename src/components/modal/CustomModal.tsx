import { Box, Modal } from "@mui/material";
import React from "react";
import NewChartModal from "../../pages/new-chart/newChart";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

interface Props {
  open: boolean;
  onClose: () => void;
}
const CustomModal: React.VFC<Props> = ({open, onClose}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <NewChartModal onClose={onClose} />
      </Box>
    </Modal>
  );
};

export default CustomModal;
