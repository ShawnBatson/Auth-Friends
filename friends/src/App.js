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
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/FriendsList">Friends List</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={LoginForm} />
          <Route component={LoginForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
