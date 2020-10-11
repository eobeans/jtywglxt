/*
 * @Author: eobeans
 * @Date: 2020-08-28 17:52:54
 * @LastEditors: eobeans
 * @LastEditTime: 2020-10-11 15:46:31
 * @version: 0.1.0
 * @Descripttion: 
 */
import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import './mock/index';

render((
  <BrowserRouter>
    <App></App>
  </BrowserRouter>
), document.getElementById('app'))

serviceWorker.unregister();
