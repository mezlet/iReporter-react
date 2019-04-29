/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { Link, withRouter, Redirect } from "react-router-dom";
import { Form, Input, Image, Button } from "semantic-ui-react";
import { loginUser } from "../../../redux/actions/auth/auth-dispatchers";

export class Login extends Component {
  state = {
    user: {
      email: "",
      password: ""
    }
  };

  componentDidUpdate({ auth: { message: prevMessage } }) {
    const {
      auth: {
        message,
        errors: { response }
      }
    } = this.props;

    if (response) {
      const { data } = response;
      toast.error(data.message);
    }

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

  handleSubmit = async event => {
    event.preventDefault();
    const { user } = this.state;
    const { login } = this.props;
    await login(user);
  };

  render() {
    const { user } = this.state;
    const { email, password } = user;
    const { auth } = this.props;

    if (auth.success) {
      const {
        user: { isadmin }
      } = auth;

      return isadmin ? <Redirect to="/admin" /> : <Redirect to="/create" />;
    }

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
