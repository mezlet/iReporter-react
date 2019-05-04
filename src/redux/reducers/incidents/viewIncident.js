import * as types from '../../actions/action-types';
import initialState from '../../../store/initialState';

const viewIncidentReducer = (
  state = {
    ...initialState,
    data: [],
    isLoggedIn: false
  },
  action
) => {
  switch (action.type) {
    case types.VIEWINCIDENT_START:
    case types.VIEW_REDFLAG_START:
    case types.VIEW_INTERVENTION_START:
    case types.VIEW_USER_INCIDENT_START:
      return {
        ...state,
        isLoading: true
      };
    case types.VIEWINCIDENT_SUCCESS:
    case types.VIEW_REDFLAG_SUCCESS:
    case types.VIEW_INTERVENTION_SUCCESS:
    case types.VIEW_USER_INCIDENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        message: action.payload.message,
        data: [...action.payload]
      };
    case types.VIEWINCIDENT_FAILURE:
    case types.VIEW_REDFLAG_FAILURE:
    case types.VIEW_INTERVENTION_FAILURE:
    case types.VIEW_USER_INCIDENT_FAILURE:
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
