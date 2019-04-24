/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import { Card, Table } from "semantic-ui-react";

const PersonalDetails = () => {
  return (
    <div className="profile-container">
      <div>
        <Card>
          <Card.Content>
            <Card.Header>Personal Details</Card.Header>
            <h4 className="report_total">
              First Name: <span className="profile_span">Jane</span>
            </h4>
            <h4 className="report_total">
              Last Name: <span className="profile_span">Doe</span>
            </h4>
            <h4 className="report_total">
              Other Name: <span className="profile_span">Lilian</span>
            </h4>
            <h4 className="report_total">
              Email Address:{" "}
              <span className="profile_span">janedoe@gmail.com</span>
            </h4>
            <h4 className="report_total">
              Phone Number: <span className="profile_span">+2347065454534</span>
            </h4>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Report Summary</Card.Header>
            <h4 className="report_total">
              Total Report: <span className="profile_span">4</span>
            </h4>
            <h4 className="report_total">
              Total Pending: <span className="profile_span">1</span>
            </h4>
            <h4 className="report_total">
              Total Rejected: <span className="profile_span">1</span>
            </h4>
            <h4 className="report_total">
              Total Resolved: <span className="profile_span">1</span>
            </h4>
            <h4 className="report_total">
              Total Under Investigation: <span className="profile_span">1</span>
            </h4>
          </Card.Content>
        </Card>
      </div>
      <div>
        <div className="profile-table">
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
              <Table.Row>
                <Table.Cell />
                <Table.Cell />
                <Table.Cell />
                <Table.Cell />
                <Table.Cell />
                <Table.Cell />
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
