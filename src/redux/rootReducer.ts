import { combineReducers } from 'redux';
import { userReducer } from './user/reducer';
import {depReducer} from './departament/reducer'

export default combineReducers({
  userReducer,
  depReducer
});
