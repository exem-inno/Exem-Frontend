import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useQuery, UseQueryResult } from "react-query";
import { useParams } from "react-router-dom";
import CustomModal from "../../components/modal/CustomModal";
import CustomChart from "../../components/new-chart/CustomChart";
import NewChartModal from "../new-chart/newChart";

const FIREBASE_DOMAIN = "https://react-26863-default-rtdb.firebaseio.com";

interface Data {
  id: string;
  type: string;
}
type Charts = Data[];

// TODO: rerender this Component when closed Modal or added new chart
const ServicePage = () => {
  const params = useParams();
  const { serviceId } = params;

  const {
    data: service,
    error: serviceFetchError,
    isLoading: serviceIsLoading,
  } = useQuery([serviceId], () =>
    fetch(`${FIREBASE_DOMAIN}/services/${serviceId}.json`).then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
  );
  const {
    data: chart,
    error: chartError,
    isLoading: chartIsLoading,
  }: UseQueryResult<Charts, string> = useQuery(["service", serviceId], () =>
    fetch(`${FIREBASE_DOMAIN}/chart/${serviceId}.json`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        const newData = [];
        for (const key in data) {
          const newObject = {
            id: key,
            ...data[key],
          };
          newData.push(newObject);
        }
        return newData;
      })
  );

  useEffect(() => {
    console.log("service", service);
    if (service) {
      console.log("service title", service.title);
    }
    if (chart) {
      console.log("chart", chart);
    }
  }, [chart, service]);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (chartError || serviceFetchError) {
    return <a href="/">error... main page 로 돌아갑시다..</a>;
  }

  return (
    <Box>
      {serviceIsLoading || chartIsLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>service Name {service.title}</h1>
          {chart?.map((item) => (
            <div key={item.id}>
              {/* {item.type} */}
              <CustomChart chartCategory={item.type} />
            </div>
          ))}
          <Button onClick={handleOpen}>open modal</Button>
          <CustomModal open={open} onClose={handleClose}>
            <NewChartModal
              onClose={handleClose}
              serviceId={serviceId}
              title={service.title}
            />
          </CustomModal>
        </>
      )}
    </Box>
  );
};

export default ServicePage;
