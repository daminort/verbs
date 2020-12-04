import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);
const middlewares = [sagaMiddleware, routeMiddleware];

const rootReducer = combineReducers({ ...reducers, router: connectRouter(history) });

const composeEnhancers = composeWithDevTools({
  name: 'Verbs',
  trace: true,
  traceLimit: 20,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export { store, history };
