import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Detail, Main, Root } from './pages';
import GlobalStyle from './styles/GlobalStyle';
import { IssuesProvider } from './context/Issues';
import { IssueDetailProvider } from './context/IssueDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: (
          <IssuesProvider>
            <Main />
          </IssuesProvider>
        ),
      },
      {
        path: 'detail/:id',
        element: (
          <IssueDetailProvider>
            <Detail />
          </IssueDetailProvider>
        ),
      },
    ],
  },
]);

const App = () => (
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>
);

export default App;
