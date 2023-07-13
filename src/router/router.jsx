import { createBrowserRouter } from 'react-router-dom';
import IssueList from '../Pages/IssueList';
import IssuePage from '../Pages/IssuePage';

const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <IssueList />,
  },
  {
    path: '/issues',
    element: <IssueList />,
  },
  {
    path: '/issues/:id',
    element: <IssuePage />,
  },
]);

export default routerConfig;
