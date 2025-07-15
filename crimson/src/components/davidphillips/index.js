import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { InternalProvider } from './context/links';
import { BrowserRouter } from 'react-router';
import { LayerProvider, ModeProvider } from './context/brandLayers';
import { CookieProvider } from './context/Cookies';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <InternalProvider>
        <CookieProvider>
          <ModeProvider report>
            <LayerProvider layer='Two'>
              <App/>
            </LayerProvider>
          </ModeProvider>
          </CookieProvider>
      </InternalProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
