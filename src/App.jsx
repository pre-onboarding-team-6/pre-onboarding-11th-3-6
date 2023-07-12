import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import RepoContext from './contexts/RepoContext';

const App = () => (
  <>
    <RepoContext.Provider value={'facebook/react'}>
      <Header />
      <Outlet />
    </RepoContext.Provider>
  </>
);

export default App;
