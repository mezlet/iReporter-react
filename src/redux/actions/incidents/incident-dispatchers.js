import axios from "axios";
import * as actions from "./incident-actions";

const baseUrl = "http://localhost:8800/api/v1";

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

export const viewAllIncident = () => async dispatch => {
  dispatch(actions.viewIncidentStart());
  try {
    const res = await axios.get(`${baseUrl}/incident`, {
      headers: { "x-access-token": localStorage.getItem("token") }
    });
    dispatch(actions.viewIncidentSuccess(res.data.data));
  } catch (errors) {
    dispatch(actions.viewIncidentFailure(errors));
  }
};
