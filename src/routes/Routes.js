import React from "react";
import { Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import HomePage from "../components/containers/HomePage/Home";
import connectSignup from "../components/containers/SignUp/SignUp";
import connectLogin from "../components/containers/Login/Login";
import CreateReport from "../components/containers/CreateReport/CreateReport";
import Profile from "../components/containers/Profile/Profile";
import Record from "../components/containers/Record/Record";
import NewReportView from "../components/containers/NewReportView/NewReportView";
import ViewIncident from "../components/containers/ViewIncident/ViewIncident";
import ViewRedFlag from "../components/containers/ViewRedFlag/ViewRedFlag";
import ViewIntervention from "../components/containers/ViewIntervention/ViewIntervention";
import EditReport from "../components/containers/EditReport/EditReport";

const history = createBrowserHistory();

const route = () => (
  <Route history={history}>
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/signup" component={connectSignup} exact />
      <Route path="/login" component={connectLogin} exact />
      <Route path="/create" component={CreateReport} exact />
      <Route path="/profile" component={Profile} exact />
      <Route path="/record" component={Record} exact />
      <Route path="/edit-incident/:id" component={EditReport} exact />
      <Route path="/new-report-view/:id" component={NewReportView} exact />
      <Route path="/view-all" component={ViewIncident} exact />
      <Route path="/view-red-flags" component={ViewRedFlag} exact />
      <Route path="/view-interventions" component={ViewIntervention} exact />
    </Switch>
  </Route>
);

export default route;
