import { Routes, Route } from "react-router-dom";
import HandlePage from "./pages/auth/handle";
import LoginPage from "./pages/auth/login";

function App() {
  return (
    <Routes>
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/handle" element={<HandlePage />} />
    </Routes>
  );
}

export default App;
