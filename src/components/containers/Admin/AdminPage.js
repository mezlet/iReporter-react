/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from "react";
import { Table, Dropdown } from "semantic-ui-react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import withContentHeader from "../../../hoc/withContentHeader";
import { viewAllIncident } from "../../../redux/actions/incidents/incident-dispatchers";
import { updateStatusAction } from "../../../redux/actions/incident/incident-dispatchers";

class AdminPage extends Component {
  state = {};

  componentDidMount() {
    const { viewRecords } = this.props;
    viewRecords();
  }

  componentDidUpdate({ updateStatus: { success: isUpdated } }) {
    const {
      viewRecords,
      updateStatus: { success }
    } = this.props;

    if (success !== isUpdated) {
      viewRecords();
    }
  }

  handleSubmit = (id, status) => {
    const { statusUpdate } = this.props;
    const newstatus = { status };
    statusUpdate({ id, newstatus });
  };

  render() {
    const {
      incident: { data, isLoading }
    } = this.props;

    return (
      <div className="incident-viewAll-wrapper">
        <Table celled selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ReportId</Table.HeaderCell>
              <Table.HeaderCell>Date/Time</Table.HeaderCell>
              <Table.HeaderCell>Category</Table.HeaderCell>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Location</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.length ? (
              data.map(incident => (
                <Table.Row key={incident.id}>
                  <Table.Cell>{incident.id}</Table.Cell>
                  <Table.Cell>{incident.createdon}</Table.Cell>
                  <Table.Cell>{incident.type}</Table.Cell>
                  <Table.Cell>
                    <Link to={{ pathname: `/new-report-view/${incident.id}` }}>
                      {incident.title}
                    </Link>
                  </Table.Cell>

                  <Table.Cell>{incident.location}</Table.Cell>
                  <Table.Cell>{incident.status}</Table.Cell>
                  <Table.Cell>
                    <Dropdown text="Select Action">
                      <Dropdown.Menu>
                        <Dropdown.Divider />
                        <Dropdown.Item
                          value="rejected"
                          text="Reject"
                          onClick={() =>
                            this.handleSubmit(incident.id, "rejected")
                          }
                        />
                        <Dropdown.Item
                          value="resolved"
                          text="Accept"
                          onClick={() =>
                            this.handleSubmit(incident.id, "resolved")
                          }
                        />
                        <Dropdown.Item
                          value="under-investigation"
                          text="UnderInvestigation"
                          onClick={() =>
                            this.handleSubmit(
                              incident.id,
                              "under-investigation"
                            )
                          }
                        />
                      </Dropdown.Menu>
                    </Dropdown>
                  </Table.Cell>
                </Table.Row>
              ))
            ) : (
              <tr>
                <td>{isLoading && <div>Loading....</div>}</td>
              </tr>
            )}
          </Table.Body>
        </Table>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  incident: state.viewIncident,
  updateStatus: state.updateStatus
});
const connectIncident = connect(
  mapStateToProps,
  { viewRecords: viewAllIncident, statusUpdate: updateStatusAction }
)(withRouter(withContentHeader(AdminPage)));
export default connectIncident;
