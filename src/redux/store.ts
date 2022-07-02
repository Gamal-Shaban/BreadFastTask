import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import reducers from './reducers';

let composeEnhancers = compose;

const middleware = applyMiddleware(thunk);

export const store = createStore(reducers, {}, composeEnhancers(middleware));

export const persistor = persistStore(store);
