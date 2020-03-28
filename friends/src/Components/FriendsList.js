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
      <div className="friend-form">
        <FriendsForm />
      </div>
      <div className="friendCard">
        {myFriends.map(friend => (
          <div className="individual-card">
            <h1 className="friend-card-writing">{friend.name}</h1>
            <h2 className="friend-card-writing">{friend.age}</h2>
            <h3 className="friend-card-writing">{friend.email}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsList;
