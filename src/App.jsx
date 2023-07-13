import React from 'react';
import { RouterProvider } from 'react-router-dom';
import routerConfig from './router/router';
import Header from './components/Header';
import GlobalStyle from './styles/GlobalStyle';

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <RouterProvider router={routerConfig} />
  </>
);

export default App;
