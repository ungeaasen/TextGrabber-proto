import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TextGrab from './TextGrab'
import TextGet from './TextGet'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TextGrab />
    <App />
    <TextGet />
  </React.StrictMode>
)
