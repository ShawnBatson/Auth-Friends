import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "../App.css";

export const LoginForm = props => {
  console.log(props);
  const [userInfo, setUserInfo] = useState({
    credentials: {
      username: "",
      password: ""
    }
  });

  const handleChange = event => {
    setUserInfo({
      credentials: {
        ...userInfo.credentials,
        [event.target.name]: event.target.value
      }
    });
  };
  const login = event => {
    event.preventDefault();
    axiosWithAuth()
      .post("/login", userInfo.credentials)
      .then(res => {
        console.log("this is in the login event", res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/FriendsList");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={login} className="main-form">
        <input
          className="login-input"
          type="text"
          value={userInfo.credentials.userName}
          name="username"
          placeholder="login"
          onChange={handleChange}
        />
        <input
          className="password-input"
          type="password"
          value={userInfo.credentials.password}
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button>Log In</button>
      </form>
    </div>
  );
};
