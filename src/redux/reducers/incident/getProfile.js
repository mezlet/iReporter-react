import * as types from '../../actions/action-types';

import initialState from '../../../store/initialState';

const getProfileReducer = (
  state = {
    ...initialState,
    data: {}
  },
  action
) => {
  switch (action.type) {
    case types.GET_USER_PROFILE_START:
      return {
        ...state,
        isLoading: true,
        success: false
      };
    case types.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        success: true,
        isLoading: false,
        data: {
          ...action.payload
        },
        message: action.payload.message
      };
    case types.GET_USER_PROFILE_FAILURE:
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

export default getProfileReducer;
