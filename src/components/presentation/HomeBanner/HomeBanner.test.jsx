import React from 'react';
import { shallow } from 'enzyme';
import HomeBanner from './HomeBanner';

const wrapper = shallow(<HomeBanner />);

describe('<HomeBanner/> rendering', () => {
  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
