import { fromJS } from 'immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxSaga from 'redux-saga';

import createReducer from './reducers';
import sagas from './sagas';

const sagaMiddleware = reduxSaga({});
const reduxDevTool = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : null; // eslint-disable-line no-underscore-dangle

export default (initialState = {}) => {
  const enhancers = [
    applyMiddleware(sagaMiddleware),
  ];
  if (reduxDevTool) {
    enhancers.push(reduxDevTool);
  }

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    compose(...enhancers)
  );

  store.runSaga = sagaMiddleware.run;
  store.asyncReducers = {};

  let task = sagaMiddleware.run(sagas);
  if (process.env.NODE_ENV === 'production') {
    task.done.catch(error => { console.error(error); });
  }

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      System.import('./reducers').then(module => {
        const nextReducers = module.default(store.asyncReducers);
        store.replaceReducer(nextReducers);
      });
    });

    module.hot.accept('./sagas/index', () => {
      System.import('./sagas').then(component => {
        task.cancel();
        task.done.then(() => {
          task = sagaMiddleware.run(component.default);
        });
      });
    });
  }

  return store;
};
