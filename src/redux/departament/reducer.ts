import { ActionType, createReducer } from 'typesafe-actions';
import { DepAction, DepState } from './types';
import { createNameDepartamentAsync, loadNameDepartamentByUserIdAsync } from './actions';

const initialState: DepState = {
  names: [],
  isLoadingNameDepartament: false,
  isLoadingCreateNameDepartament: false,
  isErrorOnLoadingNameDepartament: null,
  isErrorOnCreateNameDepartament: null,
};

export const depReducer = createReducer<DepState, DepAction>(initialState)
  .handleAction(
    loadNameDepartamentByUserIdAsync.request,
    (state: DepState): DepState => ({
      ...state,
      isLoadingNameDepartament: true,
    }),
  )
  .handleAction(
    loadNameDepartamentByUserIdAsync.success,
    (
      state: DepState,
      action: ActionType<typeof loadNameDepartamentByUserIdAsync.success>,
    ): DepState => ({
      ...state,
      isLoadingNameDepartament: false,
      names: [...state.names, ...action.payload.names],
    }),
  )
  .handleAction(
    loadNameDepartamentByUserIdAsync.failure,
    (
      state: DepState,
      action: ActionType<typeof loadNameDepartamentByUserIdAsync.failure>,
    ): DepState => ({
      ...state,
      isLoadingNameDepartament: false,
      isErrorOnLoadingNameDepartament: action.payload.error,
    }),
  )
  .handleAction(
    createNameDepartamentAsync.request,
    (state: DepState): DepState => ({
      ...state,
      isLoadingNameDepartament: true,
    }),
  )
  .handleAction(
    createNameDepartamentAsync.success,
    (
      state: DepState,
      action: ActionType<typeof createNameDepartamentAsync.success>,
    ): DepState => ({
      ...state,
      //isLoadingCreateNameDepartament: false,
      names: [...state.names, action.payload.name],
    }),
  )

  /* .handleAction(
    createNameDepartamentAsync.success,
    (
      state: DepState,
      action: ActionType<typeof createNameDepartamentAsync.success>,
    ): DepState => {
      // Verifique se o nome já existe no array 'names'
      const isNameAlreadyExists = state.names.some((name) => name.id === action.payload.name.id);
  
      // Se o nome já existir, não atualize o estado
      if (isNameAlreadyExists) {
        return state;
      }
  
      // Caso contrário, adicione o novo nome ao array 'names'
      return {
        ...state,
        isLoadingCreateNameDepartament: false,
        names: [...state.names, action.payload.name],
      };
    },
  ) */
  .handleAction(
    createNameDepartamentAsync.failure,
    (
      state: DepState,
      action: ActionType<typeof createNameDepartamentAsync.failure>,
    ): DepState => ({
      ...state,
      isLoadingCreateNameDepartament: false,
      isErrorOnLoadingNameDepartament: action.payload.error,
    }),
  );
