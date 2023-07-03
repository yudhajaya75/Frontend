import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/navbar/navbar.css';
import './components/card/card.css';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <GoogleOAuthProvider clientId="548038563275-chirhiki2t042op8amukfe0df1hkb8r6.apps.googleusercontent.com">
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>
);