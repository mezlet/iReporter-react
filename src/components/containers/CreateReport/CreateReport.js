/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable no-undef */
import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import Footer from "../../presentation/Footer/Footer";
import withContentHeader from "../../../hoc/withContentHeader";

// eslint-disable-next-line react/prefer-stateless-function
class CreateReport extends Component {
  render() {
    const options = [
      { key: "r", text: "Red-flag", value: "Red-flag" },
      { key: "i", text: "Intervention", value: "Intervention" }
    ];
    return (
      <div>
        <div className="record-form-container">
          <h2>Report an Incident</h2>

          <Form className="record-form">
            <Form.Input fluid label="Title" />
            <Form.Select fluid label="Category" options={options} />
            <Form.Input fluid label="Location" />
            <Form.TextArea rows="15" placeholder="Tell your story..." />
            <Form.Field className="upload-btn-wrapper">
              <label>Image</label>
              <Button className="form-btn">Upload Image</Button>
              <input type="file" name="myfile" />
            </Form.Field>
            <br />
            <Form.Field className="upload-btn-wrapper">
              <label>Videos</label>
              <Button className="form-btn">Upload Videos</Button>
              <input type="file" name="myfile" />
            </Form.Field>
            <br />

            <Button color="black" placeholder="insert image">
              Submit
            </Button>
            <Button color="red" className="reset-button">
              Reset
            </Button>
          </Form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withContentHeader(CreateReport);
