import React from "react";
import { Route, Routes } from "react-router-dom";

import App from "../pages/App";
import Login from "../pages/Login";
import Intro from "../pages/Intro";
import Test from "../pages/Test";

import Appgame3 from "../pages/Game3";



import Card from "../pages/Card";


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
        <Route
          path="/intro"
          element={<Intro />}
        />
        <Route
          path="/test"
          element={<Test />}
        />

        <Route
          path="/game3"
          element={<Appgame3 />}
        />
        <Route
          path="/card"
          element={<Card />}
        />
       </Routes> 
    </div>
  );
};

export default Content;
