/* Login.jsx */

import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Login.module.css"; // 导入样式表
import Axios from "axios";

const Login = () => {
  const { register, getValues, handleSubmit } = useForm();
  const navigate = useNavigate(); 

  const [user, setUser] = useState(100);

  const moveToHome = () => {
    navigate("/");
    console.log("success move to home");
  };

  useEffect(() => {
    const data = window.localStorage.getItem("userId");
    setUser(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("userId", JSON.stringify(user));
  }, [user]);

  async function changeUser() {
    const userName = getValues("email");
    setUser(userName);

    const response = await Axios.post(
      "http://127.0.0.1:5000/login?username=" + userName
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Login </h1>
      <form
        className={styles.form}
        onSubmit={handleSubmit(changeUser)}
      >
        <input
          {...register("email")}
          className={styles["form-input"]}
          type={"number"}
        />
        <button
          className={styles["form-button"]}
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;