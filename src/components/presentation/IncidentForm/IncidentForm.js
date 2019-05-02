/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */

import React, { Component } from 'react';
import jsonForm from 'formdata-json';
import PropTypes from 'prop-types';
import { Form, Button, Image } from 'semantic-ui-react';

class IncidentForm extends Component {
  state = {
    imagePreviewUrl: null
  };

  handleImageChange = e => {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.addEventListener('load', () => {
      this.setState({
        imagePreviewUrl: reader.result
      });
    });

    reader.readAsDataURL(file);
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = jsonForm(new FormData(event.target));

    const { createRecord, updateRecord } = this.props;

    if (data.id) {
      updateRecord(data);
    } else {
      createRecord(data);
    }
  };

  render() {
    const { imagePreviewUrl } = this.state;
    const {
      incident: { incident }
    } = this.props;
    return (
      <Form className="record-form" onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Title</label>
          <input
            type="text"
            name="title"
            defaultValue={incident.title}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Category</label>
          <select name="type">
            <option value={incident.type}>{incident.type}</option>
            <option value="red-flag">Redflag</option>
            <option value="intervention">Intervention</option>
          </select>
        </Form.Field>
        <Form.Field>
          <label>Location</label>
          <input type="text" name="location" defaultValue={incident.location} />
        </Form.Field>

        <Form.Field>
          <label>Description</label>
          <textarea
            rows="15"
            placeholder="Tell your story..."
            name="comment"
            defaultValue={incident.comment}
          />
        </Form.Field>
        <Form.Field className="upload-btn-wrapper">
          <label>Image</label>
          <Button className="form-btn">Upload Image</Button>
          <Image src={imagePreviewUrl || incident.images} />
          <input type="file" name="image" onChange={this.handleImageChange} />
        </Form.Field>
        <input type="hidden" name="id" defaultValue={incident.id} />
        <br />
        <Button color="black">Submit</Button>
      </Form>
    );
  }
}
IncidentForm.propTypes = {
  incident: PropTypes.shape({
    incident: PropTypes.shape()
  }),
  createRecord: PropTypes.func.isRequired,
  updateRecord: PropTypes.func.isRequired
};

export default IncidentForm;
