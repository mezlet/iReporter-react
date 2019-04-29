import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../components/containers/HomePage/Home";
import connectSignup from "../components/containers/SignUp/SignUp";
import connectLogin from "../components/containers/Login/Login";
import CreateReport from "../components/containers/CreateReport/CreateReport";
import Profile from "../components/containers/Profile/Profile";
import Record from "../components/containers/Record/Record";

const route = () => (
  <Switch>
    <Route path="/" component={HomePage} exact />
    <Route path="/signup" component={connectSignup} exact />
    <Route path="/login" component={connectLogin} exact />
    <Route path="/create" component={CreateReport} exact />
    <Route path="/profile" component={Profile} exact />
    <Route path="/record" component={Record} exact />
  </Switch>
);

export default route;
