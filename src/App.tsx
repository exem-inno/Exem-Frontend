import MainPage from "pages/index";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import DashBoardPage from "./pages/dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashBoardPage />} />
    </Routes>
  );
}

export default App;
