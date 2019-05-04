import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import connectIncident, { CreateReport } from './CreateReport';

const props = {
  success: false,
  incident: {
    id: '1'
  },
  createRecord: jest.fn()
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

const wrapper = shallow(<CreateReport {...props} />);

describe('<CreateReport/> rendering', () => {
  it('should render without crashing', () => {
    expect(connectedWrapper).toMatchSnapshot();
  });
  it('should redirect on createReport success', () => {
    wrapper.setProps({
      success: true,
      incident: { id: '1' }
    });
    expect(wrapper.find('Redirect')).toHaveLength(1);
  });
});
