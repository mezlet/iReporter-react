import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Route from './routes/Routes';
import store from './store/store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route />
    </BrowserRouter>
    <ToastContainer autoClose={2000} />
  </Provider>
);

export default App;
