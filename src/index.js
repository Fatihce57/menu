import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar';
import Menu from './components/Menu';




ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Menu />
  </React.StrictMode>,
  document.getElementById('root')
);

