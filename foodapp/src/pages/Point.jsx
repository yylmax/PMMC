import React, { useState, useEffect } from "react";
import "../styles/point.css";

// This is a small component for displaying the login user information and point information.
const Point = () => {
  const [user, setUser] = useState();
  const [userPoint, setUserPoint] = useState(0);

  useEffect(() => {
    const userName = JSON.parse(localStorage.getItem("userId"));
    if (userName) {
      setUser(userName);
    }
  }, []);

  return (
    <div class="card1">
      <img
        src="https://media.istockphoto.com/id/1301667498/photo/humpback-whale-playfully-swimming-in-clear-blue-ocean.webp?b=1&s=170667a&w=0&k=20&c=vKyaDp8hUrXXTuNNZEKKJODtI9r-az8X3-HyIgbIrJ4="
        class="card__image"
        alt="brown couch"
      />
      <div class="card__content">
        <time
          datetime="2021-03-30"
          class="card__date"
        >
          USER INFO
        </time>
        <span class="card__title">Username: {user}</span>
        <br />
        <span class="card__title">Rewarding Points: {userPoint}</span>
      </div>
    </div>
  );
};

export default Point;
