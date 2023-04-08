import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import { getGeoLocation } from './lib/geoLocation';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

(async () => {
  const geoLocation = await getGeoLocation();
  console.log(geoLocation);
})();
