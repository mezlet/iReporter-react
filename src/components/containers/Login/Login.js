/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { Form, Input, Image, Button } from "semantic-ui-react";
import { loginUser } from "../../../redux/actions/auth/auth-dispatchers";

export class Login extends Component {
  static propTypes = {
    // auth: PropTypes.shape().isRequired
  };

  state = {
    user: {
      email: "",
      password: ""
    }
  };

  handleChange = event => {
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { user } = this.state;
    const { login } = this.props;
    await login(user);
    // const { auth } = this.props;
    // const { success } = auth;
    window.location.replace("/");
  };

  render() {
    const { user } = this.state;
    const { email, password } = user;
    return (
      <div className="login-container">
        <Image
          src="../../../../public/images/logo.png"
          className="signup-image"
        />
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
          <Button className="logform_btn">Login</Button>
        </Form>
        <p className="form_extra">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    );
  }
}

const routedLogin = withRouter(Login);
const mapStateToProps = state => ({ auth: state.auth });
const connectLogin = connect(
  mapStateToProps,
  { login: loginUser }
)(routedLogin);
export default connectLogin;
