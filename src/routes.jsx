import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages";
import CollegeDue from "./pages/collegeDue";
import DeptDue from "./pages/departmentalDue";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/collegedue" element={<CollegeDue />} />
        <Route path="/deptdue" element={<DeptDue />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
