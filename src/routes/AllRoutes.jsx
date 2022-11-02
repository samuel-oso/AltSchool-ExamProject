import React from "react";
import { Routes, Route } from "react-router-dom";
import { Counter, Home } from "../exports/Exports";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Counter />} />
    </Routes>
  );
}

export default AllRoutes;
