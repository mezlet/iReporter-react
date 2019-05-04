/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from '../../presentation/Footer/Footer';
import IncidentForm from '../../presentation/IncidentForm/IncidentForm';
import withContentHeader from '../../../hoc/withContentHeader';
import { createIncident } from '../../../redux/actions/incident/incident-dispatchers';

// eslint-disable-next-line react/prefer-stateless-function
export class CreateReport extends Component {
  render() {
    const { success, incident, createRecord } = this.props;

    if (success) {
      return (
        <Redirect
          to={{
            pathname: `/new-report-view/${incident.id}`,
            id: incident.id
          }}
        />
      );
    }

    return (
      <div>
        <div className="record-form-container">
          <h2>Report an Incident</h2>
          <IncidentForm
            incident={{ incident: { incident } }}
            createRecord={createRecord}
          />
        </div>
        <Footer />
      </div>
    );
  }
}
CreateReport.propTypes = {
  success: PropTypes.bool.isRequired,
  incident: PropTypes.exact({
    id: PropTypes.string
  }).isRequired,
  createRecord: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  incident: state.incident.incident,
  success: state.incident.success
});
export default connect(
  mapStateToProps,
  { createRecord: createIncident }
)(withRouter(withContentHeader(CreateReport)));
