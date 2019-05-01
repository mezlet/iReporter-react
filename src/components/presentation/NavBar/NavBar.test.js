/* eslint-disable no-unused-vars */
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import NavBar from './NavBar';

const wrapper = shallow(<NavBar />);

describe('<ViewRedFlag/> rendering', () => {
  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
