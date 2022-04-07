import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import NewChartPage from "./pages/new-chart/newChart";

function App() {
  return (
    <Routes>
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/new-chart/newChart" element={<NewChartPage />} />
    </Routes>
  );
}

export default App;
