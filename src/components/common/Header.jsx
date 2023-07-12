import { useContext } from 'react';
import styled from 'styled-components';
import RepoContext from '../../contexts/RepoContext';

const HeaderContainer = styled.header`
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  padding: 1rem;
`;

const Header = () => {
  const repo = useContext(RepoContext);

  return (
    <HeaderContainer>
      {repo
        .split('/')
        .map(el => el[0].toUpperCase() + el.slice(1))
        .join(' / ')}
    </HeaderContainer>
  );
};

export default Header;
