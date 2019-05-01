import React from "react";
import { Route, Redirect } from "react-router-dom";
import { verifyToken } from "../helpers/helpers";

const AuthenticateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      verifyToken(localStorage.getItem("token")) ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default AuthenticateRoute;
