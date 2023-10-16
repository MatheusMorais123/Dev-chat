import { createAsyncAction } from 'typesafe-actions';
import { Number } from './types';

export const loadNumbersByUserIdAsync = createAsyncAction(
  '@user/LOAD_NUMBERS_BY_USER_ID_REQUEST',
  '@user/LOAD_NUMBERS_BY_USER_ID_SUCCESS',
  '@user/LOAD_NUMBERS_BY_USER_ID_FAILURE',
)<{ userId: string }, { numbers: Number[] }, { error: Error }>();

export const createNumberAsync = createAsyncAction(
  '@user/CREATE_NUMBER_REQUEST',
  '@user/CREATE_NUMBER_SUCCESS',
  '@user/CREATE_NUMBER_FAILURE',
)<{ number: Partial<Number> }, { number: Number }, { error: Error }>();
