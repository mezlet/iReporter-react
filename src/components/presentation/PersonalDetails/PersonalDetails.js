/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { Card, Table, Responsive } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const PersonalDetails = props => {
  let {
    personalInfo,
    posts,
    pending,
    rejected,
    resolved,
    userIncidents
  } = props;

  personalInfo = personalInfo || [];
  posts = posts || 0;
  pending = pending || 0;
  rejected = rejected || 0;
  resolved = resolved || 0;
  userIncidents = userIncidents || [];

  return (
    <div>
      <Responsive>
        <div className="card-wrapper">
          <Card className="profile-card">
            {personalInfo[0] && (
              <Card.Content>
                <Card.Header>Personal Details</Card.Header>
                <h4 className="report_total">
                  First Name:{' '}
                  <span className="profile_span">
                    {personalInfo[0].firstname}
                  </span>
                </h4>
                <h4 className="report_total">
                  Last Name:{' '}
                  <span className="profile_span">
                    {personalInfo[0].lastname}
                  </span>
                </h4>
                <h4 className="report_total">
                  Other Name:{' '}
                  <span className="profile_span">
                    {personalInfo[0].othernames}
                  </span>
                </h4>
                <h4 className="report_total">
                  Email Address:
                  <span className="profile_span">{personalInfo[0].email}</span>
                </h4>
                <h4 className="report_total">
                  Phone Number:{' '}
                  <span className="profile_span">
                    {personalInfo[0].phonenumber}
                  </span>
                </h4>
              </Card.Content>
            )}
          </Card>
          <Card className="card-right">
            <Card.Content>
              <Card.Header>Report Summary</Card.Header>
              <h4 className="report_total">
                Total Report: <span className="profile_span">{posts}</span>
              </h4>
              <h4 className="report_total">
                Total Pending: <span className="profile_span">{pending}</span>
              </h4>
              <h4 className="report_total">
                Total Rejected: <span className="profile_span">{rejected}</span>
              </h4>
              <h4 className="report_total">
                Total Resolved: <span className="profile_span">{resolved}</span>
              </h4>
            </Card.Content>
          </Card>
        </div>
      </Responsive>

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
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {userIncidents[0] &&
              userIncidents.map(incident => (
                <Table.Row key={incident.id}>
                  <Table.Cell>{incident.id}</Table.Cell>
                  <Table.Cell>{incident.createdon}</Table.Cell>
                  <Table.Cell>{incident.type}</Table.Cell>
                  <Table.Cell>{incident.title}</Table.Cell>
                  <Table.Cell>{incident.location}</Table.Cell>
                  <Table.Cell>{incident.status}</Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </Responsive>
      <Responsive maxWidth={Responsive.onlyTablet.minWidth}>
        <h3>Report List</h3>
        {userIncidents[0] &&
          userIncidents.map(incident => (
            <Card className="card-mobile">
              <Card.Content>
                <h4 className="report_total">
                  Report Id: <span className="profile_span">{incident.id}</span>
                </h4>
                <h4 className="report_total">
                  Date:{' '}
                  <span className="profile_span">{incident.createdon}</span>
                </h4>
                <h4 className="report_total">
                  Category:{' '}
                  <span className="profile_span">{incident.type}</span>
                </h4>
                <h4 className="report_total">
                  Title: <span className="profile_span">{incident.title}</span>
                </h4>
                <h4 className="report_total">
                  Location:{' '}
                  <span className="profile_span">{incident.location}</span>
                </h4>
                <h4 className="report_total">
                  Status:{' '}
                  <span className="profile_span">{incident.status}</span>
                </h4>
              </Card.Content>
            </Card>
          ))}
      </Responsive>
    </div>
  );
};
PersonalDetails.propTypes = {
  personalInfo: PropTypes.exact(),
  posts: PropTypes.string,
  pending: PropTypes.string,
  rejected: PropTypes.string,
  resolved: PropTypes.string,
  userIncidents: PropTypes.shape()
};
export default PersonalDetails;
