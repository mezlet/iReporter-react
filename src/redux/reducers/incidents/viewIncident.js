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
    case types.VIEW_REDFLAG_START:
    case types.VIEW_INTERVENTION_START:
      return {
        ...state,
        isLoading: true
      };
    case types.VIEWINCIDENT_SUCCESS:
    case types.VIEW_REDFLAG_SUCCESS:
    case types.VIEW_INTERVENTION_SUCCESS:
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
    case types.VIEW_REDFLAG_FAILURE:
    case types.VIEW_INTERVENTION_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: {
          ...action.payload
        }
      };

    default:
      return state;
  }
};

export default viewIncidentReducer;
