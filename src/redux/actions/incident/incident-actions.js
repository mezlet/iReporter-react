import * as types from "../action-types";

export const createIncidentStart = () => ({
  type: types.CREATE_INCIDENT_START
});

export const createIncidentSuccess = payload => ({
  type: types.CREATE_INCIDENT_SUCCESS,
  payload
});

export const createIncidentFailure = payload => ({
  type: types.CREATE_INCIDENT_FAILURE,
  payload
});

export const getIncidentStart = () => ({
  type: types.GET_INCIDENT_START
});

export const getIncidentSuccess = payload => ({
  type: types.GET_INCIDENT_SUCCESS,
  payload
});

export const getIncidentFailure = payload => ({
  type: types.GET_INCIDENT_FAILURE,
  payload
});

export const updateIncidentStart = () => ({
  type: types.UPDATE_INCIDENT_START
});

export const updateIncidentSuccess = payload => ({
  type: types.UPDATE_INCIDENT_SUCCESS,
  payload
});

export const updateIncidentFailure = payload => ({
  type: types.UPDATE_INCIDENT_FAILURE,
  payload
});
export const deleteUserIncidentStart = () => ({
  type: types.DELETE_USER_INCIDENT_START
});

export const deleteUserIncidentSuccess = payload => ({
  type: types.DELETE_USER_INCIDENT_SUCCESS,
  payload
});

export const deleteUserIncidentFailure = payload => ({
  type: types.DELETE_USER_INCIDENT_FAILURE,
  payload
});
export const clearSuccess = () => ({
  type: types.CLEAR_SUCCESS
});
export const updateIncidentStatusStart = () => ({
  type: types.UPDATE_INCIDENT_STATUS_START
});

export const updateIncidentStatusSuccess = payload => ({
  type: types.UPDATE_INCIDENT_STATUS_SUCCESS,
  payload
});

export const updateIncidentStatusFailure = payload => ({
  type: types.UPDATE_INCIDENT_STATUS_FAILURE,
  payload
});
