/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
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
      auth: {
        user: { id }
      },
      updateInfo: {
        success,
        incident: { id: incidentId }
      },
      incident,
      updateRecord
    } = this.props;
    if (success) {
      return (
        <Redirect
          to={{
            pathname: `/new-report-view/${incidentId}`,
            id
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
            userId={id}
          />
        </div>
        <Footer />
      </div>
    );
  }
}
EditReport.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }).isRequired,
  viewIncident: PropTypes.func,
  auth: PropTypes.shape({
    user: PropTypes.shape({
      id: '1'
    })
  }),
  updateRecord: PropTypes.func,
  incident: PropTypes.shape(),
  updateInfo: PropTypes.shape({
    success: PropTypes.bool,
    incident: PropTypes.shape({
      id: PropTypes.string
    })
  })
};

const mapStateToProps = state => ({
  incident: state.getIncident,
  auth: state.auth,
  updateInfo: state.updateIncident
});
const connectIncident = connect(
  mapStateToProps,
  { viewIncident: getIncident, updateRecord: updateIncident }
)(withRouter(withContentHeader(EditReport)));
export default connectIncident;
