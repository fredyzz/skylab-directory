/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SkylabersContextProvider } from './store/skylabersContext';

ReactDOM.render(
  <React.StrictMode>
    <SkylabersContextProvider>
      <App />
    </SkylabersContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
