import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "../App.css";

export const FriendsForm = () => {
  const [formData, setFormData] = useState({
    id: Date.now(),
    name: "",
    age: "",
    email: ""
  });

  const handleChanges = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const formPost = event => {
    axiosWithAuth()
      .post("/friends", formData)
      .then(res => {
        console.log("this is in the form post event", res);
      })
      .catch(err => {
        console.log(
          "this is an error in the post request to add a new friend",
          err
        );
      });
  };

  return (
    <div>
      <form onSubmit={formPost} className="form-form">
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChanges} />
        <label>Age:</label>
        <input type="text" name="age" onChange={handleChanges} />
        <label>E-mail:</label>
        <input type="text" name="email" onChange={handleChanges} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
