import { useContext } from 'react';
import { List } from '../components';
import { IssueContext } from '../context/IssuesProvider';

const Main = () => {
  const { issues, isLoding, error } = useContext(IssueContext);

  if (isLoding) {
    return <div>...loading</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main>
      <ul>
        {issues.map(({ number, title, user, created_at: createdAt, comments }, idx) => (
          <List
            key={number}
            number={number}
            title={title}
            user={user}
            createdAt={createdAt}
            comments={comments}
            idx={idx}
          />
        ))}
      </ul>
    </main>
  );
};

export default Main;
