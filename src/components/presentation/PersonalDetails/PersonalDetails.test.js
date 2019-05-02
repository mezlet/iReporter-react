/* eslint-disable no-unused-vars */
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import PersonalDetails from './PersonalDetails';

const props = {
  personalInfo: {},
  posts: '1',
  rejected: '1',
  resolved: '1',
  pending: '1',
  userIncidents: {}
};

const initialState = {
  isLoading: false,
  success: false,
  incident: {},
  errors: {},
  message: ''
};

const wrapper = shallow(<PersonalDetails {...props} />);

describe('<ViewRedFlag/> rendering', () => {
  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
