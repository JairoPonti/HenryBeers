import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import generateStore from './Redux/Store/store'

const store = generateStore()


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter >
    <App2 />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
