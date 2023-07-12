import styled from 'styled-components';

const ErrorMsg = styled.p`
  color: red;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  padding: 2rem 0;
`;

const Error = () => <ErrorMsg>Error</ErrorMsg>;

export default Error;
