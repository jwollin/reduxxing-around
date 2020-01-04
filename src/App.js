import React from 'react';
import { connect } from 'react-redux'
import Counter from "./components/counter";

import logo from './logo.svg';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Counter />
    </div>
  );
}

export default connect()(App);
