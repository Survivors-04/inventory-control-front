import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "./context/UserContext";
import MainRoutes from "./routes/mainRoutes";
import Global from "./style/Global";

function App() {
  return (
    <>
      <UserProvider>
        <Global />
        <MainRoutes />
      </UserProvider>
      <ToastContainer
        toastStyle={{
          backgroundColor: "#f1cf32",
          color: "#15222c;",
          fontWeight: "bold",
        }}
      />
    </>
  );
}

export default App;
