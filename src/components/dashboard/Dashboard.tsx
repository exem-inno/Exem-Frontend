import { VFC } from "react";
import Box from "@mui/material/Box";

const Dashboard: VFC = () => {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    ></Box>
  );
};

export default Dashboard;
