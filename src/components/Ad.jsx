import styled from 'styled-components';

const StyledAd = styled.img`
  width: 30%;
  height: auto;
`;

const Container = styled.div`
  width: 100%;
  margin: 20px 0;
  text-align: center;
  cursor: pointer;
  background-color: #f0f0f0;
`;

const Ad = ({ link, imageUrl }) => (
  <Container onClick={() => window.location.href(link)}>
    <StyledAd alt="ad" src={imageUrl} />
  </Container>
);

export default Ad;
