//import styled from "styled-components";
import { useForm } from "react-hook-form";
import Axios from "axios";
import React, { useState, useEffect } from "react";

import Point from "./Point";
import Education from "./Education";

// const StyledDiv = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// 把index html挪到template文件夹

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
    <>
      <Point />
      <Education />
    </>
  );
};

export default App;
