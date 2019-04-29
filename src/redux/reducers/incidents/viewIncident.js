import * as types from "../../actions/action-types";

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  success: false,
  data: null,
  errors: {},
  message: ""
};

const viewIncidentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.VIEWINCIDENT_START:
      return {
        ...state,
        isLoading: true
      };
    case types.VIEWINCIDENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        message: action.payload.message,
        data: {
          ...action.payload
        }
      };
    case types.VIEWINCIDENT_FAILURE:
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

export default viewIncidentReducer;
