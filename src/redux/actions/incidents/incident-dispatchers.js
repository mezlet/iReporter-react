import axios from 'axios';
import * as actions from './incident-actions';

const baseUrl = `${process.env.API_BASE_URL}`;

export const viewAllIncident = () => async dispatch => {
  dispatch(actions.viewIncidentStart());
  try {
    const res = await axios.get(`${baseUrl}/incident`, {
      headers: { 'x-access-token': localStorage.getItem('token') }
    });
    dispatch(actions.viewIncidentSuccess(res.data.data));
  } catch (errors) {
    dispatch(actions.viewIncidentFailure(errors));
  }
};

export const viewRedFlag = () => async dispatch => {
  dispatch(actions.viewIncidentStart());
  try {
    const res = await axios.get(`${baseUrl}/redflag`, {
      headers: { 'x-access-token': localStorage.getItem('token') }
    });
    dispatch(actions.viewIncidentSuccess(res.data.data));
  } catch (errors) {
    dispatch(actions.viewIncidentFailure(errors));
  }
};

export const viewIntervention = () => async dispatch => {
  dispatch(actions.viewInterventionStart());
  try {
    const res = await axios.get(`${baseUrl}/intervention`, {
      headers: { 'x-access-token': localStorage.getItem('token') }
    });
    dispatch(actions.viewInterventionSuccess(res.data.data));
  } catch (errors) {
    dispatch(actions.viewInterventionFailure(errors));
  }
};

export const viewUserIncident = () => async dispatch => {
  dispatch(actions.viewUserIncidentStart());
  try {
    const res = await axios.get(`${baseUrl}/incident/me`, {
      headers: { 'x-access-token': localStorage.getItem('token') }
    });
    dispatch(actions.viewUserIncidentSuccess(res.data.data));
  } catch (errors) {
    dispatch(actions.viewUserIncidentFailure(errors));
  }
};

export const getUserProfile = () => async dispatch => {
  dispatch(actions.getProfileStart());
  try {
    const res = await axios.get(`${baseUrl}/profile`, {
      headers: { 'x-access-token': localStorage.getItem('token') }
    });
    dispatch(actions.getProfileSuccess(res.data.data));
  } catch (errors) {
    dispatch(actions.getProfileFailure(errors));
  }
};
