import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './components/Counter';
import counter from './reducers';

const store = createStore(counter, window.devToolsExtension && window.devToolsExtension());
const rootEl = document.getElementById('root');

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
      onIncrementDouble={() => store.dispatch({ type: 'INCREMENT_DOUBLE' })}
    />,
    rootEl
  );
}

render();
store.subscribe(render);
