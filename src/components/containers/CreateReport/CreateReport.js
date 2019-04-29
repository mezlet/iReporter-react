/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import Footer from "../../presentation/Footer/Footer";
import IncidentForm from "../../presentation/IncidentForm/IncidentForm";
import withContentHeader from "../../../hoc/withContentHeader";
import { createIncident } from "../../../redux/actions/incident/incident-dispatchers";

// eslint-disable-next-line react/prefer-stateless-function
class CreateReport extends Component {
  render() {
    const { createdIncident, createRecord } = this.props;
    const {
      success,
      incident: { id }
    } = createdIncident;
    if (success) {
      return (
        <Redirect
          to={{
            pathname: `/new-report-view/${id}`,
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
            incident={createdIncident}
            createRecord={createRecord}
          />
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => ({ createdIncident: state.incident });
const connectIncident = connect(
  mapStateToProps,
  { createRecord: createIncident }
)(withRouter(withContentHeader(CreateReport)));
export default connectIncident;
