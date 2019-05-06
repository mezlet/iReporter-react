/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import { Table, Dropdown, Responsive, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withContentHeader from '../../../hoc/withContentHeader';
import { viewAllIncident } from '../../../redux/actions/incidents/incident-dispatchers';
import { updateStatusAction } from '../../../redux/actions/incident/incident-dispatchers';

export class AdminPage extends Component {
  componentDidMount() {
    const { viewRecords } = this.props;
    viewRecords();
  }

  componentDidUpdate({ updateStatusSuccess: isUpdated }) {
    const { viewRecords, updateStatusSuccess } = this.props;

    if (updateStatusSuccess !== isUpdated) {
      viewRecords();
    }
  }

  handleSubmit = (id, status) => {
    const { statusUpdate } = this.props;
    const newstatus = { status };
    statusUpdate({ id, newstatus });
  };

  render() {
    const { data, isLoading } = this.props;
    return (
      <div className="incident-viewAll-wrapper">
        <Responsive minWidth={Responsive.onlyTablet.minWidth + 1}>
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
                      <Link
                        to={{ pathname: `/new-report-view/${incident.id}` }}
                      >
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
                              this.handleSubmit(incident.id, 'rejected')
                            }
                          />
                          <Dropdown.Item
                            value="resolved"
                            text="Accept"
                            onClick={() =>
                              this.handleSubmit(incident.id, 'resolved')
                            }
                          />
                          <Dropdown.Item
                            value="under-investigation"
                            text="UnderInvestigation"
                            onClick={() =>
                              this.handleSubmit(
                                incident.id,
                                'under-investigation'
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
        </Responsive>
        <Responsive maxWidth={Responsive.onlyTablet.minWidth}>
          {data.length
            ? data.map(incident => (
                <Card className="incident-viewAll-card" key={incident.id}>
                  <Card.Header className="incident-viewAll-title">
                    {incident.title}
                  </Card.Header>
                  <Card.Content>
                    <Card.Meta>
                      <span className="date">Type: {incident.type}</span>
                      <br />
                      <span className="date">
                        Location: {incident.location}
                      </span>
                      <br />
                      <span className="date">
                        Created: {incident.createdon}
                      </span>
                      <br />
                      <span className="date">Status: {incident.status}</span>
                    </Card.Meta>
                  </Card.Content>
                  <Card.Content>
                    <Dropdown text="Select Action">
                      <Dropdown.Menu>
                        <Dropdown.Divider />
                        <Dropdown.Item
                          value="rejected"
                          text="Reject"
                          onClick={() =>
                            this.handleSubmit(incident.id, 'rejected')
                          }
                        />
                        <Dropdown.Item
                          value="resolved"
                          text="Accept"
                          onClick={() =>
                            this.handleSubmit(incident.id, 'resolved')
                          }
                        />
                        <Dropdown.Item
                          value="under-investigation"
                          text="UnderInvestigation"
                          onClick={() =>
                            this.handleSubmit(
                              incident.id,
                              'under-investigation'
                            )
                          }
                        />
                      </Dropdown.Menu>
                    </Dropdown>
                  </Card.Content>
                </Card>
              ))
            : isLoading && <div>Loading....</div>}
        </Responsive>
      </div>
    );
  }
}
AdminPage.propTypes = {
  updateStatusSuccess: PropTypes.bool.isRequired,
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ]),
  isLoading: PropTypes.bool.isRequired,
  statusUpdate: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  isLoading: state.viewIncident.isLoading,
  data: state.viewIncident.data,
  updateStatusSuccess: state.updateStatus.success
});

const mapDispatchToProps = {
  viewRecords: viewAllIncident,
  statusUpdate: updateStatusAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withContentHeader(AdminPage));
