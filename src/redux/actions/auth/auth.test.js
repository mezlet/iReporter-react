import configMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import dotenv from 'dotenv';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as types from '../action-types';
import * as actions from './auth-actions';
import * as dispatcher from './auth-dispatchers';

dotenv.config();

jest.mock('axios');
const mockStore = configMockStore([thunk]);
configure({ adapter: new Adapter() });

const payload = {
  user: {
    email: 'helen@gmail.com',
    password: '12345678'
  }
};
const mockData = {
  data: {
    data: [
      {
        user: {
          name: 'test',
          email: 'something',
          token: 'gvhbjnklmknjbh'
        }
      }
    ],
    message: 'Login success'
  }
};

const mockData2 = {
  errors: {
    response: {
      data: {
        errors: {
          message: ['Network Error']
        }
      }
    }
  }
};

describe('actions', () => {
  it('should create an action for Login request', () => {
    const expectedAction = {
      type: types.LOGIN_START
    };
    expect(actions.loginStart()).toEqual(expectedAction);
  });

  it('should create an action for Login Success', () => {
    const expectedAction = {
      type: types.LOGIN_SUCCESS,
      payload
    };
    expect(actions.loginSuccess(payload)).toEqual(expectedAction);
  });

  it('should create an action for Login Failure', () => {
    const expectedAction = {
      type: types.LOGIN_FAILURE,
      payload
    };
    expect(actions.loginFailure(payload)).toEqual(expectedAction);
  });

  it('should create an action for Register request', () => {
    const expectedAction = {
      type: types.REGISTER_START
    };
    expect(actions.registerStart()).toEqual(expectedAction);
  });

  it('should create an action for Register Success', () => {
    const expectedAction = {
      type: types.REGISTER_SUCCESS,
      payload
    };
    expect(actions.registerSuccess(payload)).toEqual(expectedAction);
  });

  it('should create an action for Register Failure', () => {
    const expectedAction = {
      type: types.REGISTER_FAILURE,
      payload
    };
    expect(actions.registerFailure(payload)).toEqual(expectedAction);
  });

  it('should create an action for logout', () => {
    const expectedAction = {
      type: types.LOGOUT
    };
    expect(actions.logoutAction()).toEqual(expectedAction);
  });

  it('should create an action for clear error', () => {
    const expectedAction = {
      type: types.CLEAR_AUTH_ERROR
    };
    expect(actions.clearErrorAction()).toEqual(expectedAction);
  });
});

describe('async', () => {
  it('should handle login success', async () => {
    const store = mockStore({});
    const expectedActions = [
      { type: types.LOGIN_START },
      {
        type: types.LOGIN_SUCCESS,
        payload: mockData.data
      }
    ];
    await axios.post.mockResolvedValue(mockData);
    return store
      .dispatch(
        dispatcher.loginUser({ email: 'blabal', password: 'dfghjknbvvb' })
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should handle register success', async () => {
    const store = mockStore({});
    const expectedActions = [
      { type: types.REGISTER_START },
      {
        type: types.REGISTER_SUCCESS,
        payload: {
          ...mockData.data,
          message: 'Signup success'
        }
      }
    ];
    await axios.post.mockResolvedValue({
      data: { ...mockData.data, message: 'Signup success' }
    });
    return store
      .dispatch(
        dispatcher.registerUser({ email: 'sm@gmail', password: 'dfghjknbvvb' })
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should handle login failure', async () => {
    const store = mockStore({});
    const expectedActions = [
      { type: types.LOGIN_START },
      {
        type: types.LOGIN_FAILURE,
        payload: mockData2.errors.response.data
      }
    ];
    await axios.post.mockRejectedValue(mockData2.errors);
    return store.dispatch(dispatcher.loginUser({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should handle register failure', async () => {
    const store = mockStore({});
    const expectedActions = [
      { type: types.REGISTER_START },
      {
        type: types.REGISTER_FAILURE,
        payload: mockData2.errors.response.data
      }
    ];
    await axios.post.mockRejectedValue(mockData2.errors);
    return store.dispatch(dispatcher.registerUser({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should handle login failure', async () => {
    const store = mockStore({});
    const expectedActions = [
      { type: types.LOGIN_START },
      {
        type: types.LOGIN_FAILURE,
        payload: mockData2.errors.response.data
      }
    ];
    await axios.post.mockRejectedValue(mockData2.errors);

    return store.dispatch(dispatcher.loginUser({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should handle logout success', async () => {
    const store = mockStore({});
    const expectedActions = [{ type: types.LOGOUT }];
    store.dispatch(dispatcher.logoutUser({}));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
