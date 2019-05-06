import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

const wrapper = shallow(<Home />);

describe('<Home/> rendering', () => {
  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
