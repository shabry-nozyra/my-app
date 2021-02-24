import React from 'react';
import ReactDOM from 'react-dom';
import RestController from './RestController';
import App from './App';
import Router from './Router';
import Sidebar from './Sidebar';
import { Navbar }from './Navbar'
ReactDOM.render(
  <React.StrictMode>
    {<Navbar />}
    <Router />
    {/* <RestController /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
