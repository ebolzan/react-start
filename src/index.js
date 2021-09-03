import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Hello';
import Clock from './Clock';
import Clock2 from './Clock2';
import Event from './Event';
import Props from './Props';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
    <Event />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
