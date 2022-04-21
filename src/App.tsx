import DashboardPage from "pages/dashboard";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import ServicePage from "./pages/services";

function App() {
  return (
    <Routes>
      <Route path="/auth/login" element={<LoginPage />} />
      {/* <Route path="/" element={<MainPage />} /> */}
      <Route path="/services/:serviceId/*" element={<ServicePage />} />
      <Route path="/dashboard/*" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
