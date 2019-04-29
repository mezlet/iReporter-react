import * as types from "../action-types";

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
  type: types.VIEW_RED_FLAG_START
});

export const viewRedFlagSuccess = payload => ({
  type: types.VIEW_RED_FLAG_SUCCESS,
  payload
});

export const viewRedFlagFailure = payload => ({
  type: types.VIEW_RED_FLAG_FAILURE,
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
