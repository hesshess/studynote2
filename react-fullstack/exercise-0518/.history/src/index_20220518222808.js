import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Meta from './Meta';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Meta title={'네이버 가입 폼'} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
