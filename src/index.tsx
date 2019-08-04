import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/App/App';
import * as serviceWorker from './serviceWorker';
import openSocket from 'socket.io-client';
import { ContextProvider } from "./Context";
const socket = openSocket("localhost:3001");

ReactDOM.render(
  <ContextProvider value={{ socket }}>
    <App />
  </ContextProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
