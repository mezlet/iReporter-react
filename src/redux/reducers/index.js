import { combineReducers } from "redux";
import auth from "./auth/auth";
import incident from "./incident/incident";
import getIncident from "./incident/getIncident";
import updateIncident from "./incident/updateIncident";
import viewIncident from "./incidents/viewIncident";

export default combineReducers({
  auth,
  incident,
  getIncident,
  updateIncident,
  viewIncident
});
