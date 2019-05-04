import * as types from '../../actions/action-types';
import initialState from '../../../store/initialState';

const updateIncidentReducer = (
  state = {
    ...initialState,
    incident: {}
  },
  action
) => {
  switch (action.type) {
    case types.UPDATE_INCIDENT_START:
      return {
        ...state,
        isLoading: true
      };
    case types.UPDATE_INCIDENT_SUCCESS:
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
    case types.UPDATE_INCIDENT_FAILURE:
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

export default updateIncidentReducer;
