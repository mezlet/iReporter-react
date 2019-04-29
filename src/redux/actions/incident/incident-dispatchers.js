import axios from "axios";
import * as actions from "./incident-actions";
import { getFormData } from "../../../helpers/helpers";

const baseUrl = "http://localhost:8800/api/v1";

export const createIncident = data => async dispatch => {
  const incidentData = getFormData(data);
  dispatch(actions.createIncidentStart());
  try {
    const res = await axios.post(`${baseUrl}/incident`, incidentData, {
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
    const res = await axios.get(`${baseUrl}/incident/${id}`, {
      headers: { "x-access-token": localStorage.getItem("token") }
    });
    dispatch(actions.getIncidentSuccess(res.data.data));
  } catch (errors) {
    dispatch(actions.getIncidentFailure(errors));
  }
};

export const updateIncident = (data, id) => async dispatch => {
  const incidentData = getFormData(data);

  dispatch(actions.updateIncidentStart());
  try {
    const res = await axios.put(`${baseUrl}/incident/${id}`, incidentData, {
      headers: { "x-access-token": localStorage.getItem("token") }
    });
    dispatch(actions.updateIncidentSuccess(res.data.data));
  } catch (errors) {
    dispatch(actions.updateIncidentFailure(errors));
  }
};
