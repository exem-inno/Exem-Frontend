import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/login";

function App() {
  return (
    <Routes>
      <Route path="/auth/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
