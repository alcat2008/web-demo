import React from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';

import Demo from './Demo.jsx';
import ListDemo from './ListDemo.jsx';
import TreeDemo from './TreeDemo.jsx';

function initComponent() {
  ReactDOM.render(
    <TreeDemo />, // eslint-disable-line
    document.getElementById('root')
  );
}

initComponent();
