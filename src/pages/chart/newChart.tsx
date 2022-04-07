import { Box, Button, Container, Stack, TextField } from "@mui/material";
import { FormEvent } from "react";

// TODO: choose a type - Page or Modal
const NewChartPage: React.VFC = (props) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("handleSubmit");
    const data = new FormData(event.currentTarget);
    console.log(data.get("chartName"));

  };

  const handleCancel = () => {
    // TODO: call onClose props
    console.log("handleCancel");
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
        {/* header */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            height: "3rem",
            width: "auto",
            px: 4,
            bgcolor: "#8bc34a",
          }}
          component="form"
          onSubmit={handleSubmit}
        >
          <Stack direction="row" spacing={2}>
            <TextField
              id="chartName"
              name="chartName"
              label="chart name"
              variant="standard"
              size="small"
            />
            <Button type="submit" variant="contained">
              save
            </Button>
            <Button variant="outlined" onClick={handleCancel}>
              cancle
            </Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default NewChartPage;
