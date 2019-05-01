import configMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
// import moxios from "moxios";
import dotenv from 'dotenv';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as types from '../action-types';
import * as actions from './incident-actions';
import * as dispatcher from './incident-dispatchers';

dotenv.config();

jest.mock('axios');
const mockStore = configMockStore([thunk]);
configure({ adapter: new Adapter() });

const payload = {
  user: {
    email: 'helen@gmail.com',
    password: '12345678'
  }
};
const mockData = {
  data: {
    data: [
      {
        incident: [
          { title: 'test', type: 'something', comment: 'gvhbjnklmknjbh' }
        ]
      }
    ]
  }
};

const mockData2 = {
  errors: {
    response: {
      data: {
        errors: {}
      }
    }
  }
};

describe('actions', () => {
  it('should create an action for create incident request', () => {
    const expectedAction = {
      type: types.CREATE_INCIDENT_START
    };
    expect(actions.createIncidentStart()).toEqual(expectedAction);
  });

  it('should create an action for create incident Success', () => {
    const expectedAction = {
      type: types.CREATE_INCIDENT_SUCCESS,
      payload
    };
    expect(actions.createIncidentSuccess(payload)).toEqual(expectedAction);
  });

  it('should create an action for create incident Failure', () => {
    const expectedAction = {
      type: types.CREATE_INCIDENT_FAILURE,
      payload
    };
    expect(actions.createIncidentFailure(payload)).toEqual(expectedAction);
  });

  it('should create an action for get incident request', () => {
    const expectedAction = {
      type: types.GET_INCIDENT_START
    };
    expect(actions.getIncidentStart()).toEqual(expectedAction);
  });

  it('should create an action for get incident Success', () => {
    const expectedAction = {
      type: types.GET_INCIDENT_SUCCESS,
      payload
    };
    expect(actions.getIncidentSuccess(payload)).toEqual(expectedAction);
  });

  it('should create an action for get incident Failure', () => {
    const expectedAction = {
      type: types.GET_INCIDENT_FAILURE,
      payload
    };
    expect(actions.getIncidentFailure(payload)).toEqual(expectedAction);
  });

  it('should create an action for update incident request', () => {
    const expectedAction = {
      type: types.UPDATE_INCIDENT_START
    };
    expect(actions.updateIncidentStart()).toEqual(expectedAction);
  });

  it('should create an action for  update incident Success', () => {
    const expectedAction = {
      type: types.UPDATE_INCIDENT_SUCCESS,
      payload
    };
    expect(actions.updateIncidentSuccess(payload)).toEqual(expectedAction);
  });

  it('should create an action for update incident Failure', () => {
    const expectedAction = {
      type: types.UPDATE_INCIDENT_FAILURE,
      payload
    };
    expect(actions.updateIncidentFailure(payload)).toEqual(expectedAction);
  });

  it('should create an action for delete incident request', () => {
    const expectedAction = {
      type: types.DELETE_USER_INCIDENT_START
    };
    expect(actions.deleteUserIncidentStart()).toEqual(expectedAction);
  });

  it('should create an action for  delete incident Success', () => {
    const expectedAction = {
      type: types.DELETE_USER_INCIDENT_SUCCESS,
      payload
    };
    expect(actions.deleteUserIncidentSuccess(payload)).toEqual(expectedAction);
  });

  it('should create an action for delete incident Failure', () => {
    const expectedAction = {
      type: types.DELETE_USER_INCIDENT_FAILURE,
      payload
    };
    expect(actions.deleteUserIncidentFailure(payload)).toEqual(expectedAction);
  });

  it('should create an action for update status request', () => {
    const expectedAction = {
      type: types.UPDATE_INCIDENT_STATUS_START
    };
    expect(actions.updateIncidentStatusStart()).toEqual(expectedAction);
  });

  it('should create an action for  update status Success', () => {
    const expectedAction = {
      type: types.UPDATE_INCIDENT_STATUS_SUCCESS,
      payload
    };
    expect(actions.updateIncidentStatusSuccess(payload)).toEqual(
      expectedAction
    );
  });

  it('should create an action for update status Failure', () => {
    const expectedAction = {
      type: types.UPDATE_INCIDENT_STATUS_FAILURE,
      payload
    };
    expect(actions.updateIncidentStatusFailure(payload)).toEqual(
      expectedAction
    );
  });

  it('should create an action for clear success', () => {
    const expectedAction = {
      type: types.CLEAR_SUCCESS
    };
    expect(actions.clearSuccess()).toEqual(expectedAction);
  });
});

describe('async', () => {
  it('should handle createIncident success', async () => {
    const store = mockStore({});
    const expectedActions = [
      { type: types.CREATE_INCIDENT_START },
      {
        type: types.CREATE_INCIDENT_SUCCESS,
        payload: mockData.data.data[0]
      }
    ];
    await axios.post.mockResolvedValue(mockData);
    return store
      .dispatch(dispatcher.createIncident({ incident: {} }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should handle createIncident failure', async () => {
    const store = mockStore({});
    const expectedActions = [
      { type: types.CREATE_INCIDENT_START },
      {
        type: types.CREATE_INCIDENT_FAILURE,
        payload: mockData2.errors
      }
    ];
    await axios.post.mockRejectedValue(mockData2.errors);
    return store
      .dispatch(dispatcher.createIncident({ incident: {} }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
