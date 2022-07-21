import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';


import * as Sentry from '@sentry/capacitor';
import * as SentrySibling from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

Sentry.init(
  {
    dsn: 'https://82af1403f61c40ca8d7f6bc33d1d5d22@o1327711.ingest.sentry.io/6590996',
    release: 'my-project-name@' + process.env.npm_package_version,
    dist: '1',
    tracesSampleRate: 1.0,
    integrations: [
      new BrowserTracing({
        tracingOrigins: ['localhost', 'http://localhost:8100/'],
      }),
    ]
  },
  SentrySibling.init
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorkerRegistration.register();
reportWebVitals();
