import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import IssueDataProvider from './context/IssueContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IssueDataProvider>
      <App />
    </IssueDataProvider>
  </React.StrictMode>
);
