import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import ConnectedAdminPage, { AdminPage } from './AdminPage';

const props = {
  updateStatus: {
    success: false
  },
  incident: {
    data: {},
    isLoading: true
  },
  viewRecords: jest.fn(),
  statusUpdate: jest.fn(),
  auth: {
    isLoggedIn: true
  }
};

const initialState = {
  auth: {
    isLoggedIn: false,
    incident: {},
    success: false,
    status: {},
    errors: {},
    message: ''
  }
};

const mockStore = configureMockStore([thunk]);
const store = mockStore(initialState);

const connectedWrapper = shallow(
  <Provider store={store}>
    <Router>
      <ConnectedAdminPage {...props} />
    </Router>
  </Provider>
);

const wrapper = shallow(<AdminPage {...props} />);

describe('<AdminPage/> rendering', () => {
  it('should render without crashing', () => {
    expect(connectedWrapper).toMatchSnapshot();
  });

  it('should update records on incident status update', () => {
    wrapper.setProps({ updateStatus: { success: true } });
    expect(wrapper.instance().props.viewRecords).toHaveBeenCalled();
  });

  it('should update incident with \'rejected\' status', () => {
    wrapper.setProps({
      incident: {
        data: [
          {
            id: '1',
            comment: 'hhshdhhd',
            title: 'DBJABD'
          }
        ]
      }
    });
    const updateIncidentButton = wrapper.find('DropdownItem').at(0);

    const spy = jest.spyOn(wrapper.instance(), 'handleSubmit');
    updateIncidentButton.simulate('click');
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalled();
  });

  it('should update incident with \'resolved\' status', () => {
    wrapper.setProps({
      incident: {
        data: [
          {
            id: '1',
            comment: 'hhshdhhd',
            title: 'DBJABD'
          }
        ]
      }
    });
    const updateIncidentButton = wrapper.find('DropdownItem').at(1);

    const spy = jest.spyOn(wrapper.instance(), 'handleSubmit');
    updateIncidentButton.simulate('click');
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalled();
  });

  it('should update incident with \'under-investigation\' status', () => {
    wrapper.setProps({
      incident: {
        data: [
          {
            id: '1',
            comment: 'hhshdhhd',
            title: 'DBJABD'
          }
        ]
      }
    });
    const updateIncidentButton = wrapper.find('DropdownItem').at(2);

    const spy = jest.spyOn(wrapper.instance(), 'handleSubmit');
    updateIncidentButton.simulate('click');
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalled();
  });
});
