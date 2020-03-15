import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { FriendsForm } from "./FriendsForm";
import "../App.css";

const FriendsList = () => {
  const [myFriends, setMyFriends] = useState([]);
  useEffect(
    () =>
      axiosWithAuth()
        .get("/friends")
        .then(res => {
          console.log(res.data);
          setMyFriends(res.data);
        }),
    []
  );

  return (
    <div>
      <div className="friendCard">
        {myFriends.map(friend => (
          <div>
            <h1>{friend.name}</h1>
            <h2>{friend.age}</h2>
            <h3>{friend.email}</h3>
          </div>
        ))}
      </div>
      <FriendsForm />
    </div>
  );
};

export default FriendsList;
