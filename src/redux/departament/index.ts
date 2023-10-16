/* import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { DepAction, DepState } from './types';
import { ApplicationState } from '../store';

type Dep = {
  depState: DepState;
  userDispatch?: Dispatch<DepAction>;
};

export const depDep = (): Dep => {
  const depState = useSelector<ApplicationState, DepState>(
    rootReducer => rootReducer.depReducer,
  );
  const userDispatch = useDispatch<Dispatch<DepAction>>();
  return { depState, userDispatch };
};
 */
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { DepAction, DepState } from './types';
import { ApplicationState } from '../store';

export const useDep = () => {
  const depState = useSelector<ApplicationState, DepState>(
    rootReducer => rootReducer.depReducer,
  );
  const depDispatch = useDispatch<Dispatch<DepAction>>();
  return { depState, depDispatch };
};
