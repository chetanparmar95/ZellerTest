/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {shallow} from 'enzyme';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
const mockStore = configureMockStore();
const storeObject = {};
const store = mockStore(storeObject);

it('renders correctly', () => {
  const wrapper = shallow(
    <Provider store={store}>
      <App />
    </Provider>,
  )
    .find('App')
    .dive();
  expect(wrapper).toMatchSnapshot();
});
