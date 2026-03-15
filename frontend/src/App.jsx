import React from "react";
import { Route, Routes } from "react-router-dom";
import login from "./pages/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<login />} />
    </Routes>
  );
}

export default App;
