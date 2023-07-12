import styled from 'styled-components';
import { API_URL } from '../constants/urls';

const Container = styled.header`
  padding: 10px 0;
  margin: 0 auto;
  text-align: center;
`;

const Header = () => (
  <Container>
    <h1>{`${API_URL.organization} / ${API_URL.repository}`}</h1>
  </Container>
);

export default Header;
