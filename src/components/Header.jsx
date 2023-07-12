import styled from 'styled-components';
import { API_URL } from '../constants/urls';

const HeaderTitle = styled.h1`
  margin: 5px 0;
`;

const Header = () => (
  <header>
    <HeaderTitle>{`${API_URL.organization} / ${API_URL.repository}`}</HeaderTitle>
  </header>
);

export default Header;
