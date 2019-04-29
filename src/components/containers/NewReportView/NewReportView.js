/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import withContentHeader from "../../../hoc/withContentHeader";
import { getIncident } from "../../../redux/actions/incident/incident-dispatchers";

class NewReportView extends Component {
  componentDidMount() {
    const {
      match: {
        params: { id }
      },
      viewIncident
    } = this.props;
    viewIncident(id);
  }

  render() {
    const {
      incident: { incident },
      isLoading
    } = this.props;
    const { id, title, type, comment, images, createdon, location } = incident;
    if (isLoading) {
      return <div>Loading....</div>;
    }

    return (
      <div className="incident-view-wrapper">
        <Card className="incident-view-card">
          <Card.Header className="incident-view-title">{title}</Card.Header>
          <Image src={images} className="incident-view-image" />
          <Card.Content>
            <Card.Description className="incident-view-description">
              {comment}
            </Card.Description>
            <Card.Meta>
              <span className="date">Type: {type}</span>
              <br />
              <span className="date">Location: {location}</span>
              <br />
              <span className="date">Created: {createdon}</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons" />
            <Button basic as={Link} to={`/edit-incident/${id}`}>
              Edit
            </Button>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = state => ({ incident: state.getIncident });
const connectIncident = connect(
  mapStateToProps,
  { viewIncident: getIncident }
)(withRouter(withContentHeader(NewReportView)));
export default connectIncident;
