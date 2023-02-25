import React from "react";
import { Route, Routes } from "react-router-dom";

import App from "../pages/App";
import Login from "../pages/Login";

const Content = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<App />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
    </div>
  );
};

export default Content;
