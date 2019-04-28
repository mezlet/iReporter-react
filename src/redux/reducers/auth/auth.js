import * as types from "../../actions/action-types";

const initialState = {
  isLoading: false,
  isAdmin: false,
  isLoggedIn: false,
  success: false,
  user: null,
  errors: {},
  message: ""
};

const authReducer = (state = initialState, action) => {
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
        errors: {
          ...action.payload
        }
      };

    default:
      return state;
  }
};

export default authReducer;
