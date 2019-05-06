import deleteIncident from './deleteIncident';
import getIncident from './getIncident';
import getProfile from './getProfile';
import updateIncident from './updateIncident';
import updateStatus from './updateStatus';

import * as types from '../../actions/action-types';
import initialState from '../../../store/initialState';

const state = {
  ...initialState,
  incident: {}
};

describe('Incident', () => {
  const payload = {
    data: [
      {
        user: {
          email: 'helen@gmail.com',
          password: '12345678'
        }
      }
    ],
    message: ''
  };
  it('should return initial state', () => {
    expect(deleteIncident(state, {})).toEqual(state);
  });
  it('should handle delete Request', () => {
    expect(
      deleteIncident(state, {
        type: types.DELETE_USER_INCIDENT_START
      })
    ).toEqual({
      ...state,
      isLoading: true
    });
  });

  it('should handle delete Success', () => {
    expect(
      deleteIncident(state, {
        type: types.DELETE_USER_INCIDENT_SUCCESS,
        payload
      })
    ).toEqual({
      ...state,
      success: true,
      isLoading: false,
      incident: {
        data: [
          {
            user: {
              ...payload.data[0].user
            }
          }
        ],
        message: payload.message
      }
    });
  });
  it('should handle delete Failure', () => {
    expect(
      deleteIncident(state, {
        type: types.DELETE_USER_INCIDENT_FAILURE,
        payload
      })
    ).toEqual({
      ...state,
      isLoading: false,
      success: false,
      message: '',
      errors: {
        ...payload
      }
    });
  });
  it('should handle getIncident Request', () => {
    expect(
      getIncident(state, {
        type: types.GET_INCIDENT_START
      })
    ).toEqual({
      ...state,
      isLoading: true
    });
  });

  it('should handle getIncident Success', () => {
    expect(
      getIncident(state, {
        type: types.GET_INCIDENT_SUCCESS,
        payload
      })
    ).toEqual({
      ...state,
      success: true,
      isLoading: false,
      incident: {
        data: [
          {
            user: {
              ...payload.data[0].user
            }
          }
        ],
        message: payload.message
      }
    });
  });
  it('should handle getIncident Failure', () => {
    expect(
      getIncident(state, {
        type: types.GET_INCIDENT_FAILURE,
        payload
      })
    ).toEqual({
      ...state,
      isLoading: false,
      success: false,
      message: '',
      errors: {
        ...payload
      }
    });
  });
  it('should handle get profile Request', () => {
    expect(
      getProfile(state, {
        type: types.GET_USER_PROFILE_START
      })
    ).toEqual({
      ...state,
      isLoading: true
    });
  });

  it('should handle get profile Success', () => {
    expect(
      getProfile(state, {
        type: types.GET_USER_PROFILE_SUCCESS,
        payload
      })
    ).toEqual({
      ...state,
      success: true,
      isLoading: false,

      data: {
        ...payload
      },
      message: payload.message
    });
  });
  it('should handle get profile Failure', () => {
    expect(
      getProfile(state, {
        type: types.GET_USER_PROFILE_FAILURE,
        payload
      })
    ).toEqual({
      ...state,
      isLoading: false,
      success: false,
      message: '',
      errors: {
        ...payload
      }
    });
  });

  it('should handle update incident Request', () => {
    expect(
      updateIncident(state, {
        type: types.UPDATE_INCIDENT_START
      })
    ).toEqual({
      ...state,
      isLoading: true
    });
  });

  it('should handle update incident Success', () => {
    expect(
      updateIncident(state, {
        type: types.UPDATE_INCIDENT_SUCCESS,
        payload
      })
    ).toEqual({
      ...state,
      success: true,
      isLoading: false,

      incident: {
        ...payload
      },
      message: payload.message
    });
  });
  it('should handle get incident Failure', () => {
    expect(
      updateIncident(state, {
        type: types.UPDATE_INCIDENT_FAILURE,
        payload
      })
    ).toEqual({
      ...state,
      isLoading: false,
      success: false,
      message: '',
      errors: {
        ...payload
      }
    });
  });

  it('should handle update incident status Request', () => {
    expect(
      updateStatus(state, {
        type: types.UPDATE_INCIDENT_STATUS_START
      })
    ).toEqual({
      ...state,
      isLoading: true
    });
  });

  it('should handle update incident Success', () => {
    expect(
      updateStatus(state, {
        type: types.UPDATE_INCIDENT_STATUS_SUCCESS,
        payload
      })
    ).toEqual({
      ...state,
      success: true,
      isLoading: false,

      incident: {
        ...payload
      }
    });
  });
  it('should handle get incident Failure', () => {
    expect(
      updateStatus(state, {
        type: types.UPDATE_INCIDENT_STATUS_FAILURE,
        payload
      })
    ).toEqual({
      ...state,
      isLoading: false,
      success: false,
      errors: {
        ...payload
      }
    });
  });
});
