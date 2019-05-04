import * as types from '../../actions/action-types';
import initialState from '../../../store/initialState';

const incidentReducer = (
  state = {
    ...initialState,
    incident: {}
  },
  action
) => {
  switch (action.type) {
    case types.DELETE_USER_INCIDENT_START:
      return {
        ...state,
        isLoading: true
      };
    case types.DELETE_USER_INCIDENT_SUCCESS:
      return {
        ...state,
        success: true,
        incident: {
          ...action.payload
        }
      };
    case types.DELETE_USER_INCIDENT_FAILURE:
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
