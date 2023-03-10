import styled from "styled-components";
import { useForm } from "react-hook-form";
import Axios from "axios";
import React, { useState, useEffect } from "react";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const { register, getValues, handleSubmit } = useForm();
  const [result, setResult] = useState();
  const [recommendation, setRecommendation] = useState();

  async function search() {
    const foodName = getValues("food");
    const response = await Axios.get(
      "http://127.0.0.1:5000/recipe?query=" + foodName
    );
    console.log(response.data.results);
    setResult(response.data.results);
  }

  async function recommend() {
    const foodName = getValues("food");
    const response = await Axios.get(
      "http://127.0.0.1:5000/reciperm?query=" + foodName
    );
    console.log(response.data.choices[0].message.content);
    setRecommendation(response.data.choices[0].message.content);
  }

  return (
    <StyledDiv>
      <div className="container-md text-center">
        <h1 style={{ fontSize: "5rem" }}>Fancy Food Angel</h1>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
        </div>
      </div>
      <input
        style={{
          width: "50%",
          margin: "auto",
          border: "3px solid pink",
          textAlign: "center",
        }}
        {...register("food")}
        type={"query"}
      ></input>
      <button
        style={{
          width: "20%",
          color: "white",
          textDecoration: "none",
          height: "50px",
          margin: "auto",
          border: "none",
          marginTop: "20px",
          fontSize: "16px",
          backgroundColor: "rgb(3, 211, 252)",
          textAlign: "center",
        }}
        onClick={handleSubmit(search)}
      >
        Search
      </button>
      <div className="container-md">
        {result && (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                </tr>
              </thead>
              <tbody>
                {result.map((item, index) => (
                  <tr
                    key={index}
                    style={{ color: "green" }}
                  >
                    <td>
                      <img
                        style={{ weight: "100px", height: "100px" }}
                        src={item.image}
                      />
                    </td>
                    <td>{item.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div>
          <button onClick={handleSubmit(recommend)}>Get Recommendation</button>
        </div>
        <p>{recommendation}</p>
      </div>
    </StyledDiv>
  );
};

export default App;
