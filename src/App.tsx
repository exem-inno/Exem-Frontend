import DashboardPage from "pages/dashboard";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import ServicePage from "./pages/services";

function App() {
  return (
    <div>
      <div>
        <a href="/services/1">1번 서비스로 이동</a>
      </div>
      <div>
        <a href="/services/2">2번 서비스로 이동</a>
      </div>
      <div>
        <a href="/services/3">3번 서비스로 이동</a>
      </div>
      <div>
        <a href="/services/4">4번 서비스로 이동</a>
      </div>
      <Routes>
        <Route path="/auth/login" element={<LoginPage />} />
        {/* <Route path="/" element={<MainPage />} /> */}
        <Route path="/services/:serviceId/*" element={<ServicePage />} />
      <Route path="/dashboard/*" element={<DashboardPage />} />
      </Routes>
    </div>
  );
}

export default App;
