import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { IssueContext } from '../context/Issues';
import { List } from '../components';

const Flex = styled.div`
  display: flex;
`;

const Avatar = styled.img`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  padding: 10px;
`;

const MarkDown = styled(ReactMarkdown)`
  margin-left: 74px;
  padding: 20px 10px;
`;

const Detail = () => {
  const { isLoading, error, selectIssue } = useContext(IssueContext);
  const { id } = useParams();
  const issue = selectIssue(+id);

  if (isLoading) {
    return <div>...loading</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  console.log(issue);

  return (
    <>
      <Flex>
        <Avatar src={issue.user.avatar_url} alt="avartar image" />
        <List issue={issue} />
      </Flex>
      <MarkDown remarkPlugins={[remarkGfm]}>{issue.body}</MarkDown>
    </>
  );
};

export default Detail;
