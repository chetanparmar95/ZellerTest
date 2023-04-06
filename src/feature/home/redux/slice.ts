import {createSlice} from '@reduxjs/toolkit';

export interface ZellerCustomer {
  id: string;
  name?: string;
  email?: string;
  role?: string;
}

interface ZellerCustomerConnection {
  items: ZellerCustomer[];
  nextToken?: string;
}

export type UserState = {
  customers?: ZellerCustomerConnection;
};

export const initialState: UserState = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUsers(_state, _action) {},
    setUsers(state, action) {
      state.customers = action.payload;
    },
  },
});

export const {getUsers, setUsers} = userSlice.actions;

export default userSlice.reducer;
