import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/properties.css';
import './style/text.css';
import './style/basics.css';
import './style/footer.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { PageManager } from './PageManager';
// import { ThemeProvider } from './context/theme';
// import { InternalProvider, SocialProvider } from './context/links';
// import { CookiesProvider } from './context/cookies';
// import { FacebookProvider } from './context/facebook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <PageManager/>
</BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
