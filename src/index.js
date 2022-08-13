import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/styles/styles.scss';//Hint: Better to load the style when you need the cmp


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


