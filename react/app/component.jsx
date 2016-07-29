import React from 'react';
import './component.css';

export default class Hello extends React.Component {

  constructor(props) {
    super(props);
    // initial state
    this.state = {
      info: {
        message: 'this is demo page, will be update after 3s'
      }
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        info: {
          message: 'message updated'
        }
      });
    }, 10000);
  }

  render() {
    return (
      <div className="test-class">
        <h1>Hello React</h1>
        <div>{this.state.info.message}</div>
      </div>
    );
  }
}
