import styled from 'styled-components';

const StyledError = styled.div`
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

const Error = ({ error }) => {
  const { status, message } = error;
  return (
    <StyledError>
      <h1>{status}</h1>
      <p>{message}</p>
    </StyledError>
  );
};

export default Error;
