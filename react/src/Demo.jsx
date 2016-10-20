import React from 'react';
import './app.css';

export default class Hello extends React.Component {

  constructor(props) {
    super(props);
    // initial state
    this.state = {
      val: 0,
      info: {
        message: 'this is demo page, will be update after 3s'
      }
    };
  }

  componentDidMount() {
    this.setState({ val: this.state.val + 1 });
    console.log(this.state.val); // 输出： 0

    this.setState({ val: this.state.val + 1 }, () => {
      this.setState({ val: this.state.val + 1 }, () => {
        console.log(this.state.val); // 输出： 2
      });
      console.log(this.state.val); // 输出：1
    });
    console.log(this.state.val); // 输出： 0

    setTimeout(() => {
      this.setState({
        info: {
          message: 'message updated'
        }
      });
    }, 3000);
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
