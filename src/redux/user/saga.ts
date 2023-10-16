import { db } from '@/helpers/firebase';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { call, put } from 'redux-saga/effects';
import { createNumberAsync, loadNumbersByUserIdAsync } from './actions';
import { createNewNumber, uploadNumberToFirestore } from './helpers';
import { Number } from './types';

export function* loadNumbersByUserIdSaga(
  action: ReturnType<typeof loadNumbersByUserIdAsync.request>,
) {
  const { userId } = action.payload;
  try {
    const numbersCollection = collection(db, 'userNumbers');
    const numbersQuery = query(
      numbersCollection,
      where('userId', '==', userId),
      orderBy('updatedAt', 'desc'),
    );

    const numbersQuerySnapShot = yield call(getDocs, numbersQuery);
    const numbersData: Number[] = numbersQuerySnapShot.docs.map(
      doc => doc.data() as Number,
    );

    yield put(loadNumbersByUserIdAsync.success({ numbers: numbersData }));
  } catch (error) {
    yield put(loadNumbersByUserIdAsync.failure({ error }));
  }
}

export function* createNumberSaga(
  action: ReturnType<typeof createNumberAsync.request>,
) {
  try {
    const newNumber = yield createNewNumber(action.payload.number);

    const number = yield uploadNumberToFirestore(newNumber);

    yield put(createNumberAsync.success({ number }));
  } catch (error) {
    yield put(createNumberAsync.failure({ error }));
  }
}
