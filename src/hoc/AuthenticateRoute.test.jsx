import React from 'react';
import { shallow } from 'enzyme';
import AuthenticateRoute from './AuthenticateRoute';

const wrapper = shallow(<AuthenticateRoute />);

describe('<Home/> rendering', () => {
  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
