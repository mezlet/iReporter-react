import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import connectIncident, { UserIncident } from './UserIncident';

const props = {
  listUserIncident: jest.fn(),
  deleteSuccess: false,
  deleteIncident: jest.fn(),
  history: {},
  data: [],
  isLoading: true
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

const wrapper = shallow(<UserIncident {...props} />);

describe('<CreateReport/> rendering', () => {
  it('should render without crashing', () => {
    expect(connectedWrapper).toMatchSnapshot();
  });
  it('should render Loader while isLoading is true', () => {
    wrapper.setProps({
      deleteSuccess: true
    });
    expect(wrapper.instance().props.listUserIncident).toHaveBeenCalled();
  });
  it('should render Loader while isLoading is true', () => {
    wrapper.setProps({
      data: [
        {
          id: '1',
          name: 'something'
        }
      ]
    });
    expect(wrapper.find('TableRow')).toHaveLength(2);
  });
});
