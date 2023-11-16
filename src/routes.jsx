import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
// import React from "react";
import Login from "./pages/login";
import LandingPage from "./pages";
import CollegeDue from "./pages/collegeDue";
import DeptDue from "./pages/departmentalDue";
import Dashboard from "./pages/dashboard";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/collegedue" element={<CollegeDue />} />
        <Route path="/deptdue" element={<DeptDue />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
