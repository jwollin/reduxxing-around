import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './App';
// import { store } from './store/store';

import './index.css';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux'

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(counter)

store.subscribe(() => console.log('Store is: ', store.getState()))

store.dispatch({ type: 'INCREMENT' })

store.dispatch({ type: 'INCREMENT' })

store.dispatch({ type: 'DECREMENT' })

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister()
