/** @format */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';
import { persistMiddleware } from './middlewares/persistMiddleware';

export const store = createStore(
  reducers,
  {},
  applyMiddleware(persistMiddleware, thunk, logger)
);
