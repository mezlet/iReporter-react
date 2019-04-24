/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Image, Button, label } from "semantic-ui-react";

export default class SignUp extends Component {
  render() {
    return (
      <div className="signup-container">
        <Image
          src="../../../../public/images/logo.png"
          className="signup-image"
        />
        <h3>Create your iReport Account</h3>

        <Form className="signup-form">
          <Form.Field required>
            <label id="form-label">First Name</label>
            <Input type="text" />
          </Form.Field>
          <Form.Field required>
            <label id="form-label">Last Name</label>
            <Input />
          </Form.Field>
          <Form.Field required>
            <label id="form-label">Other Name</label>
            <Input />
          </Form.Field>
          <Form.Field required>
            <label id="form-label">Email Address</label>
            <Input />
          </Form.Field>
          <Form.Field required>
            <label id="form-label">Phone Number</label>
            <Input />
          </Form.Field>
          <Form.Field required>
            <label id="form-label">Username</label>
            <Input />
          </Form.Field>
          <Form.Field required>
            <label id="form-label">Password</label>
            <Input />
          </Form.Field>
          <Form.Field required>
            <label id="form-label">Confirm Password</label>
            <Input />
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
