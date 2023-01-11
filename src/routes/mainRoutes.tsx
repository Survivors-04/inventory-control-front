import { Route, Routes, useLocation } from "react-router-dom";
import Login from "../pages/Login";
import DashboardAccount from "../pages/DashboardAccount";
import OrdersAccount from "../pages/OrdersAccount";
import ManagerViewPage from "../pages/Manager";
import ManagerDashboard from "../pages/ManagerDashboard";
import { AnimatePresence } from "framer-motion";

const MainRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter={true}>
      <Routes location={location} key={location.pathname}>
        <Route path="/dashboard-account" element={<DashboardAccount />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard-account/orders" element={<OrdersAccount />} />
        <Route path="/dashboard-manager" element={<ManagerViewPage />} />
        <Route
          path="/dashboard-manager/orders"
          element={<ManagerDashboard />}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default MainRoutes;
