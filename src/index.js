import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Routes from './Router/Routes'


ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

