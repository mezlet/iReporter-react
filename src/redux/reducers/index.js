import { combineReducers } from "redux";
import auth from "./auth/auth";
import incident from "./incident/incident";
import getIncident from "./incident/getIncident";
import updateIncident from "./incident/updateIncident";
import deleteIncident from "./incident/deleteIncident";
import viewIncident from "./incidents/viewIncident";
import updateStatus from "./incident/updateStatus";

export default combineReducers({
  auth,
  incident,
  getIncident,
  updateIncident,
  viewIncident,
  deleteIncident,
  updateStatus
});
