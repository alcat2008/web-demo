import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {

  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onIncrementDouble: PropTypes.func.isRequired,
  };

  componentWillUnMount() {
    this.timer && clearTimeout(this.timer);
  }

  incrementIfOdd = () => {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement && this.props.onIncrement();
    }
  };

  incrementAsync = () => {
    this.timer = setTimeout(this.props.onIncrement, 1000);
  };

  incrementDouble = () => {
    this.props.onIncrementDouble && this.props.onIncrementDouble();
  };

  render() {
    const { value, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <div>
          Clicked: {value} times
          {' '}
          <button onClick={onIncrement}>
            +
          </button>
          {' '}
          <button onClick={onDecrement}>
            -
          </button>
        </div>

        <div>
          <button onClick={this.incrementIfOdd}>
            Increment if odd
          </button>
          {' '}
          <button onClick={this.incrementAsync}>
            Increment async
          </button>
        </div>

        <div>
          <button onClick={this.incrementDouble}>
            Increment double
          </button>
        </div>
      </div>
    )
  }
}
