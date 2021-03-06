/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Card,
  Image,
  Button,
  Dimmer,
  Loader,
  Segment,
  Responsive
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withContentHeader from '../../../hoc/withContentHeader';
import { getIncident } from '../../../redux/actions/incident/incident-dispatchers';

export class NewReportView extends Component {
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
    const { incident, isLoading, userId } = this.props;
    const {
      id,
      createdby,
      title,
      type,
      comment,
      images,
      createdon,
      location
    } = incident;
    const isUser = userId === createdby;
    if (isLoading) {
      return (
        <div>
          {' '}
          <Segment>
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>

            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </Segment>
        </div>
      );
    }

    return (
      <div className="incident-view-wrapper">
        <Responsive>
          <Card className="incident-view-card">
            <Card.Header className="incident-view-title">{title}</Card.Header>

            <Image src={images} className="incident-view-image" />
            <Card.Content>
              <Card.Description className="incident-view-description">
                {comment}
              </Card.Description>
              <Card.Meta>
                <span className="date">Type: {type}</span>
                <br />
                <span className="date">Location: {location}</span>
                <br />
                <span className="date">Created: {createdon}</span>
              </Card.Meta>
            </Card.Content>
            {isUser && (
              <Card.Content extra>
                <div className="ui two buttons" />
                <Button
                  basic
                  as={Link}
                  to={{ pathname: `/edit-incident/${id}`, isEdit: 'no' }}
                >
                  Edit
                </Button>
              </Card.Content>
            )}
          </Card>
        </Responsive>
      </div>
    );
  }
}

NewReportView.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  incident: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ]),
  userId: PropTypes.number,
  isLoading: PropTypes.bool,
  viewIncident: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  incident: state.getIncident.incident,
  userId: state.auth.user.id,
  isLoading: state.auth.isLoading
});
export default connect(
  mapStateToProps,
  { viewIncident: getIncident }
)(withContentHeader(NewReportView));
