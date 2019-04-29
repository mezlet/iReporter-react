import { combineReducers } from "redux";
import auth from "./auth/auth";
import viewIncident from "./incidents/viewIncident";

export default combineReducers({
  auth,
  viewIncident
});
