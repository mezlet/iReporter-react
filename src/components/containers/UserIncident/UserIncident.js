/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import { Table, Icon, Modal, Button } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withContentHeader from '../../../hoc/withContentHeader';
import { viewUserIncident } from '../../../redux/actions/incidents/incident-dispatchers';
import { deleteUserIncident } from '../../../redux/actions/incident/incident-dispatchers';

export class UserIncident extends Component {
  componentDidMount() {
    const { listUserIncident } = this.props;
    listUserIncident();
  }

  componentDidUpdate({ deletedIncident: { success: isDeleted } }) {
    const {
      listUserIncident,
      deletedIncident: { success }
    } = this.props;
    if (success !== isDeleted) {
      listUserIncident();
    }
  }

  handleDelete = id => {
    const { deleteIncident } = this.props;
    deleteIncident(id);
  };

  render() {
    const {
      incidents: { data, isLoading },
      history
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
              <Table.HeaderCell />
              <Table.HeaderCell />
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
                    <Modal
                      trigger={<Icon name="trash alternate" color="red" />}
                      header="Warning!"
                      content="Are you sure you want to delete this incident?"
                      onActionClick={() => this.handleDelete(incident.id)}
                      actions={[
                        'No',

                        {
                          key: 'done',
                          content: 'Yes',
                          positive: true
                        }
                      ]}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <Button
                      content="Edit"
                      icon="edit"
                      labelPosition="left"
                      color="blue"
                      onClick={() =>
                        history.push({
                          pathname: `/new-report-view/${incident.id}`
                        })
                      }
                    />
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

UserIncident.propTypes = {
  listUserIncident: PropTypes.func.isRequired,
  deletedIncident: PropTypes.shape({
    success: PropTypes.bool
  }),
  deleteIncident: PropTypes.func.isRequired,
  history: PropTypes.shape(),
  incidents: PropTypes.shape({
    data: PropTypes.shape(),
    isLoading: PropTypes.bool
  })
};

const mapStateToProps = state => ({
  incidents: state.viewIncident,
  deletedIncident: state.deleteIncident
});
const connectIncident = connect(
  mapStateToProps,
  { listUserIncident: viewUserIncident, deleteIncident: deleteUserIncident }
)(withRouter(withContentHeader(UserIncident)));
export default connectIncident;
