import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/index';
import { createStore } from 'redux';
import comments from './reducers/index';
import { loadState, saveState } from './connectivity/localStorage'

import './style/normalize.css';
import './style/index.css';

const persistedState = loadState();
const store = createStore(comments, persistedState);

store.subscribe(() => {
    saveState(
      store.getState()
    );
});

ReactDOM.render(<App store = {store} />, document.getElementById('root'));