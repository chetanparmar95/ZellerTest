import { call, put } from 'redux-saga/effects';
import {getUsers, setUsers} from '../../../../../src/feature/home/redux/slice';
import {fetchUsersSaga} from '../../../../../src/feature/home/redux/userSaga';
import { getUserList } from '../../../../../src/services/userService';

describe('Test UserSaga', () => {
  let generator: Generator;
  let next: IteratorResult<unknown, any>;
  beforeEach(() => {
    const action = getUsers('Admin');
    generator = fetchUsersSaga(action);
    next = generator.next();
  });

  it('Test fetchUsersSaga success', () => {
    expect(next.value).toEqual(call(getUserList, 'Admin'));
    next = generator.next([]);
    expect(next.value).toEqual(put(setUsers([])));
    next = generator.next();
    expect(next.done).toBe(true);
  });

  it('Test fetchUsersSaga failed', () => {
    const abortException = {
      response: {
        message: 'The operation couldn’t be completed.',
        reason: 'authorization error',
        status: 401,
      },
    };
    next = generator.next(generator.throw(abortException)); // handleErrors
    next = generator.next();
    expect(next.done).toEqual(true);
  });
});
