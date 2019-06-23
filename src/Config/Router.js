import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignIn from '../Screens/SignIn'
import SignUp from '../Screens/SignUp'

function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route path="/Login" component={SignIn} />
        <Route path="/signUp" component={SignUp} />
      </div>
    </Router>
  );
}

