import { all, takeLatest } from 'redux-saga/effects';
import { createNumberAsync, loadNumbersByUserIdAsync } from './user/actions';
import { createNumberSaga, loadNumbersByUserIdSaga } from './user/saga';
import {createNameDepartamentAsync, loadNameDepartamentByUserIdAsync} from './departament/actions'
import {createNewDepartamentSaga} from './departament/saga'
export default function* rootSaga() {
  return yield all([
    takeLatest(loadNumbersByUserIdAsync.request, loadNumbersByUserIdSaga),
    takeLatest(createNumberAsync.request, createNumberSaga),
    takeLatest(createNameDepartamentAsync.request, createNewDepartamentSaga)
  ]);
}
