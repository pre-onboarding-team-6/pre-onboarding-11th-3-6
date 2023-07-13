import styled from 'styled-components';
import spinner from '../asset/ball-triangle.svg';

const Container = styled.div`
  text-align: center;
  margin: 10px;
`;

const Spinner = () => (
  <Container>
    <img src={spinner} alt="Loading..." />
  </Container>
);

export default Spinner;
