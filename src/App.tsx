import DashboardPage from "pages/dashboard";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/login";

function App() {
  return (
    <Routes>
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/dashboard/*" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
