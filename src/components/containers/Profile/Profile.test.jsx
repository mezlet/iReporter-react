/* eslint-disable no-unused-vars */
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import connectProfile, { Profile } from './Profile';

const props = {
  getProfile: jest.fn(),
  profile: {
    data: {
      resolved: '',
      pending: '',
      posts: '',
      rejected: '',
      user: {},
      userIncidents: {}
    }
  }
};

const initialState = {
  isLoading: false,
  success: false,
  incident: {},
  errors: {},
  message: ''
};

const mockStore = configureMockStore([thunk]);
const store = mockStore(initialState);

const connectedWrapper = shallow(
  <Provider store={store}>
    <Router>
      <connectProfile {...props} />
    </Router>
  </Provider>
);

const wrapper = shallow(<Profile {...props} />);

describe('<Profile/> rendering', () => {
  it('should render without crashing', () => {
    expect(connectedWrapper).toMatchSnapshot();
  });
});
