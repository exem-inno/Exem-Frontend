import DashboardLayout from "layouts/dashboard";
import ServicePage from "pages/services";
import { VFC } from "react";
import { Route, Routes } from "react-router-dom";
import ClusterPage from "./cluster";
import HTTPPage from "./http";

const DashboardPage: VFC = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/cluster" element={<ClusterPage />} />
        <Route path="/http" element={<HTTPPage />} />
        <Route path="/services/:serviceId/*" element={<ServicePage />} />
      </Routes>
    </DashboardLayout>
  );
};

export default DashboardPage;
