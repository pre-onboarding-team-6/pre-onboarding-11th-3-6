import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Detail, Main, Root } from './pages';
import GlobalStyle from './styles/GlobalStyle';
import { IssuesProvider } from './context/Issues';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: 'detail/:id',
        element: <Detail />,
      },
    ],
  },
]);

const App = () => (
  <IssuesProvider>
    <GlobalStyle />
    <RouterProvider router={router} />
  </IssuesProvider>
);

export default App;
