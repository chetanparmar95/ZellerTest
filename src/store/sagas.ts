import {all} from 'redux-saga/effects';
import userSaga from '../feature/home/redux/userSaga';

function* rootSaga() {
  yield all([userSaga()]);
}

export default rootSaga;
