import { Box } from "@mui/material";
import React, { useState } from "react";
import CustomChart from "../../components/new-chart/CustomChart";
import Footer from "../../components/new-chart/Footer";
import Header from "../../components/new-chart/Header";

const FIREBASE_DOMAIN = "https://react-26863-default-rtdb.firebaseio.com";

interface Props {
  onClose: () => void;
  serviceId: string | undefined;
  title: string;
}

const NewChartModal: React.VFC<Props> = ({ onClose, serviceId, title }) => {
  const [chartCategory, setChartCategory] = useState<string>("Select");
  const [isError, setIsError] = useState<boolean>(false);

  const onSubmit = () => {
    // TODO: call POST new chart API
    // POST api/services/{id}?category="request | error | response | retency"
    if (chartCategory !== "Select" && serviceId) {
      console.log("여기 오냐?");
      fetch(`${FIREBASE_DOMAIN}/chart/${serviceId}.json`, {
        method: "POST",
        body: JSON.stringify({
          type: chartCategory,
        }),
      })
        .then((res) => {
          if (res.ok) {
            console.log("ok!");
            setChartCategory("Select");
            onClose();
          }
        })
        .catch((err) => {
          console.log(err);
          setIsError(true);
        });
    } else {
      setChartCategory("Select");
      setIsError(true);
    }
  };

  const onCancel = () => {
    console.log("handleCancel");
    setIsError(false);
    setChartCategory("Select");
    onClose();
  };

  return (
    <Box sx={{ bgcolor: "#cfe8fc", border: 5 }}>
      {!isError ? (
        <>
          <Header
            title={title}
            chartCategory={chartCategory}
            setChartCategory={setChartCategory}
          />
          <CustomChart chartCategory={chartCategory} />
        </>
      ) : (
        <p>error 발생, 다시 시작하세요.</p>
      )}
      <Footer onCancel={onCancel} onSubmit={onSubmit} />
    </Box>
  );
};

export default NewChartModal;
