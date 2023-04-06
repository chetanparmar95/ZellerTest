import 'react-native';
import React from 'react';
import UserView from '../../../../src/components/userView';
import {ZellerCustomer} from '../../../../src/feature/home/redux/slice';
import renderer from 'react-test-renderer';

describe('renders correctly', () => {
  test('Render init', () => {
    const user: ZellerCustomer = {
      id: '1',
      name: 'David Miller',
      email: 'david@gmail.com',
      role: 'ADMIN',
    };
    expect(renderer.create(<UserView user={user} />)).toMatchSnapshot();
  });
});
