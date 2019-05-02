/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import HomePage from '../components/containers/HomePage/Home';
import connectSignup from '../components/containers/SignUp/SignUp';
import connectLogin from '../components/containers/Login/Login';
import CreateReport from '../components/containers/CreateReport/CreateReport';
import Profile from '../components/containers/Profile/Profile';
import NewReportView from '../components/containers/NewReportView/NewReportView';
import ViewIncident from '../components/containers/ViewIncident/ViewIncident';
import ViewRedFlag from '../components/containers/ViewRedFlag/ViewRedFlag';
import ViewIntervention from '../components/containers/ViewIntervention/ViewIntervention';
import EditReport from '../components/containers/EditReport/EditReport';
import UserIncident from '../components/containers/UserIncident/UserIncident';
import AuthenticateRoute from '../hoc/AuthenticateRoute';
import Logout from '../components/containers/Logout/Logout';
import AdminPage from '../components/containers/Admin/AdminPage';

const history = createBrowserHistory();

const route = () => (
  <BrowserRouter>
    <Route history={history}>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/signup" component={connectSignup} exact />
        <Route path="/login" component={connectLogin} exact />
        <Route path="/logout" component={Logout} exact />
        <AuthenticateRoute path="/create" component={CreateReport} exact />
        <AuthenticateRoute path="/profile" component={Profile} exact />
        <AuthenticateRoute path="/admin" component={AdminPage} exact />
        <AuthenticateRoute
          path="/edit-incident/:id"
          component={EditReport}
          exact
        />
        <AuthenticateRoute
          path="/new-report-view/:id"
          component={NewReportView}
          exact
        />
        <AuthenticateRoute path="/view-all" component={ViewIncident} exact />
        <AuthenticateRoute
          path="/view-red-flags"
          component={ViewRedFlag}
          exact
        />
        <AuthenticateRoute
          path="/view-interventions"
          component={ViewIntervention}
          exact
        />
        <AuthenticateRoute path="/record" component={UserIncident} exact />
      </Switch>
    </Route>
  </BrowserRouter>
);

export default route;
