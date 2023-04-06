import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Separator from '../../../../src/components/separator';

it('renders correctly', () => {
  const wrapper = renderer.create(<Separator />);
  expect(wrapper).toMatchSnapshot();
});
