/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import withContentHeader from '../../../hoc/withContentHeader';
import { viewAllIncident } from '../../../redux/actions/incidents/incident-dispatchers';

export class ViewIncident extends Component {
  componentDidMount() {
    const { viewRecords } = this.props;
    viewRecords();
  }

  render() {
    const {
      incident: { data }
    } = this.props;

    return (
      <div className="incident-viewAll-wrapper">
        {data ? (
          Object.values(data).map(incident => (
            <Card
              className="incident-viewAll-card"
              key={incident.id}
              as={Link}
              to={{
                pathname: `/new-report-view/${incident.id}`
              }}
            >
              <Card.Header className="incident-viewAll-title">
                {incident.title}
              </Card.Header>
              <Image src={incident.images} className="incident-viewAll-image" />
              <Card.Content>
                <Card.Meta>
                  <span className="date">Type: {incident.type}</span>
                  <br />
                  <span className="date">Location: {incident.location}</span>
                  <br />
                  <span className="date">Created: {incident.createdon}</span>
                </Card.Meta>
              </Card.Content>
            </Card>
          ))
        ) : (
          <div>Loading....</div>
        )}
      </div>
    );
  }
}

ViewIncident.propTypes = {
  incident: PropTypes.shape({
    data: PropTypes.shape()
  }),
  viewRecords: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ incident: state.viewIncident });
const connectIncident = connect(
  mapStateToProps,
  { viewRecords: viewAllIncident }
)(withRouter(withContentHeader(ViewIncident)));
export default connectIncident;
