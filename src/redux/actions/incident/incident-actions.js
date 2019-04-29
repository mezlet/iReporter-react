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
