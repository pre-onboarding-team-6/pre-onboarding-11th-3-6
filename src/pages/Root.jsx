import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../components';

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 10px;
`;

const Root = () => (
  <Container>
    <Header />
    <Outlet />
  </Container>
);

export default Root;
