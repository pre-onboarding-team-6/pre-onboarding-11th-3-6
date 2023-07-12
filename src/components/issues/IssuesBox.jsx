import IssueList from './IssueList';

const IssuesBox = ({ issues }) => (
  <ul>
    {issues.map(issue => (
      <li key={issue.id}>
        <IssueList issue={issue} />
      </li>
    ))}
  </ul>
);

export default IssuesBox;
