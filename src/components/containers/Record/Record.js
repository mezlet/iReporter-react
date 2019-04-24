import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import ContentHeader from "../../presentation/ContentHeader/ContentHeader";

// eslint-disable-next-line react/prefer-stateless-function
export default class CreateReport extends Component {
  render() {
    return (
      <div>
        <ContentHeader />
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
    );
  }
}
