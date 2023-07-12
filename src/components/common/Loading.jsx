import styled from 'styled-components';

const Animation = styled.p`
  @keyframes loading {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.4;
    }
  }
  animation: loading 2s infinite;

  color: gray;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  padding: 2rem 0;
`;
const Loading = () => <Animation>Loading...</Animation>;

export default Loading;
