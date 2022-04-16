import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

// back-end path
const url =
  // "http://ec2-13-209-251-220.ap-northeast-2.compute.amazonaws.com:8080";
  "http://localhost:8080"
const redirectionURL = "http://localhost:3000/";
const loginURL =
  url + "/oauth2/authorize/google?redirect_uri=" + redirectionURL;

const LoginPage: React.VFC = () => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            // login
            href={loginURL}
          >
            Log In with Google
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
