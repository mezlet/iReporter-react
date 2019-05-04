/* eslint-disable no-unused-vars */
import React from 'react';
import { mount } from 'enzyme';
import IncidentForm from './IncidentForm';

const props = {
  createRecord: jest.fn(),
  updateRecord: jest.fn(),
  incident: {
    incident: {
      id: 1,
      type: 'sometext',
      title: 'anothertxt',
      location: 'here',
      createdon: 12343422222
    }
  }
};

const wrapper = mount(<IncidentForm {...props} />);

describe('<IncidentForm/> rendering', () => {
  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('image changes are handled correctly', () => {
    const instance = wrapper.find('IncidentForm').instance();
    const fileInput = wrapper.find('input[name="image"]');

    const fileContents = 'file contents';
    const file = new Blob([fileContents], { type: 'text/plain' });
    const addEventListener = jest.fn((_, evtHandler) => {
      evtHandler();
    });
    const readAsDataURL = jest.fn();
    const dummyFileReader = {
      addEventListener,
      readAsDataURL,
      result: fileContents
    };
    window.FileReader = jest.fn(() => dummyFileReader);

    const event = {
      target: {
        files: [file]
      },
      preventDefault: jest.fn()
    };

    fileInput.simulate('change', event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(instance.state.imagePreviewUrl).toEqual(fileContents);
  });

  describe('handleSubmit', () => {
    const event = {
      preventDefault: jest.fn()
    };

    it('should handleSubmit', () => {
      const form = wrapper.find('Form');
      form.simulate('submit', event);

      expect(event.preventDefault).toHaveBeenCalled();
      expect(props.updateRecord).toHaveBeenCalled();
    });

    it('should handleSubmit', () => {
      props.incident.incident.id = null;
      const wrapperTwo = mount(<IncidentForm {...props} />);

      const form = wrapperTwo.find('Form');
      form.simulate('submit', event);

      expect(event.preventDefault).toHaveBeenCalledTimes(2);
      expect(props.createRecord).toHaveBeenCalled();
    });
  });
});
