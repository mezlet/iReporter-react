/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Image, Button } from "semantic-ui-react";

export default class SignUp extends Component {
  render() {
    return (
      <div className="login-container">
        <Image
          src="../../../../public/images/logo.png"
          className="signup-image"
        />
        <h3> Welcome Back !!!</h3>
        <Form className="signup-form">
          <Form.Field required>
            <label id="form-label">Username</label>
            <Input />
          </Form.Field>
          <Form.Field required>
            <label id="form-label">Password</label>
            <Input />
          </Form.Field>
          <Button as={Link} to="/create" className="logform_btn">
            Login
          </Button>
        </Form>
        <p className="form_extra">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    );
  }
}
