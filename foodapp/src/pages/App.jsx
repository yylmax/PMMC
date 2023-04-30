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

  const [user, setUser] = useState();
  const [userPoint, setUserPoint] = useState(0);

  useEffect(() => {
    const userName = JSON.parse(localStorage.getItem("userId"));
    if (userName) {
      setUser(userName);
    }
  }, []);

  // 自动抓取localstorage的userId

  async function search() {
    const foodName = getValues("food");
    const response = await Axios.get(
      "http://127.0.0.1:5000/recipe?query=" + foodName + "&username=" + user
    );
    console.log(foodName);
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

  // async function indicateLikeorDislike() {
  //   console.log("like or dislike success!");
  // }

  // const addToFav = (index) => {
  //   console.log(index);
  //   // call server and indicate LIKE food
  // };

  async function like1(id) {
    const foodNameQuery = getValues("food");
    const response = await Axios.post(
      "http://127.0.0.1:5000/like?username=" +
        user +
        "&id=" +
        id +
        "&query=" +
        foodNameQuery
    );
    console.log(response.data);
  }

  // 1. search
  // 2. default result
  // 3. like
  // 4.store
  // 5. customized result

  return (
    <StyledDiv>
      <div>The current userId: {user}</div>
      <div>The current userPoint: {userPoint}</div>
      <div className="container-md text-center">
        <h1 style={{ fontSize: "5rem" }}>Fancy Food Angel</h1>
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
                  <th>Rank</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {result.map((item, index) => (
                  <tr
                    key={index}
                    style={{ color: "green" }}
                  >
                    <td>{index + 1}</td>
                    <td>
                      <img
                        style={{ weight: "100px", height: "100px" }}
                        src={item.image}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>
                      <button onClick={() => like1(item.id)}>like</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
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
        onClick={handleSubmit(recommend)}
      >
        Get Recommendation by the Food Type
      </button>
      <p>{recommendation}</p>
    </StyledDiv>
  );
};

export default App;
