import { db } from '@/helpers/firebase';
import { Timestamp, collection, doc, setDoc } from 'firebase/firestore';
import {Name} from './types'

export async function createNewDepartament(name: Partial<Name>){
    return{
        ...name,
        id: '',
        isActive: false,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
    }
}

export function* uploadDepartamentToFirestore(name: Name) {
    const newDepartamentDoc = doc(collection(db, 'departament'));
    name.id = newDepartamentDoc.id;
  
    yield setDoc(newDepartamentDoc, name);
  
    return name;
  }
  