import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { IssuesContext } from '../context/Issues';
import { List, Post, Spinner } from '../components';

const Flex = styled.div`
  display: flex;
`;

const Avatar = styled.img`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  padding: 10px;
`;

const Detail = () => {
  const { issue, isLoading, error, getIssueDetail } = useContext(IssuesContext);
  const { id: issueNumber } = useParams();

  useEffect(() => {
    getIssueDetail(issueNumber);
  }, [getIssueDetail, issueNumber]);

  if (!issue || isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>{error}</div>;
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
