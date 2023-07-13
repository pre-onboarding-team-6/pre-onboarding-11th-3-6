import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Issues from './pages/issues';
import GlobalStyle from './styles/GlobalStyle';
import Error from './pages/error';
import Issue from './pages/issue';
import HttpResultStateProvider from './store/httpResultContext';
import ReposContextProvider from './store/reposContext';
import Header from './components/Header';
import IssueContextProvider from './store/issueContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Issues />,
  },
  {
    path: '/:number',
    element: <Issue />,
  },
  {
    path: '/error',
    element: <Error />,
  },
]);

const App = () => (
  <>
    <GlobalStyle />
    <HttpResultStateProvider>
      <ReposContextProvider>
        <IssueContextProvider>
          <Header />
          <RouterProvider router={router}></RouterProvider>
        </IssueContextProvider>
      </ReposContextProvider>
    </HttpResultStateProvider>
  </>
);

export default App;
