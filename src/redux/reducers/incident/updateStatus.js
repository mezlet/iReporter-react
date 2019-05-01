import * as types from "../../actions/action-types";

const initialState = {
  isLoading: false,
  success: false,
  status: {},
  errors: {},
  message: ""
};

const updateStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_INCIDENT_STATUS_START:
      return {
        ...state,
        isLoading: true
      };
    case types.UPDATE_INCIDENT_STATUS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        success: true,
        incident: {
          ...action.payload
        },
        message: action.payload.message
      };
    case types.CLEAR_SUCCESS:
      return {
        ...state,
        success: false
      };
    case types.UPDATE_INCIDENT_STATUS_FAILURE:
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

export default updateStatusReducer;
