import UserReducer, {
  initialState,
  getUsers,
  setUsers,
} from '../../../../../src/feature/home/redux/slice';

describe('Testing Home Redux Slice', () => {
  test('initialize slice with initialValue', () => {
    const homeSliceInit = UserReducer(initialState, {type: 'unknown'});
    expect(homeSliceInit).toEqual(initialState);
  });

  test('initialize slice for getUser', () => {
    const homeSliceInit = UserReducer(initialState, getUsers({}));
    expect(homeSliceInit).toEqual(initialState);
  });

  test('initialize slice for setUsers', () => {
    const homeSliceInit = UserReducer(initialState, setUsers([]));
    expect(homeSliceInit).toEqual({
      customers: [],
    });
  });
});
