import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter }  from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';
import './index.css';

render((
  <React.StrictMode>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </React.StrictMode>
), document.getElementById('app'))

serviceWorker.unregister();
