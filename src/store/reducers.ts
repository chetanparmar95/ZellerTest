import {combineReducers} from 'redux';
import userReducer from '../feature/home/redux/slice';

export default combineReducers({
  user: userReducer,
});
