import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AdContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0 1rem;
`;
const AdBanner = () => (
  <AdContainer to="https://www.wanted.co.kr/" target="_blank">
    <img
      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
      alt="banner-wanted"
    />
  </AdContainer>
);

export default AdBanner;
