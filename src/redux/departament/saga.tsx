import { db } from '@/helpers/firebase'
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  getDoc,
  doc,
  serverTimestamp,
  query,
  where,
  orderBy
} from 'firebase/firestore'
import { createNewDepartament, uploadDepartamentToFirestore } from './helpers'
import { createNameDepartamentAsync, loadNameDepartamentByUserIdAsync } from './actions'
import { call, put } from 'redux-saga/effects';
import { Name } from './types'

export function* loadNameDepartamentByUserIdSaga(
  action: ReturnType<typeof loadNameDepartamentByUserIdAsync.request>,
) {
  const { userId } = action.payload;
  try {
    const nameCollection = collection(db, 'departament');
    const nameQuery = query(
      nameCollection,
      where('userId', '==', userId),
      orderBy('updatedAt', 'desc'),
    );

    const nameQuerySnapShot = yield call(getDocs, nameQuery);
    const departamentData = nameQuerySnapShot.docs.map(doc => doc.data().names);

    yield put(loadNameDepartamentByUserIdAsync.success({ names: departamentData }));
  } catch (error) {
    yield put(loadNameDepartamentByUserIdAsync.failure({ error }));
  }
}

export function* createNewDepartamentSaga(
  action: ReturnType<typeof createNameDepartamentAsync.request>,
) {
  try {
    console.log('Middleware Saga - Ação Recebida:', action);

    const newName = yield createNewDepartament(action.payload.name);

    console.log('Novo departamento criado:', newName);

    const name = yield uploadDepartamentToFirestore(newName);
    
    console.log('Departamento enviado para Firestore:', name);

    yield put(createNameDepartamentAsync.success({ name }));

  } catch (error) {
    yield put(createNameDepartamentAsync.failure({ error }));
  }
} 






