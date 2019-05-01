import axios from "axios";
import * as actions from "./incident-actions";
import { getFormData } from "../../../helpers/helpers";

const baseUrl = `${process.env.API_BASE_URL}/incident`;

export const createIncident = data => async dispatch => {
  const incidentData = getFormData(data);
  dispatch(actions.createIncidentStart());
  try {
    const res = await axios.post(`${baseUrl}`, incidentData, {
      headers: { "x-access-token": localStorage.getItem("token") }
    });

    dispatch(actions.createIncidentSuccess(res.data.data[0]));
  } catch (errors) {
    dispatch(actions.createIncidentFailure(errors));
  }
};

export const getIncident = data => async dispatch => {
  const id = data;
  dispatch(actions.getIncidentStart());
  try {
    const res = await axios.get(`${baseUrl}/${id}`, {
      headers: { "x-access-token": localStorage.getItem("token") }
    });
    dispatch(actions.getIncidentSuccess(res.data.data));
    dispatch(actions.clearSuccess());
  } catch (errors) {
    dispatch(actions.getIncidentFailure(errors));
  }
};

export const updateIncident = data => async dispatch => {
  const incidentData = getFormData(data);

  dispatch(actions.updateIncidentStart());
  try {
    const res = await axios.put(`${baseUrl}/${data.id}`, incidentData, {
      headers: { "x-access-token": localStorage.getItem("token") }
    });
    dispatch(actions.updateIncidentSuccess(res.data.data));
  } catch (errors) {
    dispatch(actions.updateIncidentFailure(errors));
  }
};
export const deleteUserIncident = data => async dispatch => {
  const id = data;

  dispatch(actions.deleteUserIncidentStart());
  try {
    const res = await axios.delete(`${baseUrl}/${id}`, {
      headers: { "x-access-token": localStorage.getItem("token") }
    });
    dispatch(actions.deleteUserIncidentSuccess(res.data));
  } catch (errors) {
    dispatch(actions.deleteUserIncidentFailure(errors));
  }
};

export const updateStatusAction = data => async dispatch => {
  const { id, newstatus } = data;

  dispatch(actions.updateIncidentStatusStart());
  try {
    const res = await axios.put(`${baseUrl}/${id}/status`, newstatus, {
      headers: { "x-access-token": localStorage.getItem("token") }
    });
    dispatch(actions.updateIncidentStatusSuccess(res.data));
    dispatch(actions.clearSuccess());
  } catch (errors) {
    dispatch(actions.updateIncidentStatusFailure(errors));
  }
};
