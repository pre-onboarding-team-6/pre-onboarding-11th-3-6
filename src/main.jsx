import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/GlobalStyle';
import App from './App';
import IssuesAPI from './api/IssuesAPI';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IssuesAPI>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IssuesAPI>
  </React.StrictMode>
);
