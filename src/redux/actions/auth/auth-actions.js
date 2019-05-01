import * as types from "../action-types";

export const loginStart = () => ({
  type: types.LOGIN_START
});

export const loginSuccess = payload => ({
  type: types.LOGIN_SUCCESS,
  payload
});

export const loginFailure = payload => ({
  type: types.LOGIN_FAILURE,
  payload
});

export const registerStart = () => ({
  type: types.REGISTER_START
});

export const registerSuccess = payload => ({
  type: types.REGISTER_SUCCESS,
  payload
});

export const registerFailure = payload => ({
  type: types.REGISTER_FAILURE,
  payload
});

export const logoutAction = () => ({ type: types.LOGOUT });

export const clearErrorAction = () => ({
  type: types.CLEAR_AUTH_ERROR
});
