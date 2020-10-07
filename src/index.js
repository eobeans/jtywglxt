import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';
import './index.css';

render((
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
), document.getElementById('app'))

serviceWorker.unregister();
