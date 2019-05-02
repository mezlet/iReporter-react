import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import { Input, Button } from 'semantic-ui-react';

import { SignUp } from './SignUp';

const props = {
  auth: {
    errors: {
      message: 'hello'
    },
    message: '',

    isLoading: false
  },
  clearErrorMessage: jest.fn(),
  signUp: jest.fn()
};

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  success: false,
  user: null,
  errors: {},
  message: ''
};

const mockStore = configureMockStore([thunk]);
const store = mockStore(initialState);

const wrapper = mount(
  <Provider store={store}>
    <Router>
      <SignUp {...props} />
    </Router>
  </Provider>
);

describe('<SignUp/> rendering', () => {
  it('should render without crashing', () => {
    expect(wrapper.find('.signup-container').exists()).toBe(true);
    expect(wrapper.find('.signup-form').exists()).toBe(true);
    expect(wrapper.find('.logform_btn').exists()).toBe(true);
    expect(wrapper.find('Form').exists()).toBe(true);
  });
  it('should render one <Button>', () => {
    const button = wrapper.find(Button);
    expect(button.exists()).toBe(true);
    expect(button.props().className).toBe('logform_btn');
  });

  it('should render one <Input>', () => {
    const input = wrapper.find(Input);
    expect(input.exists()).toBe(true);
    expect(input.at(0).props().type).toBe('text');
  });

  it('input changes are handled correctly', () => {
    const instance = wrapper.find('SignUp').instance();
    const event = {
      target: {
        name: 'email',
        value: 'test@example.com'
      }
    };
    const expectedState = {
      user: {
        firstname: '',
        lastname: '',
        othernames: '',
        email: 'test@example.com',
        phonenumber: '',
        password: 'password1',
        confirmPassword: '',
        username: ''
      },
      errors: {}
    };

    const EmailInput = wrapper.find('input').at(0);
    EmailInput.simulate('change', event);

    event.target.name = 'password';
    event.target.value = 'password1';

    const PasswordInput = wrapper.find('input').at(0);
    PasswordInput.simulate('change', event);

    expect(instance.state).toEqual(expectedState);
  });

  it('handles form submit correctly', () => {
    const SubmittedForm = wrapper.find('Form');
    const event = { preventDefault: jest.fn() };
    SubmittedForm.simulate('submit', event);
    expect(event.preventDefault).toHaveBeenCalled();
  });
});
