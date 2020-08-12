import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { Navbar, Footer } from './Components';
import './Assets/Styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);