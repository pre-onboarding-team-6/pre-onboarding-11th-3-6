import { useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import styled from 'styled-components';
import IssueList from '../components/issues/IssueList';
import { Loading, Error } from '../components/common';
import { getIssue } from '../apis/issue';
import useGetIssues from '../hooks/useGetIssues';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const IssueTitle = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: black;
  cursor: pointer;

  > img {
    max-width: 12.5%;
  }
`;

const Issue = () => {
  const { search } = useLocation();
  const getFunc = useCallback(repo => getIssue(search?.split('=')[1])(repo), [search]);
  const [issue, isLoading, error] = useGetIssues(getFunc);

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <Main>
      {issue.url && (
        <IssueTitle to={issue.html_url} target="_blank">
          <img src={issue.user.avatar_url} alt="" />
          <IssueList issue={issue} />
        </IssueTitle>
      )}
      <div>
        <ReactMarkdown>{issue.body}</ReactMarkdown>
      </div>
    </Main>
  );
};

export default Issue;
