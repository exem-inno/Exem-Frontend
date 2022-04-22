import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useQuery, UseQueryResult } from "react-query";
import { useParams } from "react-router-dom";
import CustomModal from "../../components/modal/CustomModal";
import CustomChart from "../../components/new-chart/CustomChart";
import NewChartModal from "../new-chart/newChart";
import { Responsive } from "react-grid-layout";
import "./styles.css";

const layout = [
  { i: "a", x: 0, y: 0, w: 1, h: 100 },
  { i: "b", x: 1, y: 0, w: 1, h: 100 },
  { i: "c", x: 2, y: 0, w: 1, h: 100 },
];

const FIREBASE_DOMAIN = "https://react-26863-default-rtdb.firebaseio.com";

interface Data {
  id: string;
  type: string;
}
type Charts = Data[];

// TODO: rerender this Component when closed Modal or added new chart
const ServicePage: React.VFC = () => {
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

  const [chartData, setChartData] = useState<number>(0);

  const {
    data: chart,
    error: chartError,
    isLoading: chartIsLoading,
  }: UseQueryResult<Charts, string> = useQuery(["chart", chartData], () =>
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
  const handleClose = () => {
    setOpen(false);
    setChartData((prev) => prev + 1);
  };

  if (chartError || serviceFetchError) {
    return <a href="/">error... main page 로 돌아갑시다..</a>;
  }

  return (
    <Box sx={{ width: 1, height: "100%" }}>
      {serviceIsLoading || chartIsLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>service Name {service.title}</h1>
          <Responsive
            className="layout"
            layouts={{ lg: layout }}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 3, md: 3, sm: 3, xs: 3, xxs: 3 }}
            rowHeight={30} // 격자 높이
            width={1200}
            compactType="horizontal"
            autoSize={true}
          >
            {chart?.map((item) => (
              <div key={item.id}>
                <CustomChart chartCategory={item.type} />
              </div>
            ))}
          </Responsive>
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
