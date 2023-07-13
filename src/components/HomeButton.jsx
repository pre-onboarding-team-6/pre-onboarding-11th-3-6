import { useNavigate } from 'react-router';
import styled from 'styled-components';

const StyledHomeButton = styled.button`
  border: none;
  outline: none;
  width: 200px;
  cursor: pointer;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(237, 237, 237);
  font-weight: 900;
  border-radius: 10px;
  :hover {
    background-color: rgb(230, 230, 230);
  }
`;

const HomeButton = () => {
  const navigate = useNavigate();

  return <StyledHomeButton onClick={() => navigate('/')}>메인화면으로 돌아가기</StyledHomeButton>;
};

export default HomeButton;
