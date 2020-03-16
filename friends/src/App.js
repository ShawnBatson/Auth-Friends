import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { LoginForm } from "./Components/LoginForm";
import FriendsList from "./Components/FriendsList";
import PrivateRoute from "./Components/PrivateRoute";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav">
          <ul>
            <li>
              <Link to="/login" className="link">
                Login
              </Link>
            </li>
            <li>
              <Link to="/FriendsList" className="link">
                Friends List
              </Link>
            </li>
          </ul>
          <h1 className="text">This is your current Friends List</h1>
          <p className="text">
            To add another friend, fill out the form below and submit!
          </p>
        </div>
        <Switch>
          <PrivateRoute exact path="/FriendsList" component={FriendsList} />
          <Route path="/login" component={LoginForm} />
          <Route component={LoginForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
