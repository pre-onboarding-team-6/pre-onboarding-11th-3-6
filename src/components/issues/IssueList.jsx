import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const IssueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  cursor: pointer;
  border-bottom: 1px solid black;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > p:first-child {
    font-weight: bold;
    font-size: 1.1rem;
  }
`;
const Comments = styled.div`
  width: 50px;
  text-align: center;
`;

const dateType = ['년', '월', '일'];
const IssueList = ({ issue }) => {
  const navigate = useNavigate();
  const createdAt = new Date(issue.created_at)
    .toLocaleDateString()
    .split('.')
    .slice(0, 3)
    .map((part, idx) => part + dateType[idx]);

  return (
    <IssueContainer onClick={() => navigate(`/issue?id=${issue.number}`)}>
      <FlexColumn>
        <p>
          #{issue.number} {issue.title}
        </p>
        <p>
          작성자: {issue.user.login}, 작성일: {createdAt}
        </p>
      </FlexColumn>
      <Comments>코멘트: {issue.comments}</Comments>
    </IssueContainer>
  );
};

export default IssueList;
