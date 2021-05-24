import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import reduxthunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../redux/reducers';

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(reduxthunk))
);