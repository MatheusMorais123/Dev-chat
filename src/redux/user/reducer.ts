import { ActionType, createReducer } from 'typesafe-actions';
import { UserAction, UserState } from './types';
import { createNumberAsync, loadNumbersByUserIdAsync } from './actions';

const initialState: UserState = {
  numbers: [],
  isLoadingNumbers: false,
  isLoadingCreateNumber: false,
  isErrorOnLoadingNumbers: null,
  isErrorOnCreateNumber: null,
};

export const userReducer = createReducer<UserState, UserAction>(initialState)
  .handleAction(
    loadNumbersByUserIdAsync.request,
    (state: UserState): UserState => ({
      ...state,
      isLoadingNumbers: true,
    }),
  )
  .handleAction(
    loadNumbersByUserIdAsync.success,
    (
      state: UserState,
      action: ActionType<typeof loadNumbersByUserIdAsync.success>,
    ): UserState => ({
      ...state,
      isLoadingNumbers: false,
      numbers: [...state.numbers, ...action.payload.numbers],
    }),
  )
  .handleAction(
    loadNumbersByUserIdAsync.failure,
    (
      state: UserState,
      action: ActionType<typeof loadNumbersByUserIdAsync.failure>,
    ): UserState => ({
      ...state,
      isLoadingNumbers: false,
      isErrorOnLoadingNumbers: action.payload.error,
    }),
  )
  .handleAction(
    createNumberAsync.request,
    (state: UserState): UserState => ({
      ...state,
      isLoadingCreateNumber: true,
    }),
  )
  .handleAction(
    createNumberAsync.success,
    (
      state: UserState,
      action: ActionType<typeof createNumberAsync.success>,
    ): UserState => ({
      ...state,
      isLoadingCreateNumber: false,
      numbers: [...state.numbers, action.payload.number],
    }),
  )
  .handleAction(
    createNumberAsync.failure,
    (
      state: UserState,
      action: ActionType<typeof createNumberAsync.failure>,
    ): UserState => ({
      ...state,
      isLoadingCreateNumber: false,
      isErrorOnLoadingNumbers: action.payload.error,
    }),
  );
