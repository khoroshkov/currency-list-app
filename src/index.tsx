import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { config as i18nextConfig } from './Localization/index';
import { CurrencyListAppContextProvider } from './context';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

i18next.init(i18nextConfig);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <I18nextProvider i18n={i18next}>
    <CurrencyListAppContextProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </CurrencyListAppContextProvider>
  </I18nextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
