import {call, put, takeLatest} from 'redux-saga/effects';
import {getUserList} from '../../../services/userService';
import {getUsers, setUsers} from './slice';

export function* fetchUsersSaga(action: any): Generator<any> {
  try {
    const userData: any = yield call(getUserList, action.payload);
    yield put(setUsers(userData));
  } catch (error) {
    console.log(error);
  }
}

function* userSaga() {
  yield takeLatest(getUsers.type, fetchUsersSaga);
}

export default userSaga;
