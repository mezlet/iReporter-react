/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Footer from "../../presentation/Footer/Footer";
import IncidentForm from "../../presentation/IncidentForm/IncidentForm";
import withContentHeader from "../../../hoc/withContentHeader";
import {
  getIncident,
  updateIncident
} from "../../../redux/actions/incident/incident-dispatchers";

// eslint-disable-next-line react/prefer-stateless-function
class CreateReport extends Component {
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
    const { incident, updateRecord } = this.props;
    return (
      <div>
        <div className="record-form-container">
          <h2>Report an Incident</h2>
          <IncidentForm
            incident={incident}
            mode="edit"
            updateRecord={updateRecord}
          />
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => ({ incident: state.getIncident });
const connectIncident = connect(
  mapStateToProps,
  { viewIncident: getIncident, updateRecord: updateIncident }
)(withRouter(withContentHeader(CreateReport)));
export default connectIncident;
