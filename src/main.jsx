import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './store/Store';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain="dev-igx51i4811s6aa4m.us.auth0.com"
 

      clientId="tS2SCe7rvgSiM21Po4QedINT6AXCksLC"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
  </Provider>,
  document.getElementById('root')
);
