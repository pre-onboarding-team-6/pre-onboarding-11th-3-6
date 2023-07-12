import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Main, Root } from './pages';
import GlobalStyle from './styles/GlobalStyle';
import { IssueProvider } from './context/Issues';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      // {
      //   path: ':id',
      //   element: <Detail />
      // }
    ],
  },
]);

const App = () => (
  <>
    <GlobalStyle />
    <IssueProvider>
      <RouterProvider router={router} />
    </IssueProvider>
  </>
);

export default App;
