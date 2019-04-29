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