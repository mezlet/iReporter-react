/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import withContentHeader from '../../../hoc/withContentHeader';
import { viewIntervention } from '../../../redux/actions/incidents/incident-dispatchers';

export class Viewintervention extends Component {
  componentDidMount() {
    const { AllIntervention } = this.props;
    AllIntervention();
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
Viewintervention.propTypes = {
  incident: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  AllIntervention: PropTypes.func.isRequired
};
const mapStateToProps = state => ({ incident: state.viewIncident });
export default connect(
  mapStateToProps,
  { AllIntervention: viewIntervention }
)(withContentHeader(Viewintervention));
