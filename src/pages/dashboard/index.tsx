import { VFC } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "components/dashboard/AppBar";
import Dashboard from "components/dashboard/Dashboard";

const mdTheme = createTheme();

const DashboardPage: VFC = () => {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar />
        <Dashboard />
      </Box>
    </ThemeProvider>
  );
};

export default DashboardPage;
