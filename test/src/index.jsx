import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/properties.css';
import './style/text.css';
import './style/basics.css';
import './style/footer.css';
import './style/coverstyles.css';

import { BrowserRouter } from 'react-router-dom';
import { PageManager } from './PageManager';
import { ThemeProvider } from './context/theme';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <PageManager/>
    </ThemeProvider>
  </BrowserRouter>
);