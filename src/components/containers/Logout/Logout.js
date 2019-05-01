import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logoutUser } from "../../../redux/actions/auth/auth-dispatchers";

const Logout = ({ logout }) => {
  logout();

  return <Redirect to="/" />;
};
const mapDispatchtoProps = { logout: logoutUser };
export default connect(
  null,
  mapDispatchtoProps
)(Logout);
