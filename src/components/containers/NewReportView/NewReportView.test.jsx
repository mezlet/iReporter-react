import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import connectIncident, { NewReportView } from './NewReportView';

const props = {
  viewIncident: jest.fn(),
  match: {
    params: {
      id: '1'
    }
  },
  incident: {},
  auth: {
    user: {}
  },
  isLoading: false
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

const wrapper = shallow(<NewReportView {...props} />);

describe('<CreateReport/> rendering', () => {
  it('should render without crashing', () => {
    expect(connectedWrapper).toMatchSnapshot();
  });
  it('should render Loader while isLoading is true', () => {
    wrapper.setProps({
      isLoading: true
    });
    expect(wrapper.find('Loader')).toHaveLength(1);
  });
});
