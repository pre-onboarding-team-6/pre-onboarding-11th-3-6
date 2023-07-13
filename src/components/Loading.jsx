import styled, { keyframes } from 'styled-components';

const scale = keyframes`
    0%{
            scale:0;
        }
        100%{
            scale:2;
        }
`;

const StyledLoading = styled.div`
  width: 80px;
  height: 80px;

  border-radius: 100%;
  background-color: black;

  animation: ${scale} 1s infinite;
`;

const LoadingContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = () => (
  <LoadingContainer>
    <StyledLoading />
  </LoadingContainer>
);

export default Loading;
