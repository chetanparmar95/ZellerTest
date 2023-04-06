import 'react-native';
import client from '../../../src/services/client';
import {getUserList, GET_USER_QUERY} from '../../../src/services/userService';

jest.mock('../../../src/services/client', () => {
  const mockQuery = jest.fn();
  mockQuery.mockResolvedValueOnce({data: {listZellerCustomers: {item: []}}});
  return {
    query: mockQuery,
  };
});

describe('Test UserService', () => {
  test('Test getUserList', async () => {
    const data = await getUserList('Admin');
    expect(client.query).toBeCalledWith({
      query: GET_USER_QUERY,
      variables: {filter: {role: {eq: 'ADMIN'}}},
    });
    expect(data).toEqual({item: []});
  });
});
