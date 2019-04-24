import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../components/containers/HomePage/Home";
import SignUp from "../components/containers/SignUp/SignUp";
import Login from "../components/containers/Login/Login";
import CreateReport from "../components/containers/CreateReport/CreateReport";
import Profile from "../components/containers/Profile/Profile";
import Record from "../components/containers/Record/Record";

const route = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/signup" component={SignUp} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/create" component={CreateReport} exact />
        <Route path="/profile" component={Profile} exact />
        <Route path="/record" component={Record} exact />
      </Switch>
    </div>
  </Router>
);

export default route;
