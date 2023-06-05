import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/theme';
import { InternalProvider, SocialProvider } from './context/links';
import { CookiesProvider } from './context/cookies';
import { FacebookProvider } from './context/facebook';
import {
  FluentProvider
} from "@fluentui/react-components";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // <FluentProvider>
    <CookiesProvider>
      <FacebookProvider>
        <ThemeProvider>
          <BrowserRouter>
            <SocialProvider>
              <InternalProvider>
                <App/>
              </InternalProvider>
            </SocialProvider>
          </BrowserRouter>
        </ThemeProvider>
      </FacebookProvider>
    </CookiesProvider>
  // </FluentProvider>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
