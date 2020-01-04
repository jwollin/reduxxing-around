import React, {Fragment} from 'react';
import { connect } from 'react-redux'
// import Counter from "./components/counter";

import logo from './logo.svg';
import './App.css';

const App = (state, store) => {
  console.log('STATE: ', store)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <button onClick={() => state.dispatch({ type: 'INCREMENT' })}>INCREMENT</button>
      <button onClick={() => state.dispatch({ type: 'DECREMENT' })}>DECREMENT</button>
      <div>The count: {state.count}</div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.count
})

export default connect(mapStateToProps)(App);
