import React from 'react';
import { shallow } from 'enzyme';
import Routes from './Routes';

const wrapper = shallow(<Routes />);

describe('<Routes/> rendering', () => {
  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
