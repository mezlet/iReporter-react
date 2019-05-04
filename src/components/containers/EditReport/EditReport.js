/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from '../../presentation/Footer/Footer';
import IncidentForm from '../../presentation/IncidentForm/IncidentForm';
import withContentHeader from '../../../hoc/withContentHeader';
import {
  getIncident,
  updateIncident
} from '../../../redux/actions/incident/incident-dispatchers';

// eslint-disable-next-line react/prefer-stateless-function
export class EditReport extends Component {
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
      userId,
      updateSuccess,
      updatedIncidentId: incidentId,
      incident,
      updateRecord
    } = this.props;
    if (updateSuccess) {
      return (
        <Redirect
          to={{
            pathname: `/new-report-view/${incidentId}`,
            id: userId
          }}
        />
      );
    }
    return (
      <div>
        <div className="record-form-container">
          <h2>Report an Incident</h2>
          <IncidentForm
            incident={incident}
            mode="edit"
            updateRecord={updateRecord}
            userId={userId}
          />
        </div>
        <Footer />
      </div>
    );
  }
}
EditReport.propTypes = {
  match: PropTypes.exact({
    path: PropTypes.string,
    url: PropTypes.string,
    isExact: PropTypes.bool,

    params: PropTypes.exact({
      id: PropTypes.string
    })
  }).isRequired,
  viewIncident: PropTypes.func,

  userId: PropTypes.string,

  updateRecord: PropTypes.func,
  incident: PropTypes.exact({}),

  updateSuccess: PropTypes.bool,
  updatedIncidentId: PropTypes.string
};

const mapStateToProps = state => ({
  incident: state.getIncident,
  userId: state.auth.user.id,
  updatedIncidentId: state.updateIncident.incident.id,
  updateSuccess: state.updateIncident.success
});
export default connect(
  mapStateToProps,
  { viewIncident: getIncident, updateRecord: updateIncident }
)(withContentHeader(EditReport));
