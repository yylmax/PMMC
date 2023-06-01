import styled from "styled-components";
import { useForm } from "react-hook-form";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "../styles/home.css";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const { register, getValues, handleSubmit } = useForm();

  const [user, setUser] = useState();
  const [userPoint, setUserPoint] = useState(0);

  // hahaha

  // 自动抓取localstorage的userId
  useEffect(() => {
    const userName = JSON.parse(localStorage.getItem("userId"));
    if (userName) {
      setUser(userName);
    }
  }, []);

  return (
    <StyledDiv>
      <header>The current userId: {user}</header>
      <header>The current user Reward Point1: {userPoint}</header>

      <div className="container-md text-center">
        <h1 style={{ fontSize: "5rem" }}>Interactive Mini Games for Kids</h1>
        <p>Humans have hurt the ocean home of marine mammals. </p>
  
    <div className="container">
      <h2 className="title">Help Protect Marine Mammals and the Ocean!</h2>
      <p className="intro">
        Humans have hurt the ocean home of marine mammals. Now all of us must help fix it!
        These are some things you can do to make marine mammals safer and happier!
      </p>

      <ul className="tips-list">
        <li className="tip">
          <span className="tip-number">1</span>
          <span className="tip-text">
            Unplug electronics and turn off lights when you aren't using them.
            This helps reduce climate change to keep the planet cooler!
          </span>
        </li>
        <li className="tip">
          <span className="tip-number">2</span>
          <span className="tip-text">
            Keep ocean animals safe from litter! Do a beach cleanup with your family or friends.
          </span>
        </li>
        <li className="tip">
          <span className="tip-number">3</span>
          <span className="tip-text">
            Keep garbage out of the ocean by using a reusable lunch box/water bottle.
          </span>
        </li>
        <li className="tip">
          <span className="tip-number">4</span>
          <span className="tip-text">
            Encourage your family to carpool, ride bikes, or walk places to keep the planet cooler and the ocean cleaner!
          </span>
        </li>
        <li className="tip">
          <span className="tip-number">5</span>
          <span className="tip-text">
            Create a club at school that helps people learn about the ocean, does beach clean-ups,
            or raises money and supplies for places that help like PMMC!
          </span>
        </li>
      </ul>
    </div>


      </div>
    </StyledDiv>
  );
};

export default App;
