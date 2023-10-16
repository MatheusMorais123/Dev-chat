import { db } from '@/helpers/firebase';
import { Timestamp, collection, doc, setDoc } from 'firebase/firestore';
import { Number } from './types';

export async function createNewNumber(number: Partial<Number>) {
  return {
    ...number,
    id: '',
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  };
}

export function* uploadNumberToFirestore(number: Number) {
  const newNumberDoc = doc(collection(db, 'userNumbers'));
  number.id = newNumberDoc.id;

  yield setDoc(newNumberDoc, number);

  return number;
}
