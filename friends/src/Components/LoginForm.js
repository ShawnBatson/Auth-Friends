import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "../App.css";

export const LoginForm = () => {
  const [userInfo, setUserInfo] = useState({
    credentials: {
      userName: "",
      password: ""
    }
  });

  const handleChange = event => {
    setUserInfo({
      credentials: {
        ...userInfo,
        [event.target.value]: event.target.value
      }
    });
  };
  const login = event => {
    event.preventDefault();
    axiosWithAuth()
      .post("/login", userInfo.credentials)
      .then(res => {
        console.log("this is in the login event", res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <form>
        <input
          className="login-input"
          type="text"
          name="userName"
          placeholder="login"
        />
        <input
          className="password-input"
          type="text"
          name="password"
          placeholder="password"
        />
        <button>Log In</button>
      </form>
    </div>
  );
};
