import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './ducks';
import saga from './sagas';

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middlewares = [sagaMiddleware];

const composer = process.env.NODE_ENV === 'development'
  ? compose(
    applyMiddleware(...middlewares),
    console.tron.createEnhancer(),
  )
  : applyMiddleware(...middlewares);

const store = createStore(reducer, composer);
sagaMiddleware.run(saga);

export default store;
