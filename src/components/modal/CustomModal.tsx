import { Box, Modal } from "@mui/material";
import React from "react";

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
const CustomModal: React.FC<Props> = ({open, onClose, children}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        {children}
      </Box>
    </Modal>
  );
};

export default CustomModal;
