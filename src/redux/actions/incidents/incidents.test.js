import configMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
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
  it('should create an action for view all incident request', () => {
    const expectedAction = {
      type: types.VIEWINCIDENT_START
    };
    expect(actions.viewIncidentStart()).toEqual(expectedAction);
  });

  it('should create an action for view all incident Success', () => {
    const expectedAction = {
      type: types.VIEWINCIDENT_SUCCESS,
      payload
    };
    expect(actions.viewIncidentSuccess(payload)).toEqual(expectedAction);
  });

  it('should create an action for view incident Failure', () => {
    const expectedAction = {
      type: types.VIEWINCIDENT_FAILURE,
      payload
    };
    expect(actions.viewIncidentFailure(payload)).toEqual(expectedAction);
  });

  it('should create an action for view redflag incident request', () => {
    const expectedAction = {
      type: types.VIEW_REDFLAG_START
    };
    expect(actions.viewRedFlagStart()).toEqual(expectedAction);
  });

  it('should create an action for view redflag incident Success', () => {
    const expectedAction = {
      type: types.VIEW_REDFLAG_SUCCESS,
      payload
    };
    expect(actions.viewRedFlagSuccess(payload)).toEqual(expectedAction);
  });

  it('should create an action for view redflag incident Failure', () => {
    const expectedAction = {
      type: types.VIEW_REDFLAG_FAILURE,
      payload
    };
    expect(actions.viewRedFlagFailure(payload)).toEqual(expectedAction);
  });

  it('should create an action for view intervention incident request', () => {
    const expectedAction = {
      type: types.VIEW_INTERVENTION_START
    };
    expect(actions.viewInterventionStart()).toEqual(expectedAction);
  });

  it('should create an action for  view intervention  incident Success', () => {
    const expectedAction = {
      type: types.VIEW_INTERVENTION_SUCCESS,
      payload
    };
    expect(actions.viewInterventionSuccess(payload)).toEqual(expectedAction);
  });

  it('should create an action for view intervention incident Failure', () => {
    const expectedAction = {
      type: types.VIEW_INTERVENTION_FAILURE,
      payload
    };
    expect(actions.viewInterventionFailure(payload)).toEqual(expectedAction);
  });

  it('should create an action to view user incident request', () => {
    const expectedAction = {
      type: types.VIEW_USER_INCIDENT_START
    };
    expect(actions.viewUserIncidentStart()).toEqual(expectedAction);
  });

  it('should create an action to view user delete incident Success', () => {
    const expectedAction = {
      type: types.VIEW_USER_INCIDENT_SUCCESS,
      payload
    };
    expect(actions.viewUserIncidentSuccess(payload)).toEqual(expectedAction);
  });

  it('should create an action to view user incident Failure', () => {
    const expectedAction = {
      type: types.VIEW_USER_INCIDENT_FAILURE,
      payload
    };
    expect(actions.viewUserIncidentFailure(payload)).toEqual(expectedAction);
  });

  it('should create an action for update status request', () => {
    const expectedAction = {
      type: types.GET_USER_PROFILE_START
    };
    expect(actions.getProfileStart()).toEqual(expectedAction);
  });

  it('should create an action to user profile Success', () => {
    const expectedAction = {
      type: types.GET_USER_PROFILE_SUCCESS,
      payload
    };
    expect(actions.getProfileSuccess(payload)).toEqual(expectedAction);
  });

  it('should create an action to user profile Failure', () => {
    const expectedAction = {
      type: types.GET_USER_PROFILE_FAILURE,
      payload
    };
    expect(actions.getProfileFailure(payload)).toEqual(expectedAction);
  });
});

describe('async', () => {
  it('should handle view success', async () => {
    const store = mockStore({});
    const expectedActions = [
      { type: types.VIEWINCIDENT_START },
      {
        type: types.VIEWINCIDENT_SUCCESS,
        payload: mockData.data.data
      }
    ];
    await axios.get.mockResolvedValue(mockData);
    return store
      .dispatch(dispatcher.viewAllIncident({ incident: {} }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should handle createIncident failure', async () => {
    const store = mockStore({});
    const expectedActions = [
      { type: types.VIEWINCIDENT_START },
      {
        type: types.VIEWINCIDENT_FAILURE,
        payload: mockData2.errors
      }
    ];
    await axios.get.mockRejectedValue(mockData2.errors);
    return store
      .dispatch(dispatcher.viewAllIncident({ incident: {} }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it('should handle getIncident success', async () => {
    const store = mockStore({});
    const expectedActions = [
      { type: types.VIEW_REDFLAG_START },
      {
        type: types.VIEW_REDFLAG_SUCCESS,
        payload: mockData.data.data
      }
    ];
    await axios.get.mockResolvedValue(mockData);
    return store.dispatch(dispatcher.viewRedFlag({ incident: {} })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should handle getIncident failure', async () => {
    const store = mockStore({});
    const expectedActions = [
      { type: types.VIEW_REDFLAG_START },
      {
        type: types.VIEW_REDFLAG_FAILURE,
        payload: mockData2.errors
      }
    ];
    await axios.get.mockRejectedValue(mockData2.errors);
    return store.dispatch(dispatcher.viewRedFlag({ incident: {} })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('should handle updateIncident success', async () => {
    const store = mockStore({});
    const expectedActions = [
      { type: types.VIEW_INTERVENTION_START },
      {
        type: types.VIEW_INTERVENTION_SUCCESS,
        payload: mockData.data.data
      }
    ];
    await axios.get.mockResolvedValue(mockData);
    return store
      .dispatch(dispatcher.viewIntervention({ incident: {} }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it('should handle updateIncident failure', async () => {
    const store = mockStore({});
    const expectedActions = [
      { type: types.VIEW_USER_INCIDENT_START },
      {
        type: types.VIEW_USER_INCIDENT_FAILURE,
        payload: mockData2.errors
      }
    ];
    await axios.get.mockRejectedValue(mockData2.errors);
    return store
      .dispatch(dispatcher.viewUserIncident({ incident: {} }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it('should handle deleteIncident success', async () => {
    const store = mockStore({});
    const expectedActions = [
      { type: types.GET_USER_PROFILE_START },
      {
        type: types.GET_USER_PROFILE_SUCCESS,
        payload: mockData.data.data
      }
    ];
    await axios.get.mockResolvedValue(mockData);
    return store
      .dispatch(dispatcher.getUserProfile({ incident: {} }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it('should handle deleteIncident failure', async () => {
    const store = mockStore({});
    const expectedActions = [
      { type: types.GET_USER_PROFILE_START },
      {
        type: types.GET_USER_PROFILE_FAILURE,
        payload: mockData2.errors
      }
    ];
    await axios.get.mockRejectedValue(mockData2.errors);
    return store
      .dispatch(dispatcher.getUserProfile({ incident: {} }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
