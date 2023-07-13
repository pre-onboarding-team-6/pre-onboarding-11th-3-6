import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { List, Post, Spinner } from '../components';
import useIssue from '../hooks/useIssueDetail';
import Error from '../components/Error';

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  padding: 10px;
`;

const Detail = () => {
  const { id: issueNumber } = useParams();
  const { issue, loading, error } = useIssue(issueNumber);
  if (error) {
    return <Error error={error} />;
  }

  if (!issue || loading) {
    return <Spinner />;
  }

  return (
    <>
      <Flex>
        <Avatar src={issue.user.avatar_url} alt="avartar image" />
        <List issue={issue} />
      </Flex>
      <Post>{issue.body}</Post>
    </>
  );
};

export default Detail;
