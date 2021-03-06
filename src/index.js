import React from 'react';
import ReactDOM from 'react-dom';
import App from "./containers/App/index";
import store from './store';
import {Provider} from 'react-redux';
//Provder组件用来向子组件传递store仓库
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,document.querySelector('#root'));
