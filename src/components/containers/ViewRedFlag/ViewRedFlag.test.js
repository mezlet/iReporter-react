/* eslint-disable no-unused-vars */
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import connectIncident, { ViewRedFlag } from './ViewRedFlag';

const props = {
  AllRedFlag: jest.fn(),
  incident: {
    data: [
      {
        id: '1',
        type: 'sometext',
        title: 'anothertxt',
        location: 'here',
        createdon: 'date'
      }
    ]
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
      <connectIncident {...props} />
    </Router>
  </Provider>
);

const wrapper = shallow(<ViewRedFlag {...props} />);

describe('<ViewRedFlag/> rendering', () => {
  it('should render without crashing', () => {
    expect(connectedWrapper).toMatchSnapshot();
  });
});
