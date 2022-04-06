import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
