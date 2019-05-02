import * as types from '../../actions/action-types';

const initialState = {
  isLoading: false,
  success: false,
  incident: {},
  errors: {},
  message: ''
};

const incidentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_INCIDENT_START:
      return {
        ...state,
        isLoading: true
      };
    case types.CREATE_INCIDENT_SUCCESS:
      return {
        ...state,
        success: true,
        incident: {
          ...action.payload.incident
        },
        message: action.payload.message
      };
    case types.CREATE_INCIDENT_FAILURE:
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

export default incidentReducer;
