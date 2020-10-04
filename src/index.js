import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

render((
  <BrowserRouter>
    <App></App>
  </BrowserRouter>
), document.getElementById('app'))

serviceWorker.unregister();
