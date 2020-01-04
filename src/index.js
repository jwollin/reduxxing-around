import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import App from './App';

import './index.css';
import * as serviceWorker from './serviceWorker';

export const initialState = {
  count: 0
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, ...state.count++ };
    case 'DECREMENT':
      return state.count - 1;
    default:
      return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister()
