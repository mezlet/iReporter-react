import * as types from '../action-types';

export const viewIncidentStart = () => ({
  type: types.VIEWINCIDENT_START
});

export const viewIncidentSuccess = payload => ({
  type: types.VIEWINCIDENT_SUCCESS,
  payload
});

export const viewIncidentFailure = payload => ({
  type: types.VIEWINCIDENT_FAILURE,
  payload
});

export const viewRedFlagStart = () => ({
  type: types.VIEW_REDFLAG_START
});

export const viewRedFlagSuccess = payload => ({
  type: types.VIEW_REDFLAG_SUCCESS,
  payload
});

export const viewRedFlagFailure = payload => ({
  type: types.VIEW_REDFLAG_FAILURE,
  payload
});
export const viewInterventionStart = () => ({
  type: types.VIEW_INTERVENTION_START
});

export const viewInterventionSuccess = payload => ({
  type: types.VIEW_INTERVENTION_SUCCESS,
  payload
});

export const viewInterventionFailure = payload => ({
  type: types.VIEW_INTERVENTION_FAILURE,
  payload
});
export const viewUserIncidentStart = () => ({
  type: types.VIEW_USER_INCIDENT_START
});

export const viewUserIncidentSuccess = payload => ({
  type: types.VIEW_USER_INCIDENT_SUCCESS,
  payload
});

export const viewUserIncidentFailure = payload => ({
  type: types.VIEW_USER_INCIDENT_FAILURE,
  payload
});
export const getProfileStart = () => ({
  type: types.GET_USER_PROFILE_START
});

export const getProfileSuccess = payload => ({
  type: types.GET_USER_PROFILE_SUCCESS,
  payload
});

export const getProfileFailure = payload => ({
  type: types.GET_USER_PROFILE_FAILURE,
  payload
});
