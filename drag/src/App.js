
import React from 'react';
import './App.css';

import './drag.css';

import Drag from './Drag';
import Sortable from './Sortable';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="row-between">
          <div>
            <h3>sortablejs</h3>
            <Sortable />
          </div>
          <div>
            <h3>ant-motion</h3>
            <Drag />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
