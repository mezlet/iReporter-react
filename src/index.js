import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Route from './routes/Routes';
import store from './store/store';
import './scss/main.scss';
import { checkAuth } from './helpers/helpers';

checkAuth();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route />
    </BrowserRouter>
    <ToastContainer autoClose={2000} />
  </Provider>,
  document.getElementById('root')
);
