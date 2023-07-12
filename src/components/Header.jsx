import { useContext } from 'react';
import RepoContext from '../contexts/RepoContext';

const Header = () => {
  const repo = useContext(RepoContext);
  return (
    <header>
      {repo
        .split('/')
        .map(el => el[0].toUpperCase() + el.slice(1))
        .join(' / ')}
    </header>
  );
};

export default Header;
