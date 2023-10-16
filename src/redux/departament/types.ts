import { ActionType } from "typesafe-actions";
import * as actions from './actions'

export type Name = {
    id: string;
    userId: string;
    name: string,
    isActive: false,
}

export type DepState = {
    names: Name[],
    isLoadingNameDepartament: boolean;
    isLoadingCreateNameDepartament: boolean;
    isErrorOnLoadingNameDepartament: Error;
    isErrorOnCreateNameDepartament: Error;
  };

export type DepAction = ActionType<typeof actions>;

