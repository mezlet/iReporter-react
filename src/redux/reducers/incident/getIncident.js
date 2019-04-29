import * as types from "../../actions/action-types";

const initialState = {
  isLoading: false,
  success: false,
  incident: {},
  errors: {},
  message: ""
};

const getIncidentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_INCIDENT_START:
      return {
        ...state,
        isLoading: true,
        success: false
      };
    case types.GET_INCIDENT_SUCCESS:
      return {
        ...state,
        success: true,
        isLoading: false,
        incident: {
          ...action.payload
        },
        message: action.payload.message
      };
    case types.GET_INCIDENT_FAILURE:
      return {
        ...state,
        errors: {
          ...action.payload
        }
      };

    default:
      return state;
  }
};

export default getIncidentReducer;
