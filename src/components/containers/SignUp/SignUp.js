/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { Form, Input, Image, Button } from "semantic-ui-react";
import { registerUser } from "../../../redux/actions/auth/auth-dispatchers";
import { validateUser, showInputError } from "../../../helpers/helpers";

export class SignUp extends Component {
  static propTypes = {};

  state = {
    user: {
      firstname: "",
      lastname: "",
      othernames: "",
      email: "",
      phonenumber: "",
      password: "",
      confirmPassword: "",
      username: ""
    },

    errors: {}
  };

  componentDidUpdate({ auth: { message: prevMessage } }) {
    const {
      auth: { message }
    } = this.props;

    if (prevMessage !== message) {
      toast.success(message);
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
    const { signUp } = this.props;
    const { errors, validUser } = validateUser(user);

    if (Object.keys(errors).length) {
      this.setState({ errors });
      return;
    }
    signUp(validUser);
  };

  render() {
    const { user, errors } = this.state;
    const {
      firstname,
      lastname,
      othernames,
      phonenumber,
      email,
      password,
      confirmPassword,
      username
    } = user;
    const { auth } = this.props;
    if (auth.success) {
      return <Redirect to="/create" />;
    }
    return (
      <div className="signup-container">
        <Image
          src="../../../../public/images/logo.png"
          className="signup-image"
        />
        <h3>Create your iReport Account</h3>

        <Form className="signup-form" onSubmit={this.handleSubmit}>
          <Form.Field required>
            <label id="form-label">First Name</label>
            <Input
              type="text"
              name="firstname"
              value={firstname}
              onChange={this.handleChange}
            />
            <span style={{ color: "red" }}>
              {showInputError("firstname", errors)}
            </span>
          </Form.Field>
          <Form.Field required>
            <label id="form-label">Last Name</label>
            <Input
              type="text"
              name="lastname"
              value={lastname}
              onChange={this.handleChange}
            />
            <span style={{ color: "red" }}>
              {showInputError("lastname", errors)}
            </span>
          </Form.Field>
          <Form.Field required>
            <label id="form-label">Other Name</label>
            <Input
              type="text"
              name="othernames"
              value={othernames}
              onChange={this.handleChange}
            />
            <span style={{ color: "red" }}>
              {showInputError("othernames", errors)}
            </span>
          </Form.Field>
          <Form.Field required>
            <label id="form-label">Email Address</label>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <span style={{ color: "red" }}>
              {showInputError("email", errors)}
            </span>
          </Form.Field>
          <Form.Field required>
            <label id="form-label">Phone Number</label>
            <Input
              type="text"
              name="phonenumber"
              value={phonenumber}
              onChange={this.handleChange}
            />
            <span style={{ color: "red" }}>
              {showInputError("phonenumber", errors)}
            </span>
          </Form.Field>
          <Form.Field required>
            <label id="form-label">Username</label>
            <Input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            <span style={{ color: "red" }}>
              {showInputError("username", errors)}
            </span>
          </Form.Field>
          <Form.Field required>
            <label id="form-label">Password</label>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <span style={{ color: "red" }}>
              {showInputError("password", errors)}
            </span>
          </Form.Field>
          <Form.Field required>
            <label id="form-label">Confirm Password</label>
            <Input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
            />
            <span style={{ color: "red" }}>
              {showInputError("confirmPassword", errors)}
            </span>
          </Form.Field>
          <Button className="logform_btn">Sign up</Button>
        </Form>
        <p className="form_extra">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    );
  }
}
const routeSignup = withRouter(SignUp);
const mapStateToProps = state => ({ auth: state.auth });
const connectSignup = connect(
  mapStateToProps,
  { signUp: registerUser }
)(routeSignup);
export default connectSignup;
