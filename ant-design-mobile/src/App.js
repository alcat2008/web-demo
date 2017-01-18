/* eslint-disable */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button } from 'antd-mobile';
import ListView from './listview/body';

class App extends Component {
  constructor(props) {
    super(props);
    // initial state
    this.state = {
      maskerVisible: false,
      display: 'info',
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

  _onClick = e => {
    this.setState({
      display: this.state.display === 'info' ? 'thumb' : 'info',
    })
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
        <Button onClick={this._onClick}>Start</Button>
        <ListView display={this.state.display} />
      </div>
    );
  }
}

export default App;
