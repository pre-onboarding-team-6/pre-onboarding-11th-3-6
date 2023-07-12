import { useEffect, useState } from 'react';
import { List } from '../components';
import getIssue from '../api/github';

const Main = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await getIssue();
      setIssues(data);
    })();
  }, []);

  console.log(issues);

  return (
    <main>
      <ul>
        {issues?.map(({ number, title, user, created_at: createdAt, comments }, idx) => (
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
