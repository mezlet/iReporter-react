import authReducer from './auth';
import * as types from '../../actions/action-types';

const initialState = {
  user: null,
  errors: {},
  isLoading: false,
  isLoggedIn: false,
  success: false
};

describe('AuthReducer', () => {
  const payload = {
    data: [
      {
        user: {
          email: 'helen@gmail.com',
          password: '12345678'
        }
      }
    ]
  };
  it('should return initial state', () => {
    expect(authReducer(initialState, {})).toEqual(initialState);
  });
  it('should handle Login Request', () => {
    expect(
      authReducer(initialState, {
        type: types.LOGIN_START
      })
    ).toEqual({
      ...initialState,
      isLoading: true
    });
  });

  it('should handle Login Success', () => {
    expect(
      authReducer(initialState, {
        type: types.LOGIN_SUCCESS,
        payload
      })
    ).toEqual({
      ...initialState,
      success: true,
      isLoggedIn: true,
      message: payload.message,
      user: {
        ...payload.data[0].user
      }
    });
  });
  it('should handle Login Failure', () => {
    expect(
      authReducer(initialState, {
        type: types.LOGIN_FAILURE,
        payload
      })
    ).toEqual({
      ...initialState,
      isLoading: false,
      errors: {
        ...payload
      }
    });
  });

  it('should handle register Request', () => {
    expect(
      authReducer(initialState, {
        type: types.REGISTER_START
      })
    ).toEqual({
      ...initialState,
      isLoading: true
    });
  });

  it('should handle register Success', () => {
    expect(
      authReducer(initialState, {
        type: types.REGISTER_SUCCESS,
        payload
      })
    ).toEqual({
      ...initialState,
      success: true,
      isLoggedIn: true,
      message: payload.message,
      user: {
        ...payload.data[0].user
      }
    });
  });
  it('should handle register Failure', () => {
    expect(
      authReducer(initialState, {
        type: types.REGISTER_FAILURE,
        payload
      })
    ).toEqual({
      ...initialState,
      isLoading: false,
      errors: {
        ...payload
      }
    });
  });
});
