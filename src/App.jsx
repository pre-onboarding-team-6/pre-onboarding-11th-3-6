import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Main, Root } from './pages';
import GlobalStyle from './styles/GlobalStyle';

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
    <RouterProvider router={router} />
  </>
);

export default App;
