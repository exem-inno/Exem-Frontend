import React, { useCallback } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const LoginPage: React.VFC = () => {
  const handleSubmit = useCallback((event: React.FormEvent): void => {
    event.preventDefault();
    console.log("Clicked Sign In Button");

    // Google Login
    const url = "http://localhost:8080";
    const redirectionURL = "http://localhost:3000/auth/handle";
    fetch(url + "/oauth2/authorization/google?redirection_url=" + redirectionURL)
    .then((res) => {
      if (res.ok){
        return res.json();
      }
    }).then((data) => {
      console.log("login success", data);
    });
  }, []);

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
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In with Google
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
