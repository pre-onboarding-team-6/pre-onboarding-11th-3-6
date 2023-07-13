import { useContext } from 'react';
import styled from 'styled-components';
import { HttpResultState } from '../store/httpResultContext';
import HomeButton from '../components/HomeButton';

const ErrorBox = styled.div`
  height: 400px;
  font-size: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    :nth-child(2) {
      margin-bottom: 100px;
    }
  }
`;

const Error = () => {
  const { error } = useContext(HttpResultState);
  const { status, message } = error;
  return (
    <ErrorBox>
      <h1>{status}</h1>
      <h1>{message}</h1>
      <HomeButton />
    </ErrorBox>
  );
};

export default Error;
