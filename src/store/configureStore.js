import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './../reducers';

import ApiClient from './../lib/ApiClient';
import clientMiddleware from './middleware/clientMiddleware'

export default function configureStore() {
  const client = new ApiClient();

  const enhancer = compose(
    applyMiddleware(thunk, clientMiddleware(client)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  const store = createStore(reducer, enhancer);
  return store;
}
