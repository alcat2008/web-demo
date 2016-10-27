/* eslint-disable */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // initial state
    this.state = {
      maskerVisible: false,
    };
  }

  _maskCancel = e => {
    console.log('cancel target: ', e.target, ' type: ', e.type);
    this.setState({ maskerVisible: false });
  };

  _showOverlay = e => {
    console.log('show target: ', e.target, ' type: ', e.type);
    e.preventDefault();
    this.setState({ maskerVisible: true });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
