import styled from 'styled-components';

const Observer = styled.div`
  height: 50px;
`;

const ScrollObserver = ({ observer = null }) => <Observer ref={observer}></Observer>;

export default ScrollObserver;
