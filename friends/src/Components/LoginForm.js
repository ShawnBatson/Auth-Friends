import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "../App.css";

export const LoginForm = () => {
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
        //come back to here V  this may be wrong;
        userInfo.props.history.push("/protected");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={login}>
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
