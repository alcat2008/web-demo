
import React from 'react';
import CodeMirror from 'react-codemirror';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/jsx/jsx';

class CodeMirrorDemo extends React.Component {
  constructor(props) {
    super(props);
    // initial state
    this.state = {
      code: '// Code \n' +
      'import React from \'react\'; \n' +
      'import CodeMirror from \'react-codemirror\'; \n',
    };
  }

  updateCode = (newCode) => {
    this.setState({
      code: newCode,
    });
  }

  render() {
    const options = {
      lineNumbers: true,
      mode: 'javascript',
      tabSize: 2,
    };
    return (
      <CodeMirror
        className="codemirror"
        value={this.state.code}
        onChange={this.updateCode}
        options={options}
      />
    );
  }
}

export default CodeMirrorDemo;
