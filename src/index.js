import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './style/main.scss'
import { RootCmp } from './root-cmp';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <RootCmp />
  // </React.StrictMode>
  
  <Provider store={store}>
    <RootCmp />
  </Provider>

);

