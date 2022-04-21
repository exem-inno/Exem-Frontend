import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FC } from "react";

interface Props {
  title: string;
}

const Table: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Typography
        sx={{
          position: "absolute",
          top: "10px",
          left: "20px",
          fontWeight: 600,
        }}
        variant="subtitle1"
      >
        {title}
      </Typography>
      <Box
        sx={{
          width: "100%",
          marginTop: "50px",
          padding: "10px",
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default Table;
