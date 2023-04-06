import {gql} from '@apollo/client';
import client from './client';

export const GET_USER_QUERY = gql`
  query ListCustomers(
    $filter: TableZellerCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listZellerCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        role
      }
      nextToken
    }
  }
`;
export const getUserList = async (role: string): Promise<any> => {
  const {data} = await client.query({
    query: GET_USER_QUERY,
    variables: {
      filter: {
        role: {
          eq: role.toUpperCase(),
        },
      },
    },
  });
  return data.listZellerCustomers;
};
