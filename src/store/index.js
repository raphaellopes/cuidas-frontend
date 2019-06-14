// vendors
import { createStore, compose, applyMiddleware } from 'redux';

// locals
import reducers from './ducks';

const middlewares = [];

const composer = process.env.NODE_ENV === 'development'
  ? compose(applyMiddleware(...middlewares))
  : applyMiddleware(...[]);

const store = createStore(reducers, composer);

export default store;
