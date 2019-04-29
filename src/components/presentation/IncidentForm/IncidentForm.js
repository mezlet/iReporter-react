/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable no-undef */
import React, { Component } from "react";
import { Form, Button, Image } from "semantic-ui-react";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prefer-stateless-function
class IncidentForm extends Component {
  state = {
    inputIncident: {
      title: "",
      type: "",
      location: "",
      comment: "",
      images: []
    }
  };

  static getDerivedStateFromProps(props) {
    const {
      incident: {
        incident: { type, title, comment, location }
      }
    } = props;
    if (title !== undefined) {
      return {
        inputIncident: {
          type,
          title,
          comment,
          location
        }
      };
    }
    return null;
  }

  componentDidUpdate({ incident: { message: prevMessage } }) {
    const {
      incident: { message },
      mode
    } = this.props;
    if (prevMessage !== message && mode !== "edit") {
      toast.success(message);
    }
  }

  getInputValue = event => {
    const input =
      event.target.name === "myfile"
        ? { image: event.target.files[0] }
        : { [event.target.name]: event.target.value };
    return input;
  };

  handleSubmit = event => {
    event.preventDefault();
    const {
      createRecord,
      mode,
      updateRecord,
      incident: {
        incident: { id }
      }
    } = this.props;
    const { inputIncident } = this.state;
    console.log(inputIncident, "afgsvs");
    if (mode === "edit") {
      updateRecord(inputIncident, id);
    } else {
      createRecord(inputIncident);
    }
  };

  handleChange = event => {
    const input = this.getInputValue(event);
    const { inputIncident } = this.state;
    console.log("dvhdvhvhs");
    this.setState({
      inputIncident: {
        ...inputIncident,
        ...input
      }
    });
  };

  render() {
    const { inputIncident } = this.state;
    const { title, location, comment, type, images } = inputIncident;
    return (
      <Form className="record-form" onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Title</label>
          <input
            type="text"
            name="title"
            defaultValue={title}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Category</label>
          <select name="type" onChange={this.handleChange}>
            <option value={type}>{type}</option>
            <option value="red-flag">Redflag</option>
            <option value="intervention">Intervention</option>
          </select>
        </Form.Field>
        <Form.Field>
          <label>Location</label>
          <input
            type="text"
            name="location"
            defaultValue={location}
            key="bcbcbcbcb"
            onChange={this.handleChange}
          />
        </Form.Field>

        <Form.Field>
          <label>Description</label>
          <textarea
            rows="15"
            placeholder="Tell your story..."
            name="comment"
            defaultValue={comment}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field className="upload-btn-wrapper">
          <label>Image</label>
          <Button className="form-btn">Upload Image</Button>
          <Image src={images} />
          <input type="file" name="myfile" onChange={this.handleChange} />
        </Form.Field>
        <br />
        <Button color="black">Submit</Button>
      </Form>
    );
  }
}

export default IncidentForm;
