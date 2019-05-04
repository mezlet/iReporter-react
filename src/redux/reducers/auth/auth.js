import * as types from '../../actions/action-types';
import initialState from '../../../store/initialState';

const authReducer = (
  state = {
    ...initialState,
    isLoggedIn: false,
    user: null
  },
  action
) => {
  switch (action.type) {
    case types.LOGIN_START:
    case types.REGISTER_START:
      return {
        ...state,
        isLoading: true
      };
    case types.LOGIN_SUCCESS:
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        isLoggedIn: true,
        message: action.payload.message,
        user: {
          ...action.payload.data[0].user
        }
      };
    case types.LOGIN_FAILURE:
    case types.REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: {
          ...action.payload
        }
      };

    case types.LOGOUT:
      return {
        ...initialState
      };
    case types.CLEAR_AUTH_ERROR:
      return { ...state, errors: {}, message: '' };

    default:
      return state;
  }
};

export default authReducer;
