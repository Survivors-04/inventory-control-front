import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "../pages/Login";
import DashboardAccount from "../pages/DashboardAccount";
import OrdersAccount from "../pages/OrdersAccount";
import ManagerViewPage from "../pages/Manager";
import ManagerDashboard from "../pages/ManagerDashboard";
import { AnimatePresence } from "framer-motion";
import api from "../services/api";
import { ReactNode } from "react";

interface IPrivateRoute {
  children: ReactNode;
  redirectTo: string;
}

const PrivateRoute = ({ children, redirectTo }: IPrivateRoute) => {
  let isSafe = true;

  const token = window.localStorage.getItem("@TOKEN");
  const user_id = window.localStorage.getItem("@USERID");

  if (!token && !user_id) {
    isSafe = false;
  }

  try {
    api.get(`api/accounts/${user_id}`);
  } catch (error) {
    isSafe = false;
  }
  return <>{isSafe ? children : <Navigate to={redirectTo} />}</>;
};

const MainRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter={true}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/dashboard-account"
          element={
            <PrivateRoute redirectTo="/">
              <DashboardAccount />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard-account/orders"
          element={
            <PrivateRoute redirectTo="/">
              <OrdersAccount />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard-manager"
          element={
            <PrivateRoute redirectTo="/">
              <ManagerViewPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard-manager/orders"
          element={
            <PrivateRoute redirectTo="/">
              <ManagerDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default MainRoutes;
