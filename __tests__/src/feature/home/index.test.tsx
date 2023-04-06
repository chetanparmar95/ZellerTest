import 'react-native';
import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import renderer from 'react-test-renderer';
import Home from '../../../../src/feature/home';
import UserType from '../../../../src/components/userType';

const mockCustomers = [
  {
    id: '1',
    name: 'TestCustomer1',
    email: 'test1@test.com',
    role: 'Admin',
  },
  {
    id: '2',
    name: 'TestCustomer2',
    email: 'test2@test.com',
    role: 'Admin',
  },
];

jest.mock('react-redux', () => {
  const store = {
    user: {customers: {items: mockCustomers}},
  };
  return {
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn().mockImplementation(callback => callback(store)),
    useDispatch: () => jest.fn(),
  };
});

describe('Test Home', () => {
  let wrapper: ShallowWrapper;
  const mockSetSelectedType = jest.fn();

  it('renders correctly', () => {
    React.useState = jest.fn().mockReturnValue(['Admin', mockSetSelectedType]);
    jest.spyOn(React, 'useEffect').mockImplementation(f => f());
    wrapper = shallow(<Home />);
    expect(renderer.create(<Home />)).toMatchSnapshot();
  });

  it('should flatlist return keyExtractor correctly for user types', () => {
    const key = wrapper.find('FlatList').at(0).props().keyExtractor('Admin');
    expect(key).toEqual('Admin');
  });

  it('should flatlist return keyExtractor correctly for user list', () => {
    const key = wrapper.find('FlatList').at(1).props().keyExtractor({id: 1});
    expect(key).toEqual('1');
  });

  it('should UserType render and setSelected called with given value', () => {
    const RenderItem: Function = wrapper
      .find('FlatList')
      .at(0)
      .prop('renderItem');
    const renderItemShallowWrapper = shallow(<RenderItem item={'Admin'} />);
    expect(renderItemShallowWrapper).toMatchSnapshot();
    renderItemShallowWrapper.find(UserType).props().onSelected('Admin');
    expect(mockSetSelectedType).toHaveBeenCalledWith('Admin');
  });

  it('should UserView render', () => {
    const RenderItem: Function = wrapper
      .find('FlatList')
      .at(1)
      .prop('renderItem');
    const renderItemShallowWrapper = shallow(
      <RenderItem item={mockCustomers[0]} />,
    );
    expect(renderItemShallowWrapper).toMatchSnapshot();
  });
});
