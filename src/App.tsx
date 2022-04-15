import { fetchApi } from "lib/api";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import DashBoardPage from "./pages/dashboard";

function App() {
  useEffect(() => {
    try {
      const data = fetchApi("/user/me")
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Routes>
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashBoardPage />} />
    </Routes>
  );
}

export default App;
