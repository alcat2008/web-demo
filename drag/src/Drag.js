/* eslint-disable no-console */

import React from 'react';
import ListSort from './ListSort';

const dataArray = [
  {
    icon: 'question-circle-o',
    color: '#FF5500',
    title: 'Senior Product Designer',
    text: 'Senior Product Designer',
  },
  {
    icon: 'plus-circle-o',
    color: '#5FC296',
    title: 'Senior Animator',
    text: 'Senior Animator',
  },
  {
    icon: 'check-circle-o',
    color: '#2DB7F5',
    title: 'Visual Designer',
    text: 'Visual Designer',
  },
  {
    icon: 'cross-circle-o',
    color: '#FFAA00',
    title: 'Computer Engineer',
    text: 'Computer Engineer',
  },
];

export default class ListSortDemo extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
  };

  static defaultProps = {
    className: 'list-sort-demo',
  };

  _onChange = children => {
    console.log('ant-motion onChange => children', children);
  }

  render() {
    const childrenToRender = dataArray.map((item, i) => {
      const { title, text } = item;
      return (
        <div key={i} data-sequence={i} className={`${this.props.className}-list`}>
          <div className={`${this.props.className}-icon`}>
          </div>
          <div className={`${this.props.className}-text`}>
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
        </div>
      );
    });
    return (
      <div className="wrapper">
        <div className={this.props.className}>
          <ListSort
            onChange={this._onChange}
            dragClassName="list-drag-selected"
            appearAnim={{ animConfig: { marginTop: [5, 30], opacity: [1, 0] } }}
          >
            {childrenToRender}
          </ListSort>
        </div>
      </div>
    );
  }
}
