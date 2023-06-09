//import styled from "styled-components";
import { useForm } from "react-hook-form";
import Axios from "axios";
import React, { useState, useEffect } from "react";

import Point from "./Point";
import Education from "./Education";
import Card from "./Card";
import "../styles/homepage.css";

// const StyledDiv = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// This component represents the homepage of the webpage, and this is what the user will see as they are redirected here.
const App = () => {
  const { register, getValues, handleSubmit } = useForm();

  const [user, setUser] = useState();
  const [userPoint, setUserPoint] = useState(0);

  // 自动抓取localstorage的userId
  useEffect(() => {
    const userName = JSON.parse(localStorage.getItem("userId"));
    if (userName) {
      setUser(userName);
    }
  }, []);

  return (
    //<Point /> 
    <div id="home">
      <Education />
      <Card />
    </div>
  );
};

export default App;
