import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logoutUser } from '../../../redux/actions/auth/auth-dispatchers';

export const Logout = ({ logout }) => {
  logout();

  return <Redirect to="/" />;
};
Logout.propTypes = {
  logout: PropTypes.func.isRequired
};
const mapDispatchtoProps = { logout: logoutUser };
export default connect(
  null,
  mapDispatchtoProps
)(Logout);
