import { Route, Routes, useLocation } from "react-router-dom";
import Login from "../pages/Login";
import ManagerViewPage from "../pages/Manager";

const MainRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard-manager" element={<ManagerViewPage />} />
    </Routes>
  );
};

export default MainRoutes;
