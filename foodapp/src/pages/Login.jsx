import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, getValues, handleSubmit } = useForm();
  const navigate = useNavigate();

  const moveToHome = () => {
    navigate("/");
    console.log("success move to home");
  };

  return (
    <div>
      <h1>Login</h1>
      <p>this is the login page</p>
      <input
        {...register("email")}
        type={"email"}
      />
      <button onClick={handleSubmit(moveToHome)}>Go to Homepage</button>
    </div>
  );
};

export default Login;
