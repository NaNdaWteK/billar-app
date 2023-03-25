import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import { selectElement } from './_shared/helpers';

const root = ReactDOM.createRoot(selectElement('#root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
