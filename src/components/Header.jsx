import styled from 'styled-components';
import { useContext } from 'react';
import { ReposContext } from '../store/reposContext';

const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(237, 237, 237);
`;

const Header = () => {
  const { organization, repos } = useContext(ReposContext);

  return (
    <StyledHeader>
      <h1>
        {organization} / {repos}{' '}
      </h1>
    </StyledHeader>
  );
};

export default Header;
