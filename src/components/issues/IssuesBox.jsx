import IssueList from './IssueList';
import AdBanner from './AdBanner';

const IssuesBox = ({ issues }) => (
  <ul>
    {issues.map((issue, idx) =>
      issue === 'ad' ? (
        <AdBanner key={idx} />
      ) : (
        <li key={issue.id}>
          <IssueList issue={issue} />
        </li>
      )
    )}
  </ul>
);

export default IssuesBox;
