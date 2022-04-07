import { VFC } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "components/dashboard/AppBar";
import Dashboard from "components/dashboard/Dashboard";

const DashboardPage: VFC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar />
      <Dashboard />
    </Box>
  );
};

export default DashboardPage;
