import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import reducers from './reducers';
import configureStore from './store/configureStore';

const initialState={};
const store=configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.base_container'));






