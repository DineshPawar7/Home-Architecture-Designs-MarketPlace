import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Replace these placeholders with your Auth0 credentials
const AUTH0_DOMAIN = '<dev-5wx1yizq5qhn2ud2.us.auth0.com>';
const AUTH0_CLIENT_ID = '<b4J3OwohPXprIQkj8Wgg47bXayWp6Ryi>';

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

