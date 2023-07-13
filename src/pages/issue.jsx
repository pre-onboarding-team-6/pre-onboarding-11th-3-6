import { useContext } from 'react';
import { useParams } from 'react-router';
import ReactMarkdown from 'react-markdown';
import IssueItem from '../components/IssueItem';
import Loading from '../components/Loading';
import { IssueContext } from '../store/issueContext';
import { HttpResultState } from '../store/httpResultContext';
import RedirectToError from '../components/RedirectToError';

const Issue = () => {
  const { number } = useParams();
  // const { issue, loading } = useIssue(number);
  const { loading, error } = useContext(HttpResultState);
  const { issue } = useContext(IssueContext);
  const { title, login, createdAt, profileImageUrl, commentCount, body } = issue;

  if (error) return <RedirectToError />;
  return loading ? (
    <Loading />
  ) : (
    <div>
      <IssueItem
        number={number}
        title={title}
        login={login}
        createdAt={createdAt}
        profileImageUrl={profileImageUrl}
        commentCount={commentCount}
      />
      <ReactMarkdown>{body}</ReactMarkdown>
      <div>{commentCount}</div>
    </div>
  );
};

export default Issue;
