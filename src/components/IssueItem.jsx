import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IssueContext } from '../store/issueContext';

const Container = styled.li`
  list-style: none;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: default;
  :hover {
    ${props => (props.profileImageUrl ? '' : 'background-color: rgb(237, 237, 237);font-weight: 600; cursor: pointer;')}
  }

  margin-bottom: 20px;
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  column-gap: 20px;

  margin-bottom: 10px;
  :last-child {
    margin-bottom: 0px;
  }
  height: 100%;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
`;

const IssueItem = ({ number, title, login, createdAt, commentCount, profileImageUrl }) => {
  const href = `${number}`;
  const { setIssue } = useContext(IssueContext);
  return (
    <Link to={href}>
      <Container onClick={() => setIssue(number)} profileImageUrl={profileImageUrl}>
        {profileImageUrl && <ProfileImage alt="profile" src={profileImageUrl} />}
        <div>
          <Content>
            <div>#{number}</div>
            <div>{title}</div>
          </Content>
          <Content>
            <div>작성자 : {login}</div>
            <div>작성일 : {createdAt}</div>
          </Content>
        </div>
        <div>코멘트 : {commentCount}</div>
      </Container>
    </Link>
  );
};
export default IssueItem;
