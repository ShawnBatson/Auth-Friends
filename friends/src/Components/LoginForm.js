import React from "react";
import axios from "axios";
import "../App.css";

export const LoginForm = () => {
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
      </form>
    </div>
  );
};
