import { Store, applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { UserState } from './user/types';
import { DepState } from './departament/types';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export type ApplicationState = {
  userReducer: UserState;
  depReducer: DepState;
};

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger];

export function configureStore() {
  const composeEnhancers = compose;

  const store: Store<ApplicationState> = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
