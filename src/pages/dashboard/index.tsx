import DashboardLayout from "layouts/dashboard";
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
      </Routes>
    </DashboardLayout>
  );
};

export default DashboardPage;
