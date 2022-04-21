import Typography from "@mui/material/Typography";
import { FC } from "react";

interface Props {
  title: string;
}

const Chart: FC<Props> = ({ title, children }) => {
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
      {children}
    </>
  );
};

export default Chart;
