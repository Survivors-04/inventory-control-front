import React from "react";
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
    </>
  );
}

export default App;
