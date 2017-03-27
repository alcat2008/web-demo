import React from 'react';
// import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/github';

class AceDemo extends React.Component {
  constructor(props) {
    super(props);
    // initial state
    this.state = {
      code: '// Code \n' +
      'import React from \'react\'; \n' +
      '\n' +
      'class AceDemo extends React.Component {\n' +
      '  render() {\n' +
      '    return (\n' +
      '      <div>AceDemo</div>\n' +
      '    );\n' +
      '  }\n' +
      '}\n' +
      '\n' +
      'export default AceDemo;\n',
    };
  }

  onChange = (newCode) => {
    this.setState({
      code: newCode,
    });
  }

  render() {
    return (
      <AceEditor
        value={this.state.code}
        mode="javascript"
        theme="github"
        onChange={this.onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      />
    );
  }
}

export default AceDemo;
