import React from 'react';
import ReactDOM from 'react-dom';

import Demo from './Demo.jsx';

function initComponent() {
  ReactDOM.render(
    <Demo />, // eslint-disable-line
    document.getElementById('root')
  );
}

initComponent();
