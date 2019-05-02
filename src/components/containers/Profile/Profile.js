/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import PersonalDetails from '../../presentation/PersonalDetails/PersonalDetails';
import withContentHeader from '../../../hoc/withContentHeader';
import { getUserProfile } from '../../../redux/actions/incidents/incident-dispatchers';

export class Profile extends Component {
  componentDidMount() {
    const { getProfile } = this.props;
    getProfile();
  }

  render() {
    const {
      profile: {
        data: { posts, userinfo, pending, resolved, rejected, userincidents }
      }
    } = this.props;

    return (
      <div>
        <PersonalDetails
          personalInfo={userinfo}
          posts={posts}
          pending={pending}
          resolved={resolved}
          rejected={rejected}
          userIncidents={userincidents}
        />
      </div>
    );
  }
}

Profile.propTypes = {
  profile: PropTypes.shape({
    data: PropTypes.shape({
      resolved: PropTypes.string,
      posts: PropTypes.string,
      user: PropTypes.shape(),
      pending: PropTypes.string,
      rejected: PropTypes.string,
      userIncidents: PropTypes.shape()
    })
  }),
  getProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ profile: state.getProfile });
const connectProfile = connect(
  mapStateToProps,
  { getProfile: getUserProfile }
)(withRouter(withContentHeader(Profile)));
export default connectProfile;
