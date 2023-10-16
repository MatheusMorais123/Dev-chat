import { createAsyncAction } from 'typesafe-actions';
import { Name } from './types';

export const loadNameDepartamentByUserIdAsync = createAsyncAction(
  '@user/LOAD_NAMEDEPARTAMENT_BY_USER_ID_REQUEST',
  '@user/LOAD_NAMEDEPARTAMENT_BY_USER_ID_SUCCESS',
  '@user/LOAD_NAMEDEPARTAMENT_BY_USER_ID_FAILURE',
)<{ userId: string }, { names: Name[] }, { error: Error }>();

export const createNameDepartamentAsync = createAsyncAction(
  '@user/CREATE_NAMEDEPARTAMENT_REQUEST',
  '@user/CREATE_NAMEDEPARTAMENT_SUCCESS',
  '@user/CREATE_NAMEDEPARTAMENT_FAILURE',
)<{ name: Partial<Name> }, { name: Name }, { error: Error }>();
