import React, { useState } from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import CustomModal from "./components/modal/CustomModal";

const MainPage: React.VFC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button onClick={handleOpen}>open modal</Button>
      <CustomModal open={open} onClose={handleClose} />
    </Box>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
