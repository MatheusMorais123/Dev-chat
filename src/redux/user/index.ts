import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { UserAction, UserState } from './types';
import { ApplicationState } from '../store';

type UseUser = {
  userState: UserState;
  userDispatch?: Dispatch<UserAction>;
};

export const useUser = (): UseUser => {
  const userState = useSelector<ApplicationState, UserState>(
    rootReducer => rootReducer.userReducer,
  );
  const userDispatch = useDispatch<Dispatch<UserAction>>();
  return { userState, userDispatch };
};
