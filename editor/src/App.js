import React from 'react';
import './App.css';
import CodeMirrorDemo from './CodeMirrorDemo';
import AceDemo from './AceDemo';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="row-between">
          <div>
            <h3>codemirror</h3>
            <CodeMirrorDemo />
          </div>
          <div>
            <h3>ace</h3>
            <AceDemo />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
