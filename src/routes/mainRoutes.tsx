import { Route, Routes, useLocation } from "react-router-dom";
import Login from "../pages/Login";

const MainRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default MainRoutes;
