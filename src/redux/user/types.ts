import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type Number = {
  id: string;
  userId: string;
  name: string;
  phone: string;
  isActive: boolean;
  createdAt: FirebaseDate;
  updatedAt: FirebaseDate;
};

export type FirebaseDate = {
  seconds: number;
  nanoseconds: number;
};

export type UserState = {
  numbers: Number[];
  isLoadingNumbers: boolean;
  isLoadingCreateNumber: boolean;
  isErrorOnLoadingNumbers: Error;
  isErrorOnCreateNumber: Error;
};

export type UserAction = ActionType<typeof actions>;
