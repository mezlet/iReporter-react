import React from 'react';
import { shallow } from 'enzyme';
import PageNotFound from './PageNotFound';

const wrapper = shallow(<PageNotFound />);

describe('<Footer/> rendering', () => {
  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
