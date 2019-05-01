/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { Link, withRouter, Redirect } from "react-router-dom";
import { Form, Input, Image, Button } from "semantic-ui-react";
import PropTypes from "prop-types";
import {
  loginUser,
  clearError
} from "../../../redux/actions/auth/auth-dispatchers";

const logo =
  "https://res.cloudinary.com/do01bfhpw/image/upload/v1556721799/logo.png";
export class Login extends Component {
  state = {
    user: {
      email: "",
      password: ""
    }
  };

  componentDidUpdate(prevProps) {
    const {
      auth: { errors, message },
      clearErrorMessage
    } = this.props;
    if (errors.message !== prevProps.auth.errors.message) {
      toast.error(errors.message);
      clearErrorMessage();
    }

    if (prevProps.auth.message !== message) {
      toast.success(message);
      clearErrorMessage();
    }
  }

  handleChange = event => {
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { user } = this.state;
    const { login } = this.props;
    login(user);
  };

  render() {
    const { user } = this.state;
    const { email, password } = user;
    const { auth } = this.props;
    const { isLoading } = auth;

    if (auth.success) {
      const {
        user: { isadmin }
      } = auth;

      return isadmin ? <Redirect to="/admin" /> : <Redirect to="/view-all" />;
    }

    return (
      <div className="login-container">
        <Image src={logo} className="signup-image" />
        <h3> Welcome Back !!!</h3>
        <Form className="signup-form" onSubmit={this.handleSubmit}>
          <Form.Field required>
            <label id="form-label">Email</label>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field required>
            <label id="form-label">Password</label>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </Form.Field>
          {isLoading ? (
            <Button className="logform_btn" loading basic>
              loading
            </Button>
          ) : (
            <Button className="logform_btn">Login</Button>
          )}
        </Form>
        <p className="form_extra">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    );
  }
}

Login.propTypes = {
  auth: PropTypes.shape({
    errors: PropTypes.shape({
      message: PropTypes.string
    }),
    message: PropTypes.string,
    isLoading: PropTypes.bool
  }).isRequired,
  clearErrorMessage: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
};

const routedLogin = withRouter(Login);
const mapStateToProps = state => ({ auth: state.auth });
const connectLogin = connect(
  mapStateToProps,
  { login: loginUser, clearErrorMessage: clearError }
)(routedLogin);
export default connectLogin;
