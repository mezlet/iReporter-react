import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import connectIncident, { EditReport } from './EditReport';

const props = {
  incident: {},
  match: {
    params: {
      id: '1'
    }
  },
  viewIncident: jest.fn(),
  auth: {
    user: {
      id: '1'
    }
  },
  updateRecord: jest.fn(),

  success: false,
  userId: 1
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

const wrapper = shallow(<EditReport {...props} />);

describe('<EditReport/> rendering', () => {
  it('should render without crashing', () => {
    expect(connectedWrapper).toMatchSnapshot();
  });
  it('should redirect on Edit success', () => {
    wrapper.setProps({
      success: true,
      userId: '1'
    });
    expect(wrapper.find('Redirect')).toHaveLength(1);
  });
});
