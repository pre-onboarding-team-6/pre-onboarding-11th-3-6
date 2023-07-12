import { Outlet } from 'react-router-dom';
import { Header } from './components/common';
import RepoContext from './contexts/RepoContext';
import GlobalStyle from './styles/GlobalStyle';

const App = () => (
  <>
    <GlobalStyle />
    <RepoContext.Provider value={'facebook/react'}>
      <Header />
      <Outlet />
    </RepoContext.Provider>
  </>
);

export default App;
