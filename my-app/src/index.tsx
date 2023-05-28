import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {store} from './store';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { userApi } from './services/usersApi';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApiProvider api={userApi}>
    <Provider store={store}>
    <App />
    </Provider>
    </ApiProvider>
  </React.StrictMode>
);