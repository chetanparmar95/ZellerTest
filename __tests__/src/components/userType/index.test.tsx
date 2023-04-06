import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import UserType from '../../../../src/components/userType';
import {TouchableOpacity} from 'react-native';

describe('renders correctly', () => {
  test('Render when selected', () => {
    const wrapper = renderer.create(
      <UserType title={'Admin'} selected={true} onSelected={jest.fn()} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('Render when not selected', () => {
    const wrapper = renderer.create(
      <UserType title={'Manager'} selected={false} onSelected={jest.fn()} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('onSelected calls when pressed', () => {
    const mockSelected = jest.fn();
    const wrapper = shallow(
      <UserType title={'Manager'} selected={false} onSelected={mockSelected} />,
    );
    wrapper.find(TouchableOpacity).simulate('press');
    expect(mockSelected).toHaveBeenCalledWith('Manager');
  });
});
