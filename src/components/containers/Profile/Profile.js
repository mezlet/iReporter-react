/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  profile: PropTypes.exact({
    data: PropTypes.exact({
      resolved: PropTypes.string,
      posts: PropTypes.string,
      user: PropTypes.exact(),
      pending: PropTypes.string,
      rejected: PropTypes.string,
      userIncidents: PropTypes.exact()
    })
  }),
  getProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.getProfile
});
export default connect(
  mapStateToProps,
  { getProfile: getUserProfile }
)(withContentHeader(Profile));
